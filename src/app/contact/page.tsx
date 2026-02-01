import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "contact-hero");
  const mapImage = PlaceHolderImages.find((p) => p.id === "contact-map");

  const contactDetails = [
    {
      icon: MapPin,
      title: "Address",
      content: "198 West 21th Street, Suite 721 New York NY 10016",
    },
    {
      icon: Phone,
      title: "Phone",
      content: <a href="tel://1234567920" className="hover:text-primary">+ 1235 2355 98</a>,
    },
    {
      icon: Mail,
      title: "Email",
      content: <a href="mailto:info@yoursite.com" className="hover:text-primary">info@yoursite.com</a>,
    },
    {
      icon: Globe,
      title: "Website",
      content: <a href="#" className="hover:text-primary">yoursite.com</a>,
    },
  ];

  return (
    <div className="bg-secondary/30">
      <section className="relative h-[40vh] flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">&gt;</span>
            <span>Contact Us</span>
          </p>
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight mt-2">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactDetails.map((detail, index) => (
              <Card key={index} className="text-center bg-background py-6">
                <CardHeader className="items-center p-0 mb-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <detail.icon className="h-8 w-8 text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="font-semibold">{detail.title}:</p>
                  <div className="text-muted-foreground text-sm px-2">{detail.content}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-12 gap-8 bg-background p-6 md:p-8 rounded-lg shadow-lg">
            <div className="md:col-span-7">
                <ContactForm />
            </div>
            <div className="md:col-span-5 min-h-[400px] md:min-h-full relative">
              {mapImage && (
                <Image 
                  src={mapImage.imageUrl}
                  alt={mapImage.description}
                  fill
                  className="object-cover rounded-lg"
                  data-ai-hint={mapImage.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
