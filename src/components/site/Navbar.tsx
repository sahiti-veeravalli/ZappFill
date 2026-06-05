import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import logoLight from "@/assets/zappfill-logo-light.png";
import logoDark from "@/assets/zappfill-logo-dark.png";

export function Navbar() {
  const { theme, toggle } = useTheme();
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[min(1180px,94%)]"
    >
      <div className="rounded-full px-5 py-2.5 flex items-center justify-between border border-black/10 dark:border-white/15 bg-white/60 dark:bg-black/35 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_10px_40px_-10px_rgba(31,38,135,0.25)]">
        <a href="/" className="flex items-center -my-8">
          <img
            src={theme === "dark" ? logoDark : logoLight}
            alt="ZappFill"
            className="h-28 w-auto object-contain"
          />
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
          <a href="#dashboard" className="hover:text-foreground transition-colors">Dashboard</a>
          
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="h-9 w-9 grid place-items-center rounded-full hover:bg-muted transition"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a href="/dashboard" className="hidden sm:inline text-sm text-muted-foreground hover:text-foreground transition px-3 py-1.5">Sign in</a>
          <a
            href="/dashboard"
            className="text-sm font-medium px-4 py-2 rounded-full bg-violet text-white hover:opacity-90 transition glow"
          >
            Install free
          </a>
        </div>
      </div>
    </motion.header>
  );
}
