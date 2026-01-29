import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { journals, whyPublishWithUs } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { MphLogo } from "@/components/icons";

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero');

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
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
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <div className="flex justify-center mb-4">
              <MphLogo className="h-16 w-auto text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 tracking-tight">
              Advancing Knowledge in Agricultural Science & Entomology
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-slate-200">
              We publish leading peer-reviewed journals and authoritative books that support research, innovation, and sustainable practices in agriculture, insect science, crop protection, biotechnology, and environmental sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/journals">
                  Our Journals <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/book-proposal">Submit Manuscript</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary-foreground">
                <Link href="/about">About Us</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-headline font-semibold mb-4">
              About Malhotra Publishing House
            </h2>
            <p className="text-lg text-muted-foreground">
              Founded with a mission to promote high-quality scholarly research in agricultural and entomological sciences, Malhotra Publishing House is dedicated to empowering researchers, academicians, and practitioners around the world. We uphold strong editorial standards, ethical publishing practices, and global dissemination to support science that drives sustainable food systems and environmental resilience.
            </p>
          </div>
        </section>

        <section id="journals" className="py-16 lg:py-24 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-semibold mb-4">Our Journals</h2>
              <p className="text-lg text-muted-foreground">
                Explore our five international, peer-reviewed, open access scholarly journals — each addressing key scientific challenges at the intersection of agriculture, entomology, ecology, and biotechnology.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {journals.slice(0, 5).map((journal) => (
                <Card key={journal.id} className="flex flex-col hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <journal.icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-headline">{journal.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{journal.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild>
                <Link href="/journals">
                  Explore All Journals <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="why-publish" className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-semibold mb-4">Why Publish With Us?</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyPublishWithUs.map((reason, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-accent/10 p-4 rounded-full">
                      <reason.icon className="h-8 w-8 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-xl font-headline font-semibold mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section id="authors" className="py-16 lg:py-24 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-headline font-semibold mb-4">For Authors &amp; Reviewers</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Whether you are a first-time author or an experienced researcher, we provide comprehensive support. Find detailed submission guidelines, learn about our peer-review process, and access ethical policies.
                </p>
                <ul className="space-y-4 text-lg mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span>Detailed submission guidelines</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span>Transparent peer-review processes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span>Access to ethical policies and manuscript instructions</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <Link href="/book-proposal">Submit your manuscript <ArrowRight className="ml-2" /></Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/contact">Become a Reviewer</Link>
                  </Button>
                </div>
              </div>
               <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-headline font-semibold mb-6">Get in Touch</h3>
                <p className="text-muted-foreground mb-6">
                  Connect with our editorial and support teams for queries about submissions, subscriptions, permissions, or journal partnerships.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold">Malhotra Publishing House</h4>
                      <p className="text-muted-foreground">Publisher of Agriculture &amp; Entomology Journals</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-primary mr-4" />
                    <a href="mailto:info@mph.net.in.org" className="text-muted-foreground hover:text-primary transition-colors">info@mph.net.in.org</a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-primary mr-4" />
                    <span className="text-muted-foreground">Contact via Phone/WhatsApp</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
