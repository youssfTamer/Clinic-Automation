import { PhoneMissed, Clock, UserX, Banknote, MessageCircle } from "lucide-react";

const problems = [
  {
    icon: PhoneMissed,
    title: "المكالمات الفائتة",
    description: "تفوتك 25% من المكالمات خلال ساعات الذروة. هذا يعني فقدان 25% من إيراداتك.",
    color: "text-red-500",
    bg: "bg-red-50"
  },
  {
    icon: MessageCircle,
    title: "لا يوجد أتمتة على واتساب",
    description: "المرضى يريدون الحجز عبر واتساب. الردود اليدوية تستغرق وقتاً طويلاً وتفقدهم.",
    color: "text-orange-500",
    bg: "bg-orange-50"
  },
  {
    icon: Clock,
    title: "المتابعة اليدوية",
    description: "الاستقبال يضيع ساعات في الاتصال للتذكيرات بدلاً من التركيز على المرضى في العيادة.",
    color: "text-yellow-600",
    bg: "bg-yellow-50"
  },
  {
    icon: Banknote,
    title: "الإيرادات المفقودة",
    description: "الغيابات والمواعيد الفائتة تكلف العيادة المتوسطة أكثر من 3,000 دولار شهرياً.",
    color: "text-slate-600",
    bg: "bg-slate-100"
  }
];

export default function Problems() {
  return (
    <section id="problems" className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">
            هل تفقد عيادتك المرضى؟
          </h2>
          <p className="text-slate-600 text-lg">
            إدارة العيادة صعبة. المشكلة الأكبر ليست الرعاية الطبية—بل التواصل.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow bg-white"
            >
              <div className={`w-14 h-14 rounded-xl ${problem.bg} flex items-center justify-center mb-6`}>
                <problem.icon className={`w-7 h-7 ${problem.color}`} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{problem.title}</h3>
              <p className="text-slate-600 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
