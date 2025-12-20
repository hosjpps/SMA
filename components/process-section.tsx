"use client"

import { Send, Database, FileSearch, Users, Rocket, BarChart } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function ProcessSection() {
  const steps = [
    {
      icon: Send,
      title: "Заявка и первичный созвон",
    },
    {
      icon: Database,
      title: "Сбор данных: цифры, факты, аналитика рынка, SWOT и PESTEL анализ",
    },
    {
      icon: FileSearch,
      title: "Аудит и предварительная стратегия",
    },
    {
      icon: Users,
      title: "Сбор команды и настройка процессов",
    },
    {
      icon: Rocket,
      title: "Запуск и тестирование гипотез",
    },
    {
      icon: BarChart,
      title: "Регулярные отчёты и корректировка стратегии",
    },
  ]

  return (
    <section id="process" className="py-12 md:py-20 lg:py-32 bg-cream/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-burgundy font-bold uppercase mb-4 md:mb-6 px-2">
            Как мы запускаем проект
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-burgundy/20 hidden sm:block" />

            <div className="space-y-6 sm:space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon
                const { ref, isInView } = useInView()
                return (
                  <div
                    key={index}
                    ref={ref}
                    className={`relative flex gap-3 sm:gap-6 items-start ${
                      isInView ? "opacity-100 animate-in fade-in duration-1000" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex-shrink-0 relative">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-burgundy text-cream flex items-center justify-center font-heading text-lg sm:text-xl font-bold shadow-lg relative z-10 transition-transform duration-300 hover:scale-110 hover:rotate-12">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1 pt-1 sm:pt-3">
                      <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md border border-burgundy/10 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                        <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-burgundy transition-transform duration-300 hover:rotate-12 flex-shrink-0 mt-1 sm:mt-0" />
                          <h3 className="font-subheading text-sm sm:text-base md:text-lg font-semibold text-foreground leading-snug">{step.title}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
