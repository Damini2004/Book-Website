"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookSummaryGenerator } from "@/components/book-summary-generator";
import { BookProposalForm } from "@/components/book-proposal-form";

export function BookProposalClient() {
  return (
    <Card className="max-w-5xl mx-auto">
      <CardHeader>
        <CardTitle className="font-headline text-3xl">Book Proposal Submission</CardTitle>
        <CardDescription>
          Use our AI tool to generate a quick summary of your draft, or proceed directly to submitting your formal proposal.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="submit" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="generate">AI Summary Tool</TabsTrigger>
            <TabsTrigger value="submit">Submit Proposal</TabsTrigger>
          </TabsList>
          <TabsContent value="generate" className="mt-6">
            <BookSummaryGenerator />
          </TabsContent>
          <TabsContent value="submit" className="mt-6">
            <BookProposalForm />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
