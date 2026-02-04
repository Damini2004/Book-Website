import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookProposalClient } from "./book-proposal-client";
import { Check, BookCheck, Telescope, PenSquare, GitPullRequest, FileCheck2, BookUser, Milestone, Send, FileSignature, BookUp } from "lucide-react";
import Link from "next/link";
import { Mail } from "lucide-react";

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
      { title: "Preliminary Editorial Screening", icon: Send },
      { title: "Expert Peer Review", icon: BookUser },
      { title: "Proposal Approval", icon: FileCheck2 },
      { title: "Signing of Author Agreement", icon: FileSignature },
      { title: "Manuscript Development & Production", icon: GitPullRequest },
      { title: "Final Publication (Print + eBook)", icon: BookUp }
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
                <CardTitle className="font-headline text-3xl">Book Proposal Guidelines</CardTitle>
                <CardDescription>
                    Authors submitting a book proposal are requested to include the following details to help us with the evaluation process.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 text-muted-foreground">
                <div className="grid md:grid-cols-2 gap-8">
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
                            <p>Choose one: Textbook, Reference Book, Monograph, Edited Volume, Handbook, Lab/Practical Manual, or Conference Proceedings.</p>
                        </div>
                        <div>
                            <h3 className="font-headline text-lg font-semibold mb-2 text-foreground">4. Aims & Scope of the Book</h3>
                            <p>Explain the purpose, key themes, importance, and expected contribution to the field (150–250 words).</p>
                        </div>
                        <div>
                            <h3 className="font-headline text-lg font-semibold mb-2 text-foreground">5. Unique Selling Points (USP)</h3>
                             <ul className="list-disc list-inside space-y-1">
                                <li>List 4–6 points explaining what makes the book valuable.</li>
                                <li>e.g., Covers recent advances in agricultural biotechnology.</li>
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
                    </div>
                     <div className="space-y-6">
                        <div>
                            <h3 className="font-headline text-lg font-semibold mb-2 text-foreground">7. Proposed Table of Contents (TOC)</h3>
                            <p>Include chapter titles and brief descriptions (2–3 lines each).</p>
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
                            <p>Estimated date of submission of complete manuscript.</p>
                        </div>
                         <div>
                            <h3 className="font-headline text-lg font-semibold mb-2 text-foreground">10. Sample Chapters (Optional)</h3>
                            <p>You may attach 1–2 sample chapters to support evaluation.</p>
                        </div>
                         <div>
                            <h3 className="font-headline text-lg font-semibold mb-2 text-foreground">11. Additional Information</h3>
                            <p>Include prior related work, collaborating institutions, funding, or special requirements.</p>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 pt-8 border-t">
                    <div>
                        <h3 className="font-headline text-2xl font-semibold mb-4 text-foreground">How to Submit</h3>
                        <p className="mb-4">You can use the submission form on this page or email your completed proposal to:</p>
                        <div className="flex items-center gap-2">
                           <Mail className="h-5 w-5 text-primary" />
                           <a href="mailto:books@malhotrapublishinghouse.org" className="text-primary font-medium hover:underline">
                               books@malhotrapublishinghouse.org
                           </a>
                        </div>
                    </div>
                     <div>
                        <h3 className="font-headline text-2xl font-semibold mb-4 text-foreground">Review & Acceptance Process</h3>
                        <ul className="space-y-3">
                            {reviewProcess.map((item) => (
                                <li key={item.title} className="flex items-center">
                                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                                        <item.icon className="h-5 w-5 text-primary" />
                                    </div>
                                    <span>{item.title}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </CardContent>
        </Card>

        <BookProposalClient />

      </div>
    </div>
  );
}
