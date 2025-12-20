"use client"

import { DollarSign, Network, Users2, Filter } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function ApproachSection() {
  const principles = [
    {
      icon: DollarSign,
      title: "Сначала экономика, потом креатив",
      description: "Разбираю выручку, маржу, CAC, LTV, окупаемость. Маркетинг должен биться с P&L.",
    },
    {
      icon: Network,
      title: "Маркетинг как система",
      description:
        "Воронка от первого касания до повторной покупки, а не тесты и гипотезы без предварительной разработки фундамента.",
    },
    {
      icon: Users2,
      title: "Работа с собственником в одной команде",
      description: "Погружаюсь в бизнес как CMO внутри команды, а не как внешний подрядчик.",
    },
    {
      icon: Filter,
      title: "Чёткий критерий входа",
      description:
        "Беру проекты, где есть бюджет на рекламу, а также понимание, что есть необходимость в выстроенном отделе маркетинга.",
    },
  ]

  return (
    <section id="approach" className="pt-5 md:pt-8 pb-12 md:pb-20 lg:pb-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-burgundy font-bold uppercase mb-4 md:mb-6 px-2">
            Как я думаю и работаю
          </h2>
          <p className="font-subheading text-base sm:text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto px-4">
            Маркетинг начинается не с креатива, а с цифр, процессов и стратегии.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12 auto-rows-fr">
          {principles.map((principle, index) => {
            const Icon = principle.icon
            const { ref, isInView } = useInView()
            return (
              <div
                key={index}
                ref={ref}
                className={`flex gap-3 sm:gap-4 p-4 sm:p-5 bg-cream/70 rounded-xl border-l-4 border-burgundy h-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${
                  isInView ? "animate-in fade-in duration-1000" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-burgundy/10 rounded-full flex items-center justify-center transition-transform duration-300 hover:rotate-12">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-burgundy" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-subheading text-lg sm:text-xl font-semibold text-burgundy mb-1 sm:mb-2">{principle.title}</h3>
                  <p className="font-body text-sm sm:text-base text-foreground/80 leading-relaxed">{principle.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="w-full">
          <div className="bg-burgundy text-cream p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl">
            <p className="font-subheading text-base sm:text-lg md:text-xl leading-relaxed text-center px-2">
              Я не делаю разовые посты/визитки и не работаю с бизнесами, которые экономят на маркетинге последние
              деньги. Я захожу туда, где есть запрос на рост и готовность вкладываться в систему.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
