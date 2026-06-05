import { motion } from "framer-motion";
import { Shield, Lock, Eye, KeyRound } from "lucide-react";

export function Security() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-cyan">Security</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
            Your data <span className="text-gradient">stays yours.</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg">
            All sensitive information is encrypted end-to-end and only filled with your explicit permission.
            Zero-knowledge architecture means even we can't read it.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {[
              [Lock, "AES-256 encryption", "At rest and in transit."],
              [KeyRound, "Zero-knowledge", "Only you hold the keys."],
              [Eye, "Permission first", "Nothing is filled without consent."],
              [Shield, "SOC 2 in progress", "Audited security controls."],
            ].map(([Icon, t, s]: any) => (
              <div key={t} className="glass rounded-xl p-4">
                <Icon className="h-5 w-5 text-cyan" />
                <div className="mt-2 text-sm font-semibold">{t}</div>
                <div className="text-xs text-muted-foreground">{s}</div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[420px] grid place-items-center"
        >
          <div className="absolute inset-0 grid place-items-center">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.7 }}
                className="absolute h-64 w-64 rounded-full border-2 border-violet/80 dark:border-violet/40"
              />
            ))}
          </div>
          <div className="relative h-32 w-32 rounded-3xl glass-strong border-gradient grid place-items-center glow">
            <Shield className="h-14 w-14 text-cyan" />
          </div>
          <div className="absolute top-4 left-4 glass rounded-lg px-3 py-2 text-xs animate-float">🔒 Encrypted</div>
          <div className="absolute bottom-4 right-4 glass rounded-lg px-3 py-2 text-xs animate-float [animation-delay:-2s]">✓ Permission granted</div>
          <div className="absolute top-12 right-8 glass rounded-lg px-3 py-2 text-xs animate-float [animation-delay:-4s]">🔑 Zero-knowledge</div>
        </motion.div>
      </div>
    </section>
  );
}
