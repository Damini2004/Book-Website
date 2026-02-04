"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCollection, useUser, useFirestore } from "@/firebase";
import { collection } from "firebase/firestore";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export function AdminClient() {
  const { user, loading: userLoading } = useUser();
  const router = useRouter();
  const firestore = useFirestore();

  const query = firestore ? collection(firestore, "bookProposals") : null;
  const { data: proposals, isLoading: proposalsLoading } = useCollection(query);

  useEffect(() => {
    if (!userLoading && !user) {
      router.push("/login");
    }
  }, [user, userLoading, router]);

  if (userLoading || proposalsLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <DataTable columns={columns} data={proposals || []} />
    </div>
  );
}