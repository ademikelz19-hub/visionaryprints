import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Publications from "@/components/Publications";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#030712] text-slate-100 selection:bg-indigo-600 selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <Services />

        {/* Amazon KDP Publications (Featured Work) */}
        <Publications />

        {/* Agency Process & Why Choose Visionary Prints */}
        <WhyUs />

        {/* Contact & Project Inquiry Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
