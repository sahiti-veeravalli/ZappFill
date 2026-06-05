import { motion } from "framer-motion";
import { Brain, FileText, Users, Lock, RefreshCw, Briefcase, Settings2, Sparkles, Chrome, Wand2 } from "lucide-react";
import { SectionHeader } from "./HowItWorks";

const features = [
  { icon: Brain, title: "Smart AI Field Matching", desc: "Maps any field — even ones it has never seen — using semantic understanding." , span: "md:col-span-2 md:row-span-2" },
  { icon: FileText, title: "Resume Parsing", desc: "Drop your resume. Profile fills itself." },
  { icon: Users, title: "Multi Profiles", desc: "Switch personas in a click — work, freelance, side-hustle." },
  { icon: Lock, title: "End-to-End Encryption", desc: "256-bit at rest. Zero-knowledge by design.", span: "md:col-span-2" },
  { icon: RefreshCw, title: "Cross-device Sync", desc: "Your profile, everywhere." },
  { icon: Briefcase, title: "Jobs & Internships", desc: "Optimized for Greenhouse, Lever, Workday, Ashby." },
  { icon: Settings2, title: "Custom Sections", desc: "Add any structured field — ZappFill learns it." },
  { icon: Sparkles, title: "Adaptive Learning", desc: "Improves with every fill." },
  { icon: Chrome, title: "Browser Extension", desc: "Works on Chrome, Edge, Brave, Arc." },
  { icon: Wand2, title: "AI Suggestions", desc: "Tone-tuned answers for short essay fields." },
];

export function Features() {
  return (
    <section id="features" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Features" title="Everything you need. Nothing you don't." />
        <div className="mt-14 grid md:grid-cols-4 gap-4 auto-rows-[180px]">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 5) * 0.06 }}
              className={`group relative rounded-2xl glass border-gradient overflow-hidden p-6 hover:-translate-y-1 transition-all duration-500 ${f.span ?? ""}`}
            >
              <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl bg-violet/20 blur-xl" />
              <div className="relative h-full flex flex-col">
                <div className="h-10 w-10 rounded-xl bg-violet/25 grid place-items-center">
                  <f.icon className="h-5 w-5 text-cyan" />
                </div>
                <div className="mt-auto">
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
