import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Rss } from "lucide-react";

export default function NewsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
            News &amp; Updates
          </h1>
          <p className="text-lg text-muted-foreground">
            The latest announcements, press releases, and updates from Malhotra Publishing House.
          </p>
        </div>
        
        <Card className="max-w-2xl mx-auto">
            <CardHeader className="items-center text-center">
                <Rss className="h-12 w-12 text-muted-foreground mb-4"/>
                <CardTitle className="font-headline text-2xl">No News Yet</CardTitle>
                <CardDescription>Check back soon for our latest updates.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-center text-muted-foreground">
                    This section will be updated with news about new journal issues, book releases, conference participations, and other important announcements. Stay tuned!
                </p>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
