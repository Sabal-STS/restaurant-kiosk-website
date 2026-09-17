import { whatsappDemoUrl } from "../lib/contact";

const benefits = [
  {
    label: "Customer Self-Ordering Kiosk",
    text: "Empower guests with high-speed digital touchscreen kiosks. Cut wait times, reduce front-desk bottlenecks, and boost average order values through automated upselling.",
  },
  {
    label: "Nepal's Complete RMS Ecosystem",
    text: "Manage dine-in, takeaway, NPR VAT billing, recipe costing, and staff permissions from one cohesive restaurant management system on Windows desktop & web.",
  },
  {
    label: "Instant Real-Time KOT Sync",
    text: "Zero communication delays between self-service kiosks, waiter tables, and kitchen displays. Orders fire instantly to cooking stations.",
  },
  {
    label: "Enterprise Security & Offline Resilience",
    text: "Station-level credentials ensure your billing records and kiosk terminal access remain strictly locked down to authorized personnel only.",
  },
];

const faqs = [
  {
    q: "What is STS Kiosk and why is it considered the best restaurant software in Nepal?",
    a: "STS Kiosk provides an all-in-one restaurant management system (RMS) paired with customer self-ordering kiosks. Designed specifically for cafes, fine dining, quick-service, and bakery chains across Nepal, it combines customer touch kiosks, waiter POS, VAT billing, live KOT kitchen displays, and recipe inventory control.",
  },
  {
    q: "How does the customer self-ordering kiosk mode help restaurant sales?",
    a: "Guests can freely browse visual menus, select add-ons/modifiers (size, extra toppings), choose dine-in or takeaway, and complete their order instantly. This eliminates queues at the counter, increases check size by 20-30%, and prevents ordering mistakes.",
  },
  {
    q: "Is there a Windows Desktop application (.exe) for STS Kiosk?",
    a: "Yes! STS Kiosk is available as a dedicated Windows desktop application (.exe) for counter POS terminals and touchscreen kiosk stands, alongside a fast cross-platform web app.",
  },
  {
    q: "Can STS Kiosk handle NPR billing, VAT, and discounts compliant with Nepal standards?",
    a: "Yes. STS Kiosk supports customizable billing workflows including VAT, service charges, dine-in vs. takeaway pricing, and promotional discounts with instant receipt printing.",
  },
  {
    q: "How does the recipe and inventory management system work?",
    a: "Whenever an order is placed from a kiosk or waiter terminal, STS Kiosk calculates exact recipe consumption and automatically deducts stock in grams or pieces, triggering alerts before items run out.",
  },
  {
    q: "How can my restaurant in Kathmandu or across Nepal get started?",
    a: "You can download the Windows desktop app directly, test the online web app, or request a free demo via WhatsApp at +977-9862041915. Our team provides complete onboarding, menu setup, and hardware consultation across Nepal.",
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
                Why Restaurants in Nepal Choose STS Kiosk
              </p>
            </div>
            <h2 className="mt-8 max-w-xl text-4xl font-light leading-[1.1] text-white md:text-6xl tracking-tight">
              Best restaurant software & kiosk, <span className="text-warm-white/40">engineered for scale.</span>
            </h2>
            <p className="mt-6 text-warm-white/60 leading-relaxed max-w-md">
              Everything you need to run a high-volume restaurant, cafe, or fast-food brand in Nepal — from interactive self-ordering touch kiosks to kitchen display, Windows POS, and automated stock control.
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
              STS Kiosk & Restaurant Software Nepal <span className="text-warm-white/40">FAQ</span>
            </h2>
            <p className="mt-4 text-warm-white/60 text-sm leading-relaxed">
              Common questions about choosing the best restaurant software, self-ordering kiosks, and Windows desktop setup in Nepal.
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
                STS Kiosk Nepal
              </p>
            </div>
            <h2 className="mt-8 text-4xl font-light leading-[1.1] text-white md:text-6xl tracking-tight">
              Ready to upgrade to Nepal's <span className="text-warm-white/40">best restaurant software & kiosk?</span>
            </h2>
            <p className="mt-4 text-warm-white/60 text-sm sm:text-base leading-relaxed">
              Join leading restaurants, cafes, and bakeries across Kathmandu, Pokhara, and Nepal running on STS Kiosk. Get the Windows desktop app or request a personalized demo today.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="/window_sts_kiosk_desktop_app.exe"
                download="STS_Kiosk_Windows_Setup.exe"
                className="group cursor-glow-target inline-flex items-center gap-3 rounded-full border border-ember bg-ember/15 px-8 py-4 transition-all duration-300 hover:bg-ember hover:text-black"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                  Download Windows App (.exe)
                </span>
              </a>
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
                STS Kiosk — Restaurant Software Nepal
              </span>
            </div>
            <p className="max-w-xs leading-relaxed text-warm-white/40 mb-3">
              The premier customer self-ordering kiosk and restaurant management software (RMS) for hospitality venues across Kathmandu, Pokhara, and all Nepal.
            </p>
            <p className="text-[11px] text-warm-white/30">
              Developed by Sitoula Tech Solutions • Kathmandu, Nepal
            </p>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white mb-6">
              STS Kiosk Modules
            </p>
            <div className="grid gap-3 text-xs">
              <a className="hover:text-[#F5A623] transition-colors" href="#features">Customer Self-Ordering Touch Kiosk</a>
              <a className="hover:text-[#F5A623] transition-colors" href="#features">Waiter Table POS & Billing</a>
              <a className="hover:text-[#F5A623] transition-colors" href="#features">Real-time KOT & Kitchen Display</a>
              <a className="hover:text-[#F5A623] transition-colors" href="#features">Recipe & Inventory Control (NPR)</a>
              <a className="hover:text-[#F5A623] transition-colors" href="/window_sts_kiosk_desktop_app.exe" download="STS_Kiosk_Windows_Setup.exe">Windows Desktop App (.exe)</a>
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
          <p>© 2026 STS KIOSK • BEST RESTAURANT SOFTWARE NEPAL</p>
          <p>SITOULA TECH SOLUTIONS • ALL RIGHTS RESERVED</p>
        </div>
      </footer>
    </div>
  );
}
