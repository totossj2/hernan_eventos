'use client';

import Image from 'next/image';
import { CLIENTS } from '@/lib/constants';
import { StarIcon } from 'lucide-react';

export function ClientsSection() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 px-4">
          <div className="flex flex-row items-center gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                Clientes que confían en nosotros
              </h2>
              <div className="flex flex-row items-center gap-2">
                <StarIcon className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <StarIcon className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <StarIcon className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <StarIcon className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <StarIcon className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              </div>
              <p className="text-sm text-gray-700">
                35 años de experiencia en el rubro - más de 1.000 eventos
                realizados
              </p>
            </div>
            <div className="hidden md:block w-[2px] h-full bg-gray-300 rounded-full" />
          </div>

          <div className="grid grid-cols-2  lg:grid-cols-4  gap-x-8 gap-y-4 items-center w-full">
            {CLIENTS.map((client, index) => (
              <div
                key={`logo-${index}`}
                className="flex flex-col items-center justify-center group hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={client.logo}
                  alt={client.alt}
                  width={120}
                  height={60}
                  className="opacity-100 md:opacity-70 group-hover:opacity-100 transition-all duration-300 md:grayscale group-hover:grayscale-0"
                />
                {/* Client name with fade in */}
                <div className="mt-2 h-10 overflow-hidden">
                  <p className="text-xs text-gray-600 text-center font-medium transform translate-y-2 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {client.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
