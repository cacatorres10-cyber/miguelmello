import { site } from "@/content/site";

/**
 * Monta um cartão de contato (.vcf) a partir do conteúdo do site,
 * para o visitante salvar o Miguel na agenda do celular.
 */
export function buildVCard() {
  const { profile } = site;

  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:Mello;${profile.firstName};;;`,
    `FN:${profile.fullName}`,
    `TITLE:${profile.role}`,
    `TEL;TYPE=CELL,VOICE:${profile.whatsapp.tel}`,
    `URL:${profile.instagram.href}`,
    `X-SOCIALPROFILE;TYPE=instagram:${profile.instagram.href}`,
    `NOTE:${site.hero.headline}`,
    "END:VCARD",
  ];

  return lines.join("\r\n");
}

export function downloadVCard() {
  const blob = new Blob([buildVCard()], {
    type: "text/vcard;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "miguel-mello.vcf";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
}
