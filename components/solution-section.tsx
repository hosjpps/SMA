import { Brain, Cog, TrendingUp } from "lucide-react"

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
    <section id="solution" className="py-20 md:py-32 bg-burgundy text-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cream rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cream rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-6">
            Решение — маркетинговый директор
          </h2>
          <p className="font-subheading text-xl max-w-4xl mx-auto leading-relaxed">
            который работает глубинно и вовлекается в бизнес-процессы
          </p>
          <p className="font-body text-lg mt-6 max-w-3xl mx-auto text-cream/90">
            «Я не настраиваю рекламу — я делаю так, чтобы она работала». Я захожу в бизнес как CMO и выстраиваю
            операционный маркетинг под ваши цели.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <div
                key={index}
                className="bg-cream/10 backdrop-blur-sm border border-cream/20 p-8 rounded-xl hover:bg-cream/15 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-cream/20 rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-cream" />
                </div>
                <h3 className="font-subheading text-2xl font-semibold mb-4">{solution.title}</h3>
                <p className="font-body text-cream/90 leading-relaxed">{solution.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
