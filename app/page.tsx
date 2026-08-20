import { MobileCta } from "@/components/mobile-cta";
import { PageBackground } from "@/components/page-background";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";

export default function Home() {
  return (
    <>
      <StructuredData />
      <PageBackground />

      <main className="relative">
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>

      <SiteFooter />
      <MobileCta />
    </>
  );
}
