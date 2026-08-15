import { useState } from 'react';
import { projects, projectCategories } from '../data';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Projects() {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active);

  const categories = ['All', ...projectCategories];

  const closeLightbox = () => setLightbox(null);
  const next = () => setLightbox((i) => (i === null ? null : (i + 1) % filtered.length));
  const prev = () =>
    setLightbox((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));

  return (
    <section id="projects" className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="container-luxe">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-eyebrow justify-center">
            <span className="h-px w-10 bg-gold-500" />
            Our Portfolio
            <span className="h-px w-10 bg-gold-500" />
          </span>
          <h2 className="mt-5 font-display text-3xl text-navy-700 text-balance sm:text-4xl md:text-5xl">
            Project <span className="text-gold-600">Gallery</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/70">
            A curated selection of our recent interior projects across residential and
            commercial spaces.
          </p>
        </div>

        {/* Filters */}
        <div className="reveal mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                active === c
                  ? 'bg-navy-700 text-white shadow-luxe'
                  : 'bg-white text-navy-700 hover:bg-navy-100'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {filtered.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setLightbox(i)}
              className="reveal group relative block w-full break-inside-avoid overflow-hidden rounded-2xl shadow-soft"
              style={{ transitionDelay: `${(i % 6) * 60}ms` }}
            >
              <div className="img-zoom">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="w-full object-cover"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="text-xs font-semibold uppercase tracking-wider text-gold-400">
                  {p.category}
                </span>
                <h3 className="mt-1 font-display text-xl text-white">{p.title}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-navy-900/95 p-4 backdrop-blur-md"
          onClick={closeLightbox}
        >
          <button
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-navy-700"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-navy-700 sm:left-8"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <figure
            className="max-h-[85vh] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filtered[lightbox].img}
              alt={filtered[lightbox].title}
              className="max-h-[78vh] w-full rounded-2xl object-contain"
            />
            <figcaption className="mt-4 text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-gold-400">
                {filtered[lightbox].category}
              </span>
              <p className="mt-1 font-display text-xl text-white">
                {filtered[lightbox].title}
              </p>
            </figcaption>
          </figure>
          <button
            className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-navy-700 sm:right-8"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
}
