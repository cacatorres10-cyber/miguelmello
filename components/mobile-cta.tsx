"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Instagram } from "lucide-react";

import { WhatsAppIcon } from "@/components/icons";
import { site } from "@/content/site";

const { hero, profile } = site;

/**
 * Barra fixa de contato no mobile — aparece depois que o visitante
 * rola a primeira dobra.
 */
export function MobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > window.innerHeight * 0.7);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="fixed inset-x-0 bottom-0 z-50 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] lg:hidden"
        >
          <div className="glass mx-auto flex max-w-md items-center gap-2 rounded-full p-1.5 shadow-[0_16px_40px_-16px_rgba(15,23,42,0.5)]">
            <a
              href={profile.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-brand-400 text-sm font-semibold text-neutral-950 transition-colors hover:bg-brand-400/90"
            >
              <WhatsAppIcon className="size-[1.05rem]" />
              {hero.primaryCta}
            </a>
            <a
              href={profile.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex size-11 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white"
            >
              <Instagram className="size-5" />
            </a>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
