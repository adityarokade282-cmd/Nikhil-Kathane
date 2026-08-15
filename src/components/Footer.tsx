import { Phone, MapPin, ArrowUp, ChevronRight } from 'lucide-react';
import { BUSINESS, PHONE, PHONE_INTL, ADDRESS, navLinks, services, icons } from '../data';

export default function Footer() {
  const year = new Date().getFullYear();
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const handleNav = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative overflow-hidden bg-navy-900 text-white">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
        backgroundSize: '50px 50px',
      }} />

      <div className="container-luxe relative py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-2xl font-bold">
              NIKHIL <span className="text-gold-500">KATHANE</span>
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              Transforming spaces into timeless masterpieces through premium interior
              design, craftsmanship, and personalized service.
            </p>
            <div className="mt-6 flex gap-3">
              {['Facebook', 'Instagram', 'Pinterest'].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:border-gold-500 hover:bg-gold-500 hover:text-navy-900"
                >
                  <span className="text-xs font-semibold">{s[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-gold-500">Quick Links</h4>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => handleNav(l.href)}
                    className="group flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-gold-500"
                  >
                    <ChevronRight className="h-3 w-3 text-gold-600 transition-transform group-hover:translate-x-1" />
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold text-gold-500">Services</h4>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 7).map((s) => {
                const Icon = icons[s.icon as keyof typeof icons];
                return (
                  <li key={s.title}>
                    <button
                      onClick={() => handleNav('#services')}
                      className="group flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-gold-500"
                    >
                      <Icon className="h-3.5 w-3.5 text-gold-600" />
                      {s.title}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-gold-500">Contact</h4>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                <a href={`tel:${PHONE_INTL}`} className="text-sm text-white/70 hover:text-gold-500">
                  {PHONE}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                <span className="text-sm text-white/70">{ADDRESS}</span>
              </li>
            </ul>
            <button
              onClick={() => handleNav('#contact')}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold-500/40 px-5 py-2.5 text-xs font-semibold text-gold-500 transition-all hover:bg-gold-500 hover:text-navy-900"
            >
              Get Free Consultation
            </button>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-center text-xs text-white/50 sm:text-left">
            © {year} {BUSINESS}. All Rights Reserved.
          </p>
          <button
            onClick={scrollTop}
            className="flex items-center gap-2 text-xs text-white/50 transition-colors hover:text-gold-500"
          >
            Back to top
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20">
              <ArrowUp className="h-3 w-3" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
