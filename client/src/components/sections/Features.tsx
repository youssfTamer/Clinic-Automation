import { MessageCircle, Bot, Calendar, Settings, ShieldCheck, BarChart } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "WhatsApp Automation",
    description: "Handle bookings, cancellations, and inquiries directly on WhatsApp—where your patients already are."
  },
  {
    icon: Bot,
    title: "Smart AI Chatbot",
    description: "Trained on your clinic's specific data. Answers questions about prices, services, and location automatically."
  },
  {
    icon: Calendar,
    title: "Appointment Reminders",
    description: "Reduce no-shows by 40% with automated confirmation messages and reminders 24h before visits."
  },
  {
    icon: Settings,
    title: "Easy Setup",
    description: "No coding skills required. We set everything up for you. You just turn it on and watch bookings grow."
  },
  {
    icon: ShieldCheck,
    title: "Secure & Private",
    description: "Enterprise-grade security to keep your patient data safe and compliant."
  },
  {
    icon: BarChart,
    title: "Google Sheets / CRM Sync",
    description: "All appointments are instantly synced to your Google Calendar, Sheets, or existing CRM."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <div className="lg:w-1/3 sticky top-24">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6 leading-tight">
              Everything You Need to Run Your Clinic on Autopilot
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              Focus on treating patients, not answering phones. Our suite of tools handles the administrative busywork for you.
            </p>
            <button className="text-primary font-bold hover:text-primary/80 flex items-center gap-2 group transition-colors">
              Explore all features <span className="group-hover:translate-x-1 transition-transform">→</span>
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
