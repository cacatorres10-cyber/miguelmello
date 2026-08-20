"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type ProfilePhotoProps = {
  src: string;
  alt: string;
  initials: string;
  className?: string;
  priority?: boolean;
};

/**
 * Retrato do profissional.
 * Enquanto a foto não estiver em /public, exibe um monograma elegante
 * no lugar — basta salvar a imagem com o nome definido em `content/site.ts`.
 */
export function ProfilePhoto({
  src,
  alt,
  initials,
  className,
  priority = false,
}: ProfilePhotoProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(false);

  // O erro de carregamento pode acontecer antes da hidratação —
  // por isso conferimos o estado da imagem também na montagem.
  useEffect(() => {
    const image = imageRef.current;
    if (image?.complete && image.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <div
      className={cn(
        "relative aspect-[4/5] w-full overflow-hidden rounded-[2rem]",
        "bg-gradient-to-br from-brand-400/20 via-neutral-900 to-neutral-950",
        "ring-1 ring-white/10",
        className,
      )}
    >
      {/* Monograma — fica atrás e aparece caso a foto ainda não exista */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="select-none bg-gradient-to-br from-brand-400 to-brand-400/40 bg-clip-text text-6xl font-semibold tracking-tight text-transparent">
          {initials}
        </span>
      </div>

      {!failed && (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          ref={imageRef}
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onError={() => setFailed(true)}
          className="relative h-full w-full object-cover object-center"
        />
      )}

      {/* Escurece a base para a etiqueta flutuante ter contraste */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
      />
    </div>
  );
}
