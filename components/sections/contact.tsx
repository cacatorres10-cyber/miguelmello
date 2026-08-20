import { ArrowUpRight, Instagram } from "lucide-react";

import { WhatsAppIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import {
  SaveContactButton,
  ShareButton,
  WhatsAppButton,
} from "@/components/contact-actions";
import { site } from "@/content/site";

const { cta, profile } = site;

const channels = [
  {
    label: "WhatsApp",
    value: profile.whatsapp.display,
    href: profile.whatsapp.href,
    Icon: WhatsAppIcon,
  },
  {
    label: "Instagram",
    value: profile.instagram.display,
    href: profile.instagram.href,
    Icon: Instagram,
  },
];

export function Contact() {
  return (
    <section id="contato" className="relative px-4 py-16 sm:px-6 sm:py-24">
      <div className="glass relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] px-6 py-16 sm:rounded-[2.5rem] sm:px-12 sm:py-20">
        {/* Brilho da marca */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(45,212,191,0.14),transparent_70%)]"
        />

        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-brand-400">
              <span className="h-px w-6 bg-brand-400/50" />
              {cta.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="mt-5 text-pretty text-lg font-medium leading-snug text-white/70">
              {cta.lead}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white sm:text-[2.6rem] sm:leading-[1.1]">
              {cta.title}
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mx-auto mt-4 max-w-md text-pretty leading-relaxed text-white/55">
              {cta.subtitle}
            </p>
          </Reveal>

          {/* Canais de contato */}
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {channels.map(({ label, value, href, Icon }, index) => (
              <Reveal key={label} delay={0.2 + index * 0.08}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400/30 hover:bg-white/[0.08]"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-400/12 text-brand-400 transition-colors group-hover:bg-brand-400/20">
                    <Icon className="size-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[0.68rem] font-medium uppercase tracking-[0.14em] text-white/40">
                      {label}
                    </span>
                    <span className="block truncate text-[0.98rem] font-medium text-white">
                      {value}
                    </span>
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-400" />
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.35}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <WhatsAppButton />
              <SaveContactButton />
              <ShareButton />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
