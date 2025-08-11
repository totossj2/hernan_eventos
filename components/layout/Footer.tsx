import { Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
import { CONTACT, SERVICES, EVENT_TYPES } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/logo.png"
                alt="Hernan Eventos Logo"
                height={200}
                width={200}
                className="object-contain"
              />
            </div>
            <p className="text-base text-gray-400 mb-4">
              Tu socio confiable para eventos perfectos. Más de 35 años de
              experiencia nos respaldan.
            </p>
            <div className="flex space-x-4">
              <a
                href={CONTACT.googleMaps}
                target="_blank"
                className="w-8 h-8 bg-[#003056] rounded-full flex items-center justify-center"
              >
                <span className="text-xs font-bold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="20px"
                    height="20px"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    />
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    />
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                  </svg>
                </span>
              </a>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                className="w-8 h-8 bg-[#003056] rounded-full flex items-center justify-center"
              >
                <span className="text-xs font-bold">wa</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-gray-400">
              {SERVICES.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Eventos</h3>
            <ul className="space-y-2 text-gray-400">
              {EVENT_TYPES.map((eventType) => (
                <li key={eventType}>{eventType}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-[#f4c046]" />
                {CONTACT.phone}
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-[#f4c046]" />
                {CONTACT.email}
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-[#f4c046]" />
                {CONTACT.address}
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Hernan Eventos. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
