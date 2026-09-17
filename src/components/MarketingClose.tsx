import { whatsappDemoUrl } from "../lib/contact";

const benefits = [
  {
    label: "Nepal's Unified RMS Platform",
    text: "Replace fragmented POS tools. Manage dine-in, takeaway, NPR VAT billing, recipe costing, and staff permissions from one cohesive restaurant management system.",
  },
  {
    label: "Frictionless Kiosk & Tablet App",
    text: "Whether through a customer self-service kiosk or staff ordering tablets, our intuitive restaurant app is optimized for rapid order taking and higher average checks.",
  },
  {
    label: "Instant Real-Time KOT Sync",
    text: "Zero communication delays between front-of-house and kitchen. Orders flow instantly to kitchen display screens, keeping orders accurate during peak hours.",
  },
  {
    label: "Enterprise Security & Offline Resilience",
    text: "Station-level credentials ensure your billing records and terminal access remain strictly locked down to authorized restaurant staff only.",
  },
];

const faqs = [
  {
    q: "Why is STS RMS considered the best restaurant software in Nepal?",
    a: "STS RMS provides an end-to-end ecosystem specifically tailored for Nepali cafes, fine dining, and fast-food chains. It integrates self-ordering kiosks, dynamic NPR billing, table management, live kitchen KOT display, and per-gram inventory deduction into one easy-to-use platform.",
  },
  {
    q: "Can STS RMS handle billing, VAT, and discounts compliant with Nepal standards?",
    a: "Yes. STS RMS supports customizable billing workflows including VAT, service charges, dine-in vs. takeaway pricing, and promotional discounts with instant receipt printing.",
  },
  {
    q: "Does STS RMS provide a mobile restaurant management app for waiters?",
    a: "Yes, STS RMS is available as an Android APK app and cross-platform web application. Waiters can take table orders directly on mobile phones or tablets, sending items directly to the kitchen display.",
  },
  {
    q: "How does the recipe and inventory management system work?",
    a: "Whenever an item or variant (e.g. Regular vs Large) is ordered, STS RMS automatically calculates ingredient consumption and deducts exact quantities from your stock in real-time, giving you low-stock alerts before items run out.",
  },
  {
    q: "How can my restaurant in Kathmandu or across Nepal get started?",
    a: "You can request a free demo via WhatsApp at +977-9862041915 or test the online app directly. Our team provides complete onboarding, menu setup, and hardware consultation across Nepal.",
  },
];

export default function MarketingClose() {
  return (
    <div
      className="relative z-[60] text-warm-white border-t border-white/5"
      style={{ backgroundColor: "#0A0A08" }}
    >
      {/* Benefits Section */}
      <section
        className="relative px-6 py-32 md:px-10 lg:px-12"
        style={{ backgroundColor: "#0A0A08" }}
      >
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-[#F5A623]/60 shadow-[0_0_8px_rgba(245,166,35,0.8)]" />
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#F5A623] drop-shadow-[0_0_8px_rgba(245,166,35,0.4)]">
                Why Restaurants in Nepal Choose STS
              </p>
            </div>
            <h2 className="mt-8 max-w-xl text-4xl font-light leading-[1.1] text-white md:text-6xl tracking-tight">
              Best restaurant software, <span className="text-warm-white/40">engineered for scale.</span>
            </h2>
            <p className="mt-6 text-warm-white/60 leading-relaxed max-w-md">
              Everything you need to run a high-volume restaurant, cafe, or bar in Nepal — from interactive self-ordering kiosks to kitchen display and automated stock control.
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

      {/* SEO FAQ Section */}
      <section
        id="faq"
        className="px-6 py-20 md:px-10 lg:px-12 border-t border-warm-white/10"
        style={{ backgroundColor: "#0C0C0A" }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-4">
              <div className="w-8 h-[1px] bg-[#F5A623]/60" />
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#F5A623]">
                Frequently Asked Questions
              </p>
            </div>
            <h2 className="mt-6 text-3xl font-light text-white md:text-5xl tracking-tight">
              Restaurant Management & RMS Nepal <span className="text-warm-white/40">FAQ</span>
            </h2>
            <p className="mt-4 text-warm-white/60 text-sm leading-relaxed">
              Common questions about choosing the best restaurant software, POS system, and kiosk setup in Nepal.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-warm-white/10 bg-white/[0.015] p-6 backdrop-blur-sm hover:border-[#F5A623]/30 transition-colors"
              >
                <h3 className="text-base font-semibold text-white mb-3 flex items-start gap-3">
                  <span className="text-[#F5A623] text-sm font-mono">0{idx + 1}.</span>
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-warm-white/65 pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="px-6 pb-24 pt-16 md:px-10 lg:px-12"
      >
        <div className="mx-auto max-w-7xl border-t border-warm-white/10 pt-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4">
              <div className="w-8 h-[1px] bg-[#F5A623]/60" />
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#F5A623]">
                STS RMS Nepal
              </p>
            </div>
            <h2 className="mt-8 text-4xl font-light leading-[1.1] text-white md:text-6xl tracking-tight">
              Ready to upgrade to Nepal's <span className="text-warm-white/40">best restaurant software?</span>
            </h2>
            <p className="mt-4 text-warm-white/60 text-sm sm:text-base leading-relaxed">
              Join leading restaurants and cafes across Kathmandu, Pokhara, and Nepal running on STS RMS. Get a personalized live demo today.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={whatsappDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="group cursor-glow-target inline-flex items-center gap-4 rounded-full border border-warm-white/20 bg-white/5 px-8 py-4 transition-all duration-300 hover:border-[#F5A623]/50 hover:bg-[#F5A623]/10"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white group-hover:text-[#F5A623] transition-colors">
                  Request a Demo (WhatsApp)
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-[#F5A623] group-hover:shadow-[0_0_8px_#F5A623] transition-all" />
              </a>
              <a
                href="https://sitoulatechsolution.com.np/app-restaurant"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-warm-white/10 px-6 py-4 text-xs uppercase tracking-[0.2em] text-warm-white/70 hover:text-white hover:border-warm-white/30 transition-all"
              >
                Open Live Web App
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-warm-white/10 px-6 py-14 md:px-10 lg:px-12 bg-black/20">
        <div className="mx-auto grid max-w-7xl gap-12 text-sm text-warm-white/55 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded bg-[#F5A623]/10 border border-[#F5A623]/30 flex items-center justify-center">
                <span className="text-[#F5A623] text-xs font-bold font-mono">STS</span>
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-warm-white/90">
                STS RMS — Restaurant Software Nepal
              </span>
            </div>
            <p className="max-w-xs leading-relaxed text-warm-white/40 mb-3">
              The premier restaurant management software (RMS) and kiosk ordering app for hospitality venues across Kathmandu, Pokhara, and all Nepal.
            </p>
            <p className="text-[11px] text-warm-white/30">
              Developed by Sitoula Tech Solutions • Kathmandu, Nepal
            </p>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white mb-6">
              RMS Modules
            </p>
            <div className="grid gap-3 text-xs">
              <a className="hover:text-[#F5A623] transition-colors" href="#features">Kiosk Self-Ordering App</a>
              <a className="hover:text-[#F5A623] transition-colors" href="#features">Waiter Table POS & Billing</a>
              <a className="hover:text-[#F5A623] transition-colors" href="#features">Real-time KOT & Kitchen Display</a>
              <a className="hover:text-[#F5A623] transition-colors" href="#features">Recipe & Inventory Control (NPR)</a>
              <a className="hover:text-[#F5A623] transition-colors" href="#faq">Restaurant Software Nepal FAQ</a>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white mb-6">
              Connect & Support
            </p>
            <div className="grid gap-3 text-xs">
              <a className="hover:text-[#F5A623] transition-colors" href="#">Back to Top</a>
              <a
                className="hover:text-[#F5A623] transition-colors flex items-center gap-2"
                href={whatsappDemoUrl}
                target="_blank"
                rel="noreferrer"
              >
                Contact Sales (+977 9862041915)
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]/50" />
              </a>
              <a
                className="hover:text-[#F5A623] transition-colors"
                href="https://sitoulatechsolution.com.np"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sitoula Tech Solutions
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl border-t border-warm-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-warm-white/30">
          <p>© 2026 STS RMS • BEST RESTAURANT SOFTWARE NEPAL</p>
          <p>SITOULA TECH SOLUTIONS • ALL RIGHTS RESERVED</p>
        </div>
      </footer>
    </div>
  );
}
