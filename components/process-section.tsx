import { Send, Database, FileSearch, Users, Rocket, BarChart } from "lucide-react"

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
    <section id="process" className="py-20 md:py-32 bg-cream/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-burgundy font-bold uppercase mb-6">
            Как мы запускаем проект
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-burgundy/20 hidden md:block" />

            <div className="space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={index} className="relative flex gap-6 items-start">
                    <div className="flex-shrink-0 relative">
                      <div className="w-16 h-16 rounded-full bg-burgundy text-cream flex items-center justify-center font-heading text-xl font-bold shadow-lg relative z-10">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1 pt-3">
                      <div className="bg-white p-6 rounded-xl shadow-md border border-burgundy/10 hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className="w-5 h-5 text-burgundy" />
                          <h3 className="font-subheading text-lg font-semibold text-foreground">{step.title}</h3>
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
