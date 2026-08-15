export default function MapSection() {
  return (
    <section id="map" className="relative">
      <div className="container-luxe pb-4">
        <div className="reveal flex items-center gap-3 text-sm text-ink/60">
          <span className="h-px w-8 bg-gold-500" />
          Find us on the map
        </div>
      </div>
      <div className="reveal h-[420px] w-full overflow-hidden border-t border-navy-100">
        <iframe
          title="NIKHIL KATHANE location map"
          src="https://www.google.com/maps?q=45HG%2BV4R%2C%20Dongargaon%2C%20Maharashtra%20441807&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
}
