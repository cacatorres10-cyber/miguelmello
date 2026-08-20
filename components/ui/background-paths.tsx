"use client";

import type { CSSProperties, ReactNode } from "react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * O traçado corre por CSS (stroke-dashoffset), não por JavaScript:
 * o navegador anima na GPU, o movimento nunca engasga e continua
 * rodando mesmo enquanto o resto da página carrega.
 *
 * O padrão do tracejado é medido em unidades do viewBox — sempre o
 * mesmo ciclo (FLOW_CYCLE) para todas as curvas, o que faz a volta
 * fechar sem salto, independentemente do comprimento de cada uma.
 * Os valores derivam do índice: nada de aleatório, para o HTML do
 * servidor bater com o do cliente.
 */
const FLOW_CYCLE = 480;

function pathStyle(index: number): CSSProperties {
    const dash = 220 + ((index * 7) % 5) * 30; // arco visível: 220 → 340
    const duration = 5 + ((index * 11) % 9); // 5s → 13s
    const delay = ((index * 13) % 20) / 2; // 0s → 9,5s

    return {
        strokeDasharray: `${dash}px ${FLOW_CYCLE - dash}px`,
        animationDuration: `${duration}s`,
        animationDelay: `-${delay}s`,
    };
}

export function FloatingPaths({
    position,
    cover = false,
}: {
    position: number;
    /** Estica o traçado para cobrir toda a área, sem faixas vazias. */
    cover?: boolean;
}) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        width: 0.5 + i * 0.03,
        opacity: Math.min(0.12 + i * 0.032, 0.95),
    }));

    return (
        <div className="pointer-events-none absolute inset-0" aria-hidden>
            <svg
                className="h-full w-full text-slate-950 dark:text-white"
                viewBox="0 0 696 316"
                fill="none"
                preserveAspectRatio={cover ? "xMidYMid slice" : "xMidYMid meet"}
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <path
                        key={path.id}
                        className="path-flow"
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={path.opacity}
                        style={pathStyle(path.id + (position > 0 ? 0 : 5))}
                    />
                ))}
            </svg>
        </div>
    );
}

/**
 * Camada de fundo animada. Pode ser usada sozinha
 * (`<BackgroundPathsLayer />`) atrás de qualquer seção.
 */
export function BackgroundPathsLayer({
    className,
    cover = false,
}: {
    className?: string;
    cover?: boolean;
}) {
    return (
        <div className={cn("absolute inset-0 overflow-hidden", className)}>
            <FloatingPaths position={1} cover={cover} />
            <FloatingPaths position={-1} cover={cover} />
        </div>
    );
}

export function BackgroundPaths({
    title = "Background Paths",
    children,
    className,
    titleClassName,
}: {
    title?: string;
    /** Conteudo exibido abaixo do titulo. Sem children, mostra o CTA padrao. */
    children?: ReactNode;
    className?: string;
    titleClassName?: string;
}) {
    const words = title.split(" ");

    return (
        <div
            className={cn(
                "relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-white dark:bg-neutral-950",
                className,
            )}
        >
            <BackgroundPathsLayer />

            <div className="container relative z-10 mx-auto px-4 text-center md:px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="mx-auto max-w-4xl"
                >
                    <h1
                        className={cn(
                            "mb-8 text-5xl font-bold tracking-tighter sm:text-7xl md:text-8xl",
                            titleClassName,
                        )}
                    >
                        {words.map((word, wordIndex) => (
                            <span
                                key={wordIndex}
                                className="mr-4 inline-block last:mr-0"
                            >
                                {word.split("").map((letter, letterIndex) => (
                                    <motion.span
                                        key={`${wordIndex}-${letterIndex}`}
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay:
                                                wordIndex * 0.1 +
                                                letterIndex * 0.03,
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
                    </h1>

                    {children ?? (
                        <div className="group relative inline-block overflow-hidden rounded-2xl bg-gradient-to-b from-black/10 to-white/10 p-px shadow-lg backdrop-blur-lg transition-shadow duration-300 hover:shadow-xl dark:from-white/10 dark:to-black/10">
                            <Button
                                variant="ghost"
                                className="rounded-[1.15rem] border border-black/10 bg-white/95 px-8 py-6 text-lg font-semibold text-black backdrop-blur-md transition-all duration-300 hover:bg-white/100 hover:shadow-md group-hover:-translate-y-0.5 dark:border-white/10 dark:bg-black/95 dark:text-white dark:hover:bg-black/100 dark:hover:shadow-neutral-800/50"
                            >
                                <span className="opacity-90 transition-opacity group-hover:opacity-100">
                                    Discover Excellence
                                </span>
                                <span className="ml-3 opacity-70 transition-all duration-300 group-hover:translate-x-1.5 group-hover:opacity-100">
                                    →
                                </span>
                            </Button>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
