import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function TrackOrderPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
            Track Your Order
          </h1>
          <p className="text-lg text-muted-foreground">
            Enter your order details below to see the latest shipping updates. This feature is optional and may not be available for all orders.
          </p>
        </div>

        <Card className="max-w-xl mx-auto">
          <CardHeader>
            <CardTitle className="font-headline">Order Tracking</CardTitle>
            <CardDescription>Please enter your order number and email address.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Label htmlFor="order-number">Order Number</Label>
                <Input id="order-number" placeholder="e.g., MPH-12345" />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input type="email" id="email" placeholder="you@example.com" />
              </div>
              <Button type="submit" className="w-full">Track Order</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
