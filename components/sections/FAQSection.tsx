import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "¿Con cuánta anticipación debo hacer mi reserva?",
      answer:
        "Recomendamos reservar con al menos 2-3 semanas de anticipación para eventos grandes. Para fechas populares como fin de año o temporada alta, sugerimos reservar con 1-2 meses de anticipación para garantizar disponibilidad.",
    },
    {
      question: "¿Incluyen el montaje y desmontaje del equipamiento?",
      answer:
        "Sí, todos nuestros servicios incluyen entrega, montaje profesional y posterior desmontaje y recolección. Nuestro equipo técnico se encarga de todo para que tú solo te preocupes por disfrutar tu evento.",
    },
    {
      question: "¿Qué pasa si llueve durante mi evento al aire libre?",
      answer:
        "Nuestras carpas están diseñadas para resistir condiciones climáticas adversas. Son completamente impermeables y cuentan con sistemas de anclaje seguros. También ofrecemos opciones de climatización para mantener el confort en cualquier clima.",
    },
    {
      question:
        "¿Ofrecen descuentos para eventos grandes o múltiples reservas?",
      answer:
        "Sí, ofrecemos tarifas preferenciales para eventos de más de 200 personas y descuentos especiales para clientes corporativos o con múltiples eventos al año. Consulta con nuestro equipo comercial para conocer las promociones vigentes.",
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer:
        "Aceptamos efectivo, transferencias bancarias, tarjetas de crédito y débito. Requerimos una seña del 50% para confirmar la reserva y el saldo restante se abona el día del evento. También ofrecemos planes de pago para eventos grandes.",
    },
  ];

  return (
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
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 1}`}
                className="bg-white rounded-lg px-6"
              >
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
