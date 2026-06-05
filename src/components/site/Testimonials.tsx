import { motion } from "framer-motion";
import { SectionHeader } from "./HowItWorks";

const tweets = [
  { name: "Maya Chen", role: "CS student · Stanford", text: "Applied to 40 internships in a weekend. ZappFill turned each one from 15 minutes to 15 seconds." },
  { name: "Jordan Reyes", role: "Job seeker", text: "Workday forms used to make me cry. Now I genuinely don't think about them." },
  { name: "Ana Silva", role: "Freelance designer", text: "I have separate profiles for client onboarding forms. It's like having an assistant." },
  { name: "Devon Park", role: "New grad", text: "The AI learned weird custom questions on my second try. Wild." },
  { name: "Priya Kumar", role: "Bootcamp grad", text: "Got 3 interviews in the time it used to take to fill 5 applications." },
  { name: "Sam O'Connor", role: "Recruiter", text: "I recommend ZappFill to every candidate now. Seriously." },
];

export function Testimonials() {
  return (
    <section className="px-6 py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Loved by" title="People who got their time back." />
      </div>
      <div className="mt-14 relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-5 w-max"
        >
          {[...tweets, ...tweets].map((t, i) => (
            <div key={i} className="w-[340px] glass rounded-2xl p-5 border-gradient">
              <p className="text-sm">"{t.text}"</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-violet" />
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
