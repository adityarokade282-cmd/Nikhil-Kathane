import { whyChoose, icons } from '../data';

export default function WhyChooseUs() {
  return (
    <section id="why" className="relative overflow-hidden bg-navy-gradient py-24 text-white md:py-32">
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Floating orbs */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-navy-400/20 blur-3xl" />

      <div className="container-luxe relative">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-eyebrow justify-center text-gold-400">
            <span className="h-px w-10 bg-gold-500" />
            Why Choose Us
            <span className="h-px w-10 bg-gold-500" />
          </span>
          <h2 className="mt-5 font-display text-3xl text-white text-balance sm:text-4xl md:text-5xl">
            The <span className="text-gold-500">Difference</span> Is in the Details
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/70">
            We combine design sensibility with disciplined delivery — the reasons clients
            trust us with their most important spaces.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChoose.map((w, i) => {
            const Icon = icons[w.icon as keyof typeof icons];
            return (
              <div
                key={w.title}
                className="reveal group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-gold-500/40 hover:bg-white/10"
                style={{ transitionDelay: `${(i % 4) * 80}ms` }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-gradient text-navy-900 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{w.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
