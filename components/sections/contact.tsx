import { ArrowUpRight, Instagram } from "lucide-react";

import { WhatsAppIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import {
  SaveContactButton,
  ShareButton,
  WhatsAppButton,
} from "@/components/contact-actions";
import { BackgroundPathsLayer } from "@/components/ui/background-paths";
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
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-neutral-950 px-6 py-16 text-white ring-1 ring-white/[0.08] sm:rounded-[2.5rem] sm:px-12 sm:py-20">
        {/* Mesmo fundo animado do topo, fechando o cartão */}
        <div className="absolute inset-0 opacity-[0.22] [&_svg]:text-white">
          <BackgroundPathsLayer />
        </div>

        {/* Escurece o centro para o texto ficar sempre legível */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(65%_60%_at_50%_50%,rgba(10,10,10,0.92)_25%,transparent_100%)]"
        />

        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-brand-400">
              <span className="h-px w-6 bg-brand-400/50" />
              {cta.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-[2.6rem] sm:leading-[1.1]">
              {cta.title}
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-lg text-pretty text-[1.05rem] leading-relaxed text-white/70">
              {cta.subtitle}
            </p>
          </Reveal>

          {/* Canais de contato */}
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {channels.map(({ label, value, href, Icon }, index) => (
              <Reveal key={label} delay={0.15 + index * 0.08}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08]"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-400 transition-colors group-hover:bg-white/15">
                    <Icon className="size-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[0.7rem] font-medium uppercase tracking-[0.14em] text-white/50">
                      {label}
                    </span>
                    <span className="block truncate text-[0.98rem] font-medium">
                      {value}
                    </span>
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-white/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <WhatsAppButton />
              <SaveContactButton className="text-white/70 hover:bg-white/10 hover:text-white" />
              <ShareButton className="text-white/70 hover:bg-white/10 hover:text-white" />
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <p className="mt-8 text-sm text-white/50">{cta.note}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
