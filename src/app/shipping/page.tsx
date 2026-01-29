import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Clock, Globe } from "lucide-react";

export default function ShippingPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
            Shipping &amp; Delivery
          </h1>
          <p className="text-lg text-muted-foreground">
            Information about our shipping policies for print books and other physical materials.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
                <CardHeader className="items-center text-center">
                    <Package className="h-10 w-10 text-primary mb-2" />
                    <CardTitle className="font-headline">Standard Shipping</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-center text-muted-foreground">All orders are processed within 3-5 business days. We use reliable courier services to ensure your books arrive safely.</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="items-center text-center">
                    <Clock className="h-10 w-10 text-primary mb-2" />
                    <CardTitle className="font-headline">Delivery Times</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-center text-muted-foreground">Delivery times vary by location. Domestic orders typically arrive within 7-10 business days, while international orders may take 15-30 days.</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="items-center text-center">
                    <Globe className="h-10 w-10 text-primary mb-2" />
                    <CardTitle className="font-headline">International Orders</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-center text-muted-foreground">We ship worldwide. Please note that customs duties and taxes may apply and are the responsibility of the recipient.</p>
                </CardContent>
            </Card>
        </div>

        <div className="max-w-3xl mx-auto mt-12 text-center text-muted-foreground">
            <p>For specific questions about your order's shipping status, please use the tracking information provided in your confirmation email or contact our support team.</p>
        </div>
      </div>
    </div>
  );
}
