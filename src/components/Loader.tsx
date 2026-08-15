import { useEffect, useState } from 'react';

export default function Loader() {
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setDone(true), 1400);
    const t2 = setTimeout(() => setHidden(true), 2100);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-700 transition-opacity duration-700 ${
        done ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="loader-grid mb-8">
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>
      <p className="font-display text-2xl tracking-[0.3em] text-white">
        NIKHIL <span className="text-gold-500">KATHANE</span>
      </p>
      <p className="mt-3 text-[10px] uppercase tracking-[0.4em] text-gold-500/80">
        Interior Design Studio
      </p>
    </div>
  );
}
