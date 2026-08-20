import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={cn("max-w-2xl", centered && "mx-auto text-center", className)}>
      {eyebrow ? (
        <Reveal>
          <span className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-brand-400">
            <span className="h-px w-6 bg-brand-400/50" />
            {eyebrow}
          </span>
        </Reveal>
      ) : null}

      <Reveal delay={0.05}>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.7)] sm:text-4xl">
          {title}
        </h2>
      </Reveal>

      {subtitle ? (
        <Reveal delay={0.1}>
          <p className="mt-4 text-pretty leading-relaxed text-white/75">
            {subtitle}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
