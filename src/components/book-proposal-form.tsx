"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "./ui/checkbox";
import { bookTypes, bookAudiences, bookCategories } from "@/lib/data";
import { submitProposalAction } from "@/app/book-proposal/actions";

const proposalFormSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  designation: z.string().min(2, { message: "Designation is required." }),
  institution: z.string().min(2, { message: "Institution is required." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  orcid: z.string().optional(),
  biography: z.string().min(50, { message: "Biography must be at least 50 words." }).max(150, { message: "Biography must not exceed 150 words." }),
  bookTitle: z.string().min(5, { message: "Book title is required." }),
  bookSubtitle: z.string().optional(),
  bookType: z.enum(bookTypes as [string, ...string[]], { required_error: "You need to select a book type." }),
  aimsAndScope: z.string().min(100, { message: "Aims & Scope must be at least 100 words." }).max(250, { message: "Aims & Scope must not exceed 250 words." }),
  usp: z.string().min(20, { message: "Please list at least a few selling points." }),
  targetAudience: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  toc: z.string().min(20, { message: "Please provide a table of contents." }),
  wordCount: z.string().min(2, { message: "Please estimate the word count." }),
  pageCount: z.string().min(1, { message: "Please estimate the page count." }),
  figureCount: z.string().optional(),
  submissionDate: z.string().min(3, { message: "Please provide an estimated date." }),
  additionalInfo: z.string().optional(),
  sampleChapter: z.any().optional(),
});

type ProposalFormValues = z.infer<typeof proposalFormSchema>;

export function BookProposalForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<ProposalFormValues>({
    resolver: zodResolver(proposalFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      targetAudience: [],
    },
  });

  async function onSubmit(data: ProposalFormValues) {
    setIsSubmitting(true);
    const result = await submitProposalAction(data);
    setIsSubmitting(false);

    if (result.success) {
      toast({
        title: "Proposal Submitted!",
        description: result.message,
      });
      form.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: result.message,
      });
    }
  }

  const renderSection = (title: string, description: string, children: React.ReactNode) => (
    <div className="space-y-4 p-6 border rounded-lg bg-background">
      <div className="mb-4">
        <h3 className="font-headline text-xl font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      {children}
    </div>
  );

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {renderSection("1. Author / Editor Information", "Provide your professional details.", (
          <div className="grid md:grid-cols-2 gap-4">
            <FormField control={form.control} name="fullName" render={({ field }) => (
              <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="designation" render={({ field }) => (
              <FormItem><FormLabel>Designation</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="institution" render={({ field }) => (
              <FormItem><FormLabel>Institution / Affiliation</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="email" render={({ field }) => (
              <FormItem><FormLabel>Email Address</FormLabel><FormControl><Input type="email" {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="phone" render={({ field }) => (
              <FormItem><FormLabel>Phone Number</FormLabel><FormControl><Input type="tel" {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="orcid" render={({ field }) => (
              <FormItem><FormLabel>ORCID (optional)</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <div className="md:col-span-2">
            <FormField control={form.control} name="biography" render={({ field }) => (
              <FormItem><FormLabel>Short Biography</FormLabel><FormControl><Textarea placeholder="100–150 words" {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            </div>
          </div>
        ))}
        
        {renderSection("2. Book Title &amp; Subtitle", "Provide a clear, descriptive title.", (
          <div className="grid md:grid-cols-2 gap-4">
            <FormField control={form.control} name="bookTitle" render={({ field }) => (
              <FormItem><FormLabel>Book Title</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="bookSubtitle" render={({ field }) => (
              <FormItem><FormLabel>Subtitle (optional)</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
            )} />
          </div>
        ))}

        {renderSection("3. Book Type", "Choose one that best fits your work.", (
          <FormField control={form.control} name="bookType" render={({ field }) => (
            <FormItem><RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="grid md:grid-cols-3 gap-4">
              {bookTypes.map(type => (
                <FormItem key={type} className="flex items-center space-x-3 space-y-0">
                  <FormControl><RadioGroupItem value={type} /></FormControl>
                  <FormLabel className="font-normal">{type}</FormLabel>
                </FormItem>
              ))}
            </RadioGroup><FormMessage /></FormItem>
          )} />
        ))}
        
        {renderSection("4. Aims &amp; Scope", "Explain the purpose, key themes, and importance (150–250 words).", (
          <FormField control={form.control} name="aimsAndScope" render={({ field }) => (
            <FormItem><FormControl><Textarea rows={6} {...field} /></FormControl><FormMessage /></FormItem>
          )} />
        ))}

        {renderSection("5. Unique Selling Points (USP)", "List 4–6 points explaining what makes the book valuable.", (
          <FormField control={form.control} name="usp" render={({ field }) => (
            <FormItem><FormControl><Textarea placeholder="e.g., Covers recent advances in agricultural biotechnology..." rows={4} {...field} /></FormControl><FormMessage /></FormItem>
          )} />
        ))}

        {renderSection("6. Target Audience", "Select all that apply.", (
          <FormField control={form.control} name="targetAudience" render={() => (
            <FormItem><div className="grid md:grid-cols-2 gap-4">
              {bookAudiences.map((item) => (
                <FormField key={item} control={form.control} name="targetAudience" render={({ field }) => (
                  <FormItem key={item} className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl><Checkbox checked={field.value?.includes(item)} onCheckedChange={(checked) => {
                      return checked ? field.onChange([...field.value, item]) : field.onChange(field.value?.filter((value) => value !== item));
                    }} /></FormControl>
                    <FormLabel className="font-normal">{item}</FormLabel>
                  </FormItem>
                )} />
              ))}
            </div><FormMessage /></FormItem>
          )} />
        ))}

        {renderSection("7. Proposed Table of Contents (TOC)", "Include chapter titles and brief descriptions.", (
            <FormField control={form.control} name="toc" render={({ field }) => (
              <FormItem><FormControl><Textarea placeholder="Chapter 1: Introduction - A brief overview..." rows={8} {...field} /></FormControl><FormMessage /></FormItem>
            )} />
        ))}

        {renderSection("8. Expected Manuscript Length", "Provide approximate numbers.", (
            <div className="grid md:grid-cols-3 gap-4">
              <FormField control={form.control} name="wordCount" render={({ field }) => (
                <FormItem><FormLabel>Approx. Words</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField control={form.control} name="pageCount" render={({ field }) => (
                <FormItem><FormLabel>Approx. Pages</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField control={form.control} name="figureCount" render={({ field }) => (
                <FormItem><FormLabel>Figures/Tables (optional)</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
              )} />
            </div>
        ))}
        
        {renderSection("9. Timeline", "When do you expect to submit the complete manuscript?", (
          <FormField control={form.control} name="submissionDate" render={({ field }) => (
            <FormItem><FormLabel>Estimated Submission Date</FormLabel><FormControl><Input placeholder="e.g., December 2025" {...field} /></FormControl><FormMessage /></FormItem>
          )} />
        ))}

        {renderSection("10. Additional Information (Optional)", "Include any prior work, collaborations, funding, or special requirements.", (
          <FormField control={form.control} name="additionalInfo" render={({ field }) => (
            <FormItem><FormControl><Textarea rows={4} {...field} /></FormControl><FormMessage /></FormItem>
          )} />
        ))}

        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Submit Proposal
        </Button>
      </form>
    </Form>
  );
}
