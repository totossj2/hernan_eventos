"use client";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { NAVIGATION, CONTACT } from "@/lib/constants";
import { useRouter, usePathname } from "next/navigation";

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    // Si estamos en una página diferente, primero navegamos
    if (pathname !== "/") {
      router.push(href);
      return;
    }

    // Si el href contiene un #, intentamos hacer scroll
    if (href.includes("#")) {
      const targetId = href.split("#")[1];
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        return;
      }
    }

    if (href === "/") {
      const targetId = "hero";
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        return;
      }
    }

    // Si no encontramos el elemento o no es un anchor, navegamos normalmente
    router.push(href);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link
            href="/"
            className="cursor-pointer"
            onClick={(e) => handleScroll(e, "/")}
          >
            <Image
              src="/logo.png"
              alt="Hernan Eventos Logo"
              height={200}
              width={200}
              className="object-contain"
            />
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          {NAVIGATION.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium hover:text-[#003056] transition-colors"
              onClick={(e) => handleScroll(e, item.href)}
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
