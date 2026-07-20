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
            alt="STS Logo"
            className="w-6 h-6 rounded-sm object-cover"
          />
          <span className="text-warm-white/70 text-[10px] font-semibold tracking-[0.2em] uppercase">
            STS Kiosk
          </span>
        </a>

        {/* Minimal CTA */}
        <a
          href="#contact"
          className="cursor-glow-target text-[9px] font-semibold tracking-[0.2em] uppercase text-warm-stone/60 border border-warm-white/10 rounded-full px-5 py-1.5 hover:text-warm-white hover:border-warm-white/25 transition-all duration-300"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
