import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { newReleaseBooks, sidebarGenres, topAuthors } from "@/lib/data";
import { Heart, Search, ShoppingCart, Eye, ChevronRight } from "lucide-react";

const BookCard = ({ book, index }: { book: (typeof newReleaseBooks)[0], index: number }) => {
    const image = PlaceHolderImages.find((p) => p.id === book.image);
    // The design shows some cards with image on left and some on right.
    // This logic is based on the provided HTML structure (order-md-first).
    const isReversed = index === 3 || index === 4 || index === 5;

    return (
        <Card className="group overflow-hidden">
             <div className={`book-wrap ${isReversed ? 'flex-col-reverse' : ''}`}>
                <div className="relative h-80">
                    {image && <Image src={image.imageUrl} alt={book.title} fill className="object-cover" data-ai-hint={image.imageHint}/>}
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button size="icon" variant="outline"><ShoppingCart /></Button>
                        <Button size="icon" variant="outline"><Heart /></Button>
                        <Button size="icon" variant="outline"><Search /></Button>
                        <Button size="icon" variant="outline"><Eye /></Button>
                    </div>
                </div>
                <CardContent className="p-4 text-center">
                    <p className="mb-2 font-semibold text-primary">{book.price}</p>
                    <h3 className="font-headline text-xl font-bold leading-tight">
                        <Link href="#" className="hover:text-primary">{book.title}</Link>
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">{book.author}</p>
                </CardContent>
            </div>
        </Card>
    );
};


export default function TopSellerPage() {
    const heroImage = PlaceHolderImages.find((p) => p.id === 'top-seller-hero');
    const allBooks = [...newReleaseBooks, ...newReleaseBooks.slice(0,3)];

    const renderPagination = () => (
        <div className="flex justify-center mt-8">
            <nav className="flex items-center space-x-1">
                <Button variant="outline" size="icon" disabled>&lt;</Button>
                <Button variant="default" size="icon">1</Button>
                <Button variant="outline" size="icon">2</Button>
                <Button variant="outline" size="icon">3</Button>
                <Button variant="outline" size="icon">4</Button>
                <Button variant="outline" size="icon">5</Button>
                <Button variant="outline" size="icon">&gt;</Button>
            </nav>
        </div>
    );

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
                    <span>Top Seller</span>
                </p>
                <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight mt-2">
                    Top Seller
                </h1>
            </div>
        </section>

        <section className="py-16 lg:py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-12 gap-8">
                    <main className="lg:col-span-9">
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {allBooks.map((book, index) => (
                                <BookCard key={`${book.id}-${index}`} book={book} index={index} />
                            ))}
                        </div>
                        {renderPagination()}
                    </main>
                    <aside className="lg:col-span-3 space-y-8">
                        <Card>
                            <CardContent className="p-4">
                                <form className="relative">
                                    <Input placeholder="Type a keyword and hit enter" />
                                    <Button size="icon" variant="ghost" className="absolute right-0 top-0 h-full">
                                        <Search className="h-4 w-4" />
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-4">
                                <h3 className="font-headline text-xl font-bold mb-4">Genres</h3>
                                <ul>
                                    {sidebarGenres.map((genre) => (
                                        <li key={genre} className="border-b last:border-b-0">
                                            <Link href="#" className="flex justify-between items-center py-3 text-muted-foreground hover:text-primary">
                                                <span>{genre}</span>
                                                <ChevronRight className="h-4 w-4" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                        <Card>
                             <CardContent className="p-4">
                                <h3 className="font-headline text-xl font-bold mb-4">Top Authors</h3>
                                <ul>
                                    {topAuthors.map((author) => (
                                        <li key={author}>
                                            <Link href="#" className="block py-2 text-muted-foreground hover:text-primary">
                                                {author}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </aside>
                </div>
            </div>
        </section>
    </div>
  );
}
