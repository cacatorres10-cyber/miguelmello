"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type RotatingTextProps = {
  words: readonly string[];
  /** Intervalo entre as trocas, em milissegundos. */
  interval?: number;
  className?: string;
};

/**
 * Alterna uma lista de palavras/frases com transição suave.
 * A largura acompanha a palavra mais longa para não "pular" o layout.
 */
export function RotatingText({
  words,
  interval = 2600,
  className,
}: RotatingTextProps) {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (words.length <= 1) return;
    const id = window.setInterval(
      () => setIndex((current) => (current + 1) % words.length),
      interval,
    );
    return () => window.clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className={cn("relative inline-grid align-bottom", className)}>
      {/* Reserva o espaço da palavra mais longa */}
      <span aria-hidden className="invisible col-start-1 row-start-1">
        {words.reduce((a, b) => (a.length >= b.length ? a : b), "")}
      </span>

      <span className="col-start-1 row-start-1 overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={words[index]}
            initial={
              shouldReduceMotion ? { opacity: 0 } : { y: "100%", opacity: 0 }
            }
            animate={{ y: 0, opacity: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { y: "-100%", opacity: 0 }}
            transition={{ duration: 0.42, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="inline-block whitespace-nowrap"
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}
