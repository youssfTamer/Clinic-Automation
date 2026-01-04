import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-white text-center">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl p-12 lg:p-20 relative overflow-hidden shadow-2xl">
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              Ready to Automate Your Clinic?
            </h2>
            <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Join 200+ clinics that are saving time and booking more patients. 
              Book a free demo today—no credit card required.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-green-500 hover:bg-green-600 text-white font-bold rounded-full px-8 h-14 text-lg w-full sm:w-auto shadow-lg shadow-green-500/20"
                onClick={() => window.open("https://wa.me/1234567890", "_blank")}
              >
                <MessageCircle className="mr-2 h-6 w-6" />
                Book Free Demo on WhatsApp
              </Button>
            </div>
            
            <p className="mt-6 text-sm text-slate-500">
              Limited spots available for this month.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
