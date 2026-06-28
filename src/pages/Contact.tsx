import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

type FormState = { name: string; email: string; phone: string; service: string; message: string };

const SERVICES = [
  "Logistics Services",
  "Manpower",
  "Picker/Packer",
  "Security Guards",
  "Community Maintenance",
  "Housekeeping",
  "Other",
];
const ENQUIRY_EMAIL = "ssekompally@gmail.com";

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${ENQUIRY_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email || "Not provided",
          service: form.service,
          message: form.message || "No additional message provided.",
          _subject: `New Enquiry - ${form.service}`,
          _template: "table",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send enquiry");
      }

      setSubmitted(true);
    } catch {
      setSubmitError("Unable to send enquiry right now. Please try again in a moment.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-red-700 via-blue-700 to-green-700 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
        <p className="text-gray-300 max-w-xl mx-auto">
          Reach out for a free quote or any enquiries. We respond within 24 hours.
        </p>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-red-50 via-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <div className="space-y-5">
              <div className="ui-card p-4 flex items-start gap-4">
                <div className="brand-icon-chip size-10 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="size-5 text-blue-700" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Phone</div>
                  <a
                    href="https://wa.me/917670963423"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-gray-500 text-sm hover:underline"
                  >
                    +91 76709 63423
                  </a>
                </div>
              </div>
              <div className="ui-card p-4 flex items-start gap-4">
                <div className="brand-icon-chip size-10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="size-5 text-blue-700" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <a href="mailto:ssekompally@gmail.com" className="text-gray-500 text-sm hover:underline">
                    ssekompally@gmail.com
                  </a>
                </div>
              </div>
              <div className="ui-card p-4 flex items-start gap-4">
                <div className="brand-icon-chip size-10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="size-5 text-blue-700" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Address</div>
                  <a
                    href="https://maps.google.com/?q=H.No+2-28,+Muneerabad+Village,+Muneerabad,+Medchal-Malkajgiri,+Hyd,+Telangana-501401"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-blue-600 text-sm hover:underline font-medium"
                  >
                    H.No: 2-28, Muneerabad Village, Muneerabad,<br />
                    Medchal-Malkajgiri, Hyd,<br />
                    Telangana-501401.
                  </a>
                </div>
              </div>
              <div className="ui-card p-4 flex items-start gap-4">
                <div className="brand-icon-chip size-10 rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="size-5 text-blue-700" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Working Hours</div>
                  <div className="text-gray-500 text-sm">Mon – Sat: 8 AM – 8 PM</div>
                  <div className="text-gray-500 text-sm">Emergency support: 24/7</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="brand-soft-panel rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-10">
                <div className="size-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="size-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Thank you!</h3>
                <p className="text-gray-500 text-sm">Your enquiry has been sent successfully. We will contact you within 24 hours.</p>
                <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", service: "", message: "" }); }} className="brand-accent-text mt-6 text-sm hover:underline">
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Request a Free Quote</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Full Name *</label>
                    <input required className="brand-focus-ring w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Ramesh Kumar" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Phone *</label>
                    <input required className="brand-focus-ring w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="76709 63423" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Email</label>
                  <input type="email" className="brand-focus-ring w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Service Required *</label>
                  <select required className="brand-focus-ring w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 bg-white" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
                    <option value="">Select a service…</option>
                    {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Message</label>
                  <textarea rows={4} className="brand-focus-ring w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 resize-none" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Describe your requirement…" />
                </div>
                {submitError && <p className="text-sm text-red-600">{submitError}</p>}
                <button type="submit" disabled={submitting} className="brand-button brand-focus-ring w-full text-white font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                  <Send className="size-4" /> {submitting ? "Sending..." : "Send Enquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-red-50 via-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">How It Works After Sending Enquiry</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Requirement Review", desc: "Our team reviews your enquiry and confirms exact manpower or service requirements." },
              { step: "02", title: "Site Discussion", desc: "We discuss scope, location, shift needs, and timeline with your coordinator." },
              { step: "03", title: "Final Proposal", desc: "You receive the final service plan with transparent pricing and execution schedule." },
              { step: "04", title: "Deployment", desc: "After approval, manpower is deployed and operations begin with supervision support." },
            ].map((item, index) => (
              <div key={item.step} className="relative text-center">
                <div className="brand-button relative z-10 mx-auto size-12 rounded-full text-white text-sm font-bold flex items-center justify-center shadow-md">
                  {item.step}
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-6 left-[58%] w-[84%] h-0.5 bg-gradient-to-r from-red-300 via-blue-300 to-green-300" aria-hidden="true" />
                )}
                <div className="brand-soft-panel mt-4 rounded-xl shadow-sm p-5">
                  <div className="font-semibold text-gray-900 mb-2">{item.title}</div>
                  <div className="text-sm text-gray-600 leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
