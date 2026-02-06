
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Mail, BookCheck, Send, FileSignature } from "lucide-react";
import Link from "next/link";

export default function BookProposalPage() {
    const proposalRequirements = [
    {
      title: "1. Author / Editor Information",
      content: [
        "Full Name",
        "Designation",
        "Institution / Affiliation",
        "Email Address",
        "Phone Number",
        "ORCID (optional)",
        "Short Biography (100–150 words)",
      ],
      isList: true,
    },
    {
      title: "2. Book Title & Subtitle",
      content: ["Provide a clear, descriptive title and an informative subtitle."],
      isList: false,
    },
    {
      title: "3. Book Type",
      content: [
        "Textbook",
        "Reference Book",
        "Monograph",
        "Edited Volume",
        "Handbook",
        "Lab/Practical Manual",
        "Conference Proceedings",
      ],
      isList: true,
      footer: "Choose one or specify if mixed/hybrid",
    },
    {
      title: "4. Aims & Scope of the Book",
      content: ["(150–250 words)", "Explain the purpose, key themes, importance, and expected contribution to the field."],
      isList: false,
    },
    {
      title: "5. Unique Selling Points (USP)",
      content: [
        "Covers recent advances in agricultural biotechnology",
        "Integrates entomology with sustainable crop protection",
        "Includes case studies, illustrations, or field data",
        "Suitable for both researchers and students",
      ],
      isList: true,
      header: "List 4–6 points explaining what makes the book valuable, such as:",
    },
    {
      title: "6. Target Audience",
      content: [
        "Undergraduate / Postgraduate Students",
        "Researchers & Scientists",
        "Agricultural Universities",
        "Farmers & Extension Professionals",
        "Industry Practitioners",
        "Government / NGO Bodies",
      ],
      isList: true,
    },
    {
      title: "7. Proposed Table of Contents (TOC)",
      content: [
        "Chapter titles",
        "Brief description (2–3 lines each)",
        "Optional: section breakdown per chapter",
      ],
      isList: true,
      header: "Include:",
    },
    {
      title: "8. Expected Manuscript Length",
      content: [
        "Approx. number of words",
        "Approx. number of pages",
        "Number of figures / tables / images",
      ],
      isList: true,
    },
    {
      title: "9. Timeline",
      content: ["Estimated date of submission of complete manuscript"],
      isList: true,
    },
    {
      title: "10. Sample Chapters (Optional but Recommended)",
      content: ["You may attach 1–2 sample chapters to support evaluation."],
      isList: false,
    },
    {
      title: "11. Additional Information (If Any)",
      content: [
        "Prior related work published",
        "Collaborating institutions",
        "Funding acknowledgments",
        "Special requirements (illustrations, color plates, datasets, etc.)",
      ],
      isList: true,
    },
  ];

  const reviewProcess = [
      "Preliminary Editorial Screening",
      "Expert Peer Review (Subject Specialist)",
      "Proposal Approval",
      "Signing of Author Agreement",
      "Manuscript Development & Production",
      "Final Publication (Print + eBook)"
  ];
  
  const whyPublishItems = [
    "Strong specialization in agriculture & entomology",
    "Peer-reviewed evaluation of book proposals",
    "High-quality editorial, typesetting & production",
    "Print + eBook publication formats",
    "Global dissemination & indexing support",
    "Competitive royalty options",
    "Fast-track publishing for institutional projects & proceedings"
  ];


  return (
    <div className="bg-secondary/30">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
            Publish Your Work With Us
          </h1>
          <p className="text-lg text-muted-foreground">
            We welcome high-quality book proposals in agricultural science, entomology, crop protection, biotechnology, and allied domains. Partner with us to bring your impactful work to a global readership.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="lg:col-span-1">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Why Publish with MPH?</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3">
                        {whyPublishItems.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                        </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
            <Card className="lg:col-span-2">
                <CardHeader>
                    <CardTitle className="font-headline text-3xl flex items-center gap-3">
                        <FileSignature className="h-8 w-8 text-primary" />
                        Book Proposal Requirements
                    </CardTitle>
                    <CardDescription>
                        Authors submitting a book proposal are requested to include the following details. Click each section to expand.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                   <Accordion type="single" collapsible className="w-full">
                        {proposalRequirements.map((req, index) => (
                            <AccordionItem value={`item-${index}`} key={index}>
                                <AccordionTrigger className="text-lg font-semibold text-left">{req.title}</AccordionTrigger>
                                <AccordionContent className="pt-2 text-muted-foreground">
                                    {req.header && <p className="mb-2">{req.header}</p>}
                                    {req.isList ? (
                                        <ul className="list-disc list-inside space-y-1">
                                            {req.content.map((item, i) => <li key={i}>{item}</li>)}
                                        </ul>
                                    ) : (
                                        req.content.map((item, i) => <p key={i} className={i === 0 && (item.startsWith('(') || item.startsWith('E')) ? 'italic' : ''}>{item}</p>)
                                    )}
                                    {req.footer && <p className="mt-2 text-sm italic">{req.footer}</p>}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                   </Accordion>
                </CardContent>
            </Card>
        </div>
        
        <Card>
            <CardContent className="p-8 grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="font-headline text-2xl font-semibold mb-4 text-foreground flex items-center gap-2">
                      <Send className="h-6 w-6 text-primary"/> How to Submit Your Proposal
                    </h3>
                    <p className="mb-4 text-muted-foreground">Email your completed book proposal to:</p>
                    <div className="flex items-center gap-2">
                       <Mail className="h-5 w-5 text-primary" />
                       <a href="mailto:books@malhotrapublishinghouse.org" className="text-primary font-medium hover:underline">
                           books@malhotrapublishinghouse.org
                       </a>
                    </div>
                    <p className="mt-2 text-muted-foreground">or upload via the submission form on this page.</p>
                </div>
                 <div>
                    <h3 className="font-headline text-2xl font-semibold mb-4 text-foreground flex items-center gap-2">
                       <BookCheck className="h-6 w-6 text-primary" /> Review & Acceptance Process
                    </h3>
                    <ol className="space-y-2 list-decimal list-outside pl-5 mt-4 text-muted-foreground">
                        {reviewProcess.map((item) => (
                            <li key={item}>
                                {item}
                            </li>
                        ))}
                    </ol>
                    <p className="mt-4 text-sm text-muted-foreground">Authors receive continuous editorial and production support throughout the process.</p>
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
