import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-lg text-muted-foreground">
            By using our website and services, you agree to the following terms and conditions.
          </p>
        </div>
        
        <Card className="max-w-3xl mx-auto">
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Use of Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
                <p>All content on this website, including text, graphics, logos, and journal articles, is the property of Malhotra Publishing House (MPH) or its content suppliers and protected by copyright laws. Open access articles are distributed under Creative Commons licenses, and terms of use are specified within each article.</p>
                <p>You may not reproduce, duplicate, copy, sell, or otherwise exploit any portion of the service or content without express written permission from us.</p>
            </CardContent>
             <CardHeader>
                <CardTitle className="font-headline text-2xl">Disclaimer of Warranties</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Our services are provided "as is". MPH makes no warranties, expressed or implied, and hereby disclaims all other warranties. We do not warrant that the service will be uninterrupted or error-free.</p>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
