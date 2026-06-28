import { Wrench, Leaf, Users, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { employeesPic } from "../assets/services";

const hiringFlow = [
  {
    step: "01",
    title: "Work Requirement",
    desc: "We hire manpower based on exact client work requirements and shift needs.",
  },
  {
    step: "02",
    title: "Accommodation Setup",
    desc: "Required accommodation is arranged near the warehouse or work site.",
  },
  {
    step: "03",
    title: "Transportation",
    desc: "Team transportation is managed through our own vehicles for smooth movement.",
  },
  {
    step: "04",
    title: "Document Verification",
    desc: "Document verification and record updates are completed by our internal team.",
  },
  {
    step: "05",
    title: "Attendance Management",
    desc: "Daily attendance is tracked and maintained accurately for every worker.",
  },
  {
    step: "06",
    title: "Salary & Payment",
    desc: "Salary management is processed in each worker's dedicated payment mode.",
  },
];

const services = [
  {
    icon: Wrench,
    title: "Logistics Services",
    color: "brand-icon-chip",
    items: [
      "Loading and unloading operations support",
      "Packing and picking workflow handling",
      "Inventory movement and material coordination",
      "Shift-wise logistics manpower deployment",
      "Site-wise logistics support for industrial facilities",
    ],
  },
  {
    icon: Users,
    title: "Manpower",
    color: "brand-icon-chip",
    items: [
      "Skilled and semi-skilled manpower deployment",
      "Shift-wise workforce planning and scheduling",
      "Attendance and supervisor coordination",
      "Short-term and long-term manpower supply",
      "Deployment for warehouse, industrial and facility operations",
    ],
  },
  {
    icon: Users,
    title: "Picker/Packer",
    color: "brand-icon-chip",
    items: [
      "Dedicated picker and packer teams",
      "Order picking with barcode and bin support",
      "Packing as per dispatch and client standards",
      "Labeling, sorting and staging for shipment",
      "Fast and accurate warehouse handling",
    ],
  },
  {
    icon: Users,
    title: "Security Guards",
    color: "brand-icon-chip",
    items: [
      "Trained guards for entry and exit control",
      "Visitor management and gate log maintenance",
      "24/7 shift-based premises monitoring",
      "Patrolling and incident reporting support",
      "Site safety and asset protection coverage",
    ],
  },
  {
    icon: Leaf,
    title: "Community Maintenance",
    color: "brand-icon-chip",
    items: [
      "Maintenance support for gated communities",
      "Common area housekeeping and cleanliness",
      "Gardening and green area upkeep",
      "Minor facility upkeep and coordination",
      "Routine maintenance for housing societies",
    ],
  },
  {
    icon: Leaf,
    title: "Housekeeping",
    color: "brand-icon-chip",
    items: [
      "Daily office and warehouse cleaning",
      "Deep-clean and sanitization",
      "Floor and common area maintenance",
      "Pantry and washroom upkeep",
      "Trained housekeeping staff",
    ],
  },
];

export default function Services() {
  return (
    <>
      {/* Header */}
      <section className="services-hero relative overflow-hidden text-gray-900 min-h-[320px] md:min-h-[420px] text-center flex items-start justify-center pt-6 md:pt-8">
        <div
          className="services-background absolute inset-0 bg-no-repeat"
          style={{ backgroundImage: `url(${employeesPic})` }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(240, 32, 32, 0.14), rgba(48, 0, 255, 0.14), rgba(32, 128, 16, 0.14))" }}
          aria-hidden="true"
        />
        <div className="relative z-10 px-4">
          <div className="brand-accent-text text-sm font-semibold uppercase tracking-[0.2em] mb-3">SSE Services</div>
          <h1 className="text-4xl font-bold mb-3">Our Services</h1>
          <p className="text-gray-800 max-w-xl mx-auto">
            End-to-end manpower supplies and maintenance solutions tailored to your business needs.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-50 via-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="brand-accent-text text-sm font-semibold uppercase tracking-wide mb-2">What We Offer</div>
            <h2 className="text-3xl font-bold text-gray-900">SSE Service Categories</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="ui-card brand-soft-panel p-6 transition-shadow">
              <div className={`inline-flex items-center justify-center size-12 rounded-xl mb-4 ${s.color}`}>
                <s.icon className="size-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{s.title}</h3>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle className="size-4 text-green-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-50 via-blue-50 to-green-50">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="brand-accent-text text-sm font-semibold uppercase tracking-wide mb-2">Workforce Process</div>
          <h2 className="text-3xl font-bold text-gray-900">How We Hire & Manage Workforce</h2>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {hiringFlow.map((item, index) => (
            <div key={item.step} className="ui-card brand-soft-panel relative p-6">
              <div className="brand-accent-text text-sm font-bold mb-2">STEP {item.step}</div>
              <div className="font-semibold text-gray-900 mb-2">{item.title}</div>
              <div className="text-sm text-gray-600 leading-relaxed">{item.desc}</div>
              {index < hiringFlow.length - 1 && (
                <div className="brand-icon-chip hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 items-center justify-center size-8 rounded-full font-bold">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-700 via-blue-700 to-green-700 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Need a Custom Service Package?</h2>
        <p className="text-gray-100 mb-6">We design logistics and manpower management contracts to fit your budget.</p>
        <Link to="/contact" className="brand-button-outline brand-focus-ring inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-lg transition">
          Request a Quote <ArrowRight className="size-4" />
        </Link>
      </section>
    </>
  );
}
