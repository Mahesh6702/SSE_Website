import { IndianRupee, MapPin, Clock3 } from "lucide-react";
import { FormEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";

const jobs = [
  {
    title: "Logistics Associate (Loading/Unloading)",
    type: "Shift-based",
    location: "Hyderabad",
    salary: "INR 14,000 - 18,000 / month",
    details: "Loading, unloading, and material handling support for warehouse and industrial client sites.",
  },
  {
    title: "Picker / Packer",
    type: "Shift-based",
    location: "Hyderabad",
    salary: "INR 13,500 - 17,500 / month",
    details: "Order picking, packing, labeling, and dispatch staging as per client standards.",
  },
  {
    title: "Manpower Deployment Coordinator",
    type: "Full-time",
    location: "Hyderabad",
    salary: "INR 20,000 - 28,000 / month",
    details: "Shift planning, attendance tracking, and deployment coordination across client locations.",
  },
  {
    title: "Security Guard",
    type: "Shift-based",
    location: "Hyderabad & Nearby",
    salary: "INR 15,000 - 20,000 / month",
    details: "Gate control, visitor management, routine patrolling, and incident reporting.",
  },
  {
    title: "Community Maintenance Assistant",
    type: "Full-time",
    location: "Hyderabad",
    salary: "INR 14,000 - 19,000 / month",
    details: "Common area upkeep, basic maintenance support, and gardening assistance.",
  },
  {
    title: "Housekeeping Staff",
    type: "Full-time",
    location: "Hyderabad",
    salary: "INR 13,000 - 17,000 / month",
    details: "Daily cleaning, sanitization, and pantry/washroom upkeep for client facilities.",
  },
  {
    title: "Security Supervisor",
    type: "Full-time",
    location: "Hyderabad",
    salary: "INR 22,000 - 30,000 / month",
    details: "Supervision of guard teams, shift compliance, reporting, and client coordination.",
  },
];

export default function JobDetails() {
  const [searchParams] = useSearchParams();
  const isFromQr = searchParams.get("from") === "qr";
  const receiverEmail = import.meta.env.VITE_APPLICATION_RECEIVER_EMAIL || "ssekompally@gmail.com";
  const [form, setForm] = useState({
    service: "",
    fullName: "",
    dob: "",
    address: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    const payload = new FormData();
    payload.append("service", form.service);
    payload.append("full_name", form.fullName);
    payload.append("date_of_birth", form.dob);
    payload.append("address", form.address);
    payload.append("phone", form.phone);
    payload.append("_subject", `New SSE Job Application - ${form.service}`);
    payload.append("_captcha", "false");
    payload.append("_template", "table");

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${receiverEmail}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: payload,
      });

      if (!res.ok) {
        throw new Error("Failed to submit application");
      }

      setSubmitted(true);
      setForm({ service: "", fullName: "", dob: "", address: "", phone: "" });
    } catch {
      setSubmitError("Application could not be submitted right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <section className="bg-gradient-to-r from-red-700 via-blue-700 to-green-700 text-white py-14 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">SSE Job Details & Salary</h1>
        <p className="text-gray-200 max-w-2xl mx-auto">
          Welcome. You reached this page by scanning the Careers QR code. Explore available roles and salary ranges.
        </p>
      </section>

      <section className="py-12 px-4 bg-gradient-to-r from-red-50 via-blue-50 to-green-50">
        <div className="max-w-4xl mx-auto space-y-4">
          {jobs.map((job) => (
            <article key={job.title} className="ui-card p-5 md:p-6">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900">{job.title}</h2>
              <p className="text-sm text-gray-600 mt-2">{job.details}</p>

              <div className="flex flex-wrap gap-2 mt-4 text-xs">
                <span className="brand-soft-panel inline-flex items-center gap-1 px-3 py-1 rounded-full text-gray-800">
                  <Clock3 className="size-3.5" /> {job.type}
                </span>
                <span className="brand-soft-panel inline-flex items-center gap-1 px-3 py-1 rounded-full text-gray-800">
                  <MapPin className="size-3.5" /> {job.location}
                </span>
                <span className="brand-soft-panel inline-flex items-center gap-1 px-3 py-1 rounded-full text-gray-800">
                  <IndianRupee className="size-3.5" /> {job.salary}
                </span>
              </div>
            </article>
          ))}

          {isFromQr ? (
            <div className="ui-card mt-10 p-6 md:p-8">
              <h3 className="text-2xl font-semibold text-gray-900 text-center">Career Application</h3>
              <p className="text-sm text-gray-600 text-center mt-2">Fill your details below. We will contact you soon.</p>

              <form className="mt-6 grid md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
                <div className="md:col-span-2">
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Choose Service</label>
                  <select
                    id="service"
                    required
                    value={form.service}
                    onChange={(e) => setForm((prev) => ({ ...prev, service: e.target.value }))}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="">Select a service</option>
                    <option value="Logistics Services">Logistics Services</option>
                    <option value="Manpower">Manpower</option>
                    <option value="Picker/Packer">Picker/Packer</option>
                    <option value="Security Guards">Security Guards</option>
                    <option value="Community Maintenance">Community Maintenance</option>
                    <option value="Housekeeping">Housekeeping</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={form.fullName}
                    onChange={(e) => setForm((prev) => ({ ...prev, fullName: e.target.value }))}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                  <input
                    id="dob"
                    type="date"
                    required
                    value={form.dob}
                    onChange={(e) => setForm((prev) => ({ ...prev, dob: e.target.value }))}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <textarea
                    id="address"
                    required
                    value={form.address}
                    onChange={(e) => setForm((prev) => ({ ...prev, address: e.target.value }))}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    rows={3}
                    placeholder="Enter your current address"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="md:col-span-2 flex flex-col items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="brand-button brand-focus-ring inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </button>
                  {submitted && (
                    <p className="text-sm font-medium text-green-700 text-center">
                      Thank you{form.fullName ? `, ${form.fullName}` : ""}. We received your application and we will contact you soon.
                    </p>
                  )}
                  {submitError && <p className="text-sm font-medium text-red-700 text-center">{submitError}</p>}
                </div>
              </form>
            </div>
          ) : (
            <div className="ui-card mt-10 p-6 text-center">
              <p className="text-sm text-gray-700">To apply, please scan the Careers QR code and open this page from your mobile.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
