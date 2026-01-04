import { MessageSquare, Bot, CalendarCheck, Bell } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "1. المريض يرسل رسالة",
    description: "يرسل المريض رسالة لعيادتك على واتساب طالباً موعداً أو معلومات عن الأسعار.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Bot,
    title: "2. الذكاء الاصطناعي يرد فوراً",
    description: "ذكاؤنا الاصطناعي يفهم الطلب (بالعربية أو الإنجليزية) ويرد فوراً، على مدار الساعة.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: CalendarCheck,
    title: "3. يتم حجز الموعد",
    description: "يوجه الذكاء الاصطناعي المريض إلى الأوقات المتاحة ويؤكد الحجز في تقويمك.",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Bell,
    title: "4. إرسال التذكيرات التلقائية",
    description: "يحصل المرضى على تذكيرات تلقائية قبل زيارتهم لتقليل الغيابات.",
    color: "bg-orange-100 text-orange-600"
  }
];

export default function Solution() {
  return (
    <section id="solution" className="py-24 bg-slate-50">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">كيف يعمل</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
            من "مرحباً" إلى "محجوز" — أتمتة كاملة
          </h2>
          <p className="text-slate-600 text-lg">
            Clinic AI يعمل كأفضل موظف استقبال لديك—لا ينام أبداً، ولا يفوت مكالمة، ويتحدث العربية والإنجليزية بطلاقة.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 z-0"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className={`w-24 h-24 rounded-full ${step.color} flex items-center justify-center mb-6 shadow-lg border-4 border-white transition-transform group-hover:scale-110 duration-300`}>
                  <step.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
