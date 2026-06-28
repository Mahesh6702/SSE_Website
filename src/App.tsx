import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import JobDetails from "./pages/JobDetails";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-red-50 via-blue-50 to-green-50 text-gray-900">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/jobs" element={<JobDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
