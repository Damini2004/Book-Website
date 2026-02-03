import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { counters } from "@/lib/data";
import { Quote } from "lucide-react";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function AboutPage() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "about-hero-new");
  const aboutImage = PlaceHolderImages.find((p) => p.id === 'about-new');
  const testimonialBg = PlaceHolderImages.find((p) => p.id === 'testimonial-bg');

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
            About Us
          </h1>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold">Welcome to Publishing Company</span>
              <h2 className="text-3xl md:text-4xl font-headline text-foreground mt-2">Welcome to Publishing Company</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              We publish leading peer-reviewed journals and authoritative books that support research, innovation, and sustainable practices in agriculture, insect science, crop protection, biotechnology, and environmental sustainability.
            </p>
            <blockquote className="relative border-l-4 border-primary pl-8 py-4 my-8">
                <Quote className="absolute left-0 top-0 h-10 w-10 text-primary/30 -translate-x-1/2" />
                <h3 className="text-2xl font-headline">Advancing Knowledge in Agricultural Science & Entomology</h3>
            </blockquote>
            <p className="text-lg text-muted-foreground">
              When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="relative h-96 md:h-full min-h-[400px]">
              {aboutImage && (
                <Image src={aboutImage.imageUrl} alt={aboutImage.description} fill className="object-cover rounded-lg" data-ai-hint={aboutImage.imageHint} />
              )}
            </div>
            <div>
              <span className="text-primary font-semibold">Welcome To Publishing Company</span>
              <h2 className="text-4xl font-headline font-bold mt-2 mb-6">Publishing Company Created By Authors</h2>
              <p className="text-muted-foreground mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
              <p className="text-muted-foreground mb-6">On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
              <Button asChild>
                <Link href="/about">View All Our Authors</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection testimonialBg={testimonialBg} />
      
       <section className="py-16 lg:py-24 bg-background">
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
    </div>
  );
}
