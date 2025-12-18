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
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-burgundy overflow-hidden">
      {/* Decorative geometric elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-cream/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-cream/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream font-bold uppercase leading-tight mb-6 text-balance">
              Маркетинговый директор на аутсорсе для малого и среднего бизнеса
            </h1>

            <p className="font-subheading text-lg md:text-xl text-cream/90 mb-8 leading-relaxed text-pretty">
              Я выстраиваю операционный отдел маркетинга в вашем бизнесе: от хаоса и «у нас есть таргетинг» — к системе,
              с прогнозируемыми заявками и понятной экономикой.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Помогаю фаундерам в fashion, HoReCa, FMCG, юр.услугах, Retail и инфопродуктах",
                "Работаю как CMO: погружаюсь в процессы, цифры и продукт, а не в отчёты по охватам",
                "Беру только тех, кто понимает, что бренду нужен маркетинг, но нет понимания как выстроить процессы",
              ].map((item, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cream/20 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-cream" />
                  </div>
                  <span className="font-body text-cream/90">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-cream hover:bg-cream-light text-burgundy text-base px-8"
              >
                Получить бесплатную консультацию 45 минут
              </Button>
            </div>

            <p className="mt-4 text-sm text-cream/70">
              или написать в Telegram —{" "}
              <Link href="https://t.me/surikov_marketing" className="text-cream hover:underline" target="_blank">
                @surikov_marketing
              </Link>
            </p>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/professional-marketing-director-working-with-analy.jpg"
                alt="Marketing Director"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-cream text-burgundy p-6 rounded-xl shadow-xl max-w-xs">
              <p className="font-heading text-3xl font-bold mb-1">1411%</p>
              <p className="font-body text-sm opacity-90">Средний ROI в наших проектах</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
