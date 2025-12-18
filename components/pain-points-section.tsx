import { TrendingDown, FileText, HelpCircle, Target } from "lucide-react"

export function PainPointsSection() {
  const painPoints = [
    {
      icon: Target,
      text: "Реклама крутится, но никто не понимает, что реально окупается, какая в этом цель",
    },
    {
      icon: TrendingDown,
      text: "В штате есть «маркетолог на всё», который делает SMM, макеты и чуть-чуть контекст — но результата в деньгах не видно",
    },
    {
      icon: FileText,
      text: "Отчёты по охватам и кликам, а иногда даже и этого нет, но нет чётких данных по прибыли и unit-экономике",
    },
    {
      icon: HelpCircle,
      text: "Собственник не понимает, кого брать: маркетолога, таргетолога, smm, аналитика — и в итоге не берёт никого",
    },
  ]

  return (
    <section id="pain-points" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-burgundy font-bold uppercase mb-6">
            С чем обычно сталкиваются предприниматели
          </h2>
          <p className="font-subheading text-xl text-foreground/80 max-w-3xl mx-auto">
            при неудачном выборе агентства или маркетолога
          </p>
          <p className="font-body text-lg text-muted-foreground mt-4">
            Почти в каждом бизнесе, куда я прихожу, вижу одни и те же ошибки.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {painPoints.map((point, index) => {
            const Icon = point.icon
            return (
              <div
                key={index}
                className="bg-cream/50 p-6 rounded-xl border border-burgundy/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-burgundy/10 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-burgundy" />
                </div>
                <p className="font-body text-foreground/90 leading-relaxed">{point.text}</p>
              </div>
            )
          })}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-burgundy/5 border-l-4 border-burgundy p-6 rounded-r-xl">
            <p className="font-subheading text-lg text-foreground">
              Если вы узнали здесь себя — вам нужен не ещё один подрядчик, а человек, который соберёт всё это в систему.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
