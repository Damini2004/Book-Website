
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookProposalForm } from "@/components/book-proposal-form";
import { useUser } from "@/firebase";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function CreateBookClient() {
  const { user, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="max-w-5xl mx-auto">
      <CardHeader>
        <CardTitle className="font-headline text-3xl">Create New Book Entry</CardTitle>
        <CardDescription>
          Fill out the form below to add a new book to the catalog. All fields are required for a book entry.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <BookProposalForm />
      </CardContent>
    </Card>
  );
}
