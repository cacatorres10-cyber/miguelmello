import { ClipboardCheck } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { site } from "@/content/site";

export function Evaluation() {
  return (
    <section className="relative pb-4 pt-2 sm:pb-8">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-brand-50/40 px-7 py-10 text-center sm:px-12 sm:py-14 dark:border-brand-400/15 dark:from-brand-400/[0.07] dark:via-neutral-950 dark:to-brand-400/[0.04]">
            <span className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-white/80 text-brand-600 shadow-sm ring-1 ring-black/[0.04] dark:bg-white/[0.06] dark:text-brand-400 dark:ring-white/10">
              <ClipboardCheck className="size-6" strokeWidth={1.7} />
            </span>

            <p className="mx-auto mt-6 max-w-2xl text-balance text-2xl font-semibold leading-snug tracking-tight sm:text-[1.9rem]">
              {site.evaluation.text}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
