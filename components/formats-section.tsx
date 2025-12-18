import { Card } from "@/components/ui/card"
import { FileSearch, Rocket, Target } from "lucide-react"

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
    <section id="formats" className="py-20 md:py-32 bg-burgundy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-cream font-bold uppercase mb-6">
            Форматы работы со мной
          </h2>
          <p className="font-subheading text-xl text-cream/80">Выбираем глубину входа в ваш бизнес.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {formats.map((format, index) => {
            const Icon = format.icon
            return (
              <Card
                key={index}
                className="p-8 bg-cream/10 backdrop-blur-sm hover:shadow-xl hover:bg-cream/15 transition-all duration-300 border-cream/20"
              >
                <div className="w-16 h-16 bg-cream/20 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-cream" />
                </div>
                <h3 className="font-subheading text-2xl font-semibold text-cream mb-4">{format.title}</h3>
                <div className="space-y-3 font-body text-cream/90">
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
