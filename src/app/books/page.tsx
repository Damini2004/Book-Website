import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { books } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from 'next/link';
import { ShoppingCart, Heart, Search, Eye } from "lucide-react";

const BookCard = ({ book }: { book: (typeof books)[0] }) => {
  const image = PlaceHolderImages.find((p) => p.id === book.image);
  return (
    <Card className="group overflow-hidden">
        <div className="lg:flex">
            <div className="relative h-80 lg:w-2/5 lg:h-auto min-h-[320px]">
                {image && <Image src={image.imageUrl} alt={book.title} fill className="object-cover" data-ai-hint={image.imageHint}/>}
                 <div className="absolute inset-0 bg-black/20 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="icon" variant="outline" className="text-white bg-black/20 border-white/50 hover:bg-white/20"><ShoppingCart /></Button>
                    <Button size="icon" variant="outline" className="text-white bg-black/20 border-white/50 hover:bg-white/20"><Heart /></Button>
                    <Button size="icon" variant="outline" className="text-white bg-black/20 border-white/50 hover:bg-white/20"><Search /></Button>
                    <Button size="icon" variant="outline" className="text-white bg-black/20 border-white/50 hover:bg-white/20"><Eye /></Button>
                </div>
            </div>
            <CardContent className="p-6 flex flex-col justify-center lg:w-3/5">
                <p className="mb-2 font-semibold text-primary">{book.price}</p>
                <h3 className="font-headline text-2xl font-bold leading-tight">
                    <Link href="#" className="hover:text-primary">{book.title}</Link>
                </h3>
                <p className="text-muted-foreground text-sm mt-1">{book.author}</p>
            </CardContent>
        </div>
    </Card>
  );
};


const Pagination = () => (
    <div className="flex justify-center mt-12">
        <nav className="flex items-center space-x-2">
            <Button variant="outline" className="px-4 py-2" disabled>&lt;</Button>
            <Button variant="default" className="px-4 py-2">1</Button>
            <Button variant="outline" className="px-4 py-2">2</Button>
            <Button variant="outline" className="px-4 py-2">3</Button>
            <Button variant="outline" className="px-4 py-2">4</Button>
            <Button variant="outline" className="px-4 py-2">5</Button>
            <Button variant="outline" className="px-4 py-2">&gt;</Button>
        </nav>
    </div>
);


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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {books.map((book, index) => (
                    <BookCard key={`${book.id}-${index}`} book={book} />
                ))}
            </div>
            <Pagination />
        </div>
      </section>
    </div>
  );
}
