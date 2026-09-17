import { useScrollProgress } from "../hooks/useScrollProgress";

/**
 * Minimal top navbar — logo + chapter indicator.
 * Transparent always, lives in DOM layer above the WebGL scene.
 */
export default function Navbar() {
  const { introComplete } = useScrollProgress();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-opacity duration-1000"
      style={{ opacity: introComplete ? 1 : 0 }}
    >
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-6 md:px-10 lg:px-12">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <img
            src="/sts_logo.png"
            alt="STS Kiosk - Restaurant Software Nepal Logo"
            className="w-6 h-6 rounded-sm object-cover"
          />
          <span className="text-warm-white/80 text-[10px] font-semibold tracking-[0.2em] uppercase">
            STS Kiosk <span className="hidden sm:inline text-warm-stone/50">| Nepal</span>
          </span>
        </a>

        {/* Minimal CTAs */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#faq"
            className="cursor-glow-target hidden md:inline-block text-[9px] font-semibold tracking-[0.2em] uppercase text-warm-stone/70 border border-warm-white/10 rounded-full px-4 py-1.5 hover:text-warm-white hover:border-warm-white/25 transition-all duration-300"
          >
            FAQ
          </a>
          <a
            href="https://sitoulatechsolution.com.np/app-restaurant"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-glow-target hidden sm:inline-block text-[9px] font-semibold tracking-[0.2em] uppercase text-ember border border-ember/20 bg-ember/5 rounded-full px-4 sm:px-5 py-1.5 hover:text-warm-white hover:border-ember/50 hover:bg-ember/20 transition-all duration-300"
          >
            Open Web App
          </a>
          <a
            href="/window_sts_kiosk_desktop_app.exe"
            download="STS_Kiosk_Windows_Setup.exe"
            className="cursor-glow-target inline-flex items-center gap-1.5 text-[9px] font-semibold tracking-[0.16em] uppercase text-warm-white border border-ember/30 bg-ember/10 rounded-full px-4 sm:px-5 py-1.5 hover:border-ember hover:bg-ember/25 transition-all duration-300"
            title="Download STS Kiosk Windows Desktop App"
          >
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-ember"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Windows Desktop (.exe)</span>
          </a>
          <a
            href="#contact"
            className="cursor-glow-target text-[9px] font-semibold tracking-[0.2em] uppercase text-warm-stone/60 border border-warm-white/10 rounded-full px-4 sm:px-5 py-1.5 hover:text-warm-white hover:border-warm-white/25 transition-all duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
