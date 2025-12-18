import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PainPointsSection } from "@/components/pain-points-section"
import { SolutionSection } from "@/components/solution-section"
import { ServicesSection } from "@/components/services-section"
import { ApproachSection } from "@/components/approach-section"
import { CasesSection } from "@/components/cases-section"
import { FormatsSection } from "@/components/formats-section"
import { ConsultationSection } from "@/components/consultation-section"
import { AboutSection } from "@/components/about-section"
// import { TeamSection } from "@/components/team-section"
import { ProcessSection } from "@/components/process-section"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <PainPointsSection />
        <SolutionSection />
        <ServicesSection />
        <ApproachSection />
        <CasesSection />
        <FormatsSection />
        <ConsultationSection />
        <AboutSection />
        {/* <TeamSection /> */}
        <ProcessSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
