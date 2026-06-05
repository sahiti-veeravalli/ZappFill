import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutGrid, User, MapPin, Briefcase, GraduationCap, Target, IdCard,
  Wallet, Globe, Plus, Sparkles, Shield, Settings, LogOut, Search, Bell,
  Moon, Sun, ChevronDown, Zap, Upload, FileText, FolderGit2, Wrench,
  TrendingUp, Award, Lock, Smartphone, Eye, EyeOff,
} from "lucide-react";
import { ThemeProvider, useTheme } from "@/components/site/ThemeProvider";
import { AmbientBackground } from "@/components/site/Background";
import { CursorGlow } from "@/components/site/CursorGlow";
import logo from "@/assets/zappfill-logo.png";

export const Route = createFileRoute("/dashboard")({
  component: DashboardPage,
  head: () => ({
    meta: [{ title: "Dashboard — ZappFill" }],
  }),
});

type SectionId =
  | "overview" | "personal" | "address" | "professional" | "education"
  | "work" | "projects" | "skills" | "social" | "jobs" | "documents"
  | "gov" | "custom" | "autofill" | "security" | "settings";

const NAV: { id: SectionId; label: string; icon: any }[] = [
  { id: "overview", label: "Overview", icon: LayoutGrid },
  { id: "personal", label: "Personal Info", icon: User },
  { id: "address", label: "Addresses", icon: MapPin },
  { id: "professional", label: "Professional", icon: Briefcase },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "work", label: "Work Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "skills", label: "Skills", icon: Wrench },
  { id: "social", label: "Social Profiles", icon: Globe },
  { id: "jobs", label: "Job Preferences", icon: Target },
  { id: "documents", label: "Documents", icon: FileText },
  { id: "gov", label: "Government IDs", icon: IdCard },
  { id: "custom", label: "Custom Fields", icon: Plus },
  { id: "autofill", label: "Autofill Intelligence", icon: Sparkles },
  { id: "security", label: "Security", icon: Shield },
  { id: "settings", label: "Settings", icon: Settings },
];

function DashboardPage() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen text-foreground antialiased">
        <AmbientBackground />
        <CursorGlow />
        <DashboardShell />
      </div>
    </ThemeProvider>
  );
}

function DashboardShell() {
  const [active, setActive] = useState<SectionId>("overview");
  const { theme, toggle } = useTheme();

  return (
    <div className="relative z-10 flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-[252px] shrink-0 border-r border-white/40 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-2xl backdrop-saturate-150 flex flex-col">
        <Link to="/" className="flex items-center px-4 h-[72px]">
          <img src={logo} alt="ZappFill" className="h-14 w-auto object-contain" />
        </Link>

        <nav className="flex-1 px-3 pt-2 pb-4 space-y-0.5 overflow-y-auto">
          {NAV.map((n) => {
            const isActive = active === n.id;
            return (
              <button
                key={n.id}
                onClick={() => setActive(n.id)}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm transition ${
                  isActive
                    ? "bg-violet text-white shadow-[0_8px_24px_-10px_oklch(0.72_0.20_295_/_0.7)]"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/60 dark:hover:bg-white/5"
                }`}
              >
                <n.icon className="h-4 w-4" />
                <span className="font-medium">{n.label}</span>
                {n.id === "social" && (
                  <Plus className={`h-3.5 w-3.5 ml-auto ${isActive ? "text-white/80" : "text-muted-foreground"}`} />
                )}
              </button>
            );
          })}
        </nav>

        {/* Profile completeness */}
        <div className="m-3 p-3 rounded-xl glass">
          <div className="text-[11px] text-muted-foreground">Profile completeness</div>
          <div className="mt-2 flex items-center gap-3">
            <div className="relative h-11 w-11">
              <svg viewBox="0 0 36 36" className="h-11 w-11 -rotate-90">
                <circle cx="18" cy="18" r="15" fill="none" stroke="currentColor" strokeOpacity="0.12" strokeWidth="3" />
                <circle cx="18" cy="18" r="15" fill="none" stroke="oklch(0.72 0.20 295)" strokeWidth="3"
                  strokeDasharray="94.25" strokeDashoffset="13.2" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 grid place-items-center text-[10px] font-bold">86%</div>
            </div>
            <div className="text-xs">
              <div className="font-semibold flex items-center gap-1">Great job! 🎉</div>
              <div className="text-muted-foreground leading-tight mt-0.5">Keep going to make autofill even smarter.</div>
            </div>
          </div>
          <button className="mt-2 text-xs text-violet font-medium hover:opacity-80">Improve now →</button>
        </div>

        <Link to="/" className="px-6 py-4 border-t border-white/40 dark:border-white/10 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
          <LogOut className="h-4 w-4" /> Log out
        </Link>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="sticky top-0 z-20 h-[68px] flex items-center gap-3 px-6 border-b border-white/40 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-2xl">
          <div className="flex-1 max-w-2xl relative">
            <Search className="h-4 w-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search anything..."
              className="w-full h-10 pl-10 pr-16 rounded-xl bg-white/60 dark:bg-white/5 border border-white/60 dark:border-white/10 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-violet/50 transition"
            />
            <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-muted-foreground border border-border rounded px-1.5 py-0.5">⌘K</kbd>
          </div>
          <button className="relative h-10 w-10 grid place-items-center rounded-xl hover:bg-white/60 dark:hover:bg-white/5 transition">
            <Bell className="h-4 w-4" />
            <span className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-violet" />
          </button>
          <button onClick={toggle} className="h-10 w-10 grid place-items-center rounded-xl hover:bg-white/60 dark:hover:bg-white/5 transition">
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button className="h-10 pl-1 pr-3 flex items-center gap-2 rounded-xl hover:bg-white/60 dark:hover:bg-white/5 transition">
            <div className="h-8 w-8 rounded-lg bg-violet grid place-items-center text-white text-xs font-bold">SV</div>
            <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
          </button>
        </header>

        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {renderSection(active)}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

function renderSection(id: SectionId) {
  switch (id) {
    case "overview": return <Overview />;
    case "personal": return <PersonalInfo />;
    case "address": return <Addresses />;
    case "professional": return <Professional />;
    case "education": return <Education />;
    case "work": return <WorkExperience />;
    case "projects": return <Projects />;
    case "skills": return <Skills />;
    case "social": return <Social />;
    case "jobs": return <JobPreferences />;
    case "documents": return <Documents />;
    case "gov": return <GovIds />;
    case "custom": return <CustomFields />;
    case "autofill": return <Autofill />;
    case "security": return <Security />;
    case "settings": return <SettingsView />;
  }
}

/* ------------ Shared primitives ------------ */

function PageHeader({ title, sub, actions }: { title: React.ReactNode; sub?: string; actions?: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight">{title}</h1>
        {sub && <p className="mt-1.5 text-sm text-muted-foreground">{sub}</p>}
      </div>
      {actions}
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white/70 dark:bg-white/5 border border-white/60 dark:border-white/10 p-4 hover:border-violet/40 transition">
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">{label}</div>
      <div className="mt-1.5 text-sm font-medium">{value}</div>
    </div>
  );
}

function Btn({ children, variant = "ghost", icon: Icon }: { children: React.ReactNode; variant?: "primary" | "ghost"; icon?: any }) {
  if (variant === "primary") {
    return (
      <button className="inline-flex items-center gap-1.5 rounded-xl bg-violet text-white px-4 py-2 text-sm font-medium hover:opacity-90 transition glow">
        {Icon && <Icon className="h-3.5 w-3.5" />} {children}
      </button>
    );
  }
  return (
    <button className="inline-flex items-center gap-1.5 rounded-xl bg-white/70 dark:bg-white/5 border border-white/60 dark:border-white/10 px-4 py-2 text-sm font-medium hover:border-violet/40 transition">
      {Icon && <Icon className="h-3.5 w-3.5" />} {children}
    </button>
  );
}

function Card({ title, icon: Icon, action, children }: { title: string; icon: any; action?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl glass p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-violet/15 text-violet grid place-items-center">
            <Icon className="h-4 w-4" />
          </div>
          <h3 className="font-display font-semibold text-base">{title}</h3>
        </div>
        {action}
      </div>
      {children}
    </div>
  );
}

function Row({ icon: Icon, label, value, status }: { icon: any; label: string; value?: string; status?: { text: string; tone: "verified" | "synced" | "ai" | "muted" } }) {
  const toneCls = {
    verified: "text-emerald-600 bg-emerald-500/10",
    synced: "text-violet bg-violet/10",
    ai: "text-violet bg-violet/10",
    muted: "text-muted-foreground bg-muted",
  };
  return (
    <div className="flex items-center gap-3 py-2.5 text-sm">
      <Icon className="h-4 w-4 text-muted-foreground shrink-0" />
      <span className="text-muted-foreground w-32 shrink-0">{label}</span>
      <span className="flex-1 truncate font-medium">{value ?? "—"}</span>
      {status ? (
        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${toneCls[status.tone]}`}>{status.text}</span>
      ) : value ? null : (
        <span className="text-xs text-muted-foreground">Not added</span>
      )}
    </div>
  );
}

/* ------------ Overview ------------ */

function Overview() {
  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div>
          <p className="text-sm text-muted-foreground">Welcome back,</p>
          <h1 className="mt-1 text-4xl md:text-5xl font-display font-bold tracking-tight">
            Sahiti <span className="text-violet">Veeravalli</span>
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">Here's a summary of your saved information.</p>
        </div>
        <Btn variant="primary" icon={Plus}>Pin fields</Btn>
      </div>

      <div className="rounded-2xl glass p-4 mb-6 flex items-center gap-3">
        <div className="h-9 w-9 rounded-lg bg-violet/15 text-violet grid place-items-center"><Sparkles className="h-4 w-4" /></div>
        <div className="flex-1 text-sm">
          <span className="font-semibold">No field is mandatory.</span>{" "}
          <span className="text-muted-foreground">Fill only what you're comfortable with — your data is encrypted and never shared.</span>
        </div>
        <button className="text-sm text-violet font-medium">Learn more</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {[
          { v: "12", l: "Fields Saved", i: FileText },
          { v: "48", l: "Forms Filled", i: Briefcase },
          { v: "2.5 hrs", l: "Time Saved", i: TrendingUp },
        ].map((s) => (
          <div key={s.l} className="rounded-2xl glass p-5 flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-violet/15 text-violet grid place-items-center"><s.i className="h-5 w-5" /></div>
            <div className="flex-1">
              <div className="text-3xl font-display font-bold tracking-tight">{s.v}</div>
              <div className="text-xs text-muted-foreground">{s.l}</div>
            </div>
            <svg viewBox="0 0 80 28" className="h-7 w-20 text-violet/60">
              <polyline fill="none" stroke="currentColor" strokeWidth="1.5" points="0,20 12,16 24,18 36,10 48,14 60,6 72,10 80,4" />
            </svg>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card title="Personal Information" icon={User} action={<button className="text-xs text-muted-foreground hover:text-violet">✎ Edit</button>}>
          <Row icon={User} label="Full Name" value="Sahiti Veeravalli" status={{ text: "Verified ✓", tone: "verified" }} />
          <Row icon={Globe} label="Email" value="sahiti.veeravalli19@gmail.com" status={{ text: "Verified ✓", tone: "verified" }} />
          <Row icon={Smartphone} label="Phone" value="+91 98765 43210" status={{ text: "Verified ✓", tone: "verified" }} />
          <Row icon={Globe} label="LinkedIn" value="linkedin.com/in/sahiti-veeravalli" status={{ text: "Synced ✓", tone: "synced" }} />
          <Row icon={Briefcase} label="Years of Experience" value="2" status={{ text: "AI Detected", tone: "ai" }} />
          <button className="mt-3 text-sm text-violet font-medium hover:opacity-80">View all personal fields →</button>
        </Card>

        <Card title="Education" icon={GraduationCap} action={<button className="text-xs text-muted-foreground hover:text-violet">✎ Edit</button>}>
          <Row icon={GraduationCap} label="University" />
          <Row icon={Award} label="Degree" />
          <Row icon={FileText} label="Field of Study" />
          <Row icon={TrendingUp} label="Year of Graduation" />
          <button className="mt-3 text-sm text-violet font-medium hover:opacity-80">+ Add education</button>
        </Card>

        <Card title="Professional" icon={Briefcase} action={<button className="text-xs text-muted-foreground hover:text-violet">✎ Edit</button>}>
          <Row icon={Briefcase} label="Current Title" />
          <Row icon={Briefcase} label="Company" />
        </Card>

        <Card title="Job Preferences" icon={Target} action={<button className="text-xs text-muted-foreground hover:text-violet">✎ Edit</button>}>
          <Row icon={Target} label="Preferred Role" />
          <Row icon={Briefcase} label="Job Type" />
        </Card>
      </div>
    </div>
  );
}

/* ------------ Sections ------------ */

function PersonalInfo() {
  return (
    <div>
      <PageHeader
        title="Personal Information"
        sub="Used across 142 fields you've filled."
        actions={<div className="flex gap-2"><Btn icon={Upload}>Import resume</Btn><Btn variant="primary" icon={Plus}>Add field</Btn></div>}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Full Name" value="Sahiti Veeravalli" />
        <Field label="Email" value="sahiti@fillzapp.com" />
        <Field label="Phone" value="+91 98765 43210" />
        <Field label="Date of Birth" value="14 May 2002" />
        <Field label="Gender" value="Female" />
        <Field label="Location" value="Bengaluru, IN" />
      </div>
      <div className="mt-6 rounded-2xl glass p-4 flex items-center gap-3">
        <div className="h-9 w-9 rounded-lg bg-violet/15 text-violet grid place-items-center"><Sparkles className="h-4 w-4" /></div>
        <div className="flex-1 text-sm">
          <div className="font-semibold">AI-learned 3 new fields this week</div>
          <div className="text-muted-foreground text-xs">"Work authorization", "Notice period", "Salary expectation" — review to approve.</div>
        </div>
        <button className="text-sm text-violet font-medium">Review</button>
      </div>
    </div>
  );
}

function Addresses() {
  return (
    <div>
      <PageHeader title="Addresses" sub="Saved locations used for shipping, KYC, and forms." actions={<Btn variant="primary" icon={Plus}>Add address</Btn>} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Country" value="India" />
        <Field label="State" value="Karnataka" />
        <Field label="City" value="Bengaluru" />
        <Field label="ZIP / Postal Code" value="560001" />
        <div className="md:col-span-2"><Field label="Full Address" value="42 MG Road, Indiranagar, Bengaluru 560001" /></div>
      </div>
    </div>
  );
}

function Education() {
  return (
    <div>
      <PageHeader title="Education" sub="Universities, degrees, and certifications." actions={<Btn variant="primary" icon={Plus}>Add education</Btn>} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="University" value="Indian Institute of Technology" />
        <Field label="Degree" value="B.Tech" />
        <Field label="Field of Study" value="Computer Science" />
        <Field label="CGPA / GPA" value="8.7 / 10" />
        <Field label="Year of Graduation" value="2024" />
      </div>
    </div>
  );
}

function Professional() {
  return (
    <div>
      <PageHeader title="Professional" sub="Current role and headline information." actions={<Btn variant="primary" icon={Plus}>Add field</Btn>} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Current Role" value="Frontend Engineer" />
        <Field label="Company" value="ZappFill" />
        <Field label="Total Experience" value="2 years" />
        <Field label="Skills" value="React, TypeScript, Tailwind, Node" />
      </div>
    </div>
  );
}

function WorkExperience() {
  const items = [
    { c: "ZappFill", r: "Frontend Engineer", s: "Jan 2024", e: "Present" },
    { c: "Acme Labs", r: "SDE Intern", s: "May 2023", e: "Aug 2023" },
  ];
  return (
    <div>
      <PageHeader title="Work Experience" sub="Roles, responsibilities, and timelines." actions={<Btn variant="primary" icon={Plus}>Add experience</Btn>} />
      <div className="space-y-3">
        {items.map((it) => (
          <div key={it.c} className="rounded-2xl glass p-5 flex flex-wrap items-center gap-4">
            <div className="h-11 w-11 rounded-xl bg-violet/15 text-violet grid place-items-center"><Briefcase className="h-5 w-5" /></div>
            <div className="flex-1 min-w-[200px]">
              <div className="font-semibold">{it.r}</div>
              <div className="text-sm text-muted-foreground">{it.c}</div>
            </div>
            <div className="text-xs text-muted-foreground">{it.s} — {it.e}</div>
            <button className="text-xs text-muted-foreground hover:text-violet">Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Projects() {
  const items = [
    { n: "ZappFill", d: "AI autofill extension for the web.", g: "github.com/sahiti/fillzapp", t: "React · TS · Vite" },
    { n: "Resume.AI", d: "Resume parser & ranker.", g: "github.com/sahiti/resumeai", t: "Python · FastAPI" },
  ];
  return (
    <div>
      <PageHeader title="Projects" sub="Showcase the work you're proud of." actions={<Btn variant="primary" icon={Plus}>Add project</Btn>} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((p) => (
          <div key={p.n} className="rounded-2xl glass p-5">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="h-9 w-9 rounded-lg bg-violet/15 text-violet grid place-items-center"><FolderGit2 className="h-4 w-4" /></div>
              <h3 className="font-display font-semibold">{p.n}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{p.d}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.t.split(" · ").map((tag) => (
                <span key={tag} className="text-[11px] px-2 py-1 rounded-full bg-violet/10 text-violet font-medium">{tag}</span>
              ))}
            </div>
            <div className="mt-3 text-xs text-muted-foreground">🔗 {p.g}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  const items = [
    { n: "React", l: 95 }, { n: "TypeScript", l: 90 }, { n: "Tailwind CSS", l: 92 },
    { n: "Node.js", l: 78 }, { n: "Python", l: 70 }, { n: "Figma", l: 85 },
  ];
  return (
    <div>
      <PageHeader title="Skills" sub="Proficiency across tools and languages." actions={<Btn variant="primary" icon={Plus}>Add skill</Btn>} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((s) => (
          <div key={s.n} className="rounded-2xl glass p-5">
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold">{s.n}</span>
              <span className="text-muted-foreground">{s.l}%</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-white/60 dark:bg-white/10 overflow-hidden">
              <div className="h-full bg-violet rounded-full" style={{ width: `${s.l}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Social() {
  return (
    <div>
      <PageHeader title="Social Profiles" sub="Where you live online." actions={<Btn variant="primary" icon={Plus}>Add profile</Btn>} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="LinkedIn" value="linkedin.com/in/sahiti-veeravalli" />
        <Field label="GitHub" value="github.com/sahiti" />
        <Field label="Portfolio" value="sahiti.design" />
        <Field label="LeetCode" value="leetcode.com/sahiti" />
      </div>
    </div>
  );
}

function JobPreferences() {
  return (
    <div>
      <PageHeader title="Job Preferences" sub="Helps autofill matching and recruiter forms." actions={<Btn variant="primary" icon={Plus}>Edit</Btn>} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Preferred Role" value="Frontend Engineer" />
        <Field label="Job Type" value="Full-time" />
        <Field label="Preferred Location" value="Remote / Bengaluru" />
        <Field label="Expected Salary" value="₹ 18 LPA" />
      </div>
    </div>
  );
}

function Documents() {
  const items = [
    { n: "Resume_2025.pdf", t: "Resume", s: "248 KB" },
    { n: "Certificate_AWS.pdf", t: "Certificate", s: "1.2 MB" },
    { n: "CoverLetter_Generic.pdf", t: "Cover Letter", s: "96 KB" },
  ];
  return (
    <div>
      <PageHeader title="Documents" sub="Uploads we attach to forms when needed." actions={<Btn variant="primary" icon={Upload}>Upload</Btn>} />
      <div className="space-y-3">
        {items.map((d) => (
          <div key={d.n} className="rounded-2xl glass p-4 flex items-center gap-4">
            <div className="h-11 w-11 rounded-xl bg-violet/15 text-violet grid place-items-center"><FileText className="h-5 w-5" /></div>
            <div className="flex-1">
              <div className="font-medium text-sm">{d.n}</div>
              <div className="text-xs text-muted-foreground">{d.t} · {d.s}</div>
            </div>
            <button className="text-xs text-muted-foreground hover:text-violet">Replace</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function GovIds() {
  const [show, setShow] = useState(false);
  const mask = (v: string) => (show ? v : v.replace(/[A-Z0-9]/g, "•"));
  return (
    <div>
      <PageHeader
        title="Government IDs"
        sub="Encrypted, never shared without your approval."
        actions={
          <button onClick={() => setShow((s) => !s)} className="inline-flex items-center gap-1.5 rounded-xl bg-white/70 dark:bg-white/5 border border-white/60 dark:border-white/10 px-4 py-2 text-sm">
            {show ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />} {show ? "Hide" : "Reveal"}
          </button>
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Field label="Passport" value={mask("M8123456")} />
        <Field label="Aadhaar" value={mask("1234 5678 9012")} />
        <Field label="PAN" value={mask("ABCDE1234F")} />
      </div>
    </div>
  );
}

function CustomFields() {
  return (
    <div>
      <PageHeader title="Custom Fields" sub="Define your own fields and sections." actions={<Btn variant="primary" icon={Plus}>New field</Btn>} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Notice Period" value="30 days" />
        <Field label="Work Authorization" value="Indian Citizen" />
        <Field label="Languages" value="English, Telugu, Hindi" />
        <Field label="Hobbies" value="Design, reading, chess" />
      </div>
    </div>
  );
}

function Autofill() {
  return (
    <div>
      <PageHeader title="Autofill Intelligence" sub="What ZappFill has learned about your forms." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {[
          { v: "27", l: "Learned Fields", i: Sparkles },
          { v: "142", l: "Saved Mappings", i: FileText },
          { v: "98%", l: "Suggestion Accuracy", i: TrendingUp },
        ].map((s) => (
          <div key={s.l} className="rounded-2xl glass p-5">
            <div className="h-9 w-9 rounded-lg bg-violet/15 text-violet grid place-items-center mb-3"><s.i className="h-4 w-4" /></div>
            <div className="text-3xl font-display font-bold">{s.v}</div>
            <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
          </div>
        ))}
      </div>
      <div className="rounded-2xl glass p-5">
        <h3 className="font-display font-semibold mb-3">Recent Suggestions</h3>
        {["Notice period → 30 days", "Salary expectation → ₹18 LPA", "Work authorization → Indian Citizen"].map((s) => (
          <div key={s} className="flex items-center justify-between py-2.5 border-b border-white/40 dark:border-white/10 last:border-0">
            <span className="text-sm">{s}</span>
            <div className="flex gap-2">
              <button className="text-xs px-3 py-1 rounded-lg bg-violet text-white">Approve</button>
              <button className="text-xs px-3 py-1 rounded-lg bg-white/60 dark:bg-white/5 border border-white/60 dark:border-white/10">Dismiss</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Security() {
  return (
    <div>
      <PageHeader title="Security" sub="Keep your account locked down." />
      <div className="space-y-4">
        <div className="rounded-2xl glass p-5 flex items-center gap-4">
          <div className="h-11 w-11 rounded-xl bg-violet/15 text-violet grid place-items-center"><Lock className="h-5 w-5" /></div>
          <div className="flex-1">
            <div className="font-semibold text-sm">Password</div>
            <div className="text-xs text-muted-foreground">Last changed 2 months ago</div>
          </div>
          <Btn>Change</Btn>
        </div>
        <div className="rounded-2xl glass p-5 flex items-center gap-4">
          <div className="h-11 w-11 rounded-xl bg-violet/15 text-violet grid place-items-center"><Shield className="h-5 w-5" /></div>
          <div className="flex-1">
            <div className="font-semibold text-sm">Two-factor authentication</div>
            <div className="text-xs text-muted-foreground">Authenticator app · Enabled</div>
          </div>
          <span className="text-[10px] font-semibold px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-600">Active</span>
        </div>
        <div className="rounded-2xl glass p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-11 w-11 rounded-xl bg-violet/15 text-violet grid place-items-center"><Smartphone className="h-5 w-5" /></div>
            <div>
              <div className="font-semibold text-sm">Trusted devices</div>
              <div className="text-xs text-muted-foreground">3 devices currently signed in</div>
            </div>
          </div>
          {[
            { d: "MacBook Pro · Bengaluru", t: "Active now" },
            { d: "iPhone 15 · Bengaluru", t: "2h ago" },
            { d: "Chrome · Windows · Hyderabad", t: "Yesterday" },
          ].map((dev) => (
            <div key={dev.d} className="flex items-center justify-between py-2.5 border-t border-white/40 dark:border-white/10 text-sm">
              <span>{dev.d}</span>
              <span className="text-xs text-muted-foreground">{dev.t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SettingsView() {
  return (
    <div>
      <PageHeader title="Settings" sub="Account preferences." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Language" value="English" />
        <Field label="Timezone" value="Asia/Kolkata" />
        <Field label="Email notifications" value="Weekly digest" />
        <Field label="Plan" value="Pro" />
      </div>
    </div>
  );
}
