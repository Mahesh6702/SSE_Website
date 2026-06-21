import { Target, Heart, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  { icon: ShieldCheck, title: "Integrity", desc: "We deliver what we promise — transparent pricing, honest timelines." },
  { icon: Target, title: "Excellence", desc: "Every job is completed to the highest standard with skilled professionals." },
  { icon: Heart, title: "Care", desc: "We treat every client's property as our own and take full responsibility." },
];

const team = [
  { name: "Kommu Mahender", role: "Founder & Operations Head", initials: "KM" },
  { name: "Eega Mahesh", role: "Co-Founder & Investor", initials: "EM" },
];

const companyProfile = [
  { label: "GST Registration", value: "GST Registered" },
  { label: "Registered State", value: "Telangana" },
  { label: "Company Nature", value: "Facility Management & Manpower Services" },
  { label: "Established", value: "2022" },
];

export default function About() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-red-700 via-blue-700 to-green-700 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-3">About Sri Sai Enterprises</h1>
        <p className="text-gray-300 max-w-xl mx-auto">
          Since 2022, we have been building trust through quality service delivery across Hyderabad and beyond.
        </p>
      </section>

      {/* Story */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-50 via-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <div className="brand-accent-text text-sm font-semibold uppercase tracking-wide mb-2">Our Story</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-5">Founded on Trust, Built on Quality</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Sri Sai Enterprises was established in 2022 with a simple goal — to provide reliable, skilled
              and affordable maintenance and facility management services to businesses across India.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              With a core team of 5 members, we currently manage and deploy 150+ manpower professionals
              across 6+ manufacturing client companies in and around Hyderabad.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today SSE is a trusted name in loading, unloading, packing, picking, logistics, housekeeping,
              and security services, known for our on-time delivery and quality workmanship.
            </p>
            <div className="mt-8">
              <div className="brand-accent-text text-sm font-semibold uppercase tracking-wide mb-3">Company Details</div>
              <div className="grid sm:grid-cols-2 gap-3">
                {companyProfile.map((item) => (
                  <div key={item.label} className="brand-soft-panel rounded-lg px-4 py-3">
                    <div className="text-xs font-medium text-gray-500">{item.label}</div>
                    <div className="text-sm font-semibold text-gray-900 mt-1">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { val: "2022", label: "Established" },
              { val: "5", label: "Team Members" },
              { val: "6+", label: "Manufacturing Clients" },
              { val: "150+", label: "Current Manpower" },
            ].map((s) => (
              <div key={s.label} className="brand-soft-panel rounded-xl p-6 text-center">
                <div className="brand-accent-text text-3xl font-bold">{s.val}</div>
                <div className="text-sm text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-50 via-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="brand-accent-text text-sm font-semibold uppercase tracking-wide mb-2">What We Stand For</div>
            <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="ui-card p-6 text-center transition-shadow">
                <div className="brand-icon-chip inline-flex items-center justify-center size-12 rounded-xl mb-4">
                  <v.icon className="size-6 text-blue-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-50 via-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="brand-accent-text text-sm font-semibold uppercase tracking-wide mb-2">The People Behind SSE</div>
            <h2 className="text-3xl font-bold text-gray-900">Our Leadership Team</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {team.map((t) => (
              <div key={t.name} className="ui-card p-6 text-center transition-shadow">
                <div className="inline-flex items-center justify-center size-20 rounded-full bg-gray-900 text-white text-xl font-bold mb-3">
                  {t.initials}
                </div>
                <div className="font-semibold text-gray-900">{t.name}</div>
                <div className="text-sm text-gray-500">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-700 via-blue-700 to-green-700 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Let's Work Together</h2>
        <p className="text-gray-400 mb-6">Talk to our team about your facility management needs.</p>
        <Link to="/contact" className="brand-button brand-focus-ring inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-lg transition">
          Get in Touch <ArrowRight className="size-4" />
        </Link>
      </section>
    </>
  );
}
