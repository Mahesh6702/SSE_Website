import { Briefcase, MapPin, Clock3 } from "lucide-react";

const openings = [
  {
    title: "Logistics Associate (Loading/Unloading)",
    type: "Shift-based",
    location: "Hyderabad",
    desc: "Handle loading, unloading, and material movement support at warehouse and industrial sites.",
  },
  {
    title: "Picker / Packer",
    type: "Shift-based",
    location: "Hyderabad",
    desc: "Perform order picking, packing, labeling, and staging operations as per dispatch standards.",
  },
  {
    title: "Manpower Deployment Coordinator",
    type: "Full-time",
    location: "Hyderabad",
    desc: "Support shift-wise manpower planning, attendance coordination, and site-level workforce allocation.",
  },
  {
    title: "Security Guard",
    type: "Shift-based",
    location: "Hyderabad & Nearby",
    desc: "Manage gate control, visitor entries, site patrols, and basic incident reporting.",
  },
  {
    title: "Community Maintenance Assistant",
    type: "Full-time",
    location: "Hyderabad",
    desc: "Support routine maintenance, common area upkeep, and basic gardening for gated communities.",
  },
  {
    title: "Housekeeping Staff",
    type: "Full-time",
    location: "Hyderabad",
    desc: "Carry out daily cleaning, sanitization, and washroom/pantry upkeep at client premises.",
  },
  {
    title: "Security Supervisor",
    type: "Full-time",
    location: "Hyderabad",
    desc: "Senior role for supervising shift guards, logs, and compliance with client safety protocols.",
  },
];

export default function Careers() {
  const configuredBaseUrl = import.meta.env.VITE_PUBLIC_BASE_URL?.trim();
  const runtimeBaseUrl = window.location.origin;
  const baseUrl = (configuredBaseUrl || runtimeBaseUrl).replace(/\/$/, "");
  const jobsPageUrl = `${baseUrl}/#/jobs?from=qr`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodeURIComponent(jobsPageUrl)}`;

  return (
    <>
      <section className="bg-gradient-to-r from-red-700 via-blue-700 to-green-700 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-3">Careers at Sri Sai Enterprises</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Join our growing team and build a stable career in manpower management and services.
        </p>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-red-50 via-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="ui-card p-6 text-center">
              <Briefcase className="size-7 mx-auto text-blue-700 mb-3" />
              <h3 className="font-semibold text-gray-900">Professional Growth</h3>
              <p className="text-sm text-gray-600 mt-2">Work with reputed clients and develop practical leadership skills.</p>
            </div>
            <div className="ui-card p-6 text-center">
              <Clock3 className="size-7 mx-auto text-blue-700 mb-3" />
              <h3 className="font-semibold text-gray-900">Reliable Work Structure</h3>
              <p className="text-sm text-gray-600 mt-2">Clear shifts, defined responsibilities, and supportive team coordination.</p>
            </div>
            <div className="ui-card p-6 text-center">
              <MapPin className="size-7 mx-auto text-blue-700 mb-3" />
              <h3 className="font-semibold text-gray-900">Local Opportunities</h3>
              <p className="text-sm text-gray-600 mt-2">Most roles are available across Hyderabad and surrounding areas.</p>
            </div>
          </div>

          <div className="space-y-4">
            {openings.map((job) => (
              <div key={job.title} className="ui-card p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{job.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="brand-soft-panel px-3 py-1 rounded-full text-gray-800">{job.type}</span>
                    <span className="brand-soft-panel px-3 py-1 rounded-full text-gray-800">{job.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="ui-card max-w-xl mx-auto text-center mt-10 p-6">
            <h3 className="text-xl font-semibold text-gray-900">Scan To View Job Details & Salary</h3>
            <p className="text-sm text-gray-600 mt-2">
              Scan this QR code with your mobile phone to open the job details page and application form.
            </p>
            <img
              src={qrCodeUrl}
              alt="QR code to open SSE jobs details page"
              className="mx-auto mt-5 h-52 w-52 md:h-64 md:w-64 rounded-xl border border-gray-200 bg-white p-2"
            />
            <p className="text-xs text-gray-500 mt-3 break-all">{jobsPageUrl}</p>
            <p className="text-sm text-gray-600 mt-4">Application form appears only when opening this QR link.</p>
          </div>
        </div>
      </section>
    </>
  );
}
