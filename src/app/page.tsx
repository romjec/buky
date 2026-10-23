import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Ages, FaqSection, FinalCta, Footer, HowItWorks, Pain, Special, Voucher } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Pain />
        <Special />
        <HowItWorks />
        <Ages />
        <Voucher />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
