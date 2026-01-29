import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Truck, Building, Mail } from "lucide-react";

export default function OrdersPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
            Distributors &amp; Bulk Orders
          </h1>
          <p className="text-lg text-muted-foreground">
            Information for booksellers, institutions, and distributors seeking to purchase our titles in bulk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader className="items-center text-center">
               <div className="bg-primary/10 p-4 rounded-full mb-2">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-headline text-2xl">Bulk Purchases</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground">
                We offer significant discounts for bulk orders from academic institutions, libraries, and corporations. Enhance your library or curriculum with our authoritative texts.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-2">
                <Building className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-headline text-2xl">Distributors</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground">
                If you are a bookseller or distributor interested in carrying our titles, please get in touch to discuss our partnership programs and distribution terms.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-2">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-headline text-2xl">Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                For all inquiries related to bulk orders and distribution, please contact our sales team.
              </p>
              <Button asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
