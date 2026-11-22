import React, { useState } from 'react';
import {
  CheckCircle2,
  ExternalLink,
  MapPin,
  MessageCircle,
  Phone,
  UtensilsCrossed,
} from 'lucide-react';
import {
  RESTAURANT_IMAGES,
  RESTAURANT_INFO,
  buildWhatsAppOrderUrl,
} from '../data/meals';
import { PageHero } from '../components/PageHero';

interface FormErrors {
  name?: string;
  phone?: string;
  message?: string;
}

export function ContactPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!name.trim()) {
      nextErrors.name = 'Please enter your name.';
    }
    if (!phone.trim()) {
      nextErrors.phone = 'Please enter your phone number or WhatsApp contact.';
    }
    if (!message.trim() || message.trim().length < 6) {
      nextErrors.message = 'Please enter your meal enquiry or message (at least 6 characters).';
    }
    return nextErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmittedMessage(null);
      return;
    }

    const composed = `Hello Easi Mark Kitchen,\nName: ${name.trim()}\nPhone: ${phone.trim()}\nMessage: ${message.trim()}`;
    setErrors({});
    setSubmittedMessage(composed);
    setName('');
    setPhone('');
    setMessage('');
  };

  return (
    <div>
      <PageHero
        eyebrow="Location & Contact"
        title="Visit or Contact Easi Mark Kitchen"
        subtitle="Find us in Ugbowo, Benin City—or reach out directly by phone or WhatsApp for meal availability and orders."
        image={RESTAURANT_IMAGES.hero}
        imageAlt="Plate of Nigerian Jollof Rice served with fried chicken"
      />

      <section className="py-16 sm:py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left: Contact Info & Map */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#B91C1C]">
                  Ugbowo · Benin City
                </p>
                <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold text-[#1C1917]">
                  Easi Mark Kitchen
                </h2>
                <p className="mt-3 text-sm text-[#57534E] leading-relaxed">
                  Stop by our restaurant off BDPA Street (behind Nadia Bakery) or call / message us
                  on WhatsApp to confirm meal availability, current Naira (₦) prices, and pickup or
                  order arrangements.
                </p>
              </div>

              <div className="space-y-5 pt-4 border-t border-[#5A0B1E]/12">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#5A0B1E] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-[#1C1917]">Address</h3>
                    <p className="mt-0.5 text-sm text-[#57534E] leading-relaxed">
                      {RESTAURANT_INFO.address}
                    </p>
                    <a
                      href={RESTAURANT_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-[#15803D] hover:underline"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[#5A0B1E] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-[#1C1917]">
                      Phone &amp; WhatsApp
                    </h3>
                    <p className="mt-0.5 text-sm text-[#57534E] tabular-nums">
                      <a
                        href={RESTAURANT_INFO.phoneTel}
                        className="font-semibold text-[#5A0B1E] hover:underline"
                      >
                        {RESTAURANT_INFO.phoneDisplay}
                      </a>
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2.5">
                      <a
                        href={buildWhatsAppOrderUrl(
                          'Hello Easi Mark Kitchen, I would like to ask about today’s meals.'
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#15803D] hover:bg-[#166534] text-white text-xs font-semibold transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Message on WhatsApp</span>
                      </a>
                      <a
                        href={RESTAURANT_INFO.phoneTel}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#5A0B1E] hover:bg-[#731129] text-white text-xs font-semibold transition-colors tabular-nums"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call {RESTAURANT_INFO.phoneDisplay}</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <UtensilsCrossed className="w-5 h-5 text-[#5A0B1E] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-[#1C1917]">Services</h3>
                    <p className="mt-0.5 text-sm text-[#57534E]">
                      Nigerian Restaurant &amp; Food Services · Dine-in, Takeaway &amp; WhatsApp
                      Meal Inquiries
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Enquiry Form with direct WhatsApp handoff */}
            <div className="lg:col-span-7 bg-[#FFFFFF] rounded-xl border border-[#5A0B1E]/12 p-6 sm:p-8 lg:p-10">
              <h2 className="font-display text-2xl font-semibold text-[#1C1917]">
                Send a Meal or Order Enquiry
              </h2>
              <p className="mt-2 text-sm text-[#57534E]">
                Fill in your details below to prepare a message for Easi Mark Kitchen, then launch
                WhatsApp to send it directly to{' '}
                <span className="tabular-nums font-medium text-[#1C1917]">
                  {RESTAURANT_INFO.phoneDisplay}
                </span>
                .
              </p>

              {submittedMessage && (
                <div
                  role="status"
                  className="mt-6 rounded-lg bg-[#15803D]/8 border border-[#15803D]/25 p-4 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#15803D] shrink-0 mt-0.5" />
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-[#15803D]">
                      Your enquiry is ready to send
                    </p>
                    <p className="text-sm text-[#57534E]">
                      Click below to send this message directly via WhatsApp, or call{' '}
                      <a
                        href={RESTAURANT_INFO.phoneTel}
                        className="font-semibold text-[#5A0B1E] underline tabular-nums"
                      >
                        {RESTAURANT_INFO.phoneDisplay}
                      </a>
                      .
                    </p>
                    <a
                      href={buildWhatsAppOrderUrl(submittedMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#15803D] hover:bg-[#166534] text-white text-xs font-semibold transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Send via WhatsApp Now</span>
                    </a>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-[#1C1917]"
                  >
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g., Osas Eghosa"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                    className="mt-1.5 w-full rounded-lg border border-[#1C1917]/15 bg-[#FAF7F2] px-4 py-2.5 text-sm text-[#1C1917] placeholder:text-[#57534E]/60 focus:outline-none focus:ring-2 focus:ring-[#5A0B1E]"
                  />
                  {errors.name && (
                    <p id="contact-name-error" className="mt-1.5 text-xs text-[#B91C1C]">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-sm font-medium text-[#1C1917]"
                  >
                    Phone / WhatsApp Number
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g., 0803 000 0000"
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                    className="mt-1.5 w-full rounded-lg border border-[#1C1917]/15 bg-[#FAF7F2] px-4 py-2.5 text-sm text-[#1C1917] placeholder:text-[#57534E]/60 focus:outline-none focus:ring-2 focus:ring-[#5A0B1E]"
                  />
                  {errors.phone && (
                    <p id="contact-phone-error" className="mt-1.5 text-xs text-[#B91C1C]">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-[#1C1917]"
                  >
                    Enquiry or Meal Request
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Let us know which meals you are asking about (e.g., Jollof Rice & Chicken, Black Soup & Semovita)..."
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                    className="mt-1.5 w-full rounded-lg border border-[#1C1917]/15 bg-[#FAF7F2] px-4 py-2.5 text-sm text-[#1C1917] placeholder:text-[#57534E]/60 focus:outline-none focus:ring-2 focus:ring-[#5A0B1E]"
                  />
                  {errors.message && (
                    <p id="contact-message-error" className="mt-1.5 text-xs text-[#B91C1C]">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#5A0B1E] hover:bg-[#731129] text-[#FAF7F2] text-sm font-medium transition-colors cursor-pointer"
                >
                  Prepare Enquiry Message
                </button>
              </form>
            </div>
          </div>

          {/* Embedded Google Map for Ugbowo / BDPA Street */}
          <div className="mt-14 bg-[#FFFFFF] rounded-xl border border-[#5A0B1E]/12 overflow-hidden">
            <div className="px-6 py-4 border-b border-[#1C1917]/8 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="font-display text-lg font-semibold text-[#1C1917]">
                  Map: BDPA Street, Isihor, Ugbowo, Benin City
                </h3>
                <p className="text-xs text-[#57534E]">{RESTAURANT_INFO.address}</p>
              </div>
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5A0B1E] hover:text-[#B91C1C]"
              >
                <span>Open Full Map</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="aspect-[16/9] sm:aspect-[21/9] w-full bg-[#F4EFE8]">
              <iframe
                title="Map showing BDPA Street, Isihor, Ugbowo, Benin City, Nigeria"
                src={RESTAURANT_INFO.googleMapsEmbedUrl}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
