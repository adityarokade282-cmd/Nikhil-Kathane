import { CheckCircle2, Target, Eye } from 'lucide-react';

const highlights = [
  'Premium material sourcing',
  'Bespoke furniture design',
  'End-to-end project management',
  'Sustainable design practices',
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="container-luxe">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="reveal relative">
            <div className="img-zoom relative overflow-hidden rounded-3xl shadow-luxe">
              <img
                src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Luxury interior designed by NIKHIL KATHANE"
                loading="lazy"
                className="h-[480px] w-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-2 flex items-center gap-4 rounded-2xl bg-white p-5 shadow-luxe sm:-right-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-gradient font-display text-2xl font-bold text-navy-900">
                8+
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-navy-700">Years of</p>
                <p className="text-sm text-ink/70">Design Excellence</p>
              </div>
            </div>
            {/* Decorative frame */}
            <div className="absolute -left-4 -top-4 -z-10 h-32 w-32 rounded-3xl border border-gold-500/40" />
          </div>

          {/* Content */}
          <div className="reveal">
            <span className="section-eyebrow">
              <span className="h-px w-10 bg-gold-500" />
              About Us
            </span>
            <h2 className="mt-5 font-display text-3xl text-navy-700 text-balance sm:text-4xl md:text-5xl">
              About <span className="text-gold-600">NIKHIL KATHANE</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink/75">
              We specialize in creating beautiful interiors that blend creativity, comfort,
              and functionality. Every project is designed with attention to detail, premium
              materials, and modern aesthetics to bring our clients' vision to life.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((h) => (
                <div key={h} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-gold-600" />
                  <span className="text-sm text-ink/80">{h}</span>
                </div>
              ))}
            </div>

            {/* Mission & Vision */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-luxe">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-navy-700 text-white">
                  <Target className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-semibold text-navy-700">Our Mission</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  To craft interiors that elevate everyday living — blending form, function,
                  and emotion into spaces people love.
                </p>
              </div>
              <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-luxe">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gold-gradient text-navy-900">
                  <Eye className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-semibold text-navy-700">Our Vision</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  To be the most trusted interior design studio in the region, known for
                  timeless design and uncompromising quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
