"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X, type LucideIcon } from "lucide-react";

import { WhatsAppIcon } from "@/components/icons";
import { site } from "@/content/site";
import { EASE_OUT } from "@/lib/motion";
import type { Service } from "@/content/site";

type ServiceDialogProps = {
  service: (Service & { Icon: LucideIcon }) | null;
  onClose: () => void;
};

/**
 * Pop-up de um serviço: abre a partir do card com o texto completo
 * e um atalho para o WhatsApp.
 */
export function ServiceDialog({ service, onClose }: ServiceDialogProps) {
  const reduce = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<Element | null>(null);

  const open = service !== null;

  useEffect(() => {
    if (!open) return;

    openerRef.current = document.activeElement;
    closeRef.current?.focus();

    // Trava a rolagem do fundo enquanto o pop-up está aberto
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      // Mantém o foco dentro do pop-up
      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      (openerRef.current as HTMLElement | null)?.focus?.();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {service ? (
        <div className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6">
          {/* Fundo escurecido */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Painel */}
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-dialog-title"
            initial={
              reduce
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.94, y: 24 }
            }
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={
              reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 16 }
            }
            transition={{ duration: 0.32, ease: EASE_OUT }}
            className="relative w-full max-w-lg overflow-hidden rounded-t-[1.75rem] border border-white/10 bg-neutral-900/95 p-7 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9)] backdrop-blur-2xl sm:rounded-[1.75rem] sm:p-9"
          >
            {/* Brilho da marca no topo do pop-up */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_60%_at_50%_0%,rgba(45,212,191,0.16),transparent_70%)]"
            />

            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Fechar"
              className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full text-white/50 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
            >
              <X className="size-[1.1rem]" />
            </button>

            <div className="relative">
              <span className="flex size-14 items-center justify-center rounded-2xl bg-brand-400/12 text-brand-400 ring-1 ring-brand-400/20">
                <service.Icon className="size-7" strokeWidth={1.6} />
              </span>

              <h3
                id="service-dialog-title"
                className="mt-6 text-balance text-2xl font-semibold tracking-tight text-white"
              >
                {service.title}
              </h3>

              <p className="mt-4 text-pretty leading-relaxed text-white/65">
                {service.description}
              </p>

              <a
                href={site.profile.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex h-12 items-center justify-center rounded-full bg-brand-400 px-6 text-[0.95rem] font-semibold text-neutral-950 transition-all duration-300 hover:bg-brand-400/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
              >
                <WhatsAppIcon className="mr-2 size-[1.15rem]" />
                {site.services.dialogCta}
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
