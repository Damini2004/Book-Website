"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookProposalForm } from "@/components/book-proposal-form";

export function BookProposalClient() {
  return (
    <Card className="max-w-5xl mx-auto">
      <CardHeader>
        <CardTitle className="font-headline text-3xl">Book Proposal Submission</CardTitle>
        <CardDescription>
          Please fill out the form below to submit your book proposal.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <BookProposalForm />
      </CardContent>
    </Card>
  );
}
