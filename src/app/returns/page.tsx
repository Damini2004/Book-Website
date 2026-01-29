import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ReturnsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
            Returns &amp; Refunds
          </h1>
          <p className="text-lg text-muted-foreground">
            Our policy on returning purchased items and receiving refunds.
          </p>
        </div>
        
        <Card className="max-w-3xl mx-auto">
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Our Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
                <p>We accept returns for print books that are damaged upon arrival. If you receive a damaged item, please contact us within 7 days of receipt with a photo of the damage.</p>
                <p>Once we verify the damage, we will send a replacement copy at no additional cost. Due to the nature of our products, we do not offer refunds or returns for reasons other than damage during shipping.</p>
                <p>Digital products and journal access fees are non-refundable. For any issues, please contact our support team for assistance.</p>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
