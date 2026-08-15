import { useEffect, useState } from 'react';
import { ArrowUp, Phone, MessageCircle } from 'lucide-react';
import { WHATSAPP, PHONE_INTL } from '../data';

export default function FloatingButtons() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* WhatsApp - always visible, desktop right side */}
      <a
        href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
          "Hello NIKHIL KATHANE, I'd like to discuss an interior design project."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-luxe transition-transform hover:scale-110"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-20" />
        <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-lg bg-navy-700 px-3 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
          Chat with us
        </span>
      </a>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        className={`fixed bottom-24 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-navy-700 text-white shadow-luxe transition-all duration-300 hover:bg-gold-500 hover:text-navy-900 ${
          show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      {/* Sticky call button - mobile only */}
      <a
        href={`tel:${PHONE_INTL}`}
        aria-label="Call now"
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 rounded-full bg-gold-gradient px-5 py-3 text-sm font-semibold text-navy-900 shadow-luxe-gold md:hidden"
      >
        <Phone className="h-4 w-4" />
        Call Now
      </a>
    </>
  );
}
