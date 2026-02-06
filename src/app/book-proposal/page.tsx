import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, BookCheck, Telescope, PenSquare, GitPullRequest, FileCheck2, BookUser, Send, FileSignature, BookUp } from "lucide-react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { BookProposalClient } from "./book-proposal-client";


export default function BookProposalPage() {
  const whyPublishItems = [
    "Strong specialization in agriculture & entomology",
    "Peer-reviewed evaluation of book proposals",
    "High-quality editorial, typesetting & production",
    "Print + eBook publication formats",
    "Global dissemination & indexing support",
    "Competitive royalty options",
    "Fast-track publishing for institutional projects & proceedings"
  ];

  const whatWeLookFor = [
    { title: "Novelty", description: "Your proposal should demonstrate novelty or strong academic relevance.", icon: Telescope },
    { title: "Structure", description: "We look for a well-defined objective and a structured chapter plan.", icon: BookCheck },
    { title: "Audience", description: "A clear target audience must be identified.", icon: PenSquare },
  ];
  
  const reviewProcess = [
      "Preliminary Editorial Screening",
      "Expert Peer Review (Subject Specialist)",
      "Proposal Approval",
      "Signing of Author Agreement",
      "Manuscript Development & Production",
      "Final Publication (Print + eBook)"
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
          <Card>
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
              <CardTitle className="font-headline text-2xl">What We Look For</CardTitle>
              <CardDescription>
                We encourage submissions that contribute to research, teaching, and innovation in agriculture and entomology.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whatWeLookFor.map(item => (
                <div key={item.title} className="text-center p-4 bg-background rounded-lg">
                   <div className="flex justify-center mb-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                      <item.icon className="h-7 w-7 text-accent" />
                    </div>
                  </div>
                  <h3 className="font-semibold font-headline text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
        
        <Card className="mb-16">
            <CardHeader>
                <CardTitle className="font-headline text-3xl flex items-center gap-3">
                    <FileSignature className="h-8 w-8 text-primary" />
                    Book Proposal Form – Required Information
                </CardTitle>
                <CardDescription>
                    Authors submitting a book proposal are requested to include the following details:
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 text-muted-foreground">
                <div className="space-y-6">
                    <div>
                        <h3 className="font-headline text-lg font-semibold mb-2 text-foreground">1. Author / Editor Information</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Full Name</li>
                            <li>Designation</li>
                            <li>Institution / Affiliation</li>
                            <li>Email Address</li>
                            <li>Phone Number</li>
                            <li>ORCID (optional)</li>
                            <li>Short Biography (100–150 words)</li>
                        </ul>
                    </div>
                     <div>
                        <h3 className="font-headline text-lg font-semibold mb-2 text-foreground">2. Book Title & Subtitle</h3>
                        <p>Provide a clear, descriptive title and an informative subtitle.</p>
                    </div>
                     <div>
                        <h3 className="font-headline text-lg font-semibold mb-2 text-foreground">3. Book Type</h3>
                        <p>Choose one or specify if mixed/hybrid:</p>
                        <ul className="list-disc list-inside space-y-1 mt-2">
                          <li>Textbook</li>
                          <li>Reference Book</li>
                          <li>Monograph</li>
                          <li>Edited Volume</li>
                          <li>Handbook</li>
                          <li>Lab/Practical Manual</li>
                          <li>Conference Proceedings</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-headline text-lg font-semibold mb-2 text-foreground">4. Aims & Scope of the Book</h3>
                        <p className="italic">(150–250 words)</p>
                        <p>Explain the purpose, key themes, importance, and expected contribution to the field.</p>
                    </div>
                    <div>
                        <h3 className="font-headline text-lg font-semibold mb-2 text-foreground">5. Unique Selling Points (USP)</h3>
                         <p>List 4–6 points explaining what makes the book valuable, such as:</p>
                         <ul className="list-disc list-inside space-y-1 mt-2">
                            <li>Covers recent advances in agricultural biotechnology</li>
                            <li>Integrates entomology with sustainable crop protection</li>
                            <li>Includes case studies, illustrations, or field data</li>
                            <li>Suitable for both researchers and students</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-headline text-lg font-semibold mb-2 text-foreground">6. Target Audience</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Undergraduate / Postgraduate Students</li>
                            <li>Researchers & Scientists</li>
                            <li>Agricultural Universities</li>
                            <li>Farmers & Extension Professionals</li>
                            <li>Industry Practitioners</li>
                            <li>Government / NGO Bodies</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-headline text-lg font-semibold mb-2 text-foreground">7. Proposed Table of Contents (TOC)</h3>
                        <p>Include:</p>
                        <ul className="list-disc list-inside space-y-1 mt-2">
                            <li>Chapter titles</li>
                            <li>Brief description (2–3 lines each)</li>
                            <li>Optional: section breakdown per chapter</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-headline text-lg font-semibold mb-2 text-foreground">8. Expected Manuscript Length</h3>
                         <ul className="list-disc list-inside space-y-1">
                            <li>Approx. number of words</li>
                            <li>Approx. number of pages</li>
                            <li>Number of figures / tables / images</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-headline text-lg font-semibold mb-2 text-foreground">9. Timeline</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Estimated date of submission of complete manuscript</li>
                        </ul>
                    </div>
                     <div>
                        <h3 className="font-headline text-lg font-semibold mb-2 text-foreground">10. Sample Chapters (Optional but Recommended)</h3>
                        <p>You may attach 1–2 sample chapters to support evaluation.</p>
                    </div>
                     <div>
                        <h3 className="font-headline text-lg font-semibold mb-2 text-foreground">11. Additional Information (If Any)</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Prior related work published</li>
                            <li>Collaborating institutions</li>
                            <li>Funding acknowledgments</li>
                            <li>Special requirements (illustrations, color plates, datasets, etc.)</li>
                        </ul>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 pt-8 border-t">
                    <div>
                        <h3 className="font-headline text-2xl font-semibold mb-4 text-foreground flex items-center gap-2">
                          <Send className="h-6 w-6 text-primary"/> How to Submit Your Proposal
                        </h3>
                        <p className="mb-4">Email your completed book proposal to:</p>
                        <div className="flex items-center gap-2">
                           <Mail className="h-5 w-5 text-primary" />
                           <a href="mailto:books@malhotrapublishinghouse.org" className="text-primary font-medium hover:underline">
                               books@malhotrapublishinghouse.org
                           </a>
                        </div>
                        <p className="mt-2">or upload via the submission form on this page.</p>
                    </div>
                     <div>
                        <h3 className="font-headline text-2xl font-semibold mb-4 text-foreground flex items-center gap-2">
                           <BookCheck className="h-6 w-6 text-primary" /> Review & Acceptance Process
                        </h3>
                        <ol className="space-y-2 list-decimal list-outside pl-5 mt-4">
                            {reviewProcess.map((item) => (
                                <li key={item}>
                                    {item}
                                </li>
                            ))}
                        </ol>
                        <p className="mt-4 text-sm">Authors receive continuous editorial and production support throughout the process.</p>
                    </div>
                </div>

            </CardContent>
        </Card>

        <BookProposalClient />

      </div>
    </div>
  );
}
