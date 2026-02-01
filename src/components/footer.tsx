import Link from "next/link";
import { footerLinks, socialLinks } from "@/lib/data";
import { ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="container mx-auto px-8 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
          {footerLinks.map((column, colIndex) => {
            let colSpan;
            if (colIndex === 0 || colIndex === footerLinks.length - 1) {
              colSpan = 'lg:col-span-3';
            } else {
              colSpan = 'lg:col-span-2';
            }
            return (
            <div key={column.title} className={colSpan}>
              <h2 className="font-headline font-bold text-lg mb-4 text-white">{column.title}</h2>
              {column.description && <p className="text-gray-400 mb-4">{column.description}</p>}
              {column.title === 'Connect' && (
                 <ul className="flex space-x-4">
                    {socialLinks.map((link) => (
                      <li key={link.name}>
                        <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary">
                          <link.icon className="h-5 w-5" />
                        </a>
                      </li>
                    ))}
                 </ul>
              )}
               {column.title === 'Have a Questions?' ? (
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={`${colIndex}-${linkIndex}`} className="flex items-start">
                      {link.icon && <link.icon className="h-5 w-5 mr-3 mt-1 text-primary shrink-0" />}
                      <span className="text-gray-400">{link.label}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="space-y-2">
                  {column.title !== 'Connect' && column.links.map((link, linkIndex) => (
                    <li key={`${colIndex}-${linkIndex}`}>
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
              )}
            </div>
          )})}
        </div>
      </div>
      <div className="text-center py-5 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <p className="text-sm text-gray-500" suppressHydrationWarning>
            Copyright ©{new Date().getFullYear()} All rights reserved | This template is made with by Colorlib
          </p>
        </div>
      </div>
    </footer>
  );
}
