"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type AnimatedTitleProps = {
  text: string;
  className?: string;
  /** Atraso inicial da animação, em segundos. */
  delay?: number;
};

/**
 * Título revelado letra a letra — mesma linguagem de movimento
 * do fundo animado (background-paths).
 */
export function AnimatedTitle({
  text,
  className,
  delay = 0,
}: AnimatedTitleProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

  // Sem movimento: título estático, com o mesmo acabamento visual.
  if (shouldReduceMotion) {
    return (
      <h1 className={cn("tracking-tighter", className)}>
        <span className="bg-gradient-to-r from-neutral-900 to-neutral-700/80 bg-clip-text text-transparent dark:from-white dark:to-white/80">
          {text}
        </span>
      </h1>
    );
  }

  return (
    <h1 className={cn("tracking-tighter", className)}>
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="mr-[0.25em] inline-block last:mr-0">
            {word.split("").map((letter, letterIndex) => (
              <motion.span
                key={`${wordIndex}-${letterIndex}`}
                initial={{ y: 90, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: delay + wordIndex * 0.1 + letterIndex * 0.03,
                  type: "spring",
                  stiffness: 150,
                  damping: 25,
                }}
                className="inline-block bg-gradient-to-r from-neutral-900 to-neutral-700/80 bg-clip-text text-transparent dark:from-white dark:to-white/80"
              >
                {letter}
              </motion.span>
            ))}
          </span>
        ))}
      </span>
    </h1>
  );
}
