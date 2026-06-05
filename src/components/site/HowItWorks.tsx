import { motion } from "framer-motion";
import { Search, Wand2, Brain, Repeat } from "lucide-react";

const steps = [
  { icon: Search, title: "Detect", text: "The extension auto-detects any form on any site, instantly." },
  { icon: Wand2, title: "Fill", text: "AI maps fields intelligently and autofills in milliseconds." },
  { icon: Brain, title: "Learn", text: "Unknown fields are learned with your permission for next time." },
  { icon: Repeat, title: "Repeat", text: "Every future form becomes faster, smarter, more accurate." },
];

export function HowItWorks() {
  return (
    <section id="how" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="How it works" title="From chaos to one click." />
        <div className="relative mt-16">
          <div className="absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet/40 to-transparent hidden md:block" />
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative"
              >
                <div className="relative z-10 mx-auto h-24 w-24 rounded-2xl glass-strong border-gradient grid place-items-center glow">
                  <s.icon className="h-9 w-9 text-cyan" />
                </div>
                <div className="mt-6 text-center">
                  <div className="text-xs text-muted-foreground">Step {i + 1}</div>
                  <div className="mt-1 text-2xl font-display font-semibold">{s.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground max-w-[220px] mx-auto">{s.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block text-xs uppercase tracking-[0.2em] text-cyan"
      >
        {eyebrow}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-3 text-4xl md:text-5xl font-bold tracking-tight"
      >
        {title}
      </motion.h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}
