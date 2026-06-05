import { motion } from "framer-motion";

const stats = [
  { v: "10,000+", l: "Forms Filled" },
  { v: "95%", l: "Autofill Accuracy" },
  { v: "3×", l: "Faster Applications" },
  { v: "256-bit", l: "Encryption" },
];

export function Stats() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.l}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="glass rounded-2xl p-6 border-gradient relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-violet/0 group-hover:bg-violet/10 transition-all duration-500" />
            <div className="relative">
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient">{s.v}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
