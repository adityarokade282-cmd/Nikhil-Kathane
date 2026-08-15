import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, BUSINESS, PHONE_INTL } from '../data';
import { useRipple } from '../hooks';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const ripple = useRipple();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-700/95 py-3 shadow-luxe backdrop-blur-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-luxe flex items-center justify-between">
        <button
          onClick={() => handleNav('#home')}
          className="font-display text-lg font-bold tracking-wider text-white sm:text-xl"
        >
          NIKHIL <span className="text-gold-500">KATHANE</span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="group relative text-sm font-medium text-white/90 transition-colors hover:text-gold-500"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-500 transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={(e) => {
              ripple(e);
              handleNav('#contact');
            }}
            className="btn-gold hidden sm:inline-flex"
          >
            Get Free Consultation
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 top-0 z-40 bg-navy-700/98 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-2 px-8">
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`py-3 font-display text-2xl text-white transition-all duration-300 hover:text-gold-500 ${
                open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: open ? `${i * 60}ms` : '0ms' }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contact')}
            className="btn-gold mt-6"
          >
            Get Free Consultation
          </button>
          <a href={`tel:${PHONE_INTL}`} className="mt-4 text-sm text-white/70">
            {BUSINESS}
          </a>
        </div>
      </div>
    </header>
  );
}
