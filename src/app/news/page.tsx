import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const BlogCard = ({ post }: { post: (typeof blogPosts)[0] }) => {
    const image = PlaceHolderImages.find((p) => p.id === post.image);
    return (
        <Card className="text-center overflow-hidden">
            {image && (
                <Link href="#">
                    <div className="relative h-60">
                        <Image src={image.imageUrl} alt={post.title} fill className="object-cover" data-ai-hint={image.imageHint} />
                    </div>
                </Link>
            )}
            <CardContent className="p-6">
                <div className="text-primary mb-2">
                    <span className="text-3xl font-bold">{post.date.day}</span>
                    <div className="text-sm leading-tight">
                        <span>{post.date.month}</span><br />
                        <span>{post.date.year}</span>
                    </div>
                </div>
                <h3 className="font-headline text-2xl font-bold mb-3">
                    <Link href="#" className="hover:text-primary">{post.title}</Link>
                </h3>
                <p className="text-muted-foreground">{post.excerpt}</p>
            </CardContent>
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

export default function NewsPage() {
    const heroImage = PlaceHolderImages.find((p) => p.id === 'blog-hero');
    const allBlogPosts = [...blogPosts, ...blogPosts, ...blogPosts];

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
                        <span>Blog</span>
                    </p>
                    <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight mt-2">
                        Blog
                    </h1>
                </div>
            </section>

            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allBlogPosts.map((post, index) => (
                            <BlogCard key={`${post.id}-${index}`} post={post} />
                        ))}
                    </div>
                    <Pagination />
                </div>
            </section>
        </div>
    );
}
