import { MessageCircle, Bot, Calendar, Settings, ShieldCheck, BarChart } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "أتمتة واتساب",
    description: "تعامل مع الحجوزات والإلغاءات والاستفسارات مباشرة على واتساب—حيث يتواجد مرضاك بالفعل."
  },
  {
    icon: Bot,
    title: "روبوت ذكي بالذكاء الاصطناعي",
    description: "مدرب على بيانات عيادتك الخاصة. يجيب على الأسئلة حول الأسعار والخدمات والموقع تلقائياً."
  },
  {
    icon: Calendar,
    title: "تذكيرات المواعيد",
    description: "قلل الغيابات بنسبة 40% مع رسائل التأكيد التلقائية والتذكيرات قبل 24 ساعة من الزيارة."
  },
  {
    icon: Settings,
    title: "إعداد سهل",
    description: "لا حاجة لمهارات البرمجة. نحن نعد كل شيء لك. فقط شغله وشاهد الحجوزات تنمو."
  },
  {
    icon: ShieldCheck,
    title: "آمن وخاص",
    description: "أمان على مستوى المؤسسات للحفاظ على بيانات مرضاك آمنة ومتوافقة."
  },
  {
    icon: BarChart,
    title: "مزامنة Google Sheets / CRM",
    description: "جميع المواعيد تتم مزامنتها فوراً مع Google Calendar أو Sheets أو نظام CRM الموجود لديك."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <div className="lg:w-1/3 sticky top-24">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6 leading-tight">
              كل ما تحتاجه لتشغيل عيادتك على الطيار الآلي
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              ركز على علاج المرضى، وليس الرد على الهاتف. مجموعة أدواتنا تتعامل مع الأعمال الإدارية المرهقة نيابة عنك.
            </p>
            <button className="text-primary font-bold hover:text-primary/80 flex items-center gap-2 group transition-colors">
              استكشف جميع الميزات <span className="group-hover:-translate-x-1 transition-transform">←</span>
            </button>
          </div>

          <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-primary mb-4 shadow-sm">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
