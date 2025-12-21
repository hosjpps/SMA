"use client"

import { useEffect } from "react"
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
import { CookieBanner } from "@/components/cookie-banner"

export default function Home() {
  useEffect(() => {
    // Обработка якорей при загрузке страницы или переходе с других страниц
    const handleHashScroll = () => {
      const hash = window.location.hash
      if (hash) {
        const id = hash.substring(1) // Убираем #
        setTimeout(() => {
          const element = document.getElementById(id)
          if (element) {
            const headerHeight = 80
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
            const offsetPosition = elementPosition - headerHeight

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            })
          }
        }, 100) // Небольшая задержка для загрузки контента
      }
    }

    // Выполняем при монтировании
    handleHashScroll()

    // Также слушаем изменения hash
    window.addEventListener("hashchange", handleHashScroll)
    return () => window.removeEventListener("hashchange", handleHashScroll)
  }, [])

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
      <CookieBanner />
    </div>
  )
}
