
"use client";

import { useCollection, useFirestore } from "@/firebase";
import { collection } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Heart, Search, ShoppingCart, Eye } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

type Book = {
    id: string;
    bookTitle: string;
    fullName: string;
    price?: string;
    coverPhoto?: string;
};

const BookCard = ({ book, index }: { book: Book, index: number }) => {
    const placeholder = PlaceHolderImages.find((p) => p.id === 'book-new-1');
    const imageUrl = book.coverPhoto || placeholder?.imageUrl;
    const imageHint = book.coverPhoto ? book.bookTitle : placeholder?.imageHint;
    const isReversed = index === 3 || index === 4 || index === 5;

    return (
        <Card className="group overflow-hidden">
             <div className={`book-wrap ${isReversed ? 'flex-col-reverse' : ''}`}>
                <div className="relative h-80">
                    {imageUrl && <Image src={imageUrl} alt={book.bookTitle} fill className="object-cover" data-ai-hint={imageHint}/>}
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button size="icon" variant="outline" suppressHydrationWarning><ShoppingCart /></Button>
                        <Button size="icon" variant="outline" suppressHydrationWarning><Heart /></Button>
                        <Button size="icon" variant="outline" suppressHydrationWarning><Search /></Button>
                        <Button size="icon" variant="outline" suppressHydrationWarning><Eye /></Button>
                    </div>
                </div>
                <CardContent className="p-4 text-center">
                    <p className="mb-2 font-semibold text-primary">{book.price ? `₹${book.price}` : 'Price not available'}</p>
                    <h3 className="font-headline text-xl font-bold leading-tight">
                        <Link href="#" className="hover:text-primary">{book.bookTitle}</Link>
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">{book.fullName}</p>
                </CardContent>
            </div>
        </Card>
    );
};

const Pagination = () => (
    <div className="flex justify-center mt-8">
        <nav className="flex items-center space-x-1">
            <Button variant="outline" size="icon" disabled suppressHydrationWarning>&lt;</Button>
            <Button variant="default" size="icon" suppressHydrationWarning>1</Button>
            <Button variant="outline" size="icon" suppressHydrationWarning>2</Button>
            <Button variant="outline" size="icon" suppressHydrationWarning>3</Button>
            <Button variant="outline" size="icon" suppressHydrationWarning>4</Button>
            <Button variant="outline" size="icon" suppressHydrationWarning>5</Button>
            <Button variant="outline" size="icon" suppressHydrationWarning>&gt;</Button>
        </nav>
    </div>
);

export function TopSellerClient() {
    const firestore = useFirestore();
    const query = firestore ? collection(firestore, "bookProposals") : null;
    const { data: books, isLoading } = useCollection(query);
    
    if (isLoading) {
        return (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                {[...Array(9)].map((_, i) => (
                    <Card key={i} className="group overflow-hidden">
                        <div className="relative h-80">
                           <Skeleton className="h-full w-full" />
                        </div>
                        <CardContent className="p-4 text-center space-y-3">
                            <Skeleton className="h-4 w-1/4 mx-auto" />
                            <Skeleton className="h-6 w-3/4 mx-auto" />
                            <Skeleton className="h-4 w-1/2 mx-auto" />
                        </CardContent>
                    </Card>
                ))}
            </div>
        );
    }
    
    if (!books || books.length === 0) {
        return <p>No books found.</p>;
    }

    return (
        <>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                {books.map((book, index) => (
                    <BookCard key={book.id} book={book} index={index} />
                ))}
            </div>
            <Pagination />
        </>
    );
}
