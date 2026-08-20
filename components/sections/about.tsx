import { Check } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { site } from "@/content/site";

const { about } = site;

export function About() {
  return (
    <section id="sobre" className="relative py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-brand-400">
              <span className="h-px w-6 bg-brand-400/50" />
              {about.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {about.title}
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-white/75">
              {about.lead}
            </p>
          </Reveal>

          {about.paragraphs.map((paragraph, index) => (
            <Reveal key={index} delay={0.15 + index * 0.05}>
              <p className="mt-4 text-pretty leading-relaxed text-white/55">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Objetivos em etiquetas — leitura rápida, sem parágrafos longos */}
        <div className="mx-auto mt-12 max-w-4xl">
          <Reveal>
            <p className="text-center text-sm font-medium text-white/45">
              {about.goalsTitle}
            </p>
          </Reveal>

          <ul className="mt-6 flex flex-wrap justify-center gap-2.5">
            {about.goals.map((goal, index) => (
              <Reveal as="li" key={goal} delay={index * 0.05} y={12}>
                <span className="surface inline-flex items-center gap-2 rounded-full py-2 pl-2.5 pr-4 text-[0.9rem] text-white/85 transition-colors hover:border-brand-400/30 hover:bg-white/[0.06]">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-400/15 text-brand-400">
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  {goal}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
