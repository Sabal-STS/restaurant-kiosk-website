import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { scrollStore } from "../hooks/useScrollProgress";

gsap.registerPlugin(ScrollTrigger);

const CHAPTER_SELECTORS = [
  "[data-chapter='0']",
  "[data-chapter='1']",
  "[data-chapter='2']",
  "[data-chapter='3']",
  "[data-chapter='4']",
];

let lenis: Lenis | null = null;
let ticker: ((time: number) => void) | null = null;

function updateChapterState() {
  const chapters = CHAPTER_SELECTORS
    .map((selector) => document.querySelector<HTMLElement>(selector))
    .filter((el): el is HTMLElement => Boolean(el));

  if (chapters.length === 0) return;

  const y = window.scrollY;
  let activeIndex = 0;
  let localProgress = 0;

  chapters.forEach((el, index) => {
    const start = el.offsetTop;
    const end = start + el.offsetHeight;

    if (y >= start && y < end) {
      activeIndex = index;
      localProgress = (y - start) / Math.max(1, el.offsetHeight);
    } else if (y >= end) {
      activeIndex = index;
      localProgress = 1;
    }
  });

  const globalProgress = (activeIndex + localProgress) / chapters.length;
  scrollStore.setProgress(
    Math.min(1, Math.max(0, globalProgress)),
    activeIndex,
    Math.min(1, Math.max(0, localProgress))
  );
}

export function initScroll() {
  if (lenis) return lenis;

  // ── Lenis smooth scroll ────────────────────────────────────────────────
  lenis = new Lenis({
    duration: 1.15,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 0.85,
    touchMultiplier: 1.2,
  });

  // Sync Lenis → GSAP ScrollTrigger
  lenis.on("scroll", () => {
    updateChapterState();
    ScrollTrigger.update();
  });

  // GSAP ticker drives Lenis
  ticker = (time: number) => {
    lenis!.raf(time * 1000);
  };
  gsap.ticker.add(ticker);
  gsap.ticker.lagSmoothing(0);

  ScrollTrigger.create({
    trigger: ".chapter-scroll-track",
    start: "top top",
    end: "bottom bottom",
    scrub: 0.45,
    invalidateOnRefresh: true,
    onUpdate: updateChapterState,
  });

  updateChapterState();

  return lenis;
}

export function scrollToChapter(index: number) {
  const el = document.querySelector(CHAPTER_SELECTORS[index]);
  if (el && lenis) {
    lenis.scrollTo(el as HTMLElement, { duration: 1.5 });
  }
}

export function destroyScroll() {
  ScrollTrigger.getAll().forEach((t) => t.kill());
  if (ticker) {
    gsap.ticker.remove(ticker);
    ticker = null;
  }
  if (lenis) {
    lenis.destroy();
    lenis = null;
  }
}

export function getLenis() {
  return lenis;
}
