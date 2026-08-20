import { cn } from "@/lib/utils";

/**
 * Sombra que fica entre o fundo animado e o texto de uma seção.
 * Use como primeiro filho de um `<section className="relative">`:
 * por vir antes no DOM, ela é pintada atrás do conteúdo.
 */
export function SectionShade({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0",
        "bg-[radial-gradient(65%_60%_at_50%_50%,rgba(10,10,10,0.94)_35%,transparent_80%)]",
        className,
      )}
    />
  );
}
