
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { sidebarGenres, topAuthors } from "@/lib/data";
import { Search, ChevronRight } from "lucide-react";
import { TopSellerClient } from "./top-seller-client";


export default function TopSellerPage() {
    const heroImage = PlaceHolderImages.find((p) => p.id === 'top-seller-hero');

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
                        <TopSellerClient />
                    </main>
                    <aside className="lg:col-span-3 space-y-8">
                        <Card>
                            <CardContent className="p-4">
                                <form className="relative">
                                    <Input placeholder="Type a keyword and hit enter" suppressHydrationWarning />
                                    <Button size="icon" variant="ghost" className="absolute right-0 top-0 h-full" suppressHydrationWarning>
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
