import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeader } from "./HowItWorks";

const plans = [
  { name: "Free", price: "$0", desc: "For getting started.", features: ["1 profile", "50 fills / month", "Basic AI matching", "Browser extension"] },
  { name: "Pro", price: "$9", desc: "For power applicants.", featured: true, features: ["Unlimited profiles", "Unlimited fills", "Advanced AI + essay help", "Resume parsing", "Cross-device sync", "Priority support"] },
  { name: "Teams", price: "$24", desc: "For agencies & coaches.", features: ["Everything in Pro", "5 seats included", "Shared templates", "Admin controls", "SAML SSO"] },
];

export function Pricing() {
  return (
    <section id="pricing" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Pricing" title="Start free. Scale when you're ready." />
        <div className="mt-14 grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative rounded-2xl p-7 transition-all duration-500 ${
                p.featured
                  ? "glass-strong border-gradient glow scale-[1.03] md:-translate-y-2"
                  : "glass border-gradient hover:-translate-y-1"
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest bg-violet px-3 py-1 rounded-full text-white font-semibold">
                  Most popular
                </div>
              )}
              <div className="text-sm text-muted-foreground">{p.name}</div>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-5xl font-display font-bold">{p.price}</span>
                <span className="text-sm text-muted-foreground">/mo</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              <button
                className={`mt-6 w-full rounded-xl py-2.5 text-sm font-semibold transition ${
                  p.featured
                    ? "bg-violet text-white hover:scale-[1.02]"
                    : "glass hover:bg-white/10"
                }`}
              >
                {p.featured ? "Start Pro trial" : "Choose " + p.name}
              </button>
              <div className="mt-6 space-y-2.5">
                {p.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-cyan shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
