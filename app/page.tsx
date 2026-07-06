import { About } from "@/components/About";
import { CompareBand } from "@/components/CompareBand";
import { Contact } from "@/components/Contact";
import { CtaBand } from "@/components/CtaBand";
import { DimRule } from "@/components/DimRule";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Kitchens } from "@/components/Kitchens";
import { Nav } from "@/components/Nav";
import { Process } from "@/components/Process";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import { TopBar } from "@/components/TopBar";
import { TrustBar } from "@/components/TrustBar";
import { ValueProps } from "@/components/ValueProps";
import { Wardrobes } from "@/components/Wardrobes";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Workshop } from "@/components/Workshop";

export default function Home() {
  return (
    <>
      <TopBar />
      <Nav />
      <Hero />
      <TrustBar />
      <ValueProps />
      <DimRule label="01 — services" />
      <Services />
      <DimRule label="02 — wardrobes" />
      <Wardrobes />
      <DimRule label="03 — kitchens" />
      <Kitchens />
      <DimRule label="04 — workshop" />
      <Workshop />
      <DimRule label="05 — process" />
      <Process />
      <CompareBand />
      <DimRule label="06 — gallery" />
      <Gallery />
      <DimRule label="07 — about" />
      <About />
      <DimRule label="08 — faq" />
      <Faq />
      <DimRule label="09 — reviews" />
      <Reviews />
      <DimRule label="10 — contact" />
      <Contact />
      <CtaBand />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
