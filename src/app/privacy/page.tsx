"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function PrivacyPage() {
  const [date, setDate] = useState<string | null>(null);

  useEffect(() => {
    setDate(new Date().toLocaleDateString());
  }, []);

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
        </div>
        
        <Card className="max-w-3xl mx-auto">
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
                <p>We collect information you provide directly to us, such as when you create an account, submit a manuscript, purchase a book, or subscribe to our newsletter. This may include your name, email address, affiliation, and payment information.</p>
                <p>We do not sell or share your personal information with third parties for marketing purposes. Data is used solely for processing your orders, managing submissions, and communicating with you about our services.</p>
            </CardContent>
             <CardHeader>
                <CardTitle className="font-headline text-2xl">Your Rights</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">You have the right to access, correct, or delete your personal information at any time. Please contact us for assistance. This policy is subject to change, and any updates will be posted on this page. Last updated: {date ? date : ""}.</p>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
