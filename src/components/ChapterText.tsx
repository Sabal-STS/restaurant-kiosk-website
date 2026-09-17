import { memo, useMemo } from "react";
import { useScrollProgress } from "../hooks/useScrollProgress";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { whatsappDemoUrl } from "../lib/contact";

interface ChapterData {
  eyebrow: string;
  headline: string;
  description: string;
}

const CHAPTER_DATA: readonly ChapterData[] = [
  {
    eyebrow: "01 // THE BEST RESTAURANT SOFTWARE NEPAL",
    headline: "NEPAL'S BEST RESTAURANT\nMANAGEMENT SOFTWARE & APP",
    description:
      "STS RMS is the premier restaurant software in Nepal — an all-in-one RMS solution featuring self-ordering kiosk mode, waiter POS tablet app, real-time KOT, dynamic billing with VAT, recipe costing, and multi-station staff management for restaurants and cafes across Nepal.",
  },
  {
    eyebrow: "02 // GUEST EXPERIENCE & KIOSK",
    headline: "FAST, FRICTIONLESS\nKIOSK ORDERING",
    description:
      "Nepal's first self-service restaurant kiosk ordering app. Customers can browse visual digital menus, customize items with modifiers and add-ons, and place instant orders. Waiters can also take table orders using the same intuitive restaurant management app.",
  },
  {
    eyebrow: "03 // UNIFIED OPERATIONS & RMS",
    headline: "RUN YOUR RESTAURANT\nFROM ONE CENTRAL RMS",
    description:
      "Why STS is rated the best RMS in Nepal: full control over dine-in and takeaway orders, NPR billing, custom categories, variation pricing, automated inventory deduction, vendor purchases, tables, and staff permissions from one single platform.",
  },
  {
    eyebrow: "04 // REAL-TIME KOT & KITCHEN DISPLAY",
    headline: "INSTANT KOT ALERTS\n& KITCHEN SYNC",
    description:
      "Orders placed via kiosk or the waiter mobile app trigger instantaneous kitchen order tickets (KOT). The kitchen display system updates cook status in real-time, notifying waitstaff when food is ready to serve without delays.",
  },
  {
    eyebrow: "05 // ENTERPRISE SECURITY & TERMINAL ACCESS",
    headline: "STATION-LEVEL\nAUTHENTICATION & CONTROL",
    description:
      "Every POS terminal and kiosk starts secured in an inactive state. Staff authenticate with unique credentials, company codes, and kiosk PINs — keeping your restaurant data, sales reports, and billing strictly protected.",
  },
] as const;

const LAST_CHAPTER_INDEX = CHAPTER_DATA.length - 1;

// Named thresholds instead of inline magic numbers, so the fade timing
// can be tuned in one place without hunting through JSX.
const INTRO_COPY_START = 0.56;
const INTRO_COPY_RANGE = 0.34;
const DEFAULT_FADE_OUT_START = 0.76;
const LAST_CHAPTER_FADE_IN_DELAY = 0.16;
const FADE_IN_DURATION = 0.12;
const LAST_CHAPTER_FADE_OUT_START = 0.28;
const ENTRY_TRANSLATE_PX = { first: 24, rest: 14 };

function easeInOutCubic(t: number): number {
  return t * t * (3 - 2 * t);
}

interface VisibilityInput {
  index: number;
  isActive: boolean;
  localProgress: number;
  introProgress: number;
  introComplete: boolean;
}

/**
 * Pure function: given scroll state, returns how visible (0-1) a given
 * chapter's copy panel should be right now. Extracted from the component
 * so the fade timeline can be reasoned about (and unit tested) on its own.
 */
function getChapterOpacity({
  index,
  isActive,
  localProgress,
  introProgress,
  introComplete,
}: VisibilityInput): number {
  if (!isActive) return 0;

  const isFirstChapter = index === 0;
  const isLastChapter = index === LAST_CHAPTER_INDEX;

  const visible = isFirstChapter ? introProgress > INTRO_COPY_START || introComplete : true;
  if (!visible) return 0;

  const fadeOutStart = isLastChapter ? LAST_CHAPTER_FADE_OUT_START : DEFAULT_FADE_OUT_START;
  const fadeInDelay = isLastChapter ? LAST_CHAPTER_FADE_IN_DELAY : 0;
  const fadeInEnd = fadeInDelay + FADE_IN_DURATION;

  if (isFirstChapter) {
    const introCopyProgress = Math.max(0, Math.min(1, (introProgress - INTRO_COPY_START) / INTRO_COPY_RANGE));
    const introCopyEase = easeInOutCubic(introCopyProgress);
    const scrollFade = localProgress > fadeOutStart ? (1 - localProgress) / (1 - fadeOutStart) : 1;
    return introCopyEase * scrollFade;
  }

  if (localProgress < fadeInDelay) return 0;
  if (localProgress < fadeInEnd) return (localProgress - fadeInDelay) / (fadeInEnd - fadeInDelay);
  if (localProgress > fadeOutStart) return (1 - localProgress) / (1 - fadeOutStart);
  return 1;
}

interface ChapterOverlayProps {
  index: number;
  chapterIndex: number;
  chapterLocalProgress: number;
  introComplete: boolean;
  introProgress: number;
  reducedMotion: boolean;
}

function ChapterOverlay({
  index,
  chapterIndex,
  chapterLocalProgress,
  introComplete,
  introProgress,
  reducedMotion,
}: ChapterOverlayProps) {
  const isActive = chapterIndex === index;
  const localProgress = isActive ? chapterLocalProgress : 0;
  const chapter = CHAPTER_DATA[index];
  const isLastChapter = index === LAST_CHAPTER_INDEX;

  const opacity = useMemo(
    () =>
      getChapterOpacity({
        index,
        isActive,
        localProgress,
        introProgress,
        introComplete,
      }),
    [index, isActive, localProgress, introProgress, introComplete]
  );

  if (opacity <= 0) return null;

  const translateDistance = index === 0 ? ENTRY_TRANSLATE_PX.first : ENTRY_TRANSLATE_PX.rest;
  const translateY = reducedMotion ? 0 : Math.max(0, 1 - opacity) * translateDistance;

  return (
    <div
      className="chapter-copy-layer absolute inset-0 flex items-end md:items-center pointer-events-none"
      aria-hidden={!isActive}
      style={{
        opacity,
        transform: `translate3d(0, ${translateY}px, 0)`,
        transition: reducedMotion
          ? "opacity 180ms linear"
          : "opacity 180ms linear, transform 420ms cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-6 pb-10 pt-24 md:grid-cols-12 md:px-10 md:py-0 lg:px-12">
        <div className="flex flex-col justify-center md:col-span-5 md:col-start-1">
          <div
            className={`chapter-copy-panel space-y-4 md:space-y-6 max-w-lg pointer-events-auto ${
              index === 0 ? "landing-copy-panel" : ""
            }`}
          >
            <div className={`flex items-center gap-4 ${index === 0 ? "landing-copy-kicker" : ""}`}>
              <div className="w-12 h-[1px] bg-ember/60 shadow-[0_0_8px_rgba(245,166,35,0.8)]" />
              <h3 className="text-ember font-semibold tracking-[0.25em] text-[10px] sm:text-xs uppercase drop-shadow-[0_0_8px_rgba(245,166,35,0.4)]">
                {chapter.eyebrow}
              </h3>
            </div>
            <h2
              className={`text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.05] text-white whitespace-pre-line ${
                index === 0 ? "landing-copy-title" : ""
              }`}
            >
              {chapter.headline}
            </h2>
            <p className={`text-warm-white/70 text-sm sm:text-base leading-relaxed ${index === 0 ? "landing-copy-body" : ""}`}>
              {chapter.description}
            </p>
            {isLastChapter && (
              <div className="pt-4 md:pt-8">
                <a
                  href={whatsappDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Request a demo via WhatsApp"
                  className="cursor-glow-target inline-flex group relative px-6 py-3 md:px-8 md:py-4 border border-ember/40 text-ember text-xs md:text-sm uppercase tracking-widest overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-ember focus-visible:outline-offset-2"
                >
                  <span className="relative z-10 font-medium">Request a Demo</span>
                  <div className="absolute inset-0 bg-ember/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const ChapterText = memo(function ChapterText() {
  // Subscribed once here instead of once per chapter — avoids 5x
  // re-renders per scroll tick for identical scroll state.
  const { chapterIndex, chapterLocalProgress, introComplete, introProgress } = useScrollProgress();
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="fixed inset-0 z-40 pointer-events-none">
      {CHAPTER_DATA.map((_, i) => (
        <ChapterOverlay
          key={i}
          index={i}
          chapterIndex={chapterIndex}
          chapterLocalProgress={chapterLocalProgress}
          introComplete={introComplete}
          introProgress={introProgress}
          reducedMotion={reducedMotion}
        />
      ))}
    </div>
  );
});

export default ChapterText;
