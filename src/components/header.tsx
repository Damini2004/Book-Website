"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks, socialLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-8 pt-4 md:pt-5">
        <div className="grid md:grid-cols-12 items-center">
            <div className="md:col-span-4 flex">
                 <div className="flex space-x-3">
                    {socialLinks.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label={social.name}
                        >
                            <social.icon className="h-5 w-5" />
                        </a>
                    ))}
                 </div>
            </div>
            <div className="md:col-span-4 text-center my-4 md:my-0">
                <Link href="/" className="font-headline text-2xl font-bold">
                    Publishing <span className="text-primary">Company</span>
                    <small className="block text-sm font-normal text-muted-foreground">Book Publishing Company</small>
                </Link>
            </div>
             <div className="md:col-span-4 flex justify-end">
                <form className="relative w-full max-w-sm">
                    <Input type="search" placeholder="Search" className="pl-4 pr-10 rounded-full" />
                    <Button type="submit" size="icon" variant="ghost" className="absolute right-0 top-0 h-full text-muted-foreground">
                        <Search className="h-4 w-4" />
                    </Button>
                </form>
            </div>
        </div>
      </div>

      <nav className="sticky top-0 z-50 bg-background border-y mt-4">
        <div className="container mx-auto px-4">
            <div className="hidden lg:flex items-center justify-center h-16">
                 <div className="flex items-center space-x-2">
                    {navLinks.map((link, index) => {
                      const isActive = pathname === link.href;
                      return (
                        <Link
                            key={`${link.href}-${index}`}
                            href={link.href}
                            className={cn(
                                "nav-link-underline px-4 py-2 text-base",
                                isActive && "active"
                            )}
                            >
                            {link.label}
                        </Link>
                      );
                    })}
                </div>
            </div>
            <div className="lg:hidden flex justify-between items-center h-16">
                 <Link href="/" className="font-headline text-xl font-bold">
                    Publishing <span className="text-primary">Company</span>
                </Link>
                <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Menu className="h-6 w-6" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-full sm:w-80">
                     <SheetTitle className="sr-only">Menu</SheetTitle>
                     <div className="flex justify-between items-center mb-8">
                         <h2 className="font-headline text-lg font-bold">Menu</h2>
                        <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                            <X className="h-6 w-6" />
                            <span className="sr-only">Close menu</span>
                        </Button>
                     </div>
                     <nav className="flex flex-col space-y-2">
                        {navLinks.map((link, index) => (
                            <Link
                              key={`${link.href}-${index}`}
                              href={link.href}
                              className="block font-semibold text-lg px-4 py-2 hover:bg-muted rounded-md"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {link.label}
                            </Link>
                        ))}
                     </nav>
                  </SheetContent>
                </Sheet>
            </div>
        </div>
      </nav>
    </header>
  );
}