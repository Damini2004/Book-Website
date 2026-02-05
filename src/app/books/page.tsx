
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from 'next/link';
import { BooksClient } from "./books-client";

export default function BooksPage() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'books-hero');

  return (
    <div className="bg-background">
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
                  <span>Book Store</span>
              </p>
              <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight mt-2">
                  Book Store
              </h1>
          </div>
      </section>

      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
            <BooksClient />
        </div>
      </section>
    </div>
  );
}
