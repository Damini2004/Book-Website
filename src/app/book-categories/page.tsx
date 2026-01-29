import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { bookCategories } from "@/lib/data";
import { Tag } from "lucide-react";

export default function BookCategoriesPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
            Book Categories
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore our publications across a wide range of subjects in agriculture and entomology.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Subject Areas</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-4">
                    {bookCategories.map(category => (
                        <Button key={category} variant="secondary" asChild>
                            <Link href="/books">
                                <Tag className="mr-2 h-4 w-4"/>
                                {category}
                            </Link>
                        </Button>
                    ))}
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
