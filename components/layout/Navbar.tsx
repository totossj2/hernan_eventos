import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { NAVIGATION, CONTACT } from "@/lib/constants";

export function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Hernan Eventos Logo"
            height={200}
            width={200}
            className="object-contain"
          />
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          {NAVIGATION.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium hover:text-[#003056] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <a href={CONTACT.whatsapp} target="_blank">
          <Button className="bg-[#003056] hover:bg-[#002040]">
            <Phone className="h-4 w-4 mr-2" />
            Contactanos
          </Button>
        </a>
      </div>
    </header>
  );
}
