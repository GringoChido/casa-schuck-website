import type { Locale } from '@/lib/i18n';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEn = locale === 'en';
  return {
    title: isEn ? 'Terms of Service — Casa Schuck' : 'Términos de Servicio — Casa Schuck',
    description: isEn
      ? 'Terms and conditions for staying at Casa Schuck boutique hotel in San Miguel de Allende, Mexico.'
      : 'Términos y condiciones de estancia en el hotel boutique Casa Schuck en San Miguel de Allende, México.',
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEn = (locale as Locale) === 'en';

  return (
    <main className="pt-32 pb-24 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl md:text-5xl text-secondary mb-4">
          {isEn ? 'Terms of Service' : 'Términos de Servicio'}
        </h1>
        <p className="text-on-surface/50 text-sm mb-12">
          {isEn ? 'Last updated: April 1, 2026' : 'Última actualización: 1 de abril de 2026'}
        </p>

        <div className="prose-custom space-y-10 text-on-surface/80 leading-relaxed">

          {/* 1. Acceptance */}
          <section>
            <h2 className="font-serif text-2xl text-secondary mb-3">
              {isEn ? '1. Acceptance of Terms' : '1. Aceptación de Términos'}
            </h2>
            {isEn ? (
              <p>
                By making a reservation or staying at Casa Schuck, located at Garita 3, Centro, 37700 San Miguel de Allende, Gto., Mexico, you agree to these Terms of Service. If you do not agree, please do not proceed with your booking.
              </p>
            ) : (
              <p>
                Al realizar una reserva o hospedarse en Casa Schuck, ubicado en Garita 3, Centro, 37700 San Miguel de Allende, Gto., México, usted acepta estos Términos de Servicio. Si no está de acuerdo, por favor no proceda con su reserva.
              </p>
            )}
          </section>

          {/* 2. Reservations & Payment */}
          <section>
            <h2 className="font-serif text-2xl text-secondary mb-3">
              {isEn ? '2. Reservations & Payment' : '2. Reservas y Pago'}
            </h2>
            {isEn ? (
              <>
                <p>All reservations are processed through our booking platform (Cloudbeds). A valid credit card is required to guarantee your reservation. Full payment is due at check-in unless otherwise arranged.</p>
                <p className="mt-3">Rates are quoted in USD and are subject to applicable taxes (ISH &mdash; lodging tax, IVA &mdash; value-added tax) as required by Mexican law. Prices are subject to change without notice for future bookings.</p>
              </>
            ) : (
              <>
                <p>Todas las reservas se procesan a través de nuestra plataforma de reservas (Cloudbeds). Se requiere una tarjeta de crédito válida para garantizar su reserva. El pago total se realiza al momento del check-in salvo acuerdo previo.</p>
                <p className="mt-3">Las tarifas se cotizan en USD y están sujetas a los impuestos aplicables (ISH &mdash; impuesto sobre hospedaje, IVA &mdash; impuesto al valor agregado) conforme a la legislación mexicana. Los precios están sujetos a cambios sin previo aviso para reservas futuras.</p>
              </>
            )}
          </section>

          {/* 3. Cancellation Policy */}
          <section>
            <h2 className="font-serif text-2xl text-secondary mb-3">
              {isEn ? '3. Cancellation Policy' : '3. Política de Cancelación'}
            </h2>
            {isEn ? (
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>30+ days before check-in:</strong> Full refund</li>
                <li><strong>15&ndash;30 days before check-in:</strong> 50% refund</li>
                <li><strong>Less than 15 days before check-in:</strong> No refund</li>
                <li><strong>No-shows:</strong> Full charge for the first night; remaining nights will be released</li>
              </ul>
            ) : (
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>30+ días antes del check-in:</strong> Reembolso completo</li>
                <li><strong>15&ndash;30 días antes del check-in:</strong> 50% de reembolso</li>
                <li><strong>Menos de 15 días antes del check-in:</strong> Sin reembolso</li>
                <li><strong>No presentación:</strong> Cargo completo de la primera noche; las noches restantes serán liberadas</li>
              </ul>
            )}
            {isEn ? (
              <p className="mt-3">Cancellation requests must be sent in writing to <a href="mailto:CasaSchuck@gmail.com" className="text-secondary underline">CasaSchuck@gmail.com</a>. Refunds will be processed within 10 business days.</p>
            ) : (
              <p className="mt-3">Las solicitudes de cancelación deben enviarse por escrito a <a href="mailto:CasaSchuck@gmail.com" className="text-secondary underline">CasaSchuck@gmail.com</a>. Los reembolsos se procesarán dentro de 10 días hábiles.</p>
            )}
          </section>

          {/* 4. Check-in / Check-out */}
          <section>
            <h2 className="font-serif text-2xl text-secondary mb-3">
              {isEn ? '4. Check-in & Check-out' : '4. Check-in y Check-out'}
            </h2>
            {isEn ? (
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Check-in:</strong> 3:00 PM</li>
                <li><strong>Check-out:</strong> 12:00 PM (noon)</li>
                <li>Early check-in and late check-out are subject to availability and may incur additional charges</li>
                <li>A valid government-issued ID or passport is required at check-in</li>
              </ul>
            ) : (
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Check-in:</strong> 3:00 PM</li>
                <li><strong>Check-out:</strong> 12:00 PM (mediodía)</li>
                <li>El check-in anticipado y check-out tardío están sujetos a disponibilidad y pueden generar cargos adicionales</li>
                <li>Se requiere una identificación oficial vigente o pasaporte al momento del check-in</li>
              </ul>
            )}
          </section>

          {/* 5. Property Rules */}
          <section>
            <h2 className="font-serif text-2xl text-secondary mb-3">
              {isEn ? '5. Property Rules' : '5. Reglas de la Propiedad'}
            </h2>
            {isEn ? (
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>No smoking:</strong> Smoking is not permitted inside any building. Designated outdoor smoking areas are available.</li>
                <li><strong>Quiet hours:</strong> 10:00 PM to 8:00 AM. Please be considerate of other guests.</li>
                <li><strong>Pool hours:</strong> 8:00 AM to 8:00 PM. No lifeguard on duty &mdash; swim at your own risk.</li>
                <li><strong>Common areas:</strong> The rooftop terrace, courtyard, and garden are shared spaces. Please keep them clean and respect other guests&rsquo; enjoyment.</li>
                <li><strong>Wi-Fi:</strong> Complimentary throughout the property. Not suitable for high-bandwidth activities.</li>
              </ul>
            ) : (
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>No fumar:</strong> No se permite fumar dentro de ningún edificio. Hay áreas designadas para fumar al aire libre.</li>
                <li><strong>Horas de silencio:</strong> 10:00 PM a 8:00 AM. Por favor sea considerado con los demás huéspedes.</li>
                <li><strong>Horario de alberca:</strong> 8:00 AM a 8:00 PM. No hay salvavidas &mdash; nade bajo su propio riesgo.</li>
                <li><strong>Áreas comunes:</strong> La terraza, patio y jardín son espacios compartidos. Por favor manténgalos limpios y respete el disfrute de otros huéspedes.</li>
                <li><strong>Wi-Fi:</strong> Gratuito en toda la propiedad. No apto para actividades de alto consumo de ancho de banda.</li>
              </ul>
            )}
          </section>

          {/* 6. Age Restrictions */}
          <section>
            <h2 className="font-serif text-2xl text-secondary mb-3">
              {isEn ? '6. Age Restrictions' : '6. Restricciones de Edad'}
            </h2>
            {isEn ? (
              <p>
                Guests under 18 years of age must be accompanied by a parent or legal guardian at all times. The primary guest on the reservation must be at least 18 years old.
              </p>
            ) : (
              <p>
                Los huéspedes menores de 18 años deben estar acompañados por un padre o tutor legal en todo momento. El huésped principal de la reserva debe tener al menos 18 años.
              </p>
            )}
          </section>

          {/* 7. Pet Policy */}
          <section>
            <h2 className="font-serif text-2xl text-secondary mb-3">
              {isEn ? '7. Pet Policy' : '7. Política de Mascotas'}
            </h2>
            {isEn ? (
              <p>
                Pets are not permitted at Casa Schuck. Service animals are welcome with prior notification and appropriate documentation.
              </p>
            ) : (
              <p>
                No se permiten mascotas en Casa Schuck. Los animales de servicio son bienvenidos con notificación previa y documentación apropiada.
              </p>
            )}
          </section>

          {/* 8. Damage & Liability */}
          <section>
            <h2 className="font-serif text-2xl text-secondary mb-3">
              {isEn ? '8. Damage Policy & Liability' : '8. Política de Daños y Responsabilidad'}
            </h2>
            {isEn ? (
              <>
                <p>Guests are responsible for any damage to the property, furnishings, or equipment caused during their stay. The cost of repair or replacement will be charged to the credit card on file.</p>
                <p className="mt-3">Casa Schuck is not liable for the loss, theft, or damage of personal belongings. We recommend using the in-room safe for valuables. Our liability is limited to the amount paid for your reservation.</p>
              </>
            ) : (
              <>
                <p>Los huéspedes son responsables de cualquier daño a la propiedad, mobiliario o equipamiento causado durante su estancia. El costo de reparación o reemplazo se cargará a la tarjeta de crédito registrada.</p>
                <p className="mt-3">Casa Schuck no se hace responsable por la pérdida, robo o daño de pertenencias personales. Recomendamos utilizar la caja fuerte de la habitación para objetos de valor. Nuestra responsabilidad se limita al monto pagado por su reserva.</p>
              </>
            )}
          </section>

          {/* 9. Events */}
          <section>
            <h2 className="font-serif text-2xl text-secondary mb-3">
              {isEn ? '9. Events & Group Bookings' : '9. Eventos y Reservas Grupales'}
            </h2>
            {isEn ? (
              <>
                <p>Events with more than 20 attendees require a separate event agreement, including specific terms for venue use, catering, noise levels, and liability.</p>
                <p className="mt-3">Please contact us at <a href="mailto:CasaSchuck@gmail.com" className="text-secondary underline">CasaSchuck@gmail.com</a> to discuss event terms and availability. A non-refundable deposit is required to secure event dates.</p>
              </>
            ) : (
              <>
                <p>Los eventos con más de 20 asistentes requieren un contrato de evento separado, que incluye términos específicos para uso del espacio, catering, niveles de ruido y responsabilidad.</p>
                <p className="mt-3">Contáctenos en <a href="mailto:CasaSchuck@gmail.com" className="text-secondary underline">CasaSchuck@gmail.com</a> para discutir términos de eventos y disponibilidad. Se requiere un depósito no reembolsable para asegurar fechas de eventos.</p>
              </>
            )}
          </section>

          {/* 10. Force Majeure */}
          <section>
            <h2 className="font-serif text-2xl text-secondary mb-3">
              {isEn ? '10. Force Majeure' : '10. Fuerza Mayor'}
            </h2>
            {isEn ? (
              <p>
                Casa Schuck is not liable for failure to perform obligations due to circumstances beyond our reasonable control, including but not limited to natural disasters, pandemics, government actions, civil unrest, or utility failures.
              </p>
            ) : (
              <p>
                Casa Schuck no será responsable por el incumplimiento de obligaciones debido a circunstancias fuera de nuestro control razonable, incluyendo pero no limitado a desastres naturales, pandemias, acciones gubernamentales, disturbios civiles o fallas en servicios públicos.
              </p>
            )}
          </section>

          {/* 11. Governing Law */}
          <section>
            <h2 className="font-serif text-2xl text-secondary mb-3">
              {isEn ? '11. Governing Law & Jurisdiction' : '11. Ley Aplicable y Jurisdicción'}
            </h2>
            {isEn ? (
              <p>
                These Terms of Service are governed by the laws of Mexico. Any disputes arising from or related to these terms or your stay shall be resolved in the competent courts of Guanajuato, Mexico, and both parties submit to their jurisdiction.
              </p>
            ) : (
              <p>
                Estos Términos de Servicio se rigen por las leyes de México. Cualquier disputa que surja de o esté relacionada con estos términos o su estancia será resuelta en los tribunales competentes de Guanajuato, México, y ambas partes se someten a su jurisdicción.
              </p>
            )}
          </section>

          {/* 12. Contact */}
          <section>
            <h2 className="font-serif text-2xl text-secondary mb-3">
              {isEn ? '12. Contact' : '12. Contacto'}
            </h2>
            {isEn ? (
              <p>For questions about these terms, contact us at:</p>
            ) : (
              <p>Para preguntas sobre estos términos, contáctenos en:</p>
            )}
            <p className="mt-2">
              Casa Schuck<br />
              Garita 3, Centro<br />
              37700 San Miguel de Allende, Gto., Mexico<br />
              <a href="mailto:CasaSchuck@gmail.com" className="text-secondary underline">CasaSchuck@gmail.com</a>
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
