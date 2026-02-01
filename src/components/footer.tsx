import Link from "next/link";
import { footerLinks, socialLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-secondary/50">
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {footerLinks.map((column) => (
            <div key={column.title} className={column.title === 'Connect' ? 'lg:col-span-1' : 'col-span-1'}>
              <h2 className="font-headline font-bold text-lg mb-4">{column.title}</h2>
              {column.description && <p className="text-muted-foreground mb-4">{column.description}</p>}
              {column.title === 'Connect' && (
                 <ul className="flex space-x-4">
                    {socialLinks.map((link) => (
                      <li key={link.name}>
                        <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                          <link.icon className="h-5 w-5" />
                        </a>
                      </li>
                    ))}
                 </ul>
              )}
               {column.title === 'Have a Questions?' ? (
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label} className="flex items-start">
                      <link.icon className="h-5 w-5 mr-3 mt-1 text-primary shrink-0" />
                      <span className="text-muted-foreground">{link.label}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="space-y-2">
                  {column.title !== 'Connect' && column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                      >
                         <span className="fa fa-chevron-right mr-2"></span> {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-black text-center py-5">
        <div className="container mx-auto px-4">
          <p className="text-sm text-gray-500">
            Copyright ©{new Date().getFullYear()} All rights reserved | This template is made with by Colorlib
          </p>
        </div>
      </div>
    </footer>
  );
}
