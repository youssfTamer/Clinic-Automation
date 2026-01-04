import { CheckCircle2 } from "lucide-react";

const benefits = [
  "مصمم خصيصاً للعيادات والأطباء",
  "دعم كامل للغة العربية والإنجليزية",
  "إعداد في أقل من 48 ساعة",
  "أسعار شهرية معقولة",
  "لا حاجة لفريق تقني",
  "دعم محلي على مدار الساعة"
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-primary relative overflow-hidden text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">
            لماذا تختار العيادات Clinic AI؟
          </h2>
          <p className="text-blue-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            نحن نفهم التحديات الفريدة للرعاية الصحية في المنطقة. بنينا هذه الأداة لحلها.
          </p>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 text-left max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0" />
                <span className="text-lg font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
