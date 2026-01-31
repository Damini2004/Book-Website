"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/data";
import { MphLogo } from "@/components/icons";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background/80 sticky top-0 z-50 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <MphLogo className="h-10 w-auto text-primary" />
            <span className="font-headline font-bold text-xl hidden sm:inline-block">
              Malhotra Publishing House
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) =>
              link.children ? (
                <DropdownMenu key={link.href}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-1">
                      {link.label} <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {link.children.map((child) => (
                      <DropdownMenuItem key={child.href} asChild>
                        <Link href={child.href}>{child.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button key={link.href} variant="ghost" asChild>
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <Button variant="outline" asChild>
              <Link href="/books">Shop Books</Link>
            </Button>
            <Button asChild>
              <Link href="/book-proposal">Submit Book Proposal</Link>
            </Button>
          </div>

          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" suppressHydrationWarning>
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80">
                <SheetTitle>
                  <span className="sr-only">Menu</span>
                </SheetTitle>
                <div className="flex justify-between items-center mb-8">
                   <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
                      <MphLogo className="h-8 w-auto text-primary" />
                      <span className="font-headline font-bold text-lg">MPH</span>
                    </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)} suppressHydrationWarning>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                     <div key={link.href}>
                      {link.children ? (
                         <Collapsible>
                           <CollapsibleTrigger className="flex justify-between items-center w-full font-semibold text-lg px-4 py-2 hover:bg-muted rounded-md">
                             <span>{link.label}</span>
                             <ChevronDown className="h-5 w-5 transition-transform duration-200 data-[state=open]:rotate-180" />
                           </CollapsibleTrigger>
                           <CollapsibleContent>
                             <div className="flex flex-col space-y-2 py-2 pl-8">
                               {link.children.map((child) => (
                                 <Link
                                   key={child.href}
                                   href={child.href}
                                   className="text-muted-foreground hover:text-primary transition-colors py-2 text-lg"
                                   onClick={() => setIsMobileMenuOpen(false)}
                                 >
                                   {child.label}
                                 </Link>
                               ))}
                             </div>
                           </CollapsibleContent>
                         </Collapsible>
                      ) : (
                        <Link
                          href={link.href}
                          className="block font-semibold text-lg px-4 py-2 hover:bg-muted rounded-md"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      )}
                    </div>
                  ))}
                  <div className="border-t pt-6 flex flex-col gap-4 mt-4">
                    <Button variant="outline" asChild>
                      <Link href="/books" onClick={() => setIsMobileMenuOpen(false)}>Shop Books</Link>
                    </Button>
                    <Button asChild>
                      <Link href="/book-proposal" onClick={() => setIsMobileMenuOpen(false)}>Submit Book Proposal</Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
