import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { authors, topAuthors } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Twitter, Facebook, Instagram } from "lucide-react";

export default function AuthorPage() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "author-hero");

  const chunkArray = <T,>(arr: T[], size: number): T[][] => {
    return arr.length > 0
      ? [arr.slice(0, size), ...chunkArray(arr.slice(size), size)]
      : [];
  };

  const authorColumns = chunkArray(topAuthors, Math.ceil(topAuthors.length / 6));

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
            <span>Authors</span>
          </p>
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight mt-2">
            Authors
          </h1>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {authors.map((author) => {
              const image = PlaceHolderImages.find((p) => p.id === author.image);
              return (
                <Card key={author.id} className="group text-center overflow-hidden">
                  <div className="relative h-72 w-full">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={author.name}
                        fill
                        className="object-cover"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                  </div>
                  <CardContent className="p-4 relative">
                    <h3 className="text-xl font-headline font-bold">{author.name}</h3>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -top-24 left-0 right-0 p-4 bg-white/90 dark:bg-black/90">
                       <p className="text-muted-foreground text-sm mb-3">{author.bio}</p>
                       <Button asChild>
                         <Link href="/books">View All Books</Link>
                       </Button>
                       <div className="flex justify-center space-x-3 mt-3">
                         {author.socials.map((social) => (
                           <a key={social.name} href={social.href} className="text-muted-foreground hover:text-primary">
                             <social.icon className="h-5 w-5" />
                           </a>
                         ))}
                       </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-headline font-bold">Browse All Authors</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {authorColumns.map((column, colIndex) => (
              <ul key={colIndex} className="space-y-2">
                {column.map((authorName, authorIndex) => (
                  <li key={authorIndex}>
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      {authorName}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
