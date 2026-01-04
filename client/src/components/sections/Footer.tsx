import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
             <span className="font-heading font-bold text-2xl text-primary block mb-4">Clinic<span className="text-secondary">AI</span></span>
             <p className="text-slate-600 max-w-sm mb-6">
               The #1 AI automation platform for clinics and medical centers in the Middle East. Stop missing calls, start booking patients.
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
            <h4 className="font-bold text-slate-900 mb-4">Product</h4>
            <ul className="space-y-3 text-slate-600">
              <li><a href="#features" className="hover:text-primary">Features</a></li>
              <li><a href="#solution" className="hover:text-primary">How it Works</a></li>
              <li><a href="#pricing" className="hover:text-primary">Pricing</a></li>
              <li><a href="#" className="hover:text-primary">Integrations</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-3 text-slate-600">
              <li><a href="#" className="hover:text-primary">About Us</a></li>
              <li><a href="#" className="hover:text-primary">Contact</a></li>
              <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Clinic AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
