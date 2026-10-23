import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { FinalCta, Footer } from "@/components/Sections";
import { BeforeAfter, FaqB, Founder, HeroB, StepsB, VoucherLine } from "@/components/VariantB";

// Variante B des A/B-Tests – Besucher landen über src/proxy.ts auf "/", nicht direkt hier.
export const metadata: Metadata = { robots: { index: false } };

export default function HomeB() {
  return (
    <>
      <Header />
      <main>
        <HeroB />
        <BeforeAfter />
        <StepsB />
        <Founder />
        <VoucherLine />
        <FaqB />
        <FinalCta />
      </main>
      <Footer showAges={false} />
    </>
  );
}
