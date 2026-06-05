import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Sparkles, Play, ArrowRight, Zap, Check } from "lucide-react";

const fields = [
  { label: "Full name", value: "Alex Morgan", delay: 0.4 },
  { label: "Email", value: "alex@fillzapp.com", delay: 0.9 },
  { label: "Phone", value: "+1 415 555 0188", delay: 1.4 },
  { label: "Position", value: "Senior Product Designer", delay: 1.9 },
  { label: "Portfolio", value: "alexmorgan.design", delay: 2.4 },
];

export function Hero() {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useTransform(my, [0, 1], [6, -6]);
  const rotateY = useTransform(mx, [0, 1], [-8, 8]);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative pt-36 pb-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: editorial headline block */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px w-12 bg-foreground/30" />
              <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2">
                <Sparkles className="h-3 w-3 text-cyan" />
                New · GPT-powered field matching
              </div>
            </motion.div>

            <div className="relative">
              <div
                aria-hidden
                className="pointer-events-none absolute -left-10 top-1/2 -translate-y-1/2 w-[700px] h-[320px] rounded-full blur-3xl opacity-40 dark:opacity-60"
                style={{ background: "radial-gradient(ellipse at center, oklch(0.72 0.20 295 / 0.35), transparent 70%)" }}
              />
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="relative text-left text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-bold leading-[1.04] tracking-tight"
              >
                <span className="block">Stop filling</span>
                <span className="block">the same forms</span>
                <span className="block italic font-display text-gradient pb-3">
                  again<span className="not-italic">.</span>
                </span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-6 max-w-xl text-base lg:text-[15px] leading-relaxed text-muted-foreground"
            >
              ZappFill automatically detects forms across the web and fills them using
              your AI-powered profile. Job applications, registrations, paperwork — done in one click.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-7 flex items-center gap-3 flex-wrap"
            >
              <a
                href="#cta"
                className="group inline-flex items-center gap-2 rounded-full bg-violet px-6 py-3 text-sm font-semibold text-white glow hover:scale-[1.02] transition"
              >
                Get started free
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-full glass-strong px-6 py-3 text-sm font-medium hover:bg-white/10 transition"
              >
                <Play className="h-4 w-4" />
                Watch demo
              </a>
            </motion.div>

            <div className="mt-8 flex items-center gap-6 text-xs text-muted-foreground">
              <div>
                <div className="text-2xl font-semibold text-foreground">0.8s</div>
                <div>avg fill time</div>
              </div>
              <div className="h-8 w-px bg-foreground/15" />
              <div>
                <div className="text-2xl font-semibold text-foreground">12k+</div>
                <div>forms / day</div>
              </div>
            </div>
          </div>

          {/* Right: animated live-fill card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <HeroLiveCard tick={tick} />
          </motion.div>
        </div>



        {/* Browser mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          onMouseMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            mx.set((e.clientX - r.left) / r.width);
            my.set((e.clientY - r.top) / r.height);
          }}
          onMouseLeave={() => { mx.set(0.5); my.set(0.5); }}
          style={{ perspective: 1400 }}
          className="mt-20 relative"
        >
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative mx-auto max-w-5xl glass-strong rounded-2xl overflow-hidden border-gradient shadow-[0_60px_120px_-30px_rgba(0,0,0,0.7)]"
          >
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-black/30">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/70" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <div className="h-3 w-3 rounded-full bg-green-500/70" />
              </div>
              <div className="mx-auto glass rounded-md px-4 py-1 text-xs text-muted-foreground">
                careers.acme.com/apply
              </div>
            </div>

            <div className="grid md:grid-cols-[1fr_280px] gap-0">
              <div className="p-8 md:p-10">
                <div className="text-xs uppercase tracking-widest text-cyan mb-2">Application</div>
                <h3 className="text-2xl font-display font-semibold mb-6">Senior Product Designer</h3>
                <div key={tick} className="space-y-4">
                  {fields.map((f, i) => (
                    <FormField key={f.label + tick} label={f.label} value={f.value} delay={f.delay + i * 0.05} />
                  ))}
                </div>
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3 }}
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-violet px-4 py-2 text-sm font-medium text-white"
                >
                  Submit application
                </motion.button>
              </div>

              {/* Side panel - AI status */}
              <div className="hidden md:block border-l border-white/5 bg-black/20 p-5">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                  <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                  ZappFill active
                </div>
                <div className="glass rounded-xl p-4 space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Zap className="h-4 w-4 text-violet" fill="currentColor" />
                    <span className="font-medium">AI matching fields</span>
                  </div>
                  <div className="space-y-2">
                    {fields.slice(0, 4).map((f, i) => (
                      <motion.div
                        key={f.label + tick}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: f.delay - 0.2 }}
                        className="flex items-center justify-between text-xs"
                      >
                        <span className="text-muted-foreground">{f.label}</span>
                        <Check className="h-3 w-3 text-green-400" />
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 text-xs text-muted-foreground">
                  Filled in <span className="text-foreground font-medium">0.8s</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating extension popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="hidden md:flex absolute -bottom-8 -right-4 lg:right-12 animate-float"
          >
            <div className="glass-strong rounded-2xl p-4 w-64 glow">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-7 w-7 rounded-lg bg-violet grid place-items-center">
                  <Zap className="h-3.5 w-3.5 text-white" fill="currentColor" />
                </div>
                <div>
                  <div className="text-sm font-semibold">ZappFill</div>
                  <div className="text-[10px] text-muted-foreground">Form detected</div>
                </div>
              </div>
              <button className="w-full rounded-lg bg-violet py-2 text-xs font-medium text-white">
                Autofill 5 fields
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function FormField({ label, value, delay }: { label: string; value: string; delay: number }) {
  return (
    <div>
      <div className="text-xs text-muted-foreground mb-1.5">{label}</div>
      <div className="relative h-10 rounded-lg glass overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ delay: delay - 0.3, duration: 0.6, times: [0, 0.2, 0.8, 1] }}
          className="absolute inset-0 shimmer"
        />
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay, duration: 0.4 }}
          className="absolute inset-0 px-3 flex items-center text-sm"
        >
          {value}
        </motion.div>
      </div>
    </div>
  );
}

function HeroLiveCard({ tick }: { tick: number }) {
  const items = [
    { label: "Full name", value: "Alex Morgan" },
    { label: "Email", value: "alex@fillzapp.com" },
    { label: "Phone", value: "+1 415 555 0188" },
    { label: "Position", value: "Senior Product Designer" },
  ];
  return (
    <div className="relative">
      {/* glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 rounded-[2rem] blur-3xl opacity-50"
        style={{ background: "radial-gradient(ellipse at 60% 40%, oklch(0.72 0.20 295 / 0.35), transparent 70%)" }}
      />
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative glass-strong border-gradient rounded-2xl overflow-hidden shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]"
      >
        {/* header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-black/20">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-violet grid place-items-center">
              <Zap className="h-3.5 w-3.5 text-white" fill="currentColor" />
            </div>
            <div className="text-sm font-semibold">ZappFill</div>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
            Live
          </div>
        </div>

        {/* body */}
        <div key={tick} className="p-5 space-y-3">
          {items.map((f, i) => (
            <motion.div
              key={f.label + tick}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.18, duration: 0.4 }}
              className="relative rounded-lg glass px-3 py-2.5 overflow-hidden"
            >
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">{f.label}</div>
              <div className="text-sm font-medium">{f.value}</div>
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "120%" }}
                transition={{ delay: 0.2 + i * 0.18, duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/15 to-transparent"
              />
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.7 + i * 0.18, type: "spring", stiffness: 300 }}
                className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 rounded-full bg-green-500/20 grid place-items-center"
              >
                <Check className="h-3 w-3 text-green-400" />
              </motion.div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="flex items-center justify-between pt-2"
          >
            <div className="text-[11px] text-muted-foreground">
              Filled in <span className="text-foreground font-semibold">0.8s</span>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-violet/15 text-violet px-2.5 py-1 text-[10px] font-medium">
              <Zap className="h-3 w-3" fill="currentColor" /> AI matched
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* floating chip */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute -left-4 -bottom-4 glass-strong rounded-xl px-3 py-2 text-xs flex items-center gap-2 animate-float"
      >
        <span className="h-2 w-2 rounded-full bg-cyan animate-pulse" />
        4 fields detected
      </motion.div>
    </div>
  );
}
