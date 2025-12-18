"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"

export function CasesSection() {
  const [openCase, setOpenCase] = useState<number | null>(0)

  const cases = [
    {
      title: "Asansara — премиальный бренд украшений из нефрита",
      industry: "Fashion / Luxury",
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
      title: "МиронПодбор / TMAuto — автоподбор",
      industry: "Услуги (автоподбор)",
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
    <section id="cases" className="py-20 md:py-32 bg-cream/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-burgundy font-bold uppercase mb-6">
            Кейсы по отраслям
          </h2>
          <p className="font-subheading text-xl text-foreground/80">
            Выбираю немного проектов, но в каждый захожу глубоко.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-4">
          {cases.map((caseItem, index) => (
            <Card key={index} className="overflow-hidden border-burgundy/20">
              <button
                onClick={() => setOpenCase(openCase === index ? null : index)}
                className="w-full p-6 flex justify-between items-center gap-4 hover:bg-cream/50 transition-colors text-left"
              >
                <div>
                  <h3 className="font-subheading text-xl font-semibold text-burgundy mb-1">{caseItem.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{caseItem.industry}</p>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-burgundy flex-shrink-0 transition-transform ${
                    openCase === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openCase === index && (
                <div className="px-6 pb-6 space-y-4 animate-in slide-in-from-top-2 duration-300">
                  <div>
                    <p className="font-body text-sm text-muted-foreground mb-1">
                      <span className="font-semibold">Задача:</span> {caseItem.task}
                    </p>
                    {caseItem.period && (
                      <p className="font-body text-sm text-muted-foreground">
                        <span className="font-semibold">Период:</span> {caseItem.period}
                      </p>
                    )}
                  </div>

                  <div>
                    <h4 className="font-subheading font-semibold text-foreground mb-2">Что сделал:</h4>
                    <ul className="space-y-1">
                      {caseItem.actions.map((action, i) => (
                        <li
                          key={i}
                          className="font-body text-sm text-foreground/80 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-burgundy"
                        >
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-subheading font-semibold text-burgundy mb-2">Результат:</h4>
                    <ul className="space-y-1">
                      {caseItem.results.map((result, i) => (
                        <li
                          key={i}
                          className="font-body text-sm text-foreground/90 pl-4 relative before:content-['✓'] before:absolute before:left-0 before:text-burgundy"
                        >
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
