'use client';

import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { Phone, CheckCircle, Star } from 'lucide-react';
import Image from 'next/image';
import { CONTACT } from '@/lib/constants';
import { trackContactWithTime } from '@/lib/tracking';

interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  features?: string[];
  capacity?: string;
  area?: string;
  price?: string;
}

interface ServiceLayoutProps {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    features: string[];
  };
  products: Product[];
  benefits: {
    title: string;
    items: string[];
  };
  testimonials?: {
    name: string;
    company: string;
    text: string;
    rating: number;
  }[];
  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
  serviceName: string; // Nombre del servicio para el breadcrumb
}

export function ServiceLayout({
  hero,
  products,
  benefits,
  testimonials = [],
  cta,
  serviceName,
}: ServiceLayoutProps) {
  return (
    <>
      <Navbar />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-24">
        <Breadcrumb
          items={[
            { label: 'Servicios', href: '/servicios' },
            { label: serviceName },
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={hero.image}
            alt={hero.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{hero.title}</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            {hero.subtitle}
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            {hero.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {hero.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center justify-center space-x-2"
              >
                <CheckCircle className="h-5 w-5 text-[#f4c046]" />
                <span className="text-sm md:text-base">{feature}</span>
              </div>
            ))}
          </div>

          <a href={CONTACT.whatsapp} target="_blank">
            <Button
              size="lg"
              className="bg-[#003056] hover:bg-[#002040] text-lg px-8 py-4"
            >
              <Phone className="h-5 w-5 mr-2" />
              Solicitar Cotización
            </Button>
          </a>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003056] mb-4">
              Nuestros Productos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubre nuestra amplia gama de productos para hacer de tu evento
              algo inolvidable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-[#003056]">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {product.features && (
                    <div className="space-y-2 mb-4">
                      {product.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="h-4 w-4 text-[#f4c046]" />
                          <span className="text-sm text-gray-600">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.capacity && (
                      <Badge
                        variant="secondary"
                        className="bg-[#003056] text-white"
                      >
                        Capacidad: {product.capacity}
                      </Badge>
                    )}
                    {product.area && (
                      <Badge
                        variant="secondary"
                        className="bg-[#f4c046] text-[#003056]"
                      >
                        Área: {product.area}
                      </Badge>
                    )}
                  </div>

                  {product.price && (
                    <p className="text-lg font-semibold text-[#003056]">
                      Desde {product.price}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003056] mb-4">
              {benefits.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.items.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#f4c046] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-[#003056]" />
                </div>
                <p className="text-lg text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {testimonials.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#003056] mb-4">
                Lo que dicen nuestros clientes
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating
                              ? 'text-[#f4c046] fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <div>
                      <p className="font-semibold text-[#003056]">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonial.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-[#003056] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{cta.title}</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            {cta.description}
          </p>
          <a 
            href={CONTACT.whatsapp} 
            target="_blank"
            onClick={() => trackContactWithTime('whatsapp_click', 'service_cta', { button_text: cta.buttonText, service: serviceName })}
          >
            <Button
              size="lg"
              className="bg-[#f4c046] hover:bg-[#e6b53a] text-[#003056] text-lg px-8 py-4"
            >
              <Phone className="h-5 w-5 mr-2" />
              {cta.buttonText}
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
