import { useRipple } from '../hooks';
import { ChevronRight } from 'lucide-react';

export default function CTA() {
  const ripple = useRipple();
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      />
      <div className="absolute inset-0 bg-navy-900/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-transparent" />

      <div className="container-luxe relative py-24 md:py-32">
        <div className="reveal max-w-2xl">
          <span className="section-eyebrow text-gold-400">
            <span className="h-px w-10 bg-gold-500" />
            Let's Begin
          </span>
          <h2 className="mt-5 font-display text-3xl text-white text-balance sm:text-4xl md:text-5xl lg:text-6xl">
            Ready to Design Your <span className="text-gold-500">Dream Space?</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Book a free consultation today and take the first step toward an interior that
            tells your story. No obligation — just a conversation about possibilities.
          </p>
          <button
            onClick={(e) => {
              ripple(e);
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-gold mt-8"
          >
            Book Free Consultation
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
