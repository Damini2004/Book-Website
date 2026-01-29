import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Building } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground">
            We're here to help. Reach out to the right department for your inquiries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-xl">General Inquiries</CardTitle>
              <CardDescription>For questions about MPH, our mission, and partnerships.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary"/>
                <a href="mailto:info@mph.net.in.org" className="hover:underline">info@mph.net.in.org</a>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-xl">Author &amp; Reviewer Support</CardTitle>
              <CardDescription>For help with manuscript submissions and the peer-review process.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary"/>
                <a href="mailto:editorial@mph.net.in.org" className="hover:underline">editorial@mph.net.in.org</a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-xl">Book Proposals &amp; Sales</CardTitle>
              <CardDescription>For book submissions, bulk orders, and distribution.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary"/>
                <a href="mailto:books@mph.net.in.org" className="hover:underline">books@mph.net.in.org</a>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
            <Card className="bg-secondary/50">
                <CardHeader className="text-center">
                    <CardTitle className="font-headline text-3xl">Our Office</CardTitle>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-3 gap-8 text-center">
                    <div>
                        <Building className="h-8 w-8 mx-auto mb-2 text-primary"/>
                        <h3 className="font-semibold">Malhotra Publishing House</h3>
                    </div>
                    <div>
                        <MapPin className="h-8 w-8 mx-auto mb-2 text-primary"/>
                        <h3 className="font-semibold">India</h3>
                    </div>
                    <div>
                        <Phone className="h-8 w-8 mx-auto mb-2 text-primary"/>
                        <h3 className="font-semibold">Phone/WhatsApp</h3>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
