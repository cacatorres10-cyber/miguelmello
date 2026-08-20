"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";

import { AnimatedTitle } from "@/components/animated-title";
import { InstagramButton, WhatsAppButton } from "@/components/contact-actions";
import { ProfilePhoto } from "@/components/profile-photo";
import { RotatingText } from "@/components/rotating-text";
import { site } from "@/content/site";
import { EASE_OUT, fadeUp } from "@/lib/motion";

const { hero, profile } = site;

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] w-full items-center"
    >
      {/* Escurece a área do texto para o traçado não competir com a leitura */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(65%_55%_at_28%_50%,rgba(10,10,10,0.9)_20%,transparent_75%)]"
      />

      <div className="container relative z-10 py-24 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* ── Texto ───────────────────────────────────────────── */}
          <div className="text-center lg:text-left">
            <motion.span
              {...fadeUp(reduce)}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[0.8rem] font-medium text-white/80 backdrop-blur-md"
            >
              <span className="relative flex size-2">
                {!reduce && (
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-400 opacity-70" />
                )}
                <span className="relative inline-flex size-2 rounded-full bg-brand-400" />
              </span>
              {hero.badge}
            </motion.span>

            <AnimatedTitle
              text={hero.title}
              delay={0.15}
              className="mt-6 text-[3.25rem] font-bold leading-[0.95] sm:text-7xl lg:text-[5rem]"
            />

            <motion.p
              {...fadeUp(reduce, 0.5)}
              className="mt-4 text-base font-semibold text-brand-400 sm:text-lg"
            >
              {profile.role}
              <span className="mx-2 text-white/35">·</span>
              <span className="font-normal text-white/75">
                {profile.universityShort}
              </span>
            </motion.p>

            <motion.h2
              {...fadeUp(reduce, 0.6)}
              className="mt-6 text-balance text-xl font-medium leading-snug text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.8)] sm:text-2xl"
            >
              {hero.headline}
            </motion.h2>

            {/* Frase que se alterna sozinha */}
            <motion.p
              {...fadeUp(reduce, 0.75)}
              className="mt-4 flex flex-wrap items-baseline justify-center gap-x-2 text-lg font-medium lg:justify-start"
            >
              <span className="text-white/65">{hero.rotatingPrefix}</span>
              <RotatingText
                words={hero.rotatingWords}
                className="font-semibold text-brand-400"
              />
            </motion.p>

            <motion.div
              {...fadeUp(reduce, 0.9, 16)}
              className="mt-10 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              <WhatsAppButton label={hero.primaryCta} />
              <InstagramButton />
            </motion.div>
          </div>

          {/* ── Retrato ─────────────────────────────────────────── */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: EASE_OUT }}
            className="order-first mx-auto w-full max-w-[14rem] sm:max-w-[17rem] lg:order-last lg:max-w-sm"
          >
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-6 rounded-full bg-brand-400/15 blur-3xl"
              />
              <ProfilePhoto
                src={profile.photo}
                alt={profile.photoAlt}
                initials={profile.initials}
                priority
                className="relative shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]"
              />

              {/* Etiqueta flutuante com as especialidades */}
              <motion.div
                {...fadeUp(reduce, 0.9)}
                className="glass absolute -bottom-5 left-1/2 w-[92%] -translate-x-1/2 rounded-2xl px-4 py-3 text-center shadow-lg lg:text-left"
              >
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-white/60">
                  Áreas de atuação
                </p>
                <p className="mt-1 text-[0.82rem] font-medium leading-snug text-white">
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
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 text-xs font-medium text-white/65 transition-colors hover:text-white lg:inline-flex"
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
