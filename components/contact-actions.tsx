"use client";

import { useState } from "react";
import { Check, Copy, Instagram, Share2, UserRoundPlus } from "lucide-react";

import { WhatsAppIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";
import { downloadVCard } from "@/lib/vcard";
import { cn } from "@/lib/utils";

const { profile } = site;

export function WhatsAppButton({
  label = "Falar no WhatsApp",
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <Button
      asChild
      size="lg"
      className={cn(
        "group h-12 rounded-full bg-brand-600 px-6 text-[0.95rem] font-semibold text-white shadow-lg shadow-brand-600/20",
        "transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-600/25",
        "dark:text-neutral-950",
        className,
      )}
    >
      <a href={profile.whatsapp.href} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon className="mr-2 size-[1.15rem]" />
        {label}
        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </a>
    </Button>
  );
}

export function InstagramButton({ className }: { className?: string }) {
  return (
    <Button
      asChild
      size="lg"
      variant="outline"
      className={cn(
        "group h-12 rounded-full border-black/10 bg-white/70 px-6 text-[0.95rem] font-semibold backdrop-blur-md",
        "transition-all duration-300 hover:-translate-y-0.5 hover:bg-white",
        "dark:border-white/10 dark:bg-white/[0.06] dark:hover:bg-white/[0.1]",
        className,
      )}
    >
      <a
        href={profile.instagram.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram className="mr-2 size-[1.15rem]" />
        {profile.instagram.display}
      </a>
    </Button>
  );
}

export function SaveContactButton({ className }: { className?: string }) {
  const [saved, setSaved] = useState(false);

  return (
    <Button
      type="button"
      size="lg"
      variant="ghost"
      onClick={() => {
        downloadVCard();
        setSaved(true);
        window.setTimeout(() => setSaved(false), 2400);
      }}
      className={cn(
        "h-12 rounded-full px-5 text-[0.95rem] font-medium text-muted-foreground",
        "transition-colors hover:bg-black/[0.04] hover:text-foreground dark:hover:bg-white/[0.06]",
        className,
      )}
    >
      {saved ? (
        <Check className="mr-2 size-[1.05rem] text-brand-600" />
      ) : (
        <UserRoundPlus className="mr-2 size-[1.05rem]" />
      )}
      {saved ? "Contato salvo" : "Salvar contato"}
    </Button>
  );
}

export function ShareButton({ className }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const url = typeof window !== "undefined" ? window.location.href : site.seo.url;
    const shareData = {
      title: site.seo.title,
      text: site.hero.headline,
      url,
    };

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        /* usuário cancelou o compartilhamento */
        return;
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      /* navegador sem permissão para a área de transferência */
    }
  }

  return (
    <Button
      type="button"
      size="lg"
      variant="ghost"
      onClick={handleShare}
      className={cn(
        "h-12 rounded-full px-5 text-[0.95rem] font-medium text-muted-foreground",
        "transition-colors hover:bg-black/[0.04] hover:text-foreground dark:hover:bg-white/[0.06]",
        className,
      )}
    >
      {copied ? (
        <Copy className="mr-2 size-[1.05rem] text-brand-600" />
      ) : (
        <Share2 className="mr-2 size-[1.05rem]" />
      )}
      {copied ? "Link copiado" : "Compartilhar"}
    </Button>
  );
}
