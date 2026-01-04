import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroImage from "@assets/generated_images/modern_medical_clinic_reception_with_technology_overlay.png";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8 animate-in slide-in-from-left-4 duration-700 fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-primary text-xs font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              #1 AI Solution for Clinics
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-heading font-extrabold text-slate-900 leading-[1.15] tracking-tight">
              Turn Missed Calls into <span className="text-primary">Booked Appointments</span> 24/7
            </h1>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              Stop losing patients to voicemail. Automate your booking, reminders, and patient questions on WhatsApp instantly. Designed for clinics in the Middle East.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-green-500 hover:bg-green-600 text-white font-bold rounded-full px-8 h-14 text-base shadow-lg shadow-green-500/20 transition-all hover:-translate-y-1"
                onClick={() => window.open("https://wa.me/1234567890", "_blank")}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Book a Free Demo
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 h-14 text-base border-2 font-semibold text-slate-700 hover:bg-slate-50"
              >
                See How It Works
              </Button>
            </div>
            
            <div className="pt-8 flex items-center gap-4 text-sm text-slate-500 font-medium">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                     <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="user" />
                  </div>
                ))}
              </div>
              <p>Trusted by 200+ clinics</p>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="w-full lg:w-1/2 relative animate-in slide-in-from-right-4 duration-1000 fade-in">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-white">
               <img 
                src={heroImage} 
                alt="Modern Clinic Reception" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating UI Card 1 */}
              <div className="absolute top-10 left-10 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-xl max-w-[220px] hidden md:block animate-in fade-in zoom-in duration-500 delay-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <MessageCircle size={16} />
                  </div>
                  <div className="text-xs font-semibold text-slate-800">New Appointment</div>
                </div>
                <div className="text-xs text-slate-600">"Booking confirmed for tomorrow at 10:00 AM."</div>
              </div>

              {/* Floating UI Card 2 */}
              <div className="absolute bottom-10 right-10 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-xl max-w-[200px] hidden md:block animate-in fade-in zoom-in duration-500 delay-700">
                <div className="flex items-center gap-2">
                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
                   <span className="text-sm font-bold text-slate-800">System Active</span>
                </div>
                <div className="text-xs text-slate-500 mt-1">24/7 Auto-response on</div>
              </div>
            </div>
            
            {/* Abstract blobs */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-blue-100/30 blur-3xl rounded-full"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
