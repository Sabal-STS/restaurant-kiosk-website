

export interface ScrollState {
  /** 0 → 1 across the entire page */
  globalProgress: number;
  /** Current chapter index 0–4 */
  chapterIndex: number;
  /** 0 → 1 within the current chapter */
  chapterLocalProgress: number;
  /** Whether the intro sequence has completed */
  introComplete: boolean;
  /** 0 -> 1 during the opening camera/material reveal */
  introProgress: number;
  /** Whether reduced motion is preferred */
  reducedMotion: boolean;

  setProgress: (global: number, chapter: number, local: number) => void;
  setIntroComplete: (v: boolean) => void;
  setIntroProgress: (v: number) => void;
  setReducedMotion: (v: boolean) => void;
}

/**
 * Vanilla zustand store so it can be read from both React components
 * (via useSyncExternalStore) and the R3F render loop (via getState()).
 */
export const scrollStore = {
  _state: {
    globalProgress: 0,
    chapterIndex: 0,
    chapterLocalProgress: 0,
    introComplete: false,
    introProgress: 0,
    reducedMotion: false,
  } as ScrollState,
  _listeners: new Set<() => void>(),

  getState(): ScrollState {
    return this._state;
  },

  setState(partial: Partial<ScrollState>) {
    this._state = { ...this._state, ...partial } as ScrollState;
    this._listeners.forEach((l) => l());
  },

  subscribe(listener: () => void) {
    this._listeners.add(listener);
    return () => {
      this._listeners.delete(listener);
    };
  },

  setProgress(global: number, chapter: number, local: number) {
    this._state = {
      ...this._state,
      globalProgress: global,
      chapterIndex: chapter,
      chapterLocalProgress: local,
    };
    this._listeners.forEach((l) => l());
  },

  setIntroComplete(v: boolean) {
    this.setState({ introComplete: v });
  },

  setIntroProgress(v: number) {
    this.setState({ introProgress: Math.min(1, Math.max(0, v)) });
  },

  setReducedMotion(v: boolean) {
    this.setState({ reducedMotion: v });
  },
};

// ── React hook ───────────────────────────────────────────────────────────────
import { useSyncExternalStore } from "react";

export function useScrollProgress() {
  return useSyncExternalStore(
    (cb) => scrollStore.subscribe(cb),
    () => scrollStore.getState()
  );
}
