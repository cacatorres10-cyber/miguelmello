import { Instagram } from "lucide-react";

import { WhatsAppIcon } from "@/components/icons";
import { SectionShade } from "@/components/section-shade";
import { site } from "@/content/site";

const { footer, profile } = site;

const socialLink =
  "flex size-10 items-center justify-center rounded-full border border-white/12 text-white/65 transition-colors hover:border-brand-400/30 hover:bg-brand-400/10 hover:text-brand-400";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/[0.08] py-10">
      <SectionShade />

      <div className="container relative flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-sm font-semibold tracking-tight text-white">
            {footer.signature}
          </p>
          <p className="mt-1 text-sm text-white/60">{footer.credential}</p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={profile.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className={socialLink}
          >
            <WhatsAppIcon className="size-[1.05rem]" />
          </a>
          <a
            href={profile.instagram.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={socialLink}
          >
            <Instagram className="size-[1.05rem]" />
          </a>
        </div>
      </div>

      <p className="container mt-8 text-center text-xs text-white/45">
        © {new Date().getFullYear()} {profile.fullName}. Todos os direitos
        reservados.
      </p>
    </footer>
  );
}
