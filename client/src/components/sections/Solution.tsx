import { MessageSquare, Bot, CalendarCheck, Bell } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "1. Patient Sends Message",
    description: "A patient messages your clinic on WhatsApp asking for an appointment or pricing.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Bot,
    title: "2. AI Responds Instantly",
    description: "Our AI understands the request (in Arabic or English) and replies immediately, 24/7.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: CalendarCheck,
    title: "3. Appointment is Booked",
    description: "The AI guides them to available slots and confirms the booking in your calendar.",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Bell,
    title: "4. Auto-Reminders Sent",
    description: "Patients get automatic reminders before their visit to reduce no-shows.",
    color: "bg-orange-100 text-orange-600"
  }
];

export default function Solution() {
  return (
    <section id="solution" className="py-24 bg-slate-50">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
            From "Hello" to "Booked" — Completely Automated
          </h2>
          <p className="text-slate-600 text-lg">
            Clinic AI acts as your best receptionist who never sleeps, never misses a call, and speaks perfect Arabic and English.
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
