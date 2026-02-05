
"use client";

import { useCollection, useFirestore } from "@/firebase";
import { collection, query, orderBy, limit } from "firebase/firestore";
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
};

export function NewReleaseBooks() {
    const firestore = useFirestore();
    const bookProposalsRef = firestore ? collection(firestore, "bookProposals") : null;
    const q = bookProposalsRef ? query(bookProposalsRef, orderBy("createdAt", "desc"), limit(6)) : null;
    const { data: books, isLoading } = useCollection(q);

    if (isLoading) {
        return (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                    <Card key={i} className="group overflow-hidden text-center">
                        <div className="relative h-80">
                           <Skeleton className="h-full w-full" />
                        </div>
                        <CardContent className="p-6 space-y-3">
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
        return <p>No new releases found.</p>;
    }

    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book) => {
                const image = PlaceHolderImages.find((p) => p.id === 'book-new-1');
                return (
                <Card key={book.id} className="group overflow-hidden text-center">
                    <div className="relative h-80">
                        {image && <Image src={image.imageUrl} alt={book.bookTitle} fill className="object-cover" data-ai-hint={image.imageHint}/>}
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Button size="icon" variant="outline" className="text-white bg-transparent border-white/50 hover:bg-white/20"><ShoppingCart /></Button>
                            <Button size="icon" variant="outline" className="text-white bg-transparent border-white/50 hover:bg-white/20"><Heart /></Button>
                            <Button size="icon" variant="outline" className="text-white bg-transparent border-white/50 hover:bg-white/20"><Search /></Button>
                            <Button size="icon" variant="outline" className="text-white bg-transparent border-white/50 hover:bg-white/20"><Eye /></Button>
                        </div>
                    </div>
                    <CardContent className="p-6">
                        <p className="mb-2 font-semibold text-primary">{book.price ? `₹${book.price}` : 'Price not available'}</p>
                        <h3 className="font-headline text-xl font-bold leading-tight">
                            <Link href="#" className="hover:text-primary">{book.bookTitle}</Link>
                        </h3>
                        <p className="text-muted-foreground text-sm mt-1">{book.fullName}</p>
                    </CardContent>
                </Card>
                )
            })}
        </div>
    );
}
