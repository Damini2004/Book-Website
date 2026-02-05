
"use client";

import { useCollection, useFirestore } from "@/firebase";
import { collection } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ShoppingCart, Heart, Search, Eye } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useMemo } from "react";

type Book = {
  id: string;
  bookTitle: string;
  fullName: string;
  price?: string;
  submissionDate: string;
  // Firestore data does not have a description property
};

const isFutureDate = (dateString: string) => {
    if (!dateString) return false;
    // This is a very simple parser. It may not work for all date formats.
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
        // Try parsing "Month Year" format
        const parts = dateString.split(" ");
        if (parts.length === 2) {
            const month = parts[0];
            const year = parseInt(parts[1], 10);
            if (!isNaN(year)) {
                const monthIndex = new Date(Date.parse(month +" 1, 2012")).getMonth();
                if (monthIndex >= 0) {
                     const parsedDate = new Date(year, monthIndex, 1);
                     return parsedDate > new Date();
                }
            }
        }
        return false;
    }
    return date > new Date();
};


export function ComingSoonClient() {
    const firestore = useFirestore();
    const query = firestore ? collection(firestore, "bookProposals") : null;
    const { data: books, isLoading } = useCollection(query);
    
    const comingSoonBooks = useMemo(() => {
        if (!books) return [];
        return books.filter(book => isFutureDate(book.submissionDate));
    }, [books]);

    if (isLoading) {
        return (
            <div className="space-y-8">
                {[...Array(2)].map((_, i) => (
                    <Card key={i} className="group overflow-hidden">
                      <div className="md:flex">
                        <div className="relative h-80 md:w-1/3 md:h-auto min-h-[250px]">
                            <Skeleton className="h-full w-full" />
                        </div>
                        <CardContent className="p-6 flex flex-col justify-center md:w-2/3 space-y-3">
                           <Skeleton className="h-4 w-1/4" />
                           <Skeleton className="h-8 w-3/4" />
                           <Skeleton className="h-4 w-1/2" />
                           <Skeleton className="h-12 w-full" />
                        </CardContent>
                      </div>
                    </Card>
                ))}
            </div>
        );
    }
    
    if (comingSoonBooks.length === 0) {
        return <p>No upcoming books found.</p>;
    }
    
    // Group books by submissionDate
    const groupedBooks: { [key: string]: Book[] } = comingSoonBooks.reduce((acc, book) => {
        const date = book.submissionDate;
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(book);
        return acc;
    }, {} as { [key: string]: Book[] });

    return (
        <div>
            {Object.entries(groupedBooks).map(([date, booksInSection]) => (
                <div key={date} className="grid lg:grid-cols-12 gap-8 mb-16">
                    <div className="lg:col-span-4">
                        <div className="lg:text-right">
                        <h3 className="text-3xl font-headline text-primary">{date}</h3>
                        </div>
                    </div>
                    <div className="lg:col-span-8 space-y-8">
                        {booksInSection.map((book) => {
                        const image = PlaceHolderImages.find((p) => p.id === 'book-new-1');
                        return (
                            <Card key={book.id} className="group overflow-hidden">
                            <div className="md:flex">
                                <div className="relative h-80 md:w-1/3 md:h-auto min-h-[250px]">
                                {image && <Image src={image.imageUrl} alt={book.bookTitle} fill className="object-cover" data-ai-hint={image.imageHint}/>}
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Button size="icon" variant="outline" className="text-white bg-black/20 border-white/50 hover:bg-white/20"><ShoppingCart /></Button>
                                    <Button size="icon" variant="outline" className="text-white bg-black/20 border-white/50 hover:bg-white/20"><Heart /></Button>
                                    <Button size="icon" variant="outline" className="text-white bg-black/20 border-white/50 hover:bg-white/20"><Search /></Button>
                                    <Button size="icon" variant="outline" className="text-white bg-black/20 border-white/50 hover:bg-white/20"><Eye /></Button>
                                </div>
                                </div>
                                <CardContent className="p-6 flex flex-col justify-center md:w-2/3">
                                    <p className="mb-2 font-semibold text-primary">{book.price ? `₹${book.price}` : 'Price not available'}</p>
                                    <h3 className="font-headline text-2xl font-bold leading-tight">
                                        <Link href="#" className="hover:text-primary">{book.bookTitle}</Link>
                                    </h3>
                                    <p className="text-muted-foreground text-sm mt-1">{book.fullName}</p>
                                    <p className="text-muted-foreground mt-4 text-sm">Description not available.</p>
                                </CardContent>
                            </div>
                            </Card>
                        );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
}
