"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCollection, useUser, useFirestore, useAuth } from "@/firebase";
import { collection } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Button } from "@/components/ui/button";

export function AdminClient() {
  const { user, loading: userLoading } = useUser();
  const router = useRouter();
  const firestore = useFirestore();
  const auth = useAuth();

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
          <Button asChild>
            <Link href="/book-proposal">Create Proposal</Link>
          </Button>
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>
      <DataTable columns={columns} data={proposals || []} />
    </div>
  );
}
