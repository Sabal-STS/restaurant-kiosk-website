import { whatsappDemoUrl } from "../lib/contact";

const benefits = [
  {
    label: "Unified Platform",
    text: "Replace your fragmented systems. Manage dine-in, takeaway, inventory, billing, and staff all from a single, cohesive dashboard.",
  },
  {
    label: "Frictionless Ordering",
    text: "Whether through a self-service kiosk or staff tablets, our interface is optimized for speed, accuracy, and intelligent upselling.",
  },
  {
    label: "Real-Time Sync",
    text: "Zero delays. Orders flow instantly to the kitchen display, and status updates push right back to staff and customers.",
  },
  {
    label: "Enterprise Security",
    text: "Station-level authentication ensures your data and terminals remain strictly locked down to authorized personnel only.",
  },
];

export default function MarketingClose() {
  return (
    <div
      className="relative z-[60] text-warm-white border-t border-white/5"
      style={{ backgroundColor: "#0A0A08" }}
    >
      <section
        className="relative px-6 py-32 md:px-10 lg:px-12"
        style={{ backgroundColor: "#0A0A08" }}
      >
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-[#F5A623]/60 shadow-[0_0_8px_rgba(245,166,35,0.8)]" />
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#F5A623] drop-shadow-[0_0_8px_rgba(245,166,35,0.4)]">
                Why Restaurants Choose It
              </p>
            </div>
            <h2 className="mt-8 max-w-xl text-4xl font-light leading-[1.1] text-white md:text-6xl tracking-tight">
              A complete system, <span className="text-warm-white/40">built for speed.</span>
            </h2>
            <p className="mt-6 text-warm-white/60 leading-relaxed max-w-md">
              Everything you need to run a high-volume restaurant, engineered into a single, beautiful platform.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <article
                key={benefit.label}
                className="group cursor-glow-target rounded-2xl border border-warm-white/10 bg-white/[0.02] p-8 backdrop-blur-md transition-all duration-500 hover:border-[#F5A623]/40 hover:bg-white/[0.04] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)]"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#F5A623]/10 group-hover:border-[#F5A623]/30 transition-colors duration-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-warm-white/40 group-hover:bg-[#F5A623] group-hover:shadow-[0_0_8px_#F5A623] transition-all duration-500" />
                </div>
                <h3 className="text-lg font-medium text-white mb-3">
                  {benefit.label}
                </h3>
                <p className="text-sm leading-relaxed text-warm-white/60 group-hover:text-warm-white/80 transition-colors duration-500">
                  {benefit.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="px-6 pb-24 pt-10 md:px-10 lg:px-12"
      >
        <div className="mx-auto max-w-7xl border-t border-warm-white/10 pt-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4">
              <div className="w-8 h-[1px] bg-[#F5A623]/60" />
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#F5A623]">
                STS Kiosk
              </p>
            </div>
            <h2 className="mt-8 text-4xl font-light leading-[1.1] text-white md:text-6xl tracking-tight">
              Ready to modernize <span className="text-warm-white/40">your operations?</span>
            </h2>
            <a
              href={whatsappDemoUrl}
              target="_blank"
              rel="noreferrer"
              className="group cursor-glow-target mt-12 inline-flex items-center gap-4 rounded-full border border-warm-white/20 bg-white/5 px-8 py-4 transition-all duration-300 hover:border-[#F5A623]/50 hover:bg-[#F5A623]/10"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white group-hover:text-[#F5A623] transition-colors">
                Request a Demo
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-[#F5A623] group-hover:shadow-[0_0_8px_#F5A623] transition-all" />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-warm-white/10 px-6 py-14 md:px-10 lg:px-12 bg-black/20">
        <div className="mx-auto grid max-w-7xl gap-12 text-sm text-warm-white/55 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded bg-[#F5A623]/10 border border-[#F5A623]/30 flex items-center justify-center">
                <span className="text-[#F5A623] text-xs font-bold font-mono">STS</span>
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-warm-white/90">
                STS Kiosk
              </span>
            </div>
            <p className="max-w-xs leading-relaxed text-warm-white/40">
              The complete ecosystem for modern restaurant management, from guest experience to back-of-house.
            </p>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white mb-6">
              Platform
            </p>
            <div className="grid gap-4">
              <a className="hover:text-[#F5A623] transition-colors" href="#">Kiosk Ordering</a>
              <a className="hover:text-[#F5A623] transition-colors" href="#">Admin Dashboard</a>
              <a className="hover:text-[#F5A623] transition-colors" href="#">Kitchen Display</a>
              <a className="hover:text-[#F5A623] transition-colors" href="#">Inventory Control</a>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white mb-6">
              Connect
            </p>
            <div className="grid gap-4">
              <a className="hover:text-[#F5A623] transition-colors" href="#">Back to Top</a>
              <a
                className="hover:text-[#F5A623] transition-colors flex items-center gap-2"
                href={whatsappDemoUrl}
                target="_blank"
                rel="noreferrer"
              >
                Contact Sales
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]/50" />
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl border-t border-warm-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-warm-white/30">
          <p>© 2026 STS KIOSK</p>
          <p>ALL RIGHTS RESERVED</p>
        </div>
      </footer>
    </div>
  );
}
