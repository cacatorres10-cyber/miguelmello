import { Check } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { site } from "@/content/site";

const { about } = site;

export function About() {
  return (
    <section id="sobre" className="relative py-20 sm:py-28">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Texto */}
          <div className="max-w-xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-brand-600">
                <span className="h-px w-6 bg-brand-400/60" />
                {about.eyebrow}
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                {about.title}
              </h2>
            </Reveal>

            {about.paragraphs.map((paragraph, index) => (
              <Reveal key={index} delay={0.1 + index * 0.05}>
                <p className="mt-5 text-pretty text-[1.05rem] leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          {/* Objetivos */}
          <Reveal delay={0.15}>
            <div className="glass rounded-3xl p-7 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.4)] sm:p-9">
              <h3 className="text-lg font-semibold tracking-tight">
                {about.goalsTitle}
              </h3>

              <ul className="mt-6 space-y-4">
                {about.goals.map((goal, index) => (
                  <Reveal as="li" key={goal} delay={index * 0.06} y={12}>
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700 dark:bg-brand-400/15 dark:text-brand-400">
                        <Check className="size-3.5" strokeWidth={3} />
                      </span>
                      <span className="text-pretty leading-relaxed">
                        {goal}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
