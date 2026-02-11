import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import { CONTACT, SERVICES, EVENT_TYPES } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col gap-2  px-4 py-4 rounded-lg">

            <div className="mb-3">
              <p className="text-xl font-semibold  text-gray-300">
                Ferrario Structures —
              </p>
              <p className="text-xs tracking-[0.001em] text-gray-300">
                Infraestructura completa para eventos
              </p>
            </div>
            <p className="text-sm text-white mb-4">
              Tu socio confiable para montajes y soluciones técnicas temporales
              para eventos. Más de 35 años de experiencia nos respaldan.
            </p>
            <div className="flex space-x-4 ">
              <a
                href={CONTACT.googleMaps}
                target="_blank"
                className="w-8 h-8  rounded-full flex items-center justify-center"
              >
                <Image
                  src="/google.svg"
                  alt="Google Maps"
                  width={25}
                  height={25}
                  className="object-contain"
                />
              </a>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                className="w-8 h-8 rounded-full flex items-center justify-center"
              >
                <Image
                  src="/whatsapp.svg"
                  alt="WhatsApp"
                  width={25}
                  height={25}
                  className="object-contain"
                />
              </a>
            </div>
          </div>
          <div className=" px-4 py-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-gray-400">
              {SERVICES.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div className="px-4 py-4 rounded-lg min-h-[200px] flex flex-col justify-start">
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-[#f4c046]" />
                <span className="text-sm sm:text-base">{CONTACT.phone}</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-[#f4c046]" />
                <span className="text-sm sm:text-base">{CONTACT.email}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-[#f4c046]" />
                <span className="text-sm sm:text-base">{CONTACT.address}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Ferrario Structures. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
