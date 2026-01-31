import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { journals } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export default function JournalsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
            Our Journals Portfolio
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore our international, peer-reviewed, open access scholarly journals. Each addresses key scientific challenges at the intersection of agriculture, entomology, ecology, and biotechnology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8 mb-16">
          {journals.map((journal) => {
            const image = PlaceHolderImages.find((p) => p.id === journal.image);
            return (
              <Card key={journal.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="grid md:grid-cols-3">
                  <div className="md:col-span-1 relative min-h-[200px] md:min-h-full">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={journal.title}
                        fill
                        className="object-cover"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                  </div>
                  <div className="md:col-span-2">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-2">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <journal.icon className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-headline">
                            {journal.title}
                          </CardTitle>
                          <CardDescription>{journal.shortTitle}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6">{journal.longDescription}</p>
                      <Button asChild suppressHydrationWarning>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          Visit Journal Website
                        </a>
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            <Card id="journal-links" className="bg-primary/5">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Journal Websites</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">All our journals are hosted on dedicated websites where you can find submission guidelines, editorial boards, and published articles.</p>
                    <Button variant="outline" suppressHydrationWarning>Explore All Sites</Button>
                </CardContent>
            </Card>
            <Card id="cfp" className="bg-accent/5">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Call for Papers</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">We welcome high-quality submissions for our upcoming issues. Special issues may have specific calls for papers. Please visit individual journal sites for more details.</p>
                     <Button variant="outline" asChild suppressHydrationWarning><Link href="/book-proposal">Submission Guidelines</Link></Button>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
