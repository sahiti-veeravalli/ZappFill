import { ArrowRight, Star, Diamond } from "lucide-react";
import logo from "@/assets/zappfill-logo-light.png";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-[oklch(0.74_0.14_295)] text-white">
      {/* Decorative shapes */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <Star className="absolute top-10 right-[8%] h-6 w-6 text-white/60" fill="currentColor" />
        <Star className="absolute bottom-24 left-[6%] h-5 w-5 text-white/50" fill="currentColor" />
        <Diamond className="absolute top-1/2 right-[14%] h-5 w-5 text-white/50" />
        <Diamond className="absolute bottom-12 right-[40%] h-4 w-4 text-white/40" />
        <svg className="absolute top-20 left-[10%] h-10 w-24 text-white/40" viewBox="0 0 100 30" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M0 15 Q 12.5 0, 25 15 T 50 15 T 75 15 T 100 15" />
        </svg>
        <svg className="absolute bottom-32 left-[35%] h-8 w-20 text-white/30" viewBox="0 0 100 30" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M0 15 Q 12.5 0, 25 15 T 50 15 T 75 15 T 100 15" />
        </svg>
        <div className="absolute top-1/3 left-[3%] h-8 w-8 rounded-full border-2 border-dashed border-white/40" />
        <div className="absolute top-16 right-[30%] h-3 w-3 rotate-45 border-2 border-white/40" />
        <svg className="absolute bottom-20 right-[6%] h-10 w-10 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2 L4 14 h7 l-1 8 9-12 h-7 z" fill="currentColor" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center rounded-xl bg-white/95 px-3 py-1 w-fit">
              <img src={logo} alt="ZappFill" className="h-14 w-auto object-contain" />
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/80">
              Smart autofill platform that eliminates repetitive form filling. Save time and work smarter with intelligent automation.
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="flex items-center justify-between text-xs font-semibold tracking-[0.2em] text-white/90">
              STAY UPDATED
              <span className="text-lg font-light text-white/70">+</span>
            </h4>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-5 flex items-center gap-2 border-b border-white/40 pb-2"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent text-sm text-white placeholder:text-white/60 focus:outline-none"
              />
              <button type="submit" className="text-white/90 transition hover:text-white" aria-label="Subscribe">
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
            <p className="mt-3 text-xs text-white/70">
              By subscribing, you agree to our Privacy Policy.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] text-white/90">PRODUCT</h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li><a href="#features" className="text-white/85 transition hover:text-white">Features</a></li>
              <li><a href="#use-cases" className="text-white/85 transition hover:text-white">Use Cases</a></li>
              <li><a href="#how" className="text-white/85 transition hover:text-white">How It Works</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] text-white/90">CONNECT</h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li><a href="#" className="text-white/85 transition hover:text-white">Twitter</a></li>
              <li><a href="#" className="text-white/85 transition hover:text-white">LinkedIn</a></li>
              <li><a href="#" className="text-white/85 transition hover:text-white">GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/20 pt-6 text-center text-xs text-white/75">
          © {new Date().getFullYear()} ZappFill. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
