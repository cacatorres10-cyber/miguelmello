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
        "relative aspect-square w-full overflow-hidden rounded-[2rem]",
        "bg-gradient-to-br from-brand-100 via-white to-brand-50",
        "dark:from-brand-400/15 dark:via-neutral-900 dark:to-neutral-950",
        "ring-1 ring-black/[0.06] dark:ring-white/10",
        className,
      )}
    >
      {/* Monograma — fica atrás e aparece caso a foto ainda não exista */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="select-none bg-gradient-to-br from-brand-600 to-brand-400 bg-clip-text text-6xl font-semibold tracking-tight text-transparent">
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

      {/* Brilho suave sobre a imagem */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/20 dark:from-black/30 dark:to-white/5"
      />
    </div>
  );
}
