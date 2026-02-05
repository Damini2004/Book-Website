
"use client";

import { useEffect, useState }from "react";
import { useRouter } from "next/navigation";
import { useCollection, useUser, useFirestore, useAuth } from "@/firebase";
import { collection, doc, deleteDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { getColumns, type BookProposal } from "./columns";
import { DataTable } from "./data-table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { BookProposalForm } from "@/components/book-proposal-form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { FirestorePermissionError } from "@/firebase/errors";
import { errorEmitter } from "@/firebase/error-emitter";

export function AdminClient() {
  const { user, loading: userLoading } = useUser();
  const router = useRouter();
  const firestore = useFirestore();
  const auth = useAuth();
  const { toast } = useToast();

  const [isCreateBookOpen, setCreateBookOpen] = useState(false);
  const [editingProposal, setEditingProposal] = useState<BookProposal | null>(null);
  const [deletingProposal, setDeletingProposal] = useState<BookProposal | null>(null);

  const query = firestore ? collection(firestore, "bookProposals") : null;
  const { data: proposals, isLoading: proposalsLoading } = useCollection(query);

  useEffect(() => {
    if (!userLoading && !user) {
      router.push("/login");
    }
  }, [user, userLoading, router]);

  const handleLogout = async () => {
    if (!auth) return;
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const handleCreateSuccess = () => {
    setCreateBookOpen(false);
  };
  
  const handleEdit = (proposal: BookProposal) => {
    setEditingProposal(proposal);
  };

  const handleDeleteRequest = (proposal: BookProposal) => {
    setDeletingProposal(proposal);
  };
  
  const confirmDelete = async () => {
    if (!deletingProposal || !firestore) return;
    const docRef = doc(firestore, "bookProposals", deletingProposal.id);

    deleteDoc(docRef)
      .then(() => {
        toast({ title: "Proposal Deleted", description: "The proposal has been successfully deleted." });
        setDeletingProposal(null);
      })
      .catch((serverError) => {
        const permissionError = new FirestorePermissionError({
          path: docRef.path,
          operation: 'delete',
        });
        errorEmitter.emit('permission-error', permissionError);
        toast({
          variant: "destructive",
          title: "Error Deleting",
          description: serverError.message,
        });
      });
  };
  
  const handleEditSuccess = () => {
    setEditingProposal(null);
  };

  const columns = getColumns({ onEdit: handleEdit, onDelete: handleDeleteRequest });


  if (userLoading || proposalsLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <div className="flex items-center gap-4">
          <Dialog open={isCreateBookOpen} onOpenChange={setCreateBookOpen}>
            <DialogTrigger asChild>
              <Button>Create Book</Button>
            </DialogTrigger>
            <DialogContent className="max-w-5xl">
              <DialogHeader>
                <DialogTitle className="font-headline text-3xl">Create New Book Entry</DialogTitle>
                <DialogDescription>
                  Fill out the form below to add a new book to the catalog.
                </DialogDescription>
              </DialogHeader>
              <ScrollArea className="h-[70vh]">
                <div className="pr-6">
                  <BookProposalForm onSuccess={handleCreateSuccess} />
                </div>
              </ScrollArea>
            </DialogContent>
          </Dialog>
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>
      
      <DataTable columns={columns} data={proposals || []} />

      {/* Edit Dialog */}
      <Dialog open={!!editingProposal} onOpenChange={(isOpen) => !isOpen && setEditingProposal(null)}>
        <DialogContent className="max-w-5xl">
          <DialogHeader>
            <DialogTitle className="font-headline text-3xl">Edit Book Entry</DialogTitle>
            <DialogDescription>
              Update the details for this book entry.
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="h-[70vh]">
            <div className="pr-6">
              <BookProposalForm initialData={editingProposal} onSuccess={handleEditSuccess} />
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
      
      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deletingProposal} onOpenChange={(isOpen) => !isOpen && setDeletingProposal(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the book proposal and remove its data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setDeletingProposal(null)}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-destructive hover:bg-destructive/90">Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

    </div>
  );
}
