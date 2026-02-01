import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { comingSoonSections } from "@/lib/data";
import { ShoppingCart, Heart, Search, Eye } from "lucide-react";

export default function ComingSoonPage() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'coming-soon-hero');

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
            <span>Coming Soon</span>
          </p>
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight mt-2">
            Coming Soon
          </h1>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          {comingSoonSections.map((section, index) => (
            <div key={index} className="grid lg:grid-cols-12 gap-8 mb-16">
              <div className="lg:col-span-4">
                <div className="lg:text-right">
                  <h3 className="text-3xl font-headline text-primary">{section.date}</h3>
                </div>
              </div>
              <div className="lg:col-span-8 space-y-8">
                {section.books.map((book) => {
                  const image = PlaceHolderImages.find((p) => p.id === book.image);
                  return (
                    <Card key={book.id} className="group overflow-hidden">
                      <div className="md:flex">
                        <div className="relative h-80 md:w-1/3 md:h-auto min-h-[250px]">
                          {image && <Image src={image.imageUrl} alt={book.title} fill className="object-cover" data-ai-hint={image.imageHint}/>}
                          <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <Button size="icon" variant="outline"><ShoppingCart /></Button>
                              <Button size="icon" variant="outline"><Heart /></Button>
                              <Button size="icon" variant="outline"><Search /></Button>
                              <Button size="icon" variant="outline"><Eye /></Button>
                          </div>
                        </div>
                        <CardContent className="p-6 flex flex-col justify-center md:w-2/3">
                            <p className="mb-2 font-semibold text-primary">{book.price}</p>
                            <h3 className="font-headline text-2xl font-bold leading-tight">
                                <Link href="#" className="hover:text-primary">{book.title}</Link>
                            </h3>
                            <p className="text-muted-foreground text-sm mt-1">{book.author}</p>
                             <p className="text-muted-foreground mt-4 text-sm">{book.description}</p>
                        </CardContent>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
