import { services, icons } from '../data';

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="container-luxe">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-eyebrow justify-center">
            <span className="h-px w-10 bg-gold-500" />
            What We Offer
            <span className="h-px w-10 bg-gold-500" />
          </span>
          <h2 className="mt-5 font-display text-3xl text-navy-700 text-balance sm:text-4xl md:text-5xl">
            Our Premium <span className="text-gold-600">Services</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/70">
            A full-spectrum interior design practice — from concept to completion, we deliver
            spaces that are as functional as they are beautiful.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.icon as keyof typeof icons];
            return (
              <article
                key={s.title}
                className="reveal group relative overflow-hidden rounded-2xl border border-navy-100 bg-cream p-7 transition-all duration-500 hover:-translate-y-2 hover:border-gold-300 hover:bg-white hover:shadow-luxe"
                style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              >
                {/* Decorative corner */}
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gold-500/5 transition-transform duration-500 group-hover:scale-150" />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-700 text-gold-500 transition-all duration-500 group-hover:bg-gold-gradient group-hover:text-navy-900">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-navy-700">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{s.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-gold-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Learn more
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
