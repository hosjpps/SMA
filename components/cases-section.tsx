"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function CasesSection() {
  const [openCase, setOpenCase] = useState<number | null>(0)

  const cases = [
    {
      title: "Fashion / Luxury",
      industry: "Fashion / Luxury",
      image: "/1.jpeg",
      task: "понять реальную экономику бренда и подготовить основу для масштабирования",
      actions: [
        "Провел разбор финансовой составляющей: выявлены точки роста, понимание UNIT-экономики",
        "Выявил ключевые точки роста и ограничения",
        "Подготовил сценарии развития с привязкой выручки и вложений",
        "Сформировал роль CMO в проекте",
      ],
      results: [
        "Чёткое понимание, на каких продуктах бренд зарабатывает",
        "Создана стратегия роста с сохранением маржинальности",
        "Зафиксирована управляемая модель масштабирования на RU и WORLDWIDE",
      ],
    },
    {
      title: "Магазин мужской одежды",
      industry: "Retail",
      image: "/2.jpeg",
      task: "выстроить систему маркетинга и CRM для шоурума",
      period: "первые 2 месяца",
      actions: [
        "Запустил Google Ads с акцентом на «примерку костюма»",
        "Настроил лидогенерацию через сайт + скидка 10%",
        "Разработал блог о мужской моде",
        "Внедрил amoCRM для учёта офлайн-продаж",
      ],
      results: [
        "≈ 88 000 показов, 3 630 кликов (CTR ≈ 4,1%, CPC ≈ 0,07$)",
        "301 поведенческая конверсия",
        "19 заявок в CRM (CPL ≈ 1,64$)",
        "ROMI 412%",
      ],
    },
    {
      title: "B2B производство мужской одежды",
      industry: "B2B производство",
      image: "/3.jpeg",
      task: "увеличить оптовые заявки, снизить CAC",
      period: "18 дней в Яндекс.Директ",
      actions: [
        "Перестроил структуру РК, сегментировал запросы",
        "Обновил офферы для оптовиков",
        "Настроил сквозную аналитику",
      ],
      results: [
        "ROI ≈ 1411% (окупаемость в 14 раз)",
        "ДРР — 6,6%",
        "CAC снизился в 2 раза",
        "Конверсия лидов выросла с ~23% до ~46%",
      ],
    },
    {
      title: "Сеть азиатского стрит-фуда",
      industry: "HoReCa",
      image: "/4.jpg",
      task: "подготовить к зимнему проекту и pop-up-точкам",
      actions: [
        "Согласовал участие в городском зимнем проекте",
        "Разработал концепцию pop-up: ассортимент, зимние спецпредложения",
        "Обновил POS-материалы во всей сети",
        "Синхронизировал цены на всех точках и в агрегаторах",
        "Запустил новый мерч для сотрудников",
      ],
      results: [
        "Сеть подготовлена к зимнему сезону",
        "Визуальная коммуникация приведена к единому стандарту",
        "Создана база для оценки эффектов по выручке и чеку",
      ],
    },
    {
      title: "Услуги (автоподбор)",
      industry: "Услуги (автоподбор)",
      image: "/5.jpeg",
      task: "упаковать эксперта в бренд услуг",
      actions: [
        "Провёл бриф и описал линейку услуг",
        "Сформулировал позиционирование",
        "Разработал стратегию маркетинга (Telegram/VK/Instagram)",
        "Определил роль Авито и Яндекс Услуг",
        "Запланировал посевы и бартер",
        "Структурировал презентацию-стратегию",
      ],
      results: [
        "Понятный стартовый план продвижения",
        "Зафиксирована логика каналов",
        "Услуги упакованы в продуктовую линейку",
      ],
    },
  ]

  return (
    <section id="cases" className="py-12 md:py-20 lg:py-32 bg-cream/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-burgundy font-bold uppercase mb-4 md:mb-6 px-2">
            Кейсы по отраслям
          </h2>
          <p className="font-subheading text-base sm:text-lg md:text-xl text-foreground/80 px-4">
            Выбираю немного проектов, но в каждый захожу глубоко.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-3 sm:space-y-4">
          {cases.map((caseItem, index) => {
            const { ref, isInView } = useInView()
            return (
              <Card
                key={index}
                ref={ref}
                className={`overflow-hidden border-burgundy/20 relative group transition-transform duration-500 hover:scale-[1.02] ${
                  isInView ? "opacity-100 animate-in fade-in duration-1000" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
              {caseItem.image && (
                <div className="absolute inset-0 z-0">
                  <img
                    src={caseItem.image}
                    alt={caseItem.title}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r from-white from-0% via-white/90 via-45% to-transparent to-75% transition-opacity duration-300 ${openCase === index ? 'opacity-80' : 'opacity-90'}`} />
                </div>
              )}
              <div className="relative z-10">
              <button
                onClick={() => setOpenCase(openCase === index ? null : index)}
                className="w-full p-4 sm:p-6 flex justify-between items-center gap-3 sm:gap-4 text-left"
              >
                <div className="max-w-[60%] sm:max-w-[50%]">
                  <h3 className="font-subheading text-base sm:text-lg md:text-xl font-semibold text-burgundy mb-1">{caseItem.title}</h3>
                  <p className="font-body text-xs sm:text-sm text-muted-foreground font-medium">{caseItem.industry}</p>
                </div>
                <ChevronDown
                  className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-burgundy flex-shrink-0 transition-transform ${
                    openCase === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openCase === index && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 space-y-3 sm:space-y-4 animate-in fade-in duration-500 max-w-full sm:max-w-[50%]">
                  <div>
                    <p className="font-body text-xs sm:text-sm text-black mb-1 font-semibold">
                      <span className="font-semibold">Задача:</span> {caseItem.task}
                    </p>
                    {caseItem.period && (
                      <p className="font-body text-xs sm:text-sm text-black font-semibold">
                        <span className="font-semibold">Период:</span> {caseItem.period}
                      </p>
                    )}
                  </div>

                  <div>
                    <h4 className="font-subheading text-sm sm:text-base font-semibold text-black mb-2">Что сделал:</h4>
                    <ul className="space-y-1">
                      {caseItem.actions.map((action, i) => (
                        <li
                          key={i}
                          className="font-body text-xs sm:text-sm text-black pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-burgundy font-semibold"
                        >
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-subheading text-sm sm:text-base font-semibold text-burgundy mb-2">Результат:</h4>
                    <ul className="space-y-1">
                      {caseItem.results.map((result, i) => (
                        <li
                          key={i}
                          className="font-body text-xs sm:text-sm text-black pl-4 relative before:content-['✓'] before:absolute before:left-0 before:text-burgundy font-semibold"
                        >
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              </div>
            </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
