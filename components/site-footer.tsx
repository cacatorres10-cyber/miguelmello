import { Instagram } from "lucide-react";

import { WhatsAppIcon } from "@/components/icons";
import { site } from "@/content/site";

const { footer, profile } = site;

export function SiteFooter() {
  return (
    <footer className="border-t border-black/[0.06] py-10 dark:border-white/[0.08]">
      <div className="container flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-sm font-semibold tracking-tight">
            {footer.signature}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {footer.credential}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={profile.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex size-10 items-center justify-center rounded-full border border-black/[0.07] text-muted-foreground transition-colors hover:border-brand-200 hover:bg-brand-50 hover:text-brand-600 dark:border-white/10 dark:hover:border-brand-400/30 dark:hover:bg-brand-400/10 dark:hover:text-brand-400"
          >
            <WhatsAppIcon className="size-[1.05rem]" />
          </a>
          <a
            href={profile.instagram.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex size-10 items-center justify-center rounded-full border border-black/[0.07] text-muted-foreground transition-colors hover:border-brand-200 hover:bg-brand-50 hover:text-brand-600 dark:border-white/10 dark:hover:border-brand-400/30 dark:hover:bg-brand-400/10 dark:hover:text-brand-400"
          >
            <Instagram className="size-[1.05rem]" />
          </a>
        </div>
      </div>

      <p className="container mt-8 text-center text-xs text-muted-foreground/70">
        © {new Date().getFullYear()} {profile.fullName}. Todos os direitos
        reservados.
      </p>
    </footer>
  );
}
