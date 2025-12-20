"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative pt-24 pb-12 md:pt-32 md:pb-20 lg:pt-40 lg:pb-32 bg-burgundy overflow-hidden">
      {/* Decorative geometric elements */}
      <div className="absolute top-20 right-10 w-32 h-32 md:w-64 md:h-64 bg-cream/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 md:w-96 md:h-96 bg-cream/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="w-full lg:order-1">
            <h1 className="font-heading text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-cream font-bold uppercase leading-tight mb-4 md:mb-6 text-balance break-words animate-in fade-in duration-1000" style={{ animationDelay: "100ms" }}>
              Маркетинговый директор на аутсорсе для вашего бизнеса
            </h1>

            {/* Photo on mobile - after heading */}
            <div className="relative max-w-[90%] sm:max-w-[80%] mx-auto mb-6 lg:hidden animate-in fade-in duration-1000" style={{ animationDelay: "300ms" }}>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                <img
                  src="/Макс_1.jpeg"
                  alt="Marketing Director"
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-cream text-burgundy p-4 rounded-xl shadow-xl max-w-[85%] sm:max-w-xs animate-in fade-in duration-1000" style={{ animationDelay: "700ms" }}>
                <p className="font-heading text-2xl font-bold mb-1">415%</p>
                <p className="font-body text-xs opacity-90">Средний ROMI в наших проектах</p>
              </div>
            </div>

            <p className="font-subheading text-base sm:text-lg md:text-xl text-cream/90 mb-6 md:mb-8 leading-relaxed text-pretty break-words animate-in fade-in duration-1000" style={{ animationDelay: "200ms" }}>
              Я выстраиваю операционный отдел маркетинга в вашем бизнесе: от хаоса и «у нас есть таргетинг» — к системе,
              с прогнозируемыми заявками и понятной экономикой.
            </p>

            <ul className="space-y-3 md:space-y-4 mb-6 md:mb-10">
              {[
                "Помогаю фаундерам в fashion, HoReCa, FMCG, юр.услугах, Retail и инфопродуктах",
                "Работаю как CMO: погружаюсь в процессы, цифры и продукт, а не в отчёты по охватам",
                "Беру только тех, кто понимает, что бренду нужен маркетинг, но нет понимания как выстроить процессы",
              ].map((item, index) => (
                <li key={index} className="flex gap-2 md:gap-3 items-start animate-in fade-in duration-1000" style={{ animationDelay: `${300 + index * 100}ms` }}>
                  <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-cream/20 flex items-center justify-center mt-0.5 transition-transform duration-300 hover:scale-110">
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-cream" />
                  </div>
                  <span className="font-body text-sm md:text-base text-cream/90 break-words">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 md:gap-4 animate-in fade-in duration-1000" style={{ animationDelay: "500ms" }}>
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-cream hover:bg-cream-light text-burgundy text-sm md:text-base px-6 md:px-8 py-6 md:py-7 transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto"
              >
                Получить бесплатную консультацию 45 минут
              </Button>
            </div>

            <p className="mt-3 md:mt-4 text-xs md:text-sm text-cream/70">
              или написать в Telegram —{" "}
              <Link href="https://t.me/surikov_marketing" className="text-cream hover:underline" target="_blank">
                @surikov_marketing
              </Link>
            </p>
          </div>

          {/* Photo on desktop - right side */}
          <div className="relative hidden lg:block max-w-[80%] ml-auto lg:order-2 animate-in fade-in duration-1000" style={{ animationDelay: "300ms" }}>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
              <img
                src="/Макс_1.jpeg"
                alt="Marketing Director"
                className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-cream text-burgundy p-6 rounded-xl shadow-xl max-w-xs animate-in fade-in duration-1000" style={{ animationDelay: "700ms" }}>
              <p className="font-heading text-3xl font-bold mb-1">415%</p>
              <p className="font-body text-sm opacity-90">Средний ROMI в наших проектах</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
