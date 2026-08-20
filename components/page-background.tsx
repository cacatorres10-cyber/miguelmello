"use client";

import { BackgroundPathsLayer } from "@/components/ui/background-paths";

/**
 * Fundo da página inteira: preto com o traçado animado correndo por trás
 * de todas as seções. Fica fixo — o conteúdo desliza por cima dele.
 */
export function PageBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 bg-neutral-950"
    >
      <BackgroundPathsLayer cover className="opacity-[0.34]" />

      {/* Brilho suave da marca no topo */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_45%_at_75%_0%,rgba(20,184,166,0.16),transparent_70%)]" />

      {/* Vinheta: escurece as bordas e mantém o texto legível */}
      <div className="absolute inset-0 bg-[radial-gradient(80%_65%_at_50%_45%,transparent_15%,rgba(10,10,10,0.92)_100%)]" />
    </div>
  );
}
