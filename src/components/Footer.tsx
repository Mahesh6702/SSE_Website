import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-900 via-blue-900 to-green-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <div className="text-lg font-bold mb-2">
            <span style={{ color: "#F02020" }}>Sri</span>{" "}
            <span style={{ color: "#aaa" }}>Sai</span>{" "}
            <span style={{ color: "#208010" }}>Enterprises</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Professional manpower management and maintenance services across Hyderabad. Consider our services trusted by leading companies since 2022.
          </p>
        </div>

        {/* Links */}
        <div>
          <div className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">Quick Links</div>
          <ul className="space-y-2 text-sm">
            {["/", "/services", "/about", "/contact", "/careers"].map((to, i) => (
              <li key={to}>
                <Link to={to} className="hover:text-white transition-colors">
                  {["Home", "Services", "About Us", "Contact", "Careers"][i]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">Contact</div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-red-300" />
              <a
                href="https://wa.me/917670963423"
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-white transition-colors"
              >
                +91 76709 63423
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0 text-green-300" />
              <a href="mailto:ssekompally@gmail.com" className="hover:text-white transition-colors">
                ssekompally@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="size-4 shrink-0 text-blue-300 mt-0.5" />
              <span>
                H.No: 2-28, Muneerabad Village, Muneerabad,<br />
                Medchal-Malkajgiri, Hyd, Telangana-501401.
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Sri Sai Enterprises. All rights reserved.
      </div>
    </footer>
  );
}
