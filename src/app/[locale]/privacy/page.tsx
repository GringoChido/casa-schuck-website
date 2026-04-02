import type { Locale } from '@/lib/i18n';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEn = locale === 'en';
  return {
    title: isEn ? 'Privacy Policy — Casa Schuck' : 'Aviso de Privacidad — Casa Schuck',
    description: isEn
      ? 'Privacy policy for Casa Schuck boutique hotel in San Miguel de Allende, Mexico.'
      : 'Aviso de privacidad del hotel boutique Casa Schuck en San Miguel de Allende, México.',
  };
}

export default async function PrivacyPage({
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
          {isEn ? 'Privacy Policy' : 'Aviso de Privacidad'}
        </h1>
        <p className="text-on-surface/50 text-sm mb-12">
          {isEn ? 'Last updated: April 1, 2026' : 'Última actualización: 1 de abril de 2026'}
        </p>

        <div className="prose-custom space-y-10 text-on-surface/80 leading-relaxed">

          {/* 1. Data Controller */}
          <section>
            <h2 className="font-serif text-2xl text-secondary mb-3">
              {isEn ? '1. Data Controller' : '1. Responsable del Tratamiento de Datos'}
            </h2>
            {isEn ? (
              <p>
                Casa Schuck (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), located at Garita 3, Centro, 37700 San Miguel de Allende, Gto., Mexico, is the data controller responsible for the collection, use, and protection of your personal data in accordance with Mexico&rsquo;s Federal Law on Protection of Personal Data Held by Private Parties (Ley Federal de Protecci&oacute;n de Datos Personales en Posesi&oacute;n de los Particulares &mdash; LFPDPPP) and its regulations.
              </p>
            ) : (
              <p>
                Casa Schuck (&ldquo;nosotros&rdquo; o &ldquo;nuestro&rdquo;), con domicilio en Garita 3, Centro, 37700 San Miguel de Allende, Gto., M&eacute;xico, es el responsable del tratamiento de sus datos personales conforme a la Ley Federal de Protecci&oacute;n de Datos Personales en Posesi&oacute;n de los Particulares (LFPDPPP) y su reglamento.
              </p>
            )}
            <p className="mt-2">
              {isEn ? 'Contact: ' : 'Contacto: '}
              <a href="mailto:CasaSchuck@gmail.com" className="text-secondary underline">CasaSchuck@gmail.com</a>
            </p>
          </section>

          {/* 2. Personal Data We Collect */}
          <section>
            <h2 className="font-serif text-2xl text-secondary mb-3">
              {isEn ? '2. Personal Data We Collect' : '2. Datos Personales que Recopilamos'}
            </h2>
            {isEn ? (
              <>
                <p>We may collect the following categories of personal data:</p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li><strong>Identification data:</strong> full name, nationality, date of birth</li>
                  <li><strong>Contact data:</strong> email address, phone number, WhatsApp number, mailing address</li>
                  <li><strong>Booking data:</strong> check-in/check-out dates, room preferences, number of guests, special requests</li>
                  <li><strong>Payment data:</strong> processed exclusively through our third-party booking platform (Cloudbeds) &mdash; we do not store credit card numbers on our servers</li>
                  <li><strong>Communication data:</strong> messages sent via our website forms, WhatsApp, or email</li>
                  <li><strong>Technical data:</strong> IP address, browser type, device information, pages visited, collected via cookies and analytics tools</li>
                </ul>
              </>
            ) : (
              <>
                <p>Podemos recopilar las siguientes categor&iacute;as de datos personales:</p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li><strong>Datos de identificaci&oacute;n:</strong> nombre completo, nacionalidad, fecha de nacimiento</li>
                  <li><strong>Datos de contacto:</strong> correo electr&oacute;nico, n&uacute;mero telef&oacute;nico, n&uacute;mero de WhatsApp, direcci&oacute;n postal</li>
                  <li><strong>Datos de reserva:</strong> fechas de entrada/salida, preferencias de habitaci&oacute;n, n&uacute;mero de hu&eacute;spedes, solicitudes especiales</li>
                  <li><strong>Datos de pago:</strong> procesados exclusivamente a trav&eacute;s de nuestra plataforma de reservas de terceros (Cloudbeds) &mdash; no almacenamos n&uacute;meros de tarjeta de cr&eacute;dito en nuestros servidores</li>
                  <li><strong>Datos de comunicaci&oacute;n:</strong> mensajes enviados a trav&eacute;s de formularios del sitio web, WhatsApp o correo electr&oacute;nico</li>
                  <li><strong>Datos t&eacute;cnicos:</strong> direcci&oacute;n IP, tipo de navegador, informaci&oacute;n del dispositivo, p&aacute;ginas visitadas, recopilados mediante cookies y herramientas de an&aacute;lisis</li>
                </ul>
              </>
            )}
          </section>

          {/* 3. Purposes */}
          <section>
            <h2 className="font-serif text-2xl text-secondary mb-3">
              {isEn ? '3. Purposes of Data Processing' : '3. Finalidades del Tratamiento'}
            </h2>
            {isEn ? (
              <>
                <p><strong>Primary purposes</strong> (necessary for the service):</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Processing and managing your hotel reservation</li>
                  <li>Communicating with you regarding your stay, services, and inquiries</li>
                  <li>Processing payments through Cloudbeds</li>
                  <li>Complying with legal and regulatory obligations</li>
                </ul>
                <p className="mt-4"><strong>Secondary purposes</strong> (with your consent):</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Sending promotional communications about offers, events, and services</li>
                  <li>Conducting satisfaction surveys</li>
                  <li>Analytics and website improvement</li>
                  <li>Retargeting through Meta Pixel for advertising purposes</li>
                </ul>
                <p className="mt-3">You may opt out of secondary purposes at any time by contacting us at <a href="mailto:CasaSchuck@gmail.com" className="text-secondary underline">CasaSchuck@gmail.com</a>.</p>
              </>
            ) : (
              <>
                <p><strong>Finalidades primarias</strong> (necesarias para el servicio):</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Procesar y gestionar su reserva de hotel</li>
                  <li>Comunicarnos con usted respecto a su estancia, servicios y consultas</li>
                  <li>Procesar pagos a trav&eacute;s de Cloudbeds</li>
                  <li>Cumplir con obligaciones legales y regulatorias</li>
                </ul>
                <p className="mt-4"><strong>Finalidades secundarias</strong> (con su consentimiento):</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Enviar comunicaciones promocionales sobre ofertas, eventos y servicios</li>
                  <li>Realizar encuestas de satisfacci&oacute;n</li>
                  <li>An&aacute;lisis y mejora del sitio web</li>
                  <li>Retargeting mediante Meta Pixel con fines publicitarios</li>
                </ul>
                <p className="mt-3">Puede oponerse a las finalidades secundarias en cualquier momento escribiendo a <a href="mailto:CasaSchuck@gmail.com" className="text-secondary underline">CasaSchuck@gmail.com</a>.</p>
              </>
            )}
          </section>

          {/* 4. Cookies & Tracking */}
          <section>
            <h2 className="font-serif text-2xl text-secondary mb-3">
              {isEn ? '4. Cookies & Tracking Technologies' : '4. Cookies y Tecnologías de Rastreo'}
            </h2>
            {isEn ? (
              <>
                <p>Our website uses the following cookies and tracking technologies:</p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li><strong>Essential cookies:</strong> required for basic website functionality (session management, language preferences)</li>
                  <li><strong>Google Analytics 4 (GA4):</strong> collects anonymized usage data to help us understand how visitors interact with our site. Data is processed by Google LLC.</li>
                  <li><strong>Meta Pixel:</strong> tracks conversions and enables retargeting advertisements on Facebook and Instagram. Data is processed by Meta Platforms, Inc.</li>
                </ul>
                <p className="mt-3">You can control cookie preferences through your browser settings. Disabling certain cookies may affect website functionality.</p>
              </>
            ) : (
              <>
                <p>Nuestro sitio web utiliza las siguientes cookies y tecnolog&iacute;as de rastreo:</p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li><strong>Cookies esenciales:</strong> necesarias para la funcionalidad b&aacute;sica del sitio (gesti&oacute;n de sesi&oacute;n, preferencias de idioma)</li>
                  <li><strong>Google Analytics 4 (GA4):</strong> recopila datos de uso anonimizados para entender c&oacute;mo interact&uacute;an los visitantes con nuestro sitio. Los datos son procesados por Google LLC.</li>
                  <li><strong>Meta Pixel:</strong> rastrea conversiones y permite anuncios de retargeting en Facebook e Instagram. Los datos son procesados por Meta Platforms, Inc.</li>
                </ul>
                <p className="mt-3">Puede controlar las preferencias de cookies a trav&eacute;s de la configuraci&oacute;n de su navegador. Desactivar ciertas cookies puede afectar la funcionalidad del sitio.</p>
              </>
            )}
          </section>

          {/* 5. Data Sharing */}
          <section>
            <h2 className="font-serif text-2xl text-secondary mb-3">
              {isEn ? '5. Data Sharing & Third Parties' : '5. Transferencia de Datos y Terceros'}
            </h2>
            {isEn ? (
              <>
                <p>We may share your personal data with the following third parties:</p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li><strong>Cloudbeds:</strong> our property management and booking platform, for reservation processing and payment handling</li>
                  <li><strong>WhatsApp (Meta):</strong> when you initiate communication through WhatsApp, your messages and contact information are processed by Meta Platforms</li>
                  <li><strong>Google LLC:</strong> for analytics purposes through GA4</li>
                  <li><strong>Meta Platforms, Inc.:</strong> for advertising and conversion tracking through Meta Pixel</li>
                  <li><strong>Government authorities:</strong> when required by law (e.g., guest registration as required by Mexican immigration regulations)</li>
                </ul>
                <p className="mt-3">We do not sell your personal data to third parties.</p>
              </>
            ) : (
              <>
                <p>Podemos compartir sus datos personales con los siguientes terceros:</p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li><strong>Cloudbeds:</strong> nuestra plataforma de gesti&oacute;n hotelera y reservas, para procesamiento de reservas y pagos</li>
                  <li><strong>WhatsApp (Meta):</strong> cuando usted inicia comunicaci&oacute;n por WhatsApp, sus mensajes e informaci&oacute;n de contacto son procesados por Meta Platforms</li>
                  <li><strong>Google LLC:</strong> para an&aacute;lisis a trav&eacute;s de GA4</li>
                  <li><strong>Meta Platforms, Inc.:</strong> para publicidad y seguimiento de conversiones mediante Meta Pixel</li>
                  <li><strong>Autoridades gubernamentales:</strong> cuando sea requerido por ley (ej. registro de hu&eacute;spedes seg&uacute;n regulaciones migratorias mexicanas)</li>
                </ul>
                <p className="mt-3">No vendemos sus datos personales a terceros.</p>
              </>
            )}
          </section>

          {/* 6. International Transfers */}
          <section>
            <h2 className="font-serif text-2xl text-secondary mb-3">
              {isEn ? '6. International Data Transfers' : '6. Transferencias Internacionales de Datos'}
            </h2>
            {isEn ? (
              <p>
                Some of the third-party services we use (Google, Meta, Cloudbeds) are based in the United States. By using our website and services, you consent to the transfer of your data to countries outside of Mexico. These transfers are conducted with appropriate safeguards in accordance with the LFPDPPP.
              </p>
            ) : (
              <p>
                Algunos de los servicios de terceros que utilizamos (Google, Meta, Cloudbeds) tienen sede en los Estados Unidos. Al utilizar nuestro sitio web y servicios, usted consiente la transferencia de sus datos a pa&iacute;ses fuera de M&eacute;xico. Estas transferencias se realizan con las garant&iacute;as apropiadas conforme a la LFPDPPP.
              </p>
            )}
          </section>

          {/* 7. ARCO Rights */}
          <section>
            <h2 className="font-serif text-2xl text-secondary mb-3">
              {isEn ? '7. Your Rights (ARCO Rights)' : '7. Sus Derechos (Derechos ARCO)'}
            </h2>
            {isEn ? (
              <>
                <p>Under the LFPDPPP, you have the right to:</p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li><strong>Access</strong> your personal data held by us</li>
                  <li><strong>Rectify</strong> inaccurate or incomplete data</li>
                  <li><strong>Cancel</strong> (delete) your data when it is no longer necessary</li>
                  <li><strong>Object</strong> to the processing of your data for specific purposes</li>
                </ul>
                <p className="mt-3">To exercise your ARCO rights, send a request to <a href="mailto:CasaSchuck@gmail.com" className="text-secondary underline">CasaSchuck@gmail.com</a> with the subject line &ldquo;ARCO Rights Request.&rdquo; We will respond within 20 business days as required by law.</p>
              </>
            ) : (
              <>
                <p>Conforme a la LFPDPPP, usted tiene derecho a:</p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li><strong>Acceder</strong> a sus datos personales en nuestra posesi&oacute;n</li>
                  <li><strong>Rectificar</strong> datos inexactos o incompletos</li>
                  <li><strong>Cancelar</strong> (eliminar) sus datos cuando ya no sean necesarios</li>
                  <li><strong>Oponerse</strong> al tratamiento de sus datos para finalidades espec&iacute;ficas</li>
                </ul>
                <p className="mt-3">Para ejercer sus derechos ARCO, env&iacute;e una solicitud a <a href="mailto:CasaSchuck@gmail.com" className="text-secondary underline">CasaSchuck@gmail.com</a> con el asunto &ldquo;Solicitud de Derechos ARCO.&rdquo; Responderemos dentro de 20 d&iacute;as h&aacute;biles conforme a la ley.</p>
              </>
            )}
          </section>

          {/* 8. CCPA */}
          <section>
            <h2 className="font-serif text-2xl text-secondary mb-3">
              {isEn ? '8. California Residents (CCPA)' : '8. Residentes de California (CCPA)'}
            </h2>
            {isEn ? (
              <>
                <p>If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):</p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li>The right to know what personal information we collect, use, and disclose</li>
                  <li>The right to request deletion of your personal information</li>
                  <li>The right to opt out of the sale of personal information (we do not sell personal information)</li>
                  <li>The right to non-discrimination for exercising your privacy rights</li>
                </ul>
                <p className="mt-3">To exercise these rights, contact us at <a href="mailto:CasaSchuck@gmail.com" className="text-secondary underline">CasaSchuck@gmail.com</a>.</p>
              </>
            ) : (
              <>
                <p>Si usted es residente de California, tiene derechos adicionales bajo la Ley de Privacidad del Consumidor de California (CCPA):</p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li>El derecho a saber qu&eacute; informaci&oacute;n personal recopilamos, usamos y divulgamos</li>
                  <li>El derecho a solicitar la eliminaci&oacute;n de su informaci&oacute;n personal</li>
                  <li>El derecho a optar por no participar en la venta de informaci&oacute;n personal (no vendemos informaci&oacute;n personal)</li>
                  <li>El derecho a no ser discriminado por ejercer sus derechos de privacidad</li>
                </ul>
                <p className="mt-3">Para ejercer estos derechos, cont&aacute;ctenos en <a href="mailto:CasaSchuck@gmail.com" className="text-secondary underline">CasaSchuck@gmail.com</a>.</p>
              </>
            )}
          </section>

          {/* 9. Data Retention */}
          <section>
            <h2 className="font-serif text-2xl text-secondary mb-3">
              {isEn ? '9. Data Retention' : '9. Retención de Datos'}
            </h2>
            {isEn ? (
              <p>
                We retain your personal data for as long as necessary to fulfill the purposes described in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Booking and financial records are retained for a minimum of 5 years as required by Mexican tax law. Marketing data is retained until you withdraw your consent.
              </p>
            ) : (
              <p>
                Conservamos sus datos personales durante el tiempo necesario para cumplir con las finalidades descritas en este aviso, cumplir con obligaciones legales, resolver disputas y hacer cumplir nuestros acuerdos. Los registros de reservas y financieros se conservan por un m&iacute;nimo de 5 a&ntilde;os seg&uacute;n la legislaci&oacute;n fiscal mexicana. Los datos de marketing se conservan hasta que usted retire su consentimiento.
              </p>
            )}
          </section>

          {/* 10. Security */}
          <section>
            <h2 className="font-serif text-2xl text-secondary mb-3">
              {isEn ? '10. Data Security' : '10. Seguridad de los Datos'}
            </h2>
            {isEn ? (
              <p>
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. Our website uses SSL/TLS encryption. Payment processing is handled entirely by Cloudbeds, which maintains PCI DSS compliance.
              </p>
            ) : (
              <p>
                Implementamos medidas t&eacute;cnicas y organizativas apropiadas para proteger sus datos personales contra acceso no autorizado, alteraci&oacute;n, divulgaci&oacute;n o destrucci&oacute;n. Nuestro sitio web utiliza cifrado SSL/TLS. El procesamiento de pagos es manejado &iacute;ntegramente por Cloudbeds, que mantiene cumplimiento PCI DSS.
              </p>
            )}
          </section>

          {/* 11. Changes */}
          <section>
            <h2 className="font-serif text-2xl text-secondary mb-3">
              {isEn ? '11. Changes to This Policy' : '11. Cambios a Este Aviso'}
            </h2>
            {isEn ? (
              <p>
                We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
              </p>
            ) : (
              <p>
                Podemos actualizar este aviso de privacidad de vez en cuando. Cualquier cambio ser&aacute; publicado en esta p&aacute;gina con una fecha de revisi&oacute;n actualizada. Le recomendamos revisar este aviso peri&oacute;dicamente.
              </p>
            )}
          </section>

          {/* 12. Contact */}
          <section>
            <h2 className="font-serif text-2xl text-secondary mb-3">
              {isEn ? '12. Contact Us' : '12. Contáctenos'}
            </h2>
            <p>
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
