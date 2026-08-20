"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Atraso em segundos — útil para escalonar itens de uma lista. */
  delay?: number;
  /** Distância inicial no eixo Y, em pixels. */
  y?: number;
  as?: "div" | "li" | "section" | "article" | "span";
};

/**
 * Revela o conteúdo quando ele entra na viewport.
 * Respeita `prefers-reduced-motion`.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = "div",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as];

  // Sem movimento: entrega o conteúdo já no estado final.
  if (shouldReduceMotion) {
    const Static = as;
    return <Static className={cn(className)}>{children}</Static>;
  }

  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: EASE_OUT }}
      className={cn(className)}
    >
      {children}
    </Component>
  );
}
