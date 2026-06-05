import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin } from "lucide-react";

export function GetInTouch() {
  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold tracking-tight"
        >
          Get in touch
        </motion.h2>
        <p className="mt-4 text-muted-foreground">
          Have questions or want to learn more? We'd love to hear from you.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
          {[
            { icon: Mail, title: "Email us", value: "hello@fillzapp.com", href: "mailto:hello@fillzapp.com" },
            { icon: MapPin, title: "Location", value: "Hyderabad, India" },
          ].map(({ icon: Icon, title, value, href }) => (
            <motion.a
              key={title}
              href={href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative rounded-3xl glass-strong p-10 border border-border/40 hover:border-violet/60 hover:shadow-[var(--shadow-glow)] transition-all duration-300"
            >
              <div className="grid place-items-center mx-auto h-14 w-14 rounded-full bg-violet/15 text-[oklch(0.55_0.18_295)] group-hover:bg-violet/25 group-hover:scale-110 transition-all duration-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{value}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-4"
        >
          <span className="text-muted-foreground text-lg">developed by</span>
          <span
            className="text-3xl md:text-4xl italic font-bold text-violet"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Sahiti
          </span>
          <span
            className="text-3xl md:text-4xl italic font-bold text-foreground"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Veeravalli
          </span>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="grid place-items-center h-9 w-9 rounded-md bg-[#0A66C2] text-white hover:scale-110 hover:shadow-[var(--shadow-glow)] transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" fill="currentColor" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
