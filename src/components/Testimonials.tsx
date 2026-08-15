import { useEffect, useState } from 'react';
import { testimonials } from '../data';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % count), 6000);
    return () => clearInterval(t);
  }, [paused, count]);

  const go = (n: number) => setIdx((i) => (i + n + count) % count);
  const t = testimonials[idx];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white py-24 md:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-gold-500/5 blur-3xl" />
      <div className="absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-navy-100/40 blur-3xl" />

      <div className="container-luxe relative">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-eyebrow justify-center">
            <span className="h-px w-10 bg-gold-500" />
            Client Love
            <span className="h-px w-10 bg-gold-500" />
          </span>
          <h2 className="mt-5 font-display text-3xl text-navy-700 text-balance sm:text-4xl md:text-5xl">
            What Our <span className="text-gold-600">Clients Say</span>
          </h2>
        </div>

        <div className="reveal relative mx-auto mt-14 max-w-3xl">
          <Quote className="mx-auto h-12 w-12 text-gold-500/40" />

          <div className="relative mt-6 min-h-[260px] sm:min-h-[220px]">
            {testimonials.map((item, i) => (
              <blockquote
                key={item.name}
                className={`absolute inset-0 transition-all duration-700 ${
                  i === idx
                    ? 'translate-y-0 opacity-100'
                    : 'pointer-events-none translate-y-4 opacity-0'
                }`}
              >
                <div className="mb-5 flex justify-center gap-1">
                  {Array.from({ length: item.rating }).map((_, s) => (
                    <Star key={s} className="h-5 w-5 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-ink/80 sm:text-xl">
                  "{item.feedback}"
                </p>
                <div className="mt-8 flex flex-col items-center gap-3">
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    className="h-16 w-16 rounded-full object-cover ring-2 ring-gold-500 ring-offset-2"
                  />
                  <div className="text-center">
                    <p className="font-display text-lg font-semibold text-navy-700">
                      {item.name}
                    </p>
                    <p className="text-sm text-gold-600">{item.role}</p>
                  </div>
                </div>
              </blockquote>
            ))}
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-200 text-navy-700 transition-all hover:bg-navy-700 hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === idx ? 'w-8 bg-gold-500' : 'w-2 bg-navy-200'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-200 text-navy-700 transition-all hover:bg-navy-700 hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
