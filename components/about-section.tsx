import { Card } from "@/components/ui/card"
import { GraduationCap, Briefcase, Quote } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-burgundy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-cream font-bold uppercase mb-6">
            Кто будет вашим CMO
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 lg:order-1">
            <p className="font-body text-lg text-cream/90 leading-relaxed mb-6">
              Я Максим, маркетолог и CMO на аутсорсе. Бакалавр РГГУ по направлению «Современные коммуникации и реклама /
              Реклама и PR» и магистр по «Стратегическому и финансовому управлению в современных организациях».
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Помогаю фаундерам в fashion, HoReCa, FMCG, юр.услугах, Retail и инфопродуктах",
                "Работаю как CMO: погружаюсь в процессы, цифры и продукт, а не в отчёты по охватам",
                "Беру только тех, кто понимает, что бренду нужен маркетинг, но нет понимания как выстроить процессы",
              ].map((item, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <Briefcase className="w-5 h-5 text-cream flex-shrink-0 mt-1" />
                  <span className="font-body text-cream/90">{item}</span>
                </li>
              ))}
            </ul>

            <Card className="bg-cream border-cream/20 p-6">
              <Quote className="w-8 h-8 text-burgundy mb-3" />
              <p className="font-subheading text-xl text-burgundy font-semibold italic">
                «Я не настраиваю рекламу — я делаю так, чтобы она работала»
              </p>
            </Card>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/professional-business-marketer-portrait-in-office.jpg"
                  alt="Максим Суриков"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-cream text-burgundy p-6 rounded-xl shadow-xl">
                <GraduationCap className="w-12 h-12 mb-2 text-burgundy" />
                <p className="font-subheading text-sm font-semibold">РГГУ</p>
                <p className="font-body text-xs text-burgundy/80">Магистр стратегического управления</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
