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
              هل أنت مستعد لأتمتة عيادتك؟
            </h2>
            <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              انضم إلى أكثر من 200 عيادة توفر الوقت وتحجز المزيد من المرضى. 
              احجز عرض تجريبي مجاني اليوم—لا حاجة لبطاقة ائتمان.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-green-500 hover:bg-green-600 text-white font-bold rounded-full px-8 h-14 text-lg w-full sm:w-auto shadow-lg shadow-green-500/20"
                onClick={() => window.open("https://wa.me/1234567890", "_blank")}
              >
                <MessageCircle className="ml-2 h-6 w-6" />
                احجز عرض تجريبي مجاني على واتساب
              </Button>
            </div>
            
            <p className="mt-6 text-sm text-slate-500">
              أماكن محدودة متاحة لهذا الشهر.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
