"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Users,
  Award,
  Star,
  Tent,
  Utensils,
  Wind,
  Fence,
  PlayIcon as Stage,
  Table,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export default function Component() {
  const { scrollTo } = useSmoothScroll();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Navbar */}
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
            <Link
              href="#calefaccion"
              onClick={scrollTo}
              className="text-sm font-medium hover:text-[#003056] transition-colors"
            >
              Calefacción
            </Link>
            <Link
              href="#servicios"
              onClick={scrollTo}
              className="text-sm font-medium hover:text-[#003056] transition-colors"
            >
              Servicios
            </Link>
            <Link
              href="#proceso"
              onClick={scrollTo}
              className="text-sm font-medium hover:text-[#003056] transition-colors"
            >
              Proceso
            </Link>
            <Link
              href="#testimonios"
              onClick={scrollTo}
              className="text-sm font-medium hover:text-[#003056] transition-colors"
            >
              Testimonios
            </Link>
            <Link
              href="#faq"
              onClick={scrollTo}
              className="text-sm font-medium hover:text-[#003056] transition-colors"
            >
              FAQ
            </Link>
          </nav>
          <a
            href="https://wa.me/5491160939880?text=Hola%2C%20quiero%20más%20info%20sobre%20los%20servicios%20de%20eventos"
            target="_blank"
          >
            <Button className="bg-[#003056] hover:bg-[#002040]">
              <Phone className="h-4 w-4 mr-2" />
              Contactanos
            </Button>
          </a>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10" />
          <Image
            src="/placeholder.svg?height=800&width=1200"
            alt="Evento elegante con carpas y decoración profesional"
            fill
            className="object-cover"
            priority
          />
          <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Hacemos realidad tus eventos más especiales
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Alquiler profesional de equipamiento para eventos en Gran Buenos
              Aires.
            </p>
            <a href="#contact" onClick={scrollTo}>
              <Button
                size="lg"
                className="bg-[#003056] hover:bg-[#002040] text-lg px-8 py-4"
              >
                Solicitar Presupuesto
              </Button>
            </a>
          </div>
        </section>

        {/* Winter Heating Section */}
        <section
          id="calefaccion"
          className="py-20 bg-gradient-to-br from-[#003056] to-[#004070]"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Calefacción segura y potente para eventos de invierno
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Equipos a gas, seguros y adaptables a cualquier espacio
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#f4c046] rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-[#003056]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Máxima Seguridad
                    </h3>
                    <p className="text-blue-100">
                      Equipos a gas con encendido piezoeléctrico y sin partes
                      calientes al alcance de los invitados. Perfectos para
                      eventos sociales donde la seguridad es prioritaria.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#f4c046] rounded-full flex items-center justify-center flex-shrink-0">
                    <Wind className="h-6 w-6 text-[#003056]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Adaptables a Cualquier Espacio
                    </h3>
                    <p className="text-blue-100">
                      Modelos disponibles para exteriores tipo hongo y pirámide.
                      Diferentes potencias para espacios desde 15 hasta 300
                      invitados.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Equipos de calefacción para eventos"
                  width={500}
                  height={300}
                  className="rounded-2xl shadow-2xl object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-[#f4c046] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-[#003056]">
                      45K
                    </span>
                  </div>
                  <CardTitle className="text-xl">45.000 Calorías</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-blue-100 mb-2">Hasta 80 invitados</p>
                  <p className="text-sm text-blue-200">Cobertura: 80 m²</p>
                  <p className="text-sm text-blue-200 mt-2">
                    Ideal para eventos grandes
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-[#f4c046] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-[#003056]">
                      35K
                    </span>
                  </div>
                  <CardTitle className="text-xl">35.000 Calorías</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-blue-100 mb-2">Hasta 60 invitados</p>
                  <p className="text-sm text-blue-200">Cobertura: 60 m²</p>
                  <p className="text-sm text-blue-200 mt-2">
                    Perfecto para reuniones medianas
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-[#f4c046] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-[#003056]">
                      8K
                    </span>
                  </div>
                  <CardTitle className="text-xl">
                    Cañón 8.000 Calorías
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-blue-100 mb-2">Hasta 15 invitados</p>
                  <p className="text-sm text-blue-200">Espacios reducidos</p>
                  <p className="text-sm text-blue-200 mt-2">
                    Ideal para eventos íntimos
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <a href="#contact" onClick={scrollTo}>
                <Button
                  size="lg"
                  className="bg-[#f4c046] hover:bg-[#e6b03f] text-[#003056] font-semibold text-lg px-8 py-4"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Asesorate para tu evento
                </Button>
              </a>
              <p className="text-blue-100 mt-4 text-sm">
                Consulta sin compromiso • Asesoramiento personalizado gratuito
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ¿Por qué elegir Hernan Eventos?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Más de 35 años de experiencia haciendo que cada evento sea
                memorable
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center border-0 shadow-lg">
                <CardHeader>
                  <Award className="h-12 w-12 text-[#003056] mx-auto mb-4" />
                  <CardTitle className="text-xl">
                    35+ Años de Experiencia
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Hemos equipado más de 2,000 eventos exitosos en toda la
                    región
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center border-0 shadow-lg">
                <CardHeader>
                  <Clock className="h-12 w-12 text-[#003056] mx-auto mb-4" />
                  <CardTitle className="text-xl">
                    Puntualidad Garantizada
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Entrega y montaje siempre a tiempo. Tu evento no puede
                    esperar
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center border-0 shadow-lg">
                <CardHeader>
                  <Shield className="h-12 w-12 text-[#003056] mx-auto mb-4" />
                  <CardTitle className="text-xl">Materiales Premium</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Equipamiento de primera calidad, renovado constantemente
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center border-0 shadow-lg">
                <CardHeader>
                  <Users className="h-12 w-12 text-[#003056] mx-auto mb-4" />
                  <CardTitle className="text-xl">
                    Atención Personalizada
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Asesoramiento experto para que tu evento sea perfecto
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Products Gallery */}
        <section id="servicios" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nuestro Equipamiento
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Todo lo que necesitas para tu evento en un solo lugar
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Carpas elegantes para eventos"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-[#003056]">
                    <Tent className="h-4 w-4 mr-1" />
                    Carpas
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Carpas y Gazebos
                  </h3>
                  <p className="text-gray-600">
                    Desde 3x3m hasta 20x30m. Resistentes al viento y lluvia,
                    ideales para cualquier clima.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Mesas y sillas para eventos"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-[#003056]">
                    <Table className="h-4 w-4 mr-1" />
                    Mobiliario
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Mesas y Sillas</h3>
                  <p className="text-gray-600">
                    Mesas redondas, rectangulares y cocktail. Sillas Tiffany,
                    plegables y ejecutivas.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Vajilla y cristalería elegante"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-[#003056]">
                    <Utensils className="h-4 w-4 mr-1" />
                    Vajilla
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Vajilla y Cristalería
                  </h3>
                  <p className="text-gray-600">
                    Platos, copas, cubiertos y mantelería de alta calidad para
                    eventos elegantes.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Sistemas de climatización"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-[#003056]">
                    <Wind className="h-4 w-4 mr-1" />
                    Clima
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Climatización</h3>
                  <p className="text-gray-600">
                    Equipos de aire acondicionado y calefacción para mantener el
                    confort perfecto.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Escenarios y tarimas"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-[#003056]">
                    <Stage className="h-4 w-4 mr-1" />
                    Escenarios
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Escenarios y Tarimas
                  </h3>
                  <p className="text-gray-600">
                    Estructuras modulares para presentaciones, shows y
                    ceremonias especiales.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Vallas y cerramientos"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-[#003056]">
                    <Fence className="h-4 w-4 mr-1" />
                    Vallas
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Vallas y Cerramientos
                  </h3>
                  <p className="text-gray-600">
                    Control de acceso y delimitación de espacios para eventos
                    seguros y organizados.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="proceso" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Proceso Simple y Eficiente
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                En solo 4 pasos tendrás todo listo para tu evento perfecto
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#003056] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">Consulta Inicial</h3>
                <p className="text-gray-600">
                  Nos cuentas los detalles de tu evento: fecha, lugar, cantidad
                  de invitados y necesidades específicas.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#003056] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Presupuesto Personalizado
                </h3>
                <p className="text-gray-600">
                  Te enviamos una cotización detallada en menos de 24 horas con
                  todas las opciones disponibles.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#003056] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Reserva y Planificación
                </h3>
                <p className="text-gray-600">
                  Confirmamos tu reserva y coordinamos todos los detalles de
                  entrega y montaje.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#003056] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Entrega y Montaje
                </h3>
                <p className="text-gray-600">
                  Nuestro equipo llega puntualmente, monta todo profesionalmente
                  y se encarga de la recolección.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonios" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Lo que dicen nuestros clientes
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Miles de eventos exitosos nos respaldan
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Hernan Eventos hizo que nuestra boda fuera perfecta. El
                    equipamiento llegó impecable y el montaje fue rápido y
                    profesional. ¡Altamente recomendados!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mr-3">
                      <span className="text-[#003056] font-semibold">MR</span>
                    </div>
                    <div>
                      <p className="font-semibold">María Rodríguez</p>
                      <p className="text-sm text-gray-500">
                        Boda - 150 invitados
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Para nuestro evento corporativo necesitábamos todo
                    impecable. Hernan Eventos superó nuestras expectativas en
                    calidad y servicio."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mr-3">
                      <span className="text-[#003056] font-semibold">CG</span>
                    </div>
                    <div>
                      <p className="font-semibold">Carlos González</p>
                      <p className="text-sm text-gray-500">
                        Evento Corporativo - 300 personas
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "La fiesta de 15 años de mi hija fue un sueño hecho
                    realidad. Gracias Hernan Eventos por hacer todo tan fácil y
                    hermoso."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mr-3">
                      <span className="text-[#003056] font-semibold">LM</span>
                    </div>
                    <div>
                      <p className="font-semibold">Laura Martínez</p>
                      <p className="text-sm text-gray-500">
                        Fiesta de 15 años - 200 invitados
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Preguntas Frecuentes
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Resolvemos tus dudas más comunes
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem
                  value="item-1"
                  className="bg-white rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left">
                    ¿Con cuánta anticipación debo hacer mi reserva?
                  </AccordionTrigger>
                  <AccordionContent>
                    Recomendamos reservar con al menos 2-3 semanas de
                    anticipación para eventos grandes. Para fechas populares
                    como fin de año o temporada alta, sugerimos reservar con 1-2
                    meses de anticipación para garantizar disponibilidad.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-2"
                  className="bg-white rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left">
                    ¿Incluyen el montaje y desmontaje del equipamiento?
                  </AccordionTrigger>
                  <AccordionContent>
                    Sí, todos nuestros servicios incluyen entrega, montaje
                    profesional y posterior desmontaje y recolección. Nuestro
                    equipo técnico se encarga de todo para que tú solo te
                    preocupes por disfrutar tu evento.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-3"
                  className="bg-white rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left">
                    ¿Qué pasa si llueve durante mi evento al aire libre?
                  </AccordionTrigger>
                  <AccordionContent>
                    Nuestras carpas están diseñadas para resistir condiciones
                    climáticas adversas. Son completamente impermeables y
                    cuentan con sistemas de anclaje seguros. También ofrecemos
                    opciones de climatización para mantener el confort en
                    cualquier clima.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-4"
                  className="bg-white rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left">
                    ¿Ofrecen descuentos para eventos grandes o múltiples
                    reservas?
                  </AccordionTrigger>
                  <AccordionContent>
                    Sí, ofrecemos tarifas preferenciales para eventos de más de
                    200 personas y descuentos especiales para clientes
                    corporativos o con múltiples eventos al año. Consulta con
                    nuestro equipo comercial para conocer las promociones
                    vigentes.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-5"
                  className="bg-white rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left">
                    ¿Qué métodos de pago aceptan?
                  </AccordionTrigger>
                  <AccordionContent>
                    Aceptamos efectivo, transferencias bancarias, tarjetas de
                    crédito y débito. Requerimos una seña del 50% para confirmar
                    la reserva y el saldo restante se abona el día del evento.
                    También ofrecemos planes de pago para eventos grandes.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-[#003056]" id="contact">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  ¿Listo para hacer tu evento inolvidable?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Completa el formulario y te contactamos en menos de 2 horas
                  con tu presupuesto personalizado
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-6">
                    Solicitá tu presupuesto
                  </h3>
                  <form className="space-y-4">
                    <div>
                      <label
                        htmlFor="nombre"
                        className="block text-sm font-medium mb-2"
                      >
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#f4c046] focus:border-transparent text-gray-900"
                        placeholder="Tu nombre completo"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="telefono"
                        className="block text-sm font-medium mb-2"
                      >
                        Número telefónico *
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#f4c046] focus:border-transparent text-gray-900"
                        placeholder="Ej: 11 1234-5678"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="zona"
                        className="block text-sm font-medium mb-2"
                      >
                        Zona del evento *
                      </label>
                      <input
                        type="text"
                        id="zona"
                        name="zona"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#f4c046] focus:border-transparent text-gray-900"
                        placeholder="Municipio, Provincia"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="fecha"
                        className="block text-sm font-medium mb-2"
                      >
                        Fecha del evento *
                      </label>
                      <input
                        type="date"
                        id="fecha"
                        name="fecha"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#f4c046] focus:border-transparent text-gray-900"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contenido"
                        className="block text-sm font-medium mb-2"
                      >
                        Contanós que servicios necesitas y cuantos invitados vas
                        a tener *
                      </label>
                      <textarea
                        id="contenido"
                        name="contenido"
                        required
                        className="w-full h-40 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#f4c046] focus:border-transparent text-gray-900 resize-none"
                        placeholder="Describe los servicios que necesitas y la cantidad de invitados..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#f4c046] hover:bg-[#e6b03f] text-[#003056] font-semibold text-lg py-4"
                    >
                      Solicitar Presupuesto
                    </Button>
                  </form>
                </div>

                <div className="text-center lg:text-left">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">
                      ¿Preferis llamarnos?
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-center lg:justify-start">
                        <Phone className="h-6 w-6 mr-3 text-[#f4c046]" />
                        <div>
                          <a
                            href="https://wa.me/5491160939880?text=Hola%2C%20quiero%20más%20info%20sobre%20los%20servicios%20de%20eventos"
                            target="_blank"
                            className="text-white font-semibold text-lg"
                          >
                            (011) 6093-9880
                          </a>
                          <p className="text-blue-100 text-sm">
                            Lunes a Sábado 9:00 - 19:00
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-center lg:justify-start">
                        <Mail className="h-6 w-6 mr-3 text-[#f4c046]" />
                        <div>
                          <a
                            href="mailto:info@hernaneventos.com"
                            target="_blank"
                            className="text-white font-semibold"
                          >
                            info@hernaneventos.com
                          </a>
                          <p className="text-blue-100 text-sm">
                            Respuesta en menos de 2 horas
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
              <p className="text-gray-400 mb-4">
                Tu socio confiable para eventos perfectos. Más de 35 años de
                experiencia nos respaldan.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://maps.app.goo.gl/2WLtVqZfsK3dTLUf9?g_st=ic"
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
                <div className="w-8 h-8 bg-[#003056] rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">wa</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Carpas y Gazebos</li>
                <li>Mesas y Sillas</li>
                <li>Vajilla y Cristalería</li>
                <li>Climatización</li>
                <li>Escenarios y Tarimas</li>
                <li>Vallas y Cerramientos</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Eventos</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Bodas</li>
                <li>Eventos Corporativos</li>
                <li>Fiestas de 15 años</li>
                <li>Cumpleaños</li>
                <li>Graduaciones</li>
                <li>Ferias y Exposiciones</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-[#f4c046]" />
                  (011) 6093-9880
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-[#f4c046]" />
                  info@hernaneventos.com
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-[#f4c046]" />
                  Bourquet 560, Luis Guillon
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Hernan Eventos. Todos los
              derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
