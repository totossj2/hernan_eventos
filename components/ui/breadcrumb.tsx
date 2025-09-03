'use client';

import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';

interface BreadcrumbProps {
  items: {
    label: string;
    href?: string;
  }[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-1 text-sm text-gray-500 mb-6">
      <Link
        href="/"
        className="flex items-center hover:text-[#003056] transition-colors"
      >
        <Home className="h-4 w-4 mr-1" />
        Inicio
      </Link>

      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-[#003056] transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-[#003056] font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
