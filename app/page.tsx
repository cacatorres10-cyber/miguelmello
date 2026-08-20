import { MobileCta } from "@/components/mobile-cta";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Evaluation } from "@/components/sections/evaluation";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <>
      <StructuredData />
      <ThemeToggle />

      <main className="relative">
        <Hero />
        <About />
        <Services />
        <Evaluation />
        <Contact />
      </main>

      <SiteFooter />
      <MobileCta />
    </>
  );
}
