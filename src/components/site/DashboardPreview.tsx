import { motion } from "framer-motion";
import { User, GraduationCap, Briefcase, Award, FileText, Users, Shield, Plus, Upload, Sparkles } from "lucide-react";
import { SectionHeader } from "./HowItWorks";

const nav = [
  { i: User, l: "Personal Info", active: true },
  { i: GraduationCap, l: "Education" },
  { i: Briefcase, l: "Experience" },
  { i: Award, l: "Certifications" },
  { i: FileText, l: "Documents" },
  { i: Users, l: "Profiles" },
  { i: Shield, l: "Security" },
];

export function DashboardPreview() {
  return (
    <section id="dashboard" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Dashboard" title="Your data, beautifully organized." sub="One source of truth that powers every form, everywhere." />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 glass-strong rounded-2xl border-gradient overflow-hidden shadow-[0_60px_120px_-30px_rgba(0,0,0,0.7)]"
        >
          <div className="grid grid-cols-[220px_1fr] min-h-[560px]">
            {/* Sidebar */}
            <aside className="border-r border-white/5 bg-black/30 p-4">
              <div className="px-2 mb-5 text-xs uppercase tracking-widest text-muted-foreground">Profile</div>
              <nav className="space-y-1">
                {nav.map((n) => (
                  <button
                    key={n.l}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition ${
                      n.active ? "bg-violet/25 text-foreground" : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                    }`}
                  >
                    <n.i className="h-4 w-4" />
                    {n.l}
                  </button>
                ))}
              </nav>

              <div className="mt-8 glass rounded-xl p-3">
                <div className="text-xs text-muted-foreground">Profile completeness</div>
                <div className="mt-2 h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full w-[86%] bg-violet" />
                </div>
                <div className="mt-1.5 text-xs">86%</div>
              </div>
            </aside>

            {/* Main */}
            <main className="p-6 md:p-8">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div>
                  <h3 className="text-2xl font-display font-semibold">Personal Information</h3>
                  <p className="text-sm text-muted-foreground">Used across 142 fields you've filled.</p>
                </div>
                <div className="flex gap-2">
                  <button className="inline-flex items-center gap-1.5 rounded-lg glass px-3 py-2 text-xs hover:bg-white/10 transition">
                    <Upload className="h-3.5 w-3.5" /> Import resume
                  </button>
                  <button className="inline-flex items-center gap-1.5 rounded-lg bg-violet px-3 py-2 text-xs font-medium text-white">
                    <Plus className="h-3.5 w-3.5" /> Add field
                  </button>
                </div>
              </div>

              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {[
                  ["Full name", "Alex Morgan"],
                  ["Email", "alex@fillzapp.com"],
                  ["Phone", "+1 415 555 0188"],
                  ["Location", "San Francisco, CA"],
                  ["LinkedIn", "linkedin.com/in/alexm"],
                  ["Portfolio", "alexmorgan.design"],
                ].map(([k, v]) => (
                  <div key={k} className="glass rounded-xl p-4 group hover:border-violet/30 transition border border-transparent">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{k}</div>
                    <div className="mt-1 text-sm font-medium">{v}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 glass rounded-xl p-4 flex items-start gap-3 border border-cyan/20">
                <div className="h-8 w-8 rounded-lg bg-violet grid place-items-center shrink-0">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">AI-learned 3 new fields this week</div>
                  <div className="text-xs text-muted-foreground mt-0.5">"Work authorization", "Notice period", "Salary expectation" — review to approve.</div>
                </div>
                <button className="text-xs px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 transition">Review</button>
              </div>
            </main>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
