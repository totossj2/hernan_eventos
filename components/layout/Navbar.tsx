'use client';

import { Button } from '@/components/ui/button';
import { Phone, Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { NAVIGATION, CONTACT } from '@/lib/constants';
import { useRouter, usePathname } from 'next/navigation';
import { trackContactWithTime } from '@/lib/tracking';
import { useEffect, useState } from 'react';
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
  const [isHeroVisible, setIsHeroVisible] = useState(pathname === '/');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateNavbarState = () => {
      const isHome = pathname === '/';
      const hero = document.getElementById('hero');

      if (!isHome || !hero) {
        setIsHeroVisible(false);
        return;
      }

      const heroBottom = hero.getBoundingClientRect().bottom;
      setIsHeroVisible(heroBottom > 64);
    };

    updateNavbarState();
    window.addEventListener('scroll', updateNavbarState, { passive: true });
    window.addEventListener('resize', updateNavbarState);

    return () => {
      window.removeEventListener('scroll', updateNavbarState);
      window.removeEventListener('resize', updateNavbarState);
    };
  }, [pathname]);

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
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isHeroVisible
        ? 'bg-transparent border-transparent'
        : 'bg-white/95 backdrop-blur-sm border-b'
        }`}
    >
      <div className=" mx-auto px-2 lg:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link
            href="/"
            className="cursor-pointer flex items-center space-x-2"
            onClick={(e) => handleScroll(e, '/')}
          >
            <div className="flex flex-col leading-tight">
              <span
                className={`text-xl font-semibold transition-colors duration-300 ${isHeroVisible ? 'text-white' : 'text-[#003056]'
                  }`}
              >
                Ferrario Structures —
              </span>
              <span
                className={`text-xs tracking-[0.001em] transition-colors duration-300 ${isHeroVisible ? 'text-white/90' : 'text-[#003056]'
                  }`}
              >
                Infraestructura completa para eventos
              </span>
            </div>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-3">
          {NAVIGATION.map((item: { name: string; href: string }) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative text-sm font-medium transition-colors group ${
                isHeroVisible ? 'text-white hover:text-white/80' : 'text-[#003056] hover:text-[#002040]'
              }`}
              onClick={(e) => handleScroll(e, item.href)}
            >
              {item.name}
              <span
                className={`pointer-events-none absolute inset-x-0 -bottom-0.5 h-0.5 origin-right scale-x-0 transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100 ${
                  isHeroVisible ? 'bg-white' : 'bg-[#003056]'
                }`}
              ></span>
            </Link>
          ))}
        </nav>
        <a 
          className="hidden md:block" 
          href={CONTACT.whatsapp} 
          target="_blank"
          onClick={() => trackContactWithTime('whatsapp_click', 'navbar', { button_text: 'Contactános' })}
        >
          <Button className="bg-[#003056] hover:bg-[#002040] px-3">
            <Image
              src="/whatsapp.svg"
              alt="WhatsApp"
              width={24}
              height={24}
              className="h-4 w-4 "
            />
            Contactános
          </Button>
        </a>
        {/* Mobile menu */}
        <div className="hidden">
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
                    className="cursor-pointer flex items-center space-x-2"
                    onClick={(e) => handleScroll(e, '/')}
                  >
                    <div className="flex flex-col leading-tight">
                      <span className="text-xl font-semibold text-[#003056]">
                        Ferrario Structures —
                      </span>
                      <span className="text-xs  tracking-[0.02em] text-[#003056]">
                        Infraestructura completa para eventos
                      </span>
                    </div>
                  </Link>
                </div>
                <nav className="flex-1 flex flex-col space-y-4">
                  {NAVIGATION.map((item: { name: string; href: string }) => (
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
                  <a 
                    href={CONTACT.whatsapp} 
                    target="_blank" 
                    className="block"
                    onClick={() => trackContactWithTime('whatsapp_click', 'navbar_mobile', { button_text: 'Contactános' })}
                  >
                    <Button className="w-full bg-[#003056] hover:bg-[#002040]">
                      <Image
                        src="/whatsapp.svg"
                        alt="WhatsApp"
                        width={16}
                        height={16}
                        className="h-4 w-4 "
                      />
                      Contactános
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
