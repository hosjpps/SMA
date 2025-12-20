"use client"

import { Card } from "@/components/ui/card"
import { FileSearch, Rocket, Target } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function FormatsSection() {
  const formats = [
    {
      icon: FileSearch,
      title: "Аудит и стратегическая сессия",
      duration: "5-7 дней",
      includes: "аналитика текущей ситуации (воронки, каналы, экономика)",
      result: "документ со стратегией и планом на 3-6-12 месяцев",
    },
    {
      icon: Rocket,
      title: "Проектное сопровождение",
      duration: "от 2-3 месяцев",
      includes: "запуск рекламы, настройка CRM, контент-стратегия",
      result: "рабочая система маркетинга + выстроенные операционные процессы",
    },
    {
      icon: Target,
      title: "CMO 360",
      duration: "от 3 месяцев",
      includes: "полное операционное управление маркетингом, командой подрядчиков",
      result: "отдел маркетинга, работающий как часть бизнеса, а не приложение к нему",
    },
  ]

  return (
    <section id="formats" className="py-12 md:py-20 lg:py-32 bg-burgundy">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-cream font-bold uppercase mb-4 md:mb-6 px-2">
            Форматы работы со мной
          </h2>
          <p className="font-subheading text-base sm:text-lg md:text-xl text-cream/80 px-4">Выбираем глубину входа в ваш бизнес.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {formats.map((format, index) => {
            const Icon = format.icon
            const { ref, isInView } = useInView()
            return (
              <Card
                key={index}
                ref={ref}
                className={`p-5 sm:p-6 md:p-8 bg-cream/10 backdrop-blur-sm hover:shadow-xl hover:bg-cream/15 transition-all duration-300 border-cream/20 h-full flex flex-col hover:scale-105 ${
                  isInView ? "animate-in fade-in duration-1000" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-cream/20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transition-transform duration-300 hover:rotate-12">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cream transition-transform duration-300" />
                </div>
                <h3 className="font-subheading text-lg sm:text-xl md:text-2xl font-semibold text-cream mb-3 sm:mb-4 min-h-[48px] sm:min-h-[64px]">{format.title}</h3>
                <div className="space-y-2 sm:space-y-3 font-body text-sm sm:text-base text-cream/90">
                  <p>
                    <span className="font-semibold text-cream">Срок:</span> {format.duration}
                  </p>
                  <p>
                    <span className="font-semibold text-cream">Что входит:</span> {format.includes}
                  </p>
                  <p>
                    <span className="font-semibold text-cream">Итог:</span> {format.result}
                  </p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
