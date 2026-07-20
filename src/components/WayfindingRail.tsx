import { useScrollProgress } from "../hooks/useScrollProgress";
import { scrollToChapter } from "../lib/scrollSetup";

const chapters = [
  { label: "STS Kiosk" },
  { label: "Take Order" },
  { label: "Managed" },
  { label: "Alerts" },
  { label: "Secure" },
];

/**
 * Side-rail wayfinding dots — shows current chapter position.
 */
export default function WayfindingRail() {
  const { chapterIndex } = useScrollProgress();

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-4 mix-blend-difference">
      {chapters.map((ch, i) => (
        <button
          key={i}
          onClick={() => scrollToChapter(i)}
          className="group relative flex items-center"
          aria-label={`Go to ${ch.label}`}
        >
          {/* Label on hover */}
          <span className="absolute right-8 text-[10px] tracking-[0.2em] uppercase text-warm-white/0 group-hover:text-warm-white/70 transition-all duration-300 whitespace-nowrap pointer-events-none">
            {ch.label}
          </span>

          {/* Dot */}
          <span
            className={`block rounded-full transition-all duration-500 ${
              i === chapterIndex
                ? "w-2.5 h-2.5 bg-ember shadow-[0_0_12px_rgba(255,195,0,0.4)]"
                : "w-1.5 h-1.5 border border-warm-stone/40 hover:border-warm-stone/80"
            }`}
          />
        </button>
      ))}

      {/* Progress line connecting dots */}
      <div className="absolute top-0 bottom-0 right-[calc(50%-0.5px)] w-px bg-warm-white/5 -z-10" />
    </div>
  );
}
