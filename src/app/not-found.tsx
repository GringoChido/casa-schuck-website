import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  const links = [
    { href: '/en', label: 'Home' },
    { href: '/en/suites', label: 'Rooms' },
    { href: '/en/weddings', label: 'Weddings' },
    { href: '/en/story', label: 'Our Story' },
  ];

  return (
    <html lang="en">
      <body className="bg-[#F7F2EC] text-[#1C1917] antialiased">
        <main className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-2xl w-full text-center">
            <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden mb-10">
              <Image
                src="/images/common/garden.jpg"
                alt="Garden at Casa Schuck"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-8xl sm:text-9xl text-white/90 tracking-tight">
                  404
                </span>
              </div>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl text-[#1C1917] mb-4 tracking-[0.04em]">
              This path doesn&rsquo;t lead anywhere
            </h1>
            <p className="text-[#1C1917]/60 text-lg mb-10 leading-relaxed">
              But these do &mdash; let us help you find your way.
            </p>

            <nav className="flex flex-wrap justify-center gap-4">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="inline-block bg-[#1C1917] text-white px-8 py-3 text-[11px] font-bold
                             tracking-[0.15em] uppercase transition-colors duration-300
                             hover:bg-[#BF754B] min-h-[44px] flex items-center"
                >
                  {label}
                </Link>
              ))}
            </nav>

            <p className="mt-12 text-[#1C1917]/40 text-sm">
              Casa Schuck &middot; San Miguel de Allende
            </p>
          </div>
        </main>
      </body>
    </html>
  );
}
