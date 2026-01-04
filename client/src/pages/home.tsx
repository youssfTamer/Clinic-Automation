import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Problems from "@/components/sections/Problems";
import Solution from "@/components/sections/Solution";
import Features from "@/components/sections/Features";
import WhyUs from "@/components/sections/WhyUs";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

import { MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Solution />
        <Features />
        <WhyUs />
        <CTA />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 animate-in fade-in slide-in-from-bottom-10"
        aria-label="التحدث على واتساب"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}
