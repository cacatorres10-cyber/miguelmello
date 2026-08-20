"use client";

import { useState } from "react";
import {
  Bone,
  Footprints,
  PersonStanding,
  Plus,
  ShieldCheck,
  Stethoscope,
  Trophy,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceDialog } from "@/components/service-dialog";
import { site, type ServiceIcon } from "@/content/site";

const ICONS: Record<ServiceIcon, LucideIcon> = {
  idosos: PersonStanding,
  musculoesqueletica: Bone,
  esportiva: Trophy,
  cirurgia: Stethoscope,
  recovery: Zap,
  prevencao: ShieldCheck,
  palmilhas: Footprints,
};

const { services } = site;

export function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const openService =
    openIndex === null
      ? null
      : {
          ...services.items[openIndex],
          Icon: ICONS[services.items[openIndex].icon],
        };

  return (
    <section id="servicos" className="relative py-20 sm:py-28">
      <div className="container">
        <SectionHeading eyebrow={services.eyebrow} title={services.title} />

        <div className="mt-14 flex flex-wrap justify-center gap-3 sm:gap-4">
          {services.items.map((service, index) => {
            const Icon = ICONS[service.icon];

            return (
              <Reveal
                key={service.title}
                delay={(index % 3) * 0.08}
                className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(index)}
                  aria-haspopup="dialog"
                  className="surface group relative flex h-full w-full flex-col items-start rounded-3xl p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/30 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                >
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-400/10 text-brand-400 ring-1 ring-brand-400/15 transition-colors duration-300 group-hover:bg-brand-400/20">
                    <Icon className="size-6" strokeWidth={1.6} />
                  </span>

                  <h3 className="mt-5 text-[1.05rem] font-semibold leading-snug tracking-tight text-white">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-[0.9rem] leading-snug text-white/60">
                    {service.summary}
                  </p>

                  <span
                    aria-hidden
                    className="absolute right-5 top-5 flex size-8 items-center justify-center rounded-full border border-white/15 text-white/55 transition-all duration-300 group-hover:rotate-90 group-hover:border-brand-400/40 group-hover:text-brand-400"
                  >
                    <Plus className="size-4" />
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      <ServiceDialog service={openService} onClose={() => setOpenIndex(null)} />
    </section>
  );
}
