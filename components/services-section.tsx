"use client"

import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"

export function ServicesSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  const packages = [
    {
      name: "Минимум",
      price: "120 000",
      items: [
        "Управление и стратегия — 30 000 ₽",
        "Контекстолог/Таргетолог — 40 000 ₽",
        "Рекламный бюджет — от 50 000 ₽",
      ],
      featured: false,
    },
    {
      name: "Стандарт",
      price: "160 000",
      items: [
        "Управление и стратегия — 30 000 ₽",
        "Контекстолог/Таргетолог — 40 000 ₽",
        "Рекламный бюджет — от 50 000 ₽",
        "SMM — 40 000 ₽",
      ],
      featured: true,
    },
    {
      name: "Максимум",
      price: "250 000",
      items: [
        "Управление и стратегия — 30 000 ₽",
        "Контекстолог и Таргетолог — 80 000 ₽",
        "Рекламный бюджет — от 100 000 ₽",
        "SMM — 40 000 ₽",
      ],
      featured: false,
    },
  ]

  const additionalServices = [
    { name: "Стратегия и аудит маркетинга", price: "От 25 000 ₽" },
    { name: "Продюссирование контента", price: "Цена договорная" },
    { name: "SMM и контент-стратегия", price: "50 000 ₽" },
    { name: "Брендинг, упаковка, УТП", price: "50 000 ₽" },
    { name: "CRM и воронки (amoCRM)", price: "25 000 ₽" },
    { name: "Исследования, опросы, каздев", price: "25 000 ₽" },
    { name: "Презентации и отчёты", price: "Бесплатно в тарифе" },
    { name: "Сайты и веб-приложения", price: "от 70 000 ₽" },
    { name: "Лендинги и сайты-визитки", price: "от 35 000 ₽" },
    { name: "Телеграм-боты, голосовые агенты", price: "Договорная" },
    { name: "Автоматизация маркетинга", price: "Договорная" },
    { name: "Дашборды и аналитика соцсетей", price: "Договорная" },
  ]

  return (
    <section id="services" className="py-12 md:py-20 lg:py-32 bg-gradient-to-b from-cream-light to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-burgundy font-bold uppercase mb-4 md:mb-6 px-2">
            С чем я помогаю бизнесу
          </h2>
          <p className="font-subheading text-base sm:text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto px-4">
            Фактически — CMO на аутсорсе. Практически — полный стек маркетинга, разработки и автоматизации.
          </p>
        </div>

        <div className="mb-10 md:mb-16">
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg mb-8 md:mb-12">
            <h3 className="font-heading text-xl sm:text-2xl md:text-3xl text-burgundy font-bold uppercase mb-3 md:mb-4">
              CMO / Маркетинговый директор на аутсорсе
            </h3>
            <p className="font-body text-sm sm:text-base text-foreground/80 leading-relaxed mb-6 md:mb-8">
              Комплексная роль: стратегия, операционное управление маркетингом, команда подрядчиков, контроль цифр.
              Подходит, если у вас нет сильного маркетолога в штате, но бизнес уже дорос до системного маркетинга.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 max-w-6xl mx-auto">
              {packages.map((pkg, index) => {
                const { ref, isInView } = useInView()
                return (
                  <Card
                    key={index}
                    ref={ref}
                    className={`p-4 sm:p-5 flex flex-col h-full transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                      pkg.featured ? "border-2 border-burgundy shadow-xl relative" : "border border-burgundy/20"
                    } ${
                      isInView ? "animate-in fade-in duration-1000" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                  {pkg.featured && (
                    <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-burgundy text-cream px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-subheading">
                      Популярный
                    </div>
                  )}
                  <h4 className="font-subheading text-xl sm:text-2xl font-bold text-burgundy mb-2">{pkg.name}</h4>
                  <div className="mb-4 sm:mb-5">
                    <span className="font-heading text-2xl sm:text-3xl font-bold text-foreground">{pkg.price}</span>
                    <span className="text-muted-foreground ml-1">₽</span>
                  </div>
                  <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-5 flex-grow">
                    {pkg.items.map((item, i) => (
                      <li key={i} className="flex gap-2 items-start">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-burgundy flex-shrink-0 mt-0.5" />
                        <span className="font-body text-xs sm:text-sm text-foreground/90 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button onClick={scrollToContact} className="w-full bg-burgundy hover:bg-burgundy-dark text-cream mt-auto transition-all duration-300 hover:scale-105 text-sm sm:text-base py-5 sm:py-6">Оставить заявку</Button>
                </Card>
                )
              })}
            </div>

            <div className="mt-6 md:mt-8 p-4 sm:p-6 bg-cream/50 rounded-xl">
              <h4 className="font-subheading text-base sm:text-lg font-semibold text-burgundy mb-3">
                Что входит в «Управление и стратегия»:
              </h4>
              <ul className="grid sm:grid-cols-2 gap-2 font-body text-xs sm:text-sm text-foreground/90">
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-burgundy flex-shrink-0 mt-0.5" />
                  Стратегия и аналитика
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-burgundy flex-shrink-0 mt-0.5" />
                  Обновление и/или разработка воронок
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-burgundy flex-shrink-0 mt-0.5" />
                  Работа с CRM маркетингом
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-burgundy flex-shrink-0 mt-0.5" />
                  Создание справочников, представленность бренда
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-burgundy pt-10 sm:pt-14 pb-12 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h3 className="font-heading text-xl sm:text-2xl md:text-3xl text-cream font-bold uppercase mb-6 sm:mb-8 text-center px-2">
            Дополнительные услуги
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {additionalServices.map((service, index) => (
              <Card key={index} className="p-3 sm:p-4 hover:shadow-lg transition-shadow border-burgundy/10">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                  <h4 className="font-body text-xs sm:text-sm font-semibold text-foreground">{service.name}</h4>
                  <span className="font-subheading text-xs sm:text-sm text-burgundy sm:whitespace-nowrap">{service.price}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
