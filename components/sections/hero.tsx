"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, GraduationCap, MapPin } from "lucide-react";

import { AnimatedTitle } from "@/components/animated-title";
import {
  InstagramButton,
  SaveContactButton,
  WhatsAppButton,
} from "@/components/contact-actions";
import { ProfilePhoto } from "@/components/profile-photo";
import { RotatingText } from "@/components/rotating-text";
import { BackgroundPathsLayer } from "@/components/ui/background-paths";
import { site } from "@/content/site";
import { EASE_OUT, fadeUp } from "@/lib/motion";

const { hero, profile } = site;

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-white dark:bg-neutral-950"
    >
      <BackgroundPathsLayer className="opacity-[0.45] dark:opacity-30" />

      {/* Clareia o centro para o texto respirar sobre o fundo animado */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_55%_at_32%_45%,hsl(var(--background))_30%,transparent_100%)]"
      />

      {/* Suaviza o encontro do fundo animado com a próxima seção */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white dark:to-neutral-950"
      />

      <div className="container relative z-10 py-24 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* ── Texto ───────────────────────────────────────────── */}
          <div className="text-center lg:text-left">
            <motion.span
              {...fadeUp(reduce)}
              className="inline-flex items-center gap-2 rounded-full border border-black/[0.07] bg-white/70 px-4 py-1.5 text-[0.8rem] font-medium text-muted-foreground backdrop-blur-md dark:border-white/10 dark:bg-white/[0.05]"
            >
              <span className="relative flex size-2">
                {!reduce && (
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-400 opacity-70" />
                )}
                <span className="relative inline-flex size-2 rounded-full bg-brand-500" />
              </span>
              {hero.badge}
            </motion.span>

            <AnimatedTitle
              text={hero.title}
              delay={0.15}
              className="mt-6 text-5xl font-bold sm:text-6xl lg:text-7xl"
            />

            <motion.p
              {...fadeUp(reduce, 0.5)}
              className="mt-3 text-base font-medium text-brand-600 sm:text-lg"
            >
              {profile.role}
              <span className="mx-2 text-muted-foreground/40">·</span>
              <span className="font-normal text-muted-foreground">
                {profile.universityShort}
              </span>
            </motion.p>

            <motion.h2
              {...fadeUp(reduce, 0.6)}
              className="mt-6 text-balance text-2xl font-semibold leading-tight tracking-tight sm:text-[1.75rem] lg:text-3xl"
            >
              {hero.headline}
            </motion.h2>

            <motion.p
              {...fadeUp(reduce, 0.7)}
              className="mx-auto mt-4 max-w-xl text-pretty text-[1.05rem] leading-relaxed text-muted-foreground lg:mx-0"
            >
              {hero.subheadline}
            </motion.p>

            {/* Frase que se alterna sozinha */}
            <motion.p
              {...fadeUp(reduce, 0.85)}
              className="mt-6 flex flex-wrap items-baseline justify-center gap-x-2 text-lg font-medium lg:justify-start"
            >
              <span className="text-muted-foreground">
                {hero.rotatingPrefix}
              </span>
              <RotatingText
                words={hero.rotatingWords}
                className="font-semibold text-brand-600"
              />
            </motion.p>

            <motion.div
              {...fadeUp(reduce, 0.95, 16)}
              className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              <WhatsAppButton label={hero.primaryCta} />
              <InstagramButton />
              <SaveContactButton className="hidden sm:inline-flex" />
            </motion.div>

            <motion.div
              {...fadeUp(reduce, 1.1)}
              className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground lg:justify-start"
            >
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-4 text-brand-500" />
                {profile.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <GraduationCap className="size-4 text-brand-500" />
                {profile.university}
              </span>
            </motion.div>
          </div>

          {/* ── Retrato ─────────────────────────────────────────── */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: EASE_OUT }}
            className="order-first mx-auto w-full max-w-[15rem] sm:max-w-[17rem] lg:order-last lg:max-w-sm"
          >
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-brand-200/50 via-transparent to-brand-100/40 blur-2xl dark:from-brand-400/10 dark:to-brand-400/5"
              />
              <ProfilePhoto
                src={profile.photo}
                alt={profile.photoAlt}
                initials={profile.initials}
                priority
                className="relative shadow-[0_24px_60px_-20px_rgba(15,23,42,0.35)]"
              />

              {/* Etiqueta flutuante com as especialidades */}
              <motion.div
                {...fadeUp(reduce, 0.9)}
                className="glass absolute -bottom-5 left-1/2 w-[92%] -translate-x-1/2 rounded-2xl px-4 py-3 text-center shadow-lg lg:text-left"
              >
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  Áreas de atuação
                </p>
                <p className="mt-1 text-[0.82rem] font-medium leading-snug">
                  {profile.specialties.join(" · ")}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Indicador de rolagem */}
      <motion.a
        href="#servicos"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground lg:inline-flex"
      >
        {hero.secondaryCta}
        {reduce ? (
          <ArrowDown className="size-4" />
        ) : (
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 1.8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <ArrowDown className="size-4" />
          </motion.span>
        )}
      </motion.a>
    </section>
  );
}
