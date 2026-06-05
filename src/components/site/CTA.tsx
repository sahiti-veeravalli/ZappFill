import { motion } from "framer-motion";
import { Chrome, ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="cta" className="px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-5xl rounded-3xl glass-strong border-gradient overflow-hidden p-12 md:p-20 text-center"
      >
        <div className="absolute inset-0 bg-mesh opacity-80" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-violet/30 blur-[120px]" />
        <div className="relative">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Never fill the same form <span className="text-gradient">twice.</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
            Install the extension in 30 seconds. Your future self will thank you.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
            <a className="group inline-flex items-center gap-2 rounded-full bg-violet px-6 py-3 text-sm font-semibold text-white glow hover:scale-[1.03] transition">
              <Chrome className="h-4 w-4" /> Install extension
            </a>
            <a className="inline-flex items-center gap-2 rounded-full glass-strong px-6 py-3 text-sm font-medium hover:bg-white/10 transition">
              Join waitlist <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
