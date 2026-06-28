import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import sseSymbolImage from "../../SSE_Symbol_Image.JPG";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/careers", label: "Careers" },
];

function SSELogo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img
        src={sseSymbolImage}
        alt="Sri Sai Enterprises symbol"
        className="size-9 rounded-lg object-cover border border-gray-200"
      />
      <div>
        <div className="text-sm font-bold leading-tight">
          <span style={{ color: "#F02020" }}>Sri</span>{" "}
          <span style={{ color: "#3000FF" }}>Sai</span>{" "}
          <span style={{ color: "#208010" }}>Enterprises</span>
        </div>
        <div className="text-[10px] text-gray-500 leading-tight">Professional Services</div>
      </div>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-red-100/95 via-blue-100/95 to-green-100/95 border-b border-blue-200 shadow-sm backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <SSELogo />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === l.to
                  ? "bg-gray-900 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="brand-button brand-focus-ring ml-3 px-4 py-2 rounded-md text-sm font-medium transition"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-blue-200 bg-gradient-to-b from-red-50 via-blue-50 to-green-50 px-4 py-3 space-y-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block px-3 py-2 rounded-md text-sm font-medium ${
                pathname === l.to ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="brand-button brand-focus-ring block mt-2 px-3 py-2 rounded-md text-sm font-medium text-center transition"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
