import { site } from "@/content/site";

/**
 * Dados estruturados (schema.org) — ajudam o Google a entender
 * quem é o profissional e quais serviços ele oferece.
 */
export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    additionalType: "https://schema.org/Physiotherapy",
    name: site.profile.fullName,
    description: site.seo.description,
    url: site.seo.url,
    telephone: site.profile.whatsapp.tel,
    image: `${site.seo.url}${site.profile.photo}`,
    medicalSpecialty: "PhysicalTherapy",
    availableService: site.services.items.map((service) => ({
      "@type": "MedicalTherapy",
      name: service.title,
      description: service.description,
    })),
    founder: {
      "@type": "Person",
      name: site.profile.fullName,
      jobTitle: site.profile.role,
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: site.profile.university,
      },
      sameAs: [site.profile.instagram.href],
    },
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
