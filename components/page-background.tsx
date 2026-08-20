"use client";

import { BackgroundPathsLayer } from "@/components/ui/background-paths";

/**
 * Fundo da página inteira: preto com o traçado animado correndo por trás
 * de todas as seções. Fica fixo — o conteúdo desliza por cima dele.
 *
 * São três camadas sobre o traçado, do mais amplo ao mais localizado:
 * o véu (deixa as linhas discretas), o brilho da marca e a vinheta
 * (apaga as bordas). A sombra que protege cada texto vem depois, por
 * seção, com <SectionShade />.
 */
export function PageBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 bg-neutral-950"
    >
      <BackgroundPathsLayer cover className="opacity-[0.38]" />

      {/* Véu: mantém o traçado presente, mas sem competir com a leitura */}
      <div className="absolute inset-0 bg-neutral-950/55" />

      {/* Brilho suave da marca no topo */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_45%_at_75%_0%,rgba(20,184,166,0.13),transparent_70%)]" />

      {/* Vinheta: escurece as bordas */}
      <div className="absolute inset-0 bg-[radial-gradient(85%_70%_at_50%_40%,transparent_25%,rgba(10,10,10,0.95)_100%)]" />
    </div>
  );
}
