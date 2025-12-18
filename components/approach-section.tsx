import { DollarSign, Network, Users2, Filter } from "lucide-react"

export function ApproachSection() {
  const principles = [
    {
      icon: DollarSign,
      title: "Сначала экономика, потом креатив",
      description: "Разбираю выручку, маржу, CAC, LTV, окупаемость. Маркетинг должен биться с P&L.",
    },
    {
      icon: Network,
      title: "Маркетинг как система, а не набор инструментов",
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
    <section id="approach" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-burgundy font-bold uppercase mb-6">
            Как я думаю и работаю
          </h2>
          <p className="font-subheading text-xl text-foreground/80 max-w-3xl mx-auto">
            Маркетинг начинается не с креатива, а с цифр, процессов и стратегии.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {principles.map((principle, index) => {
            const Icon = principle.icon
            return (
              <div key={index} className="flex gap-4 p-6 bg-cream/70 rounded-xl border-l-4 border-burgundy">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-burgundy/10 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-burgundy" />
                  </div>
                </div>
                <div>
                  <h3 className="font-subheading text-xl font-semibold text-burgundy mb-2">{principle.title}</h3>
                  <p className="font-body text-foreground/80 leading-relaxed">{principle.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="w-full">
          <div className="bg-burgundy text-cream p-8 md:p-10 rounded-2xl">
            <p className="font-subheading text-lg md:text-xl leading-relaxed text-center">
              Я не делаю разовые посты/визитки и не работаю с бизнесами, которые экономят на маркетинге последние
              деньги. Я захожу туда, где есть запрос на рост и готовность вкладываться в систему.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
