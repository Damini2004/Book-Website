
import Image from "next/image";
import Link from 'next/link';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { counters } from "@/lib/data";
import { TestimonialsSection } from "@/components/testimonials-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sprout, Bug, Book, Leaf, Library, Handshake, Target, Star, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "about-hero-new");
  const testimonialBg = PlaceHolderImages.find((p) => p.id === 'testimonial-bg');

  const publishingStandards = [
    { text: "Double-Blind Peer Review", description: "Every manuscript undergoes unbiased evaluation by qualified reviewers." },
    { text: "Ethical Publishing", description: "We strictly adhere to the principles of academic integrity, originality, and transparency in scientific communication." },
    { text: "Open Access & Global Reach", description: "Our journals are accessible worldwide, supporting equitable dissemination of scientific knowledge." },
    { text: "Timely Processing & Author Support", description: "Authors receive structured guidance—from submission to publication—with an efficient editorial workflow." },
    { text: "Qualified Editorial Boards", description: "Each journal is led by experienced researchers and subject-matter experts in its field." }
  ];

  const whyPublishItems = [
    "Enhances crop resilience",
    "Promotes biological & ecological control methods",
    "Reduces dependence on harmful chemicals",
    "Strengthens sustainable and climate-smart farming",
    "Encourages technological advancements in agriculture"
  ];
  
  const bookTypes = [
    "Academic textbooks",
    "Reference books",
    "Handbooks",
    "Edited volumes",
    "Conference proceedings",
    "Laboratory manuals",
    "Monographs in entomology & agricultural sciences"
  ];
  
  const partners = [
    "Research institutes",
    "Agricultural universities",
    "Entomology departments",
    "Government R&D bodies",
    "Scientific societies",
    "Conference organizers"
  ];

  const missionItems = [
    "To publish credible and impactful research",
    "To promote open access dissemination",
    "To support young researchers and early-career scientists",
    "To encourage environmentally responsible research practices",
    "To connect academic research with real-world agricultural challenges"
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
          <p className="text-sm uppercase tracking-widest">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">&gt;</span>
            <span>About us</span>
          </p>
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight mt-2">
            About Malhotra Publishing House (MPH)
          </h1>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">

            {/* Intro Section */}
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-headline text-primary mb-4">Advancing Excellence in Agricultural Science, Entomology & Sustainable Research</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Malhotra Publishing House (MPH) is a dedicated academic publisher specializing in Agricultural Science, Entomology, Crop Protection, Biological Control, Biotechnology, and Applied Insect Research.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                With a strong commitment to scientific integrity, innovation, and accessibility, MPH serves as a trusted publishing partner for researchers, academicians, agri-professionals, and institutions worldwide.
              </p>
              <p className="text-lg text-muted-foreground">
                Our vision is to strengthen global research in agriculture and insect sciences by offering high-quality open access journals, scholarly books, and a platform that accelerates the dissemination of evidence-based knowledge.
              </p>
            </div>
            
            <hr />

            {/* Who We Are Section */}
            <Card className="bg-secondary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline text-3xl">
                  <Sprout className="h-8 w-8 text-primary" /> Who We Are
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Malhotra Publishing House is an independent scholarly publisher based in India, committed to facilitating impactful scientific communication. We publish five peer-reviewed international journals, all focused on critical areas of agriculture and entomology, including:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Insect–plant interactions</li>
                  <li>Crop protection and pest management</li>
                  <li>Biological control and environmental sustainability</li>
                  <li>Agricultural biotechnology and genomics</li>
                  <li>Fundamental and applied entomology</li>
                </ul>
                <p>
                  Our mission is to bridge the gap between research innovation and real-world agricultural challenges—supporting sustainable farming, food security, biodiversity, and ecological resilience.
                </p>
              </CardContent>
            </Card>

            {/* Our Journals Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline text-3xl">
                  <Bug className="h-8 w-8 text-primary" /> Our Journals
                </CardTitle>
                <p className="text-muted-foreground pt-2">MPH hosts and manages five specialized journals available on entomologyscience.org, each with a clearly defined focus:</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <ol className="space-y-4">
                  <li>
                    <h4 className="font-semibold text-lg">1. Journal of Agricultural Entomology and Crop Protection (JAECP)</h4>
                    <p className="text-muted-foreground ml-4">Research focusing on insect pests, crop damage mechanisms, and eco-friendly pest management strategies.</p>
                  </li>
                  <li>
                    <h4 className="font-semibold text-lg">2. Journal of Insect-Plant Interactions and Crop Protection (JIPICP)</h4>
                    <p className="text-muted-foreground ml-4">Dedicated to exploring insect–plant relationships and their impact on crop productivity and agroecosystem dynamics.</p>
                  </li>
                  <li>
                    <h4 className="font-semibold text-lg">3. Journal of Biological Control and Environmental Sustainability (JBCES)</h4>
                    <p className="text-muted-foreground ml-4">Promotes sustainable pest control, ecological conservation, and biological tools for reducing chemical inputs.</p>
                  </li>
                  <li>
                    <h4 className="font-semibold text-lg">4. Journal of Agricultural Biotechnology and Bioinformatics (JABB)</h4>
                    <p className="text-muted-foreground ml-4">Covers genomics, molecular biology, AI-driven agriculture, bioinformatics innovations, and precision farming technologies.</p>
                  </li>
                  <li>
                    <h4 className="font-semibold text-lg">5. Journal of Entomological Research (JER)</h4>
                    <p className="text-muted-foreground ml-4">A comprehensive platform for fundamental and applied entomology, including systematics, ecology, physiology, toxicology, and biotechnology applications.</p>
                  </li>
                </ol>
              </CardContent>
            </Card>

             {/* Our Publishing Standards */}
             <Card className="bg-secondary/30">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 font-headline text-3xl">
                        <Book className="h-8 w-8 text-primary" /> Our Publishing Standards
                    </CardTitle>
                    <p className="text-muted-foreground pt-2">MPH follows internationally accepted editorial and ethical practices:</p>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-6">
                    {publishingStandards.map(item => (
                        <div key={item.text} className="flex items-start gap-3">
                            <CheckCircle2 className="h-6 w-6 text-primary mt-1 shrink-0" />
                            <div>
                                <h4 className="font-semibold">{item.text}</h4>
                                <p className="text-muted-foreground text-sm">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>

            {/* Why We Publish Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline text-3xl">
                  <Leaf className="h-8 w-8 text-primary" /> Why We Publish in Agriculture & Entomology
                </CardTitle>
                <p className="text-muted-foreground pt-2">
                  Agriculture is at the center of global food security. Entomology plays a vital role in crop health, pollination, ecological balance, and pest dynamics. MPH is committed to supporting research that:
                </p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 pl-4 text-muted-foreground">
                  {whyPublishItems.map(item => <li key={item}>{item}</li>)}
                </ul>
              </CardContent>
            </Card>
            
            {/* Books and Partnerships Grid */}
            <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-secondary/30">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 font-headline text-2xl">
                          <Library className="h-7 w-7 text-primary" /> Books & Scholarly Monographs
                        </CardTitle>
                        <p className="text-muted-foreground pt-2">Beyond journals, MPH publishes:</p>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc list-inside space-y-2 pl-4 text-muted-foreground">
                            {bookTypes.map(item => <li key={item}>{item}</li>)}
                        </ul>
                         <p className="text-muted-foreground mt-4 text-sm">Institutions and editors may propose custom book projects aligned with MPH’s subject domains.</p>
                    </CardContent>
                </Card>
                 <Card className="bg-secondary/30">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 font-headline text-2xl">
                          <Handshake className="h-7 w-7 text-primary" /> Academic & Institutional Partnerships
                        </CardTitle>
                        <p className="text-muted-foreground pt-2">We collaborate with:</p>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc list-inside space-y-2 pl-4 text-muted-foreground">
                           {partners.map(item => <li key={item}>{item}</li>)}
                        </ul>
                        <p className="text-muted-foreground mt-4 text-sm">Our publishing infrastructure supports special issues, edited books, proceedings, and thematic collections for institutional needs.</p>
                    </CardContent>
                </Card>
            </div>
            
            {/* Vision and Mission */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 font-headline text-2xl">
                        <Target className="h-7 w-7 text-primary" /> Our Vision
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        To become a global leader in agricultural and entomological publishing by promoting high-quality scientific communication and supporting innovations that drive sustainable farming and biodiversity protection.
                    </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 font-headline text-2xl">
                        <Star className="h-7 w-7 text-primary" /> Our Mission
                    </CardTitle>
                </CardHeader>
                <CardContent>
                   <ul className="list-disc list-inside space-y-2 pl-4 text-muted-foreground">
                        {missionItems.map(item => <li key={item}>{item}</li>)}
                   </ul>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>
      
       <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {counters.map((counter) => (
                <div key={counter.label} className="text-center">
                  <strong className="text-5xl font-bold text-primary block mb-2">{counter.number}</strong>
                  <span className="text-muted-foreground text-lg">{counter.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        
      <TestimonialsSection testimonialBg={testimonialBg} />
    </div>
  );
}
