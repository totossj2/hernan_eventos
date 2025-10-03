'use client';

import { Button } from '@/components/ui/button';
import { Phone, Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { NAVIGATION, CONTACT } from '@/lib/constants';
import { useRouter, usePathname } from 'next/navigation';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetTitle,
} from '@/components/ui/sheet';

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    // Si estamos en una página diferente, primero navegamos
    if (pathname !== '/') {
      router.push(href);
      return;
    }

    // Si el href contiene un #, intentamos hacer scroll
    if (href.includes('#')) {
      const targetId = href.split('#')[1];
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        return;
      }
    }

    if (href === '/') {
      const targetId = 'hero';
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        return;
      }
    }

    // Si no encontramos el elemento o no es un anchor, navegamos normalmente
    router.push(href);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50">
      <div className=" mx-auto px-2 lg:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link
            href="/"
            className="cursor-pointer"
            onClick={(e) => handleScroll(e, '/')}
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
        <nav className="hidden md:flex items-center space-x-3">
          {NAVIGATION.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-sm font-medium text-[#003056] hover:text-[#002040] transition-colors group"
              onClick={(e) => handleScroll(e, item.href)}
            >
              {item.name}
              <span className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-0.5 origin-right scale-x-0 bg-[#003056] transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100"></span>
            </Link>
          ))}
        </nav>
        <a className="hidden md:block" href={CONTACT.whatsapp} target="_blank">
          <Button className="bg-[#003056] hover:bg-[#002040] px-3">
            <Phone className="h-4 w-4 mr-1" />
            Contactanos
          </Button>
        </a>
        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Abrir menú">
                <Menu className="h-6 w-6 text-[#003056]" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white">
              <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <Link
                    href="/"
                    className="cursor-pointer"
                    onClick={(e) => handleScroll(e, '/')}
                  >
                    <Image
                      src="/logo.png"
                      alt="Hernan Eventos Logo"
                      height={120}
                      width={120}
                      className="object-contain"
                    />
                  </Link>
                </div>
                <nav className="flex-1 flex flex-col space-y-4">
                  {NAVIGATION.map((item) => (
                    <SheetClose asChild key={item.name}>
                      <Link
                        href={item.href}
                        className="relative text-base font-medium text-[#003056] hover:text-[#00305690] group"
                        onClick={(e) => handleScroll(e, item.href)}
                      >
                        {item.name}
                        <span className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-0.5 origin-right scale-x-0 bg-[#003056] transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100"></span>
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="pt-4 border-t">
                  <a href={CONTACT.whatsapp} target="_blank" className="block">
                    <Button className="w-full bg-[#003056] hover:bg-[#002040]">
                      <Phone className="h-4 w-4 mr-2" />
                      Contactanos
                    </Button>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
