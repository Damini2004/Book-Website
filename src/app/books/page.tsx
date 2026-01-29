import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { books } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from 'next/link';
import { ShoppingCart } from "lucide-react";

type BookCategory = 'all' | 'new' | 'popular';

const BookCard = ({ book }: { book: (typeof books)[0] }) => {
  const image = PlaceHolderImages.find((p) => p.id === book.image);
  return (
    <Card className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        {image && (
          <div className="aspect-[2/3] relative">
            <Image
              src={image.imageUrl}
              alt={book.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              data-ai-hint={image.imageHint}
            />
          </div>
        )}
      </CardHeader>
      <CardContent className="p-4 flex-grow flex flex-col">
        <h3 className="font-headline text-lg font-semibold leading-tight flex-grow">{book.title}</h3>
        <p className="text-muted-foreground text-sm mt-1">{book.author}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <p className="font-bold text-lg text-primary">{book.price}</p>
        <Button size="sm" variant="outline">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

const BookGrid = ({ category }: { category: BookCategory }) => {
  const filteredBooks = category === 'all'
    ? books
    : books.filter(book => book.category === category);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {filteredBooks.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  )
}

export default function BooksPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
            Book Store
          </h1>
          <p className="text-lg text-muted-foreground">
            Browse our collection of authoritative textbooks, reference works, and monographs in agricultural science and entomology.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">Shop All Books</TabsTrigger>
              <TabsTrigger value="new" id="new">New Releases</TabsTrigger>
              <TabsTrigger value="popular" id="popular">Best Sellers</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="all">
            <BookGrid category="all" />
          </TabsContent>
          <TabsContent value="new">
            <BookGrid category="new" />
          </TabsContent>
          <TabsContent value="popular">
            <BookGrid category="popular" />
          </TabsContent>
        </Tabs>

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-primary/5">
            <CardHeader>
              <CardTitle className="font-headline">Looking for Something Specific?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Explore our books by subject area or check our resources for distributors and bulk orders.
              </p>
              <div className="flex gap-4 justify-center">
                <Button asChild variant="secondary"><Link href="/book-categories">Browse Categories</Link></Button>
                <Button asChild variant="secondary"><Link href="/orders">Bulk Orders</Link></Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
