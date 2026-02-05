
"use client";

import { useCollection, useFirestore } from "@/firebase";
import { collection } from "firebase/firestore";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from 'next/link';
import { ShoppingCart, Heart, Search, Eye } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { bookTypes } from "@/lib/data";

// This is the book type from Firestore
type Book = {
  id: string;
  bookTitle: string;
  fullName: string;
  price?: string;
  coverPhoto?: string;
  bookType?: string;
};

const BookCard = ({ book }: { book: Book }) => {
  const placeholder = PlaceHolderImages.find((p) => p.id === 'book-new-1');
  const imageUrl = book.coverPhoto || placeholder?.imageUrl;
  const imageHint = book.coverPhoto ? book.bookTitle : placeholder?.imageHint;
  
  return (
    <Card className="group overflow-hidden">
        <div className="lg:flex">
            <div className="relative h-80 lg:w-2/5 lg:h-auto min-h-[320px]">
                {imageUrl && <Image src={imageUrl} alt={book.bookTitle} fill className="object-cover" data-ai-hint={imageHint} />}
                 <div className="absolute inset-0 bg-black/20 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="icon" variant="outline" className="text-white bg-black/20 border-white/50 hover:bg-white/20"><ShoppingCart /></Button>
                    <Button size="icon" variant="outline" className="text-white bg-black/20 border-white/50 hover:bg-white/20"><Heart /></Button>
                    <Button size="icon" variant="outline" className="text-white bg-black/20 border-white/50 hover:bg-white/20"><Search /></Button>
                    <Button size="icon" variant="outline" className="text-white bg-black/20 border-white/50 hover:bg-white/20"><Eye /></Button>
                </div>
            </div>
            <CardContent className="p-6 flex flex-col justify-center lg:w-3/5">
                <p className="mb-2 font-semibold text-primary">{book.price ? `₹${book.price}` : 'Price not available'}</p>
                <h3 className="font-headline text-2xl font-bold leading-tight">
                    <Link href="#" className="hover:text-primary">{book.bookTitle}</Link>
                </h3>
                <p className="text-muted-foreground text-sm mt-1">{book.fullName}</p>
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

export function BooksClient() {
    const firestore = useFirestore();
    const query = firestore ? collection(firestore, "bookProposals") : null;
    const { data: books, isLoading } = useCollection(query);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedBookType, setSelectedBookType] = useState("all");

    const filteredBooks = useMemo(() => {
        if (!books) return [];
        return books.filter((book: Book) => {
            const matchesSearch = searchTerm.toLowerCase() === "" ||
                book.bookTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                book.fullName.toLowerCase().includes(searchTerm.toLowerCase());
            
            const matchesBookType = selectedBookType === "all" || book.bookType === selectedBookType;

            return matchesSearch && matchesBookType;
        });
    }, [books, searchTerm, selectedBookType]);


    if (isLoading) {
        return (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {[...Array(6)].map((_, i) => (
                    <Card key={i} className="overflow-hidden">
                        <div className="lg:flex">
                             <div className="relative h-80 lg:w-2/5 lg:h-auto min-h-[320px]">
                                <Skeleton className="h-full w-full" />
                             </div>
                             <CardContent className="p-6 flex flex-col justify-center lg:w-3/5 space-y-4">
                                <Skeleton className="h-4 w-1/4" />
                                <Skeleton className="h-8 w-3/4" />
                                <Skeleton className="h-4 w-1/2" />
                            </CardContent>
                        </div>
                    </Card>
                ))}
            </div>
        )
    }

    const renderContent = () => {
        if (!books || books.length === 0) {
            return <p>No books found.</p>
        }
        if (filteredBooks.length === 0) {
            return <p>No books found matching your criteria.</p>
        }
        
        return (
            <>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {filteredBooks.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
                <Pagination />
            </>
        );
    }
    
    return (
        <>
            <Card className="mb-8">
                <CardContent className="p-4 flex flex-col md:flex-row items-center gap-4">
                    <div className="relative w-full md:flex-grow">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                            placeholder="Search by title or author..."
                            className="pl-10 w-full"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <Select onValueChange={setSelectedBookType} defaultValue="all">
                        <SelectTrigger className="w-full md:w-[280px]">
                            <SelectValue placeholder="Filter by book type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Book Types</SelectItem>
                            {bookTypes.map((type) => (
                                <SelectItem key={type} value={type}>{type}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </CardContent>
            </Card>

            {isLoading ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {[...Array(6)].map((_, i) => (
                        <Card key={i} className="overflow-hidden">
                            <div className="lg:flex">
                                 <div className="relative h-80 lg:w-2/5 lg:h-auto min-h-[320px]">
                                    <Skeleton className="h-full w-full" />
                                 </div>
                                 <CardContent className="p-6 flex flex-col justify-center lg:w-3/5 space-y-4">
                                    <Skeleton className="h-4 w-1/4" />
                                    <Skeleton className="h-8 w-3/4" />
                                    <Skeleton className="h-4 w-1/2" />
                                </CardContent>
                            </div>
                        </Card>
                    ))}
                </div>
            ) : renderContent()}
        </>
    );
}
