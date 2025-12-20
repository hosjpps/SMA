"use client"

import { Brain, Cog, TrendingUp } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function SolutionSection() {
  const solutions = [
    {
      icon: Brain,
      title: "Погружение в бизнес собственника",
      description:
        "Разбираю продукт, маржинальность, логистику, внутренние процессы. Смотрю не только на маркетинг, но и на продажи и экономику",
    },
    {
      icon: Cog,
      title: "Стратегия + операционка",
      description:
        "Определяю цели, стратегию, тактику, инструменты, KPI. На их базе строю каналы, воронки, контент, разработку, автоматизацию",
    },
    {
      icon: TrendingUp,
      title: "Интересы собственника и бизнеса — на первом месте",
      description:
        "Я не «человек на окладе ради галочки». Всегда смотрю на деньги: выручка, маржа, прибыль, окупаемость маркетинга",
    },
  ]

  return (
    <section id="solution" className="py-12 md:py-20 lg:py-32 bg-burgundy text-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-cream rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-cream rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-4 md:mb-6 px-2">
            Решение — маркетинговый директор
          </h2>
          <p className="font-subheading text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed px-4">
            который работает глубинно и вовлекается в бизнес-процессы
          </p>
          <p className="font-body text-sm sm:text-base md:text-lg mt-4 sm:mt-6 max-w-3xl mx-auto text-cream/90 px-4">
            «Я не настраиваю рекламу — я делаю так, чтобы она работала». Я захожу в бизнес как CMO и выстраиваю
            операционный маркетинг под ваши цели.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            const { ref, isInView } = useInView()
            return (
              <div
                key={index}
                ref={ref}
                className={`bg-cream/10 backdrop-blur-sm border border-cream/20 p-5 sm:p-6 md:p-8 rounded-xl hover:bg-cream/15 transition-all duration-300 flex flex-col hover:scale-105 hover:shadow-xl ${
                  isInView ? "animate-in fade-in duration-1000" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-cream/20 rounded-full flex items-center justify-center mb-4 sm:mb-6 transition-transform duration-300 hover:rotate-12">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cream transition-transform duration-300" />
                </div>
                <h3 className="font-subheading text-lg sm:text-xl font-semibold mb-3 sm:mb-4 min-h-[48px] sm:min-h-[56px]">{solution.title}</h3>
                <p className="font-body text-sm sm:text-base text-cream/90 leading-relaxed">{solution.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
