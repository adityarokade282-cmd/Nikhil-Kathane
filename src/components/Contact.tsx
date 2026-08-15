import { useState } from 'react';
import { Phone, MapPin, Mail, Send, CheckCircle2, User, MessageCircle } from 'lucide-react';
import { BUSINESS, PHONE, PHONE_INTL, ADDRESS, projectTypes } from '../data';
import { supabase } from '../supabase';
import { useRipple } from '../hooks';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const ripple = useRipple();
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    project_type: projectTypes[0],
    message: '',
  });

  const update = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');
    try {
      const { error } = await supabase.from('inquiries').insert({
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        project_type: form.project_type,
        message: form.message.trim(),
      });
      if (error) throw error;
      setStatus('success');
      setForm({
        name: '',
        phone: '',
        email: '',
        project_type: projectTypes[0],
        message: '',
      });
      setTimeout(() => setStatus('idle'), 6000);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  const contactCards = [
    {
      icon: Phone,
      label: 'Call Us',
      value: PHONE,
      href: `tel:${PHONE_INTL}`,
    },
    {
      icon: Mail,
      label: 'Email Us',
      value: 'hello@nikhilkathane.com',
      href: 'mailto:hello@nikhilkathane.com',
    },
    {
      icon: MapPin,
      label: 'Visit Us',
      value: ADDRESS,
      href: '#map',
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="container-luxe">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-eyebrow justify-center">
            <span className="h-px w-10 bg-gold-500" />
            Get In Touch
            <span className="h-px w-10 bg-gold-500" />
          </span>
          <h2 className="mt-5 font-display text-3xl text-navy-700 text-balance sm:text-4xl md:text-5xl">
            Let's Create Something <span className="text-gold-600">Beautiful</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/70">
            Share your project details and we'll get back to you within 24 hours with
            tailored ideas for your space.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          {/* Contact info */}
          <div className="reveal lg:col-span-2">
            <div className="rounded-3xl bg-navy-gradient p-8 text-white shadow-luxe">
              <h3 className="font-display text-2xl font-semibold">{BUSINESS}</h3>
              <p className="mt-2 text-sm text-white/70">
                Premium Interior Design Studio
              </p>

              <div className="mt-8 space-y-5">
                {contactCards.map((c) => {
                  const Icon = c.icon;
                  return (
                    <a
                      key={c.label}
                      href={c.href}
                      className="group flex items-start gap-4 transition-transform hover:translate-x-1"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-gradient text-navy-900">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-gold-400">
                          {c.label}
                        </p>
                        <p className="mt-0.5 text-sm text-white/90">{c.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-xs uppercase tracking-wider text-gold-400">
                  Working Hours
                </p>
                <p className="mt-1 text-sm text-white/80">Mon – Sat: 9:00 AM – 7:00 PM</p>
                <p className="text-sm text-white/80">Sunday: By Appointment</p>
              </div>

              <a
                href={`https://wa.me/919405950170?text=${encodeURIComponent(
                  "Hello NIKHIL KATHANE, I'd like to discuss an interior design project."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="reveal lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-navy-100 bg-white p-8 shadow-soft"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" icon={User}>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    placeholder="Your name"
                    className="input"
                  />
                </Field>
                <Field label="Phone Number" icon={Phone}>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    placeholder="Your phone"
                    className="input"
                  />
                </Field>
                <Field label="Email Address" icon={Mail}>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    placeholder="you@example.com"
                    className="input"
                  />
                </Field>
                <Field label="Project Type">
                  <select
                    value={form.project_type}
                    onChange={(e) => update('project_type', e.target.value)}
                    className="input"
                  >
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium text-navy-700">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  placeholder="Tell us about your project, space, budget, and timeline..."
                  className="input resize-none"
                />
              </div>

              <button
                type="submit"
                onClick={ripple}
                disabled={status === 'loading'}
                className="btn-gold mt-6 w-full disabled:opacity-70"
              >
                {status === 'loading' ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-navy-900 border-t-transparent" />
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="mt-4 text-center text-sm text-green-700">
                  Thank you! We'll be in touch within 24 hours.
                </p>
              )}
              {status === 'error' && (
                <p className="mt-4 text-center text-sm text-red-600">
                  Something went wrong. Please try again or call us directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid #e3ebf4;
          background: #f8f8f8;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          color: #202020;
          transition: all 0.2s ease;
          outline: none;
        }
        .input:focus {
          border-color: #C8A165;
          background: #fff;
          box-shadow: 0 0 0 4px rgba(200, 161, 101, 0.12);
        }
        .input::placeholder { color: #94a3b8; }
      `}</style>
    </section>
  );
}

function Field({
  label,
  icon: Icon,
  children,
}: {
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 flex items-center gap-1.5 text-sm font-medium text-navy-700">
        {Icon && <Icon className="h-4 w-4 text-gold-600" />}
        {label}
      </label>
      {children}
    </div>
  );
}
