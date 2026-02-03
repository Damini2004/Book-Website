import Link from "next/link";
import { footerLinks, socialLinks } from "@/lib/data";
import { ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="container mx-auto px-8 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h2 className="font-headline font-bold text-lg mb-4 text-white">{column.title}</h2>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={`${column.title}-${link.label}-${linkIndex}`}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-primary transition-colors flex items-center"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 text-center sm:text-left">
            © 2026 Malhotra Publishing House (MPH). All rights reserved.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary">
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
