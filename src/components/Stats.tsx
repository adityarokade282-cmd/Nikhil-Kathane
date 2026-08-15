import { stats } from '../data';
import { useCountUp } from '../hooks';

function Counter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { value: v, ref } = useCountUp(value);
  return (
    <div className="text-center">
      <span ref={ref} className="font-display text-5xl font-bold text-gold-500 sm:text-6xl">
        {v}
        {suffix}
      </span>
      <p className="mt-2 text-sm uppercase tracking-wider text-white/70">{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20">
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center opacity-15"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      />
      <div className="absolute inset-0 bg-navy-900/70" />
      <div className="container-luxe relative">
        <div className="reveal grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((s) => (
            <Counter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
