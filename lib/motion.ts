import type { Transition } from "framer-motion";

export const EASE_OUT = [0.21, 0.47, 0.32, 0.98] as const;

/**
 * Props de entrada (fade + subida) para elementos do topo da página.
 * Com `prefers-reduced-motion`, devolve o estado final sem animação.
 */
export function fadeUp(
  reduce: boolean | null,
  delay = 0,
  y = 12,
): {
  initial?: false | { opacity: number; y?: number };
  animate?: { opacity: number; y?: number };
  transition?: Transition;
} {
  if (reduce) return { initial: false };

  return {
    initial: { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: EASE_OUT },
  };
}
