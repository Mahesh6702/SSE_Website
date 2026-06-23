import { Link } from "react-router-dom";
import { CheckCircle, Users, ArrowRight, Wrench, Leaf } from "lucide-react";
import sseSymbolImage from "../../SSE_Symbol_Image.JPG";
import {
  communityMaintenanceImage,
  houseKeepingImage,
  loadingUnloadingImage,
  manpowerImage,
  pickerOrPackerImage,
  securityGuardsImage,
} from "../assets/home";
import {
  ahldhaLogo,
  dcmShiramLogo,
  emiratesLogisticsLogo,
  fenestaBuildingLogo,
  srivaniCorporationLogo,
  swiggyLogisticsLogo,
} from "../assets/home/clients";

const services = [
  {
    icon: Wrench,
    label: "Logistics Services",
    desc: "Reliable logistics support for smooth and uninterrupted operations.",
    imageSrc: loadingUnloadingImage,
  },
  {
    icon: Users,
    label: "Manpower",
    desc: "Skilled and semi-skilled manpower deployment for your daily operations.",
    imageSrc: manpowerImage,
  },
  {
    icon: Users,
    label: "Picker/Packer",
    desc: "Dedicated picker and packer teams for fast, accurate order handling.",
    imageSrc: pickerOrPackerImage,
  },
  {
    icon: Users,
    label: "Security Guards",
    desc: "Trained security personnel for premises safety, access control and site monitoring.",
    imageSrc: securityGuardsImage,
  },
  {
    icon: Leaf,
    label: "Community Maintenance",
    desc: "Used for gated communities or housing societies, combining gardening, housekeeping, and facility upkeep.",
    imageSrc: communityMaintenanceImage,
  },
  {
    icon: Leaf,
    label: "Housekeeping",
    desc: "Daily housekeeping and deep-clean services for workplaces.",
    imageSrc: houseKeepingImage,
  },
];

const clientLogos = [
  {
    name: "Swiggy Logistics",
    logoSrc: swiggyLogisticsLogo,
    website: "https://startuptalky.com/swiggy-acquired-startups/#Scootsy_Logistics_Pvt:~:text=overall%20consumer%20experience.-,Scootsy%20Logistics%20Private%20Limited,-FOUNDED",
  },
  { name: "AHLDHA", logoSrc: ahldhaLogo, website: "https://www.ahlada.com/" },
  { name: "DCM Shiram", logoSrc: dcmShiramLogo, website: "https://www.fenesta.com/" },
  { name: "Emirates Logistics", logoSrc: emiratesLogisticsLogo, website: "https://emirateslogistics.com/" },
  { name: "Fenetsa Building System", logoSrc: fenestaBuildingLogo, website: "https://www.fenesta.com/" },
  { name: "Srivani Corporation", logoSrc: srivaniCorporationLogo, website: "https://www.srivencorporation.com/" },
];

const mouCompanies = [
  "Swiggy Logistics",
  "AHLDHA",
  "DCM Shiram",
  "Emirates Logistics",
  "Fenetsa Building System",
  "Srivani Corporation",
];

const clientNames = clientLogos.map((client) => client.name);

const rollingClientLogos = [...clientLogos, ...clientLogos];

const hasDistinctMouCompanies =
  mouCompanies.length !== clientNames.length ||
  mouCompanies.some((company) => !clientNames.includes(company));

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-section relative overflow-hidden text-white py-40 md:py-56 px-4">
        <div
          className="hero-background absolute inset-0 bg-no-repeat"
          style={{ backgroundImage: `url(${sseSymbolImage})`, backgroundPosition: "60% 18%", backgroundSize: "68%" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/85 via-blue-900/80 to-green-900/85" aria-hidden="true" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              Professional Manpower Services
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Sri Sai Enterprises delivers end-to-end facility management, skilled labour staffing
              and maintenance solutions — keeping your operations running smoothly.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="brand-button brand-focus-ring inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition"
              >
                Get a Free Quote <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border border-gray-500 hover:border-gray-300 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-50 via-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="brand-accent-text text-sm font-semibold uppercase tracking-wide mb-2">What We Do</div>
            <h2 className="text-3xl font-bold text-gray-900">Our Core Services</h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              From routine maintenance to complete facility management — we cover every need.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.label} className="ui-card p-5 text-center transition-shadow">
                {s.imageSrc && (
                  <div className="mb-3 overflow-hidden rounded-lg bg-gray-50">
                    <img
                      src={s.imageSrc}
                      alt={`${s.label} operations`}
                      className="h-40 w-full scale-105 object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                {!s.imageSrc && (
                  <div className="brand-icon-chip inline-flex items-center justify-center size-12 rounded-xl mb-3">
                    <s.icon className="size-6 text-blue-700" />
                  </div>
                )}
                <div className="font-semibold text-gray-900">{s.label}</div>
                <div className="text-xs text-gray-500 mt-1 leading-relaxed">{s.desc}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services" className="brand-accent-text inline-flex items-center gap-2 font-medium hover:underline">
              View all services <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-50 via-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="ui-card-strong p-6 md:p-8">
            <div className="brand-accent-text text-sm font-semibold uppercase tracking-wide mb-2">Why Choose SSE</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Reliable, Skilled Manpower — On Time, Every Time</h2>
            <ul className="space-y-4">
              {[
                {
                  title: "Trained & Background-Verified Workforce",
                  desc: "Every worker is vetted for skill, safety, and reliability before deployment.",
                },
                {
                  title: "Dedicated Supervisor for Every Client",
                  desc: "A single point of contact ensures smooth coordination, reporting, and accountability.",
                },
                {
                  title: "GST, CGST, ESI & EPF Compliant Billing",
                  desc: "Fully transparent pricing with complete statutory compliance.",
                },
                {
                  title: "Accommodation & Transportation Management",
                  desc: "We manage worker stay, travel, and logistics end-to-end for uninterrupted operations.",
                },
                {
                  title: "Daily Attendance Management",
                  desc: "Digital attendance tracking ensures accuracy, transparency, and timely payroll processing.",
                },
                {
                  title: "Dedicated Administration & Accounts Team",
                  desc: "In-house professionals handle documentation, billing, compliance, and client coordination.",
                },
                {
                  title: "Safety Training & PPE (Dress & Shoes)",
                  desc: "All manpower receives safety orientation and is equipped with proper protective gear.",
                },
              ].map((pt) => (
                <li key={pt.title} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle className="size-5 text-green-600 shrink-0 mt-0.5" />
                  <span>
                    <span className="font-semibold text-gray-900">{pt.title}</span> — {pt.desc}
                  </span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="inline-flex items-center gap-2 mt-8 bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              About SSE <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-50 via-blue-50 to-green-50 border-t border-blue-200">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">Trusted By</div>
          <div className="logo-marquee" aria-label="Client logos">
            <div className="logo-track">
              {rollingClientLogos.map((client, index) => {
                const cardContent = (
                  <>
                    <img
                      src={client.logoSrc}
                      alt={`${client.name} logo`}
                      className="logo-image"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
                        if (fallback) fallback.style.display = "block";
                      }}
                    />
                    <span className="logo-fallback">{client.name}</span>
                  </>
                );

                return client.website ? (
                  <a
                    key={`${client.name}-${index}`}
                    className="logo-card"
                    title={client.name}
                    href={client.website}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`Visit ${client.name} website`}
                  >
                    {cardContent}
                  </a>
                ) : (
                  <div
                    key={`${client.name}-${index}`}
                    className="logo-card"
                    title={client.name}
                  >
                    {cardContent}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* MoU companies */}
      {hasDistinctMouCompanies && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="brand-accent-text text-sm font-semibold uppercase tracking-widest mb-2">
              MoU Partners
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">MoU Signed With These Companies</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              We have active service understanding and long-term collaboration with leading
              organizations across logistics, infrastructure and industrial operations.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {mouCompanies.map((company) => (
                <div
                  key={company}
                  className="ui-card brand-soft-panel px-4 py-5"
                >
                  <div className="text-sm font-semibold text-gray-800">{company}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-700 via-blue-700 to-green-700 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With SSE?</h2>
          <p className="text-gray-100 mb-8">
            Get a customised quote for your facility or maintenance requirement in less than 24 hours.
          </p>
          <Link
            to="/contact"
            className="brand-button-outline brand-focus-ring inline-flex items-center gap-2 font-semibold px-8 py-3 rounded-lg transition"
          >
            Contact Us Now <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
