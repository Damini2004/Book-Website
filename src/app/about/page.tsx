import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { journals } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle, Book, Users, Goal, Rocket, Phone, Mail, MapPin, Globe } from "lucide-react";

export default function AboutPage() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "about-hero");

  const publishingStandards = [
    { title: "Double-Blind Peer Review", description: "Every manuscript undergoes unbiased evaluation by qualified reviewers.", icon: Users },
    { title: "Ethical Publishing", description: "We strictly adhere to principles of academic integrity, originality, and transparency.", icon: CheckCircle },
    { title: "Open Access & Global Reach", description: "Our journals are accessible worldwide, supporting equitable dissemination.", icon: Globe },
    { title: "Timely Processing & Author Support", description: "Authors receive structured guidance with an efficient editorial workflow.", icon: Rocket },
    { title: "Qualified Editorial Boards", description: "Each journal is led by experienced researchers and subject-matter experts.", icon: Book },
  ];

  return (
    <div>
      <section className="relative h-[40vh] flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">
            About Malhotra Publishing House
          </h1>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline text-primary mb-4">
              Advancing Excellence in Agricultural Science, Entomology &amp; Sustainable Research
            </h2>
            <p className="text-lg text-muted-foreground">
              Malhotra Publishing House (MPH) is a dedicated academic publisher specializing in Agricultural Science, Entomology, Crop Protection, Biological Control, Biotechnology, and Applied Insect Research. With a strong commitment to scientific integrity, innovation, and accessibility, MPH serves as a trusted publishing partner for researchers, academicians, agri-professionals, and institutions worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center gap-2"><Goal className="text-accent"/>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">To become a global leader in agricultural and entomological publishing by promoting high-quality scientific communication and supporting innovations that drive sustainable farming and biodiversity protection.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center gap-2"><Rocket className="text-accent"/>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" /> To publish credible and impactful research</li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" /> To promote open access dissemination</li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" /> To support young researchers and early-career scientists</li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" /> To encourage environmentally responsible research practices</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div id="focus" className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-headline font-semibold">Our Publishing Standards</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {publishingStandards.map((standard) => (
                <div key={standard.title} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary/10 p-4 rounded-full">
                      <standard.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 font-headline">{standard.title}</h3>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 id="team" className="text-3xl font-headline font-semibold mb-4">Our Journals &amp; Focus</h2>
              <p className="text-muted-foreground mb-6">
                MPH hosts and manages five specialized journals, each with a clearly defined focus on critical areas of agriculture and entomology, including: insect–plant interactions, crop protection, biological control, agricultural biotechnology, and fundamental entomology.
              </p>
              <div className="space-y-4">
                {journals.map(journal => (
                  <div key={journal.id} className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50">
                    <journal.icon className="h-8 w-8 text-accent mt-1 shrink-0" />
                    <div>
                      <h3 className="font-semibold">{journal.title} ({journal.shortTitle})</h3>
                      <p className="text-sm text-muted-foreground">{journal.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-headline font-semibold mb-4">Books &amp; Partnerships</h2>
              <p className="text-muted-foreground mb-6">
                Beyond journals, MPH publishes a range of scholarly works and collaborates with academic and research institutions to support their publishing needs.
              </p>
              <div className="space-y-6">
                <Card>
                  <CardHeader><CardTitle className="font-headline text-xl flex items-center gap-2"><Book className="text-primary"/>Books &amp; Scholarly Monographs</CardTitle></CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">We publish academic textbooks, reference books, handbooks, edited volumes, conference proceedings, laboratory manuals, and monographs in entomology &amp; agricultural sciences.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="font-headline text-xl flex items-center gap-2"><Users className="text-primary"/>Academic &amp; Institutional Partnerships</CardTitle></CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">We collaborate with research institutes, agricultural universities, scientific societies, and conference organizers to produce special issues, edited books, and thematic collections.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">Contact Us</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center"><MapPin className="h-5 w-5 mr-3 text-primary"/><p>India</p></div>
                    <div className="flex items-center"><Mail className="h-5 w-5 mr-3 text-primary"/><a href="mailto:info@mph.net.in.org" className="hover:underline">info@mph.net.in.org</a></div>
                    <div className="flex items-center"><Phone className="h-5 w-5 mr-3 text-primary"/><p>Contact via Phone/WhatsApp</p></div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
