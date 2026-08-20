import {
  Bone,
  Footprints,
  PersonStanding,
  ShieldCheck,
  Stethoscope,
  Trophy,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { site, type ServiceIcon } from "@/content/site";
import { cn } from "@/lib/utils";

const ICONS: Record<ServiceIcon, LucideIcon> = {
  idosos: PersonStanding,
  musculoesqueletica: Bone,
  esportiva: Trophy,
  cirurgia: Stethoscope,
  recovery: Zap,
  prevencao: ShieldCheck,
  palmilhas: Footprints,
};

const COLUMNS_LG = 3;
const COLUMNS_SM = 2;

/**
 * Faz o último card ocupar o espaço que sobra na grade,
 * qualquer que seja a quantidade de serviços cadastrados.
 */
function trailingSpan(total: number) {
  const restLg = total % COLUMNS_LG;
  const restSm = total % COLUMNS_SM;

  return cn(
    restSm === 1 && "sm:col-span-2",
    restLg === 1 && "lg:col-span-3",
    restLg === 2 && "lg:col-span-2",
  );
}

const { services } = site;

export function Services() {
  const total = services.items.length;

  return (
    <section id="servicos" className="relative py-20 sm:py-28">
      {/* Fundo sutil para separar a seção */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-brand-50/70 to-transparent dark:via-brand-400/[0.05]"
      />

      <div className="container relative">
        <SectionHeading
          eyebrow={services.eyebrow}
          title={services.title}
          subtitle={services.subtitle}
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {services.items.map((service, index) => {
            const Icon = ICONS[service.icon];
            const isLast = index === total - 1;
            const wide = isLast && trailingSpan(total) !== "";

            return (
              <Reveal
                as="article"
                key={service.title}
                delay={(index % COLUMNS_LG) * 0.08}
                className={cn(
                  "group relative flex flex-col rounded-3xl border border-black/[0.06] bg-card p-6 sm:p-7",
                  "shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300",
                  "hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_24px_50px_-30px_rgba(15,23,42,0.45)]",
                  "dark:border-white/[0.08] dark:hover:border-brand-400/30",
                  wide && "sm:flex-row sm:items-start sm:gap-6",
                  isLast && trailingSpan(total),
                )}
              >
                <span
                  className={cn(
                    "flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-300",
                    "group-hover:bg-brand-100 dark:bg-brand-400/10 dark:text-brand-400 dark:group-hover:bg-brand-400/20",
                  )}
                >
                  <Icon className="size-6" strokeWidth={1.7} />
                </span>

                <div className={cn(!wide && "mt-5")}>
                  <h3 className="text-[1.05rem] font-semibold leading-snug tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-pretty text-[0.95rem] leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
