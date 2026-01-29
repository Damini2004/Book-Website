import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookProposalClient } from "./book-proposal-client";
import { Check, BookCheck, Telescope, PenSquare } from "lucide-react";

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
        
        <BookProposalClient />

      </div>
    </div>
  );
}
