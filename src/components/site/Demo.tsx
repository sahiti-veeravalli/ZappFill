import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Zap, Loader2, Check } from "lucide-react";
import { SectionHeader } from "./HowItWorks";

const sample = [
  { k: "First name", v: "Alex" },
  { k: "Last name", v: "Morgan" },
  { k: "Email", v: "alex@fillzapp.com" },
  { k: "LinkedIn", v: "linkedin.com/in/alexm" },
  { k: "Years of experience", v: "7" },
  { k: "Visa sponsorship", v: "No" },
];

export function Demo() {
  const [filled, setFilled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [learning, setLearning] = useState(false);

  const run = () => {
    setFilled(false);
    setProgress(0);
    setLearning(false);
    let p = 0;
    const id = setInterval(() => {
      p += 8;
      setProgress(Math.min(p, 100));
      if (p >= 60 && !learning) setLearning(true);
      if (p >= 100) {
        clearInterval(id);
        setFilled(true);
        setTimeout(() => setLearning(false), 800);
      }
    }, 60);
  };

  return (
    <section id="demo" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Live demo" title="Click. Watch the magic." sub="A real form. A real profile. One real click." />

        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          {/* Form */}
          <div className="glass-strong rounded-2xl border-gradient p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm text-muted-foreground">careers.acme.com</div>
              <button
                onClick={run}
                className="inline-flex items-center gap-2 rounded-full bg-violet px-4 py-2 text-xs font-semibold text-white glow hover:scale-105 transition"
              >
                <Zap className="h-3.5 w-3.5" fill="currentColor" />
                Autofill
              </button>
            </div>

            <div className="space-y-3">
              {sample.map((f, i) => (
                <div key={f.k}>
                  <div className="text-xs text-muted-foreground mb-1">{f.k}</div>
                  <div className="relative h-10 rounded-lg glass overflow-hidden">
                    <AnimatePresence>
                      {filled && (
                        <motion.div
                          key="v"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.08 }}
                          className="absolute inset-0 px-3 flex items-center justify-between text-sm"
                        >
                          <span>{f.v}</span>
                          <Check className="h-3.5 w-3.5 text-green-400" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {progress > 0 && !filled && (
                      <div className="absolute inset-0 shimmer" />
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  className="h-full bg-violet"
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
              <div className="mt-2 text-xs text-muted-foreground flex items-center gap-2">
                {progress === 0 && "Idle"}
                {progress > 0 && progress < 100 && (
                  <><Loader2 className="h-3 w-3 animate-spin" /> AI matching fields… {progress}%</>
                )}
                {filled && <><Check className="h-3 w-3 text-green-400" /> Filled in 0.8s</>}
              </div>
            </div>
          </div>

          {/* Profile dashboard */}
          <div className="glass-strong rounded-2xl border-gradient p-6 md:p-8 relative overflow-hidden">
            <div className="text-sm font-semibold">Your ZappFill profile</div>
            <div className="mt-1 text-xs text-muted-foreground">Source of truth, encrypted.</div>

            <div className="mt-5 space-y-2">
              {sample.map((f) => (
                <div key={f.k} className="flex items-center justify-between glass rounded-lg px-3 py-2.5 text-sm">
                  <span className="text-muted-foreground text-xs">{f.k}</span>
                  <span className="font-medium">{f.v}</span>
                </div>
              ))}
            </div>

            <AnimatePresence>
              {learning && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 glass rounded-lg p-3 flex items-center gap-2 text-xs border border-cyan/30"
                >
                  <Loader2 className="h-3.5 w-3.5 animate-spin text-cyan" />
                  Learning new field: <span className="font-medium">"Visa sponsorship"</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
