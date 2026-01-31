import Link from "next/link";
import { footerLinks, socialLinks } from "@/lib/data";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { MphLogo } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-secondary/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
                <MphLogo className="h-10 w-auto text-primary" />
                <span className="font-headline font-bold text-xl">
                    Malhotra Publishing House
                </span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              Advancing Knowledge in Agricultural Science & Entomology
            </p>
            <h4 className="font-semibold mb-2">New issues &amp; new books (monthly)</h4>
            <form className="flex gap-2">
              <Input type="email" placeholder="Your email address" className="bg-background" suppressHydrationWarning/>
              <Button type="submit" suppressHydrationWarning>Subscribe</Button>
            </form>
          </div>
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-headline font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      target={link.external ? "_blank" : "_self"}
                      rel={link.external ? "noopener noreferrer" : ""}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p suppressHydrationWarning>© {new Date().getFullYear()} Malhotra Publishing House (MPH). All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
