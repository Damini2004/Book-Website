
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { services, blogPosts, counters } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { TestimonialsSection } from "@/components/testimonials-section";
import { NewReleaseBooks } from "@/components/new-release-books";

export default function Home() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'hero-new');
  const aboutImage = PlaceHolderImages.find((p) => p.id === 'about-new');
  const testimonialBg = PlaceHolderImages.find((p) => p.id === 'testimonial-bg');

  return (
    <div className="flex flex-col min-h-screen">
      <main>
        <section className="relative h-[80vh] flex items-center">
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
          <div className="relative container mx-auto px-4">
            <div className="max-w-xl text-white">
              <h1 className="text-5xl md:text-6xl font-headline font-bold mb-4">
                Good books don't give up all their secrets at once
              </h1>
              <p className="mb-8 text-lg">
                A small river named Duden flows by their place and supplies it with the necessary regelialia.
              </p>
              <div className="flex gap-4">
                <Button asChild size="lg">
                  <Link href="/books">View All Books</Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/books">Explore Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) => (
                <div key={service.title} className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="bg-primary/10 text-primary rounded-full p-5">
                      <service.icon className="h-12 w-12" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-headline mb-2">
                    <Link href="#" className="hover:text-primary">{service.title}</Link>
                  </h2>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
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
        
        <section className="py-16 lg:py-24">
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

        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold">Books</span>
              <h2 className="text-4xl font-headline font-bold mt-2">New Release</h2>
            </div>
            <NewReleaseBooks />
          </div>
        </section>
        
        <TestimonialsSection testimonialBg={testimonialBg} />

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold">Blog</span>
              <h2 className="text-4xl font-headline font-bold mt-2">Recent Blog</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => {
                const image = PlaceHolderImages.find((p) => p.id === post.image);
                return (
                  <Card key={post.id} className="text-center overflow-hidden">
                    {image && (
                      <Link href="#">
                        <div className="relative h-60">
                           <Image src={image.imageUrl} alt={post.title} fill className="object-cover" data-ai-hint={image.imageHint}/>
                        </div>
                      </Link>
                    )}
                    <CardContent className="p-6">
                       <div className="text-primary mb-2">
                           <span className="text-3xl font-bold">{post.date.day}</span>
                           <div className="text-sm leading-tight">
                               <span>{post.date.month}</span><br/>
                               <span>{post.date.year}</span>
                           </div>
                       </div>
                       <h3 className="font-headline text-2xl font-bold mb-3">
                           <Link href="#" className="hover:text-primary">{post.title}</Link>
                       </h3>
                       <p className="text-muted-foreground">{post.excerpt}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
