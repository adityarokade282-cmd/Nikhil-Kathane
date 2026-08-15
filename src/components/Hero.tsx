import { ChevronRight, PlayCircle } from 'lucide-react';
import { useRipple } from '../hooks';

export default function Hero() {
  const ripple = useRipple();
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-800/80 to-navy-700/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-transparent to-navy-900/40" />

      {/* Floating decorative elements */}
      <div className="absolute right-10 top-1/4 h-40 w-40 rounded-full border border-gold-500/20 animate-float" />
      <div
        className="absolute right-1/3 bottom-20 h-24 w-24 rounded-full border border-gold-500/30 animate-float"
        style={{ animationDelay: '2s' }}
      />
      <div className="absolute left-10 top-1/3 h-2 w-2 rounded-full bg-gold-500 animate-float" />

      <div className="container-luxe relative z-10 pt-28 pb-20">
        <div className="max-w-3xl">
          <span className="section-eyebrow text-gold-400 opacity-0 animate-[fadeIn_0.8s_ease-out_0.2s_forwards]">
            <span className="h-px w-10 bg-gold-500" />
            Premium Interior Design Studio
          </span>

          <h1 className="mt-6 font-display text-4xl leading-tight text-white text-balance opacity-0 animate-[slideUp_0.9s_ease-out_0.4s_forwards] sm:text-5xl md:text-6xl lg:text-7xl">
            Transforming Spaces into{' '}
            <span className="relative inline-block text-gold-500">
              Timeless Masterpieces
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9C70 3 230 3 298 9"
                  stroke="#C8A165"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/80 opacity-0 animate-[slideUp_0.9s_ease-out_0.6s_forwards] sm:text-lg">
            We create elegant, functional, and inspiring interiors for homes, offices,
            commercial spaces, and luxury projects.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 opacity-0 animate-[slideUp_0.9s_ease-out_0.8s_forwards]">
            <button onClick={(e) => { ripple(e); scrollTo('#contact'); }} className="btn-gold">
              Get Free Consultation
              <ChevronRight className="h-4 w-4" />
            </button>
            <button onClick={() => scrollTo('#projects')} className="btn-outline">
              <PlayCircle className="h-4 w-4" />
              View Our Projects
            </button>
          </div>

          {/* Trust badges */}
          <div className="mt-16 flex flex-wrap gap-x-12 gap-y-6 opacity-0 animate-[slideUp_0.9s_ease-out_1s_forwards]">
            {[
              ['8+', 'Years Experience'],
              ['250+', 'Projects Delivered'],
              ['180+', 'Happy Clients'],
            ].map(([n, l]) => (
              <div key={l} className="flex items-center gap-3">
                <span className="font-display text-3xl text-gold-500">{n}</span>
                <span className="max-w-[100px] text-xs uppercase tracking-wider text-white/60">
                  {l}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-[fadeIn_1s_ease-out_1.4s_forwards]">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/40 pt-2">
          <span className="h-2 w-1 animate-bounce rounded-full bg-gold-500" />
        </div>
      </div>
    </section>
  );
}
