import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";

export default function AuthorPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
            Authors
          </h1>
          <p className="text-lg text-muted-foreground">
            Meet the talented authors behind our books.
          </p>
        </div>
        
        <Card className="max-w-2xl mx-auto">
            <CardHeader className="items-center text-center">
                <User className="h-12 w-12 text-muted-foreground mb-4"/>
                <CardTitle className="font-headline text-2xl">Author Information Coming Soon</CardTitle>
                <CardDescription>Check back soon for details about our authors.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-center text-muted-foreground">
                    This section will be updated with author biographies, bibliographies, and more. Stay tuned!
                </p>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
