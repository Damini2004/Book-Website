
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCollection, useUser, useFirestore, useAuth } from "@/firebase";
import { collection } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { columns } from "./columns";
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
import { BookProposalForm } from "@/components/book-proposal-form";
import { ScrollArea } from "@/components/ui/scroll-area";

export function AdminClient() {
  const { user, loading: userLoading } = useUser();
  const router = useRouter();
  const firestore = useFirestore();
  const auth = useAuth();
  const [isCreateBookOpen, setCreateBookOpen] = useState(false);

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

  const handleSuccess = () => {
    setCreateBookOpen(false);
  };

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
                  <BookProposalForm onSuccess={handleSuccess} />
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
    </div>
  );
}
