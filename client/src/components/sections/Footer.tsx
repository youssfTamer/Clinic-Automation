import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
             <span className="font-heading font-bold text-2xl text-primary block mb-4">Clinic<span className="text-secondary">AI</span></span>
             <p className="text-slate-600 max-w-sm mb-6">
               منصة الأتمتة بالذكاء الاصطناعي الأولى للعيادات والمراكز الطبية في الشرق الأوسط. توقف عن فقدان المكالمات، ابدأ بحجز المرضى.
             </p>
             <div className="flex gap-4">
               <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-colors">
                 <Facebook size={20} />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-colors">
                 <Instagram size={20} />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-colors">
                 <Twitter size={20} />
               </a>
             </div>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-4">المنتج</h4>
            <ul className="space-y-3 text-slate-600">
              <li><a href="#features" className="hover:text-primary">الميزات</a></li>
              <li><a href="#solution" className="hover:text-primary">كيف يعمل</a></li>
              <li><a href="#pricing" className="hover:text-primary">الأسعار</a></li>
              <li><a href="#" className="hover:text-primary">التكاملات</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-4">الشركة</h4>
            <ul className="space-y-3 text-slate-600">
              <li><a href="#" className="hover:text-primary">من نحن</a></li>
              <li><a href="#" className="hover:text-primary">اتصل بنا</a></li>
              <li><a href="#" className="hover:text-primary">سياسة الخصوصية</a></li>
              <li><a href="#" className="hover:text-primary">شروط الخدمة</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Clinic AI. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}
