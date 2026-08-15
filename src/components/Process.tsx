import { process, icons } from '../data';

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="container-luxe">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-eyebrow justify-center">
            <span className="h-px w-10 bg-gold-500" />
            How We Work
            <span className="h-px w-10 bg-gold-500" />
          </span>
          <h2 className="mt-5 font-display text-3xl text-navy-700 text-balance sm:text-4xl md:text-5xl">
            Our Design <span className="text-gold-600">Process</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/70">
            A clear, collaborative journey from first conversation to final handover.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-gold-500/0 via-gold-500/40 to-gold-500/0 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-6 md:space-y-10">
            {process.map((p, i) => {
              const Icon = icons[p.icon as keyof typeof icons];
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={p.step}
                  className="reveal relative grid grid-cols-[48px_1fr] items-center gap-5 md:grid-cols-[1fr_64px_1fr] md:gap-8"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {/* Left card (desktop, even steps) */}
                  <div className={`hidden md:block ${isLeft ? 'md:text-right' : ''}`}>
                    {isLeft && <Card step={p.step} title={p.title} desc={p.desc} align="right" />}
                  </div>

                  {/* Node */}
                  <div className="relative z-10 flex justify-start md:justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-700 text-gold-500 shadow-luxe ring-4 ring-cream md:h-14 md:w-14">
                      <Icon className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                  </div>

                  {/* Mobile card + desktop right card (odd steps) */}
                  <div>
                    <div className="md:hidden">
                      <Card step={p.step} title={p.title} desc={p.desc} align="left" />
                    </div>
                    <div className="hidden md:block">
                      {!isLeft && <Card step={p.step} title={p.title} desc={p.desc} align="left" />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({
  step,
  title,
  desc,
  align,
}: {
  step: string;
  title: string;
  desc: string;
  align: 'left' | 'right';
}) {
  return (
    <div
      className={`group inline-block rounded-2xl border border-navy-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-luxe ${
        align === 'right' ? 'text-right' : 'text-left'
      }`}
    >
      <span className="font-display text-sm font-bold tracking-widest text-gold-600">
        STEP {step}
      </span>
      <h3 className="mt-1 font-display text-xl font-semibold text-navy-700">{title}</h3>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/70">{desc}</p>
    </div>
  );
}
