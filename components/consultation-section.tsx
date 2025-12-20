"use client"

import { Button } from "@/components/ui/button"
import { Send, MessageSquare, CheckCircle2 } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function ConsultationSection() {
  const steps = [
    {
      icon: Send,
      title: "Заявка и первичный созвон",
      description:
        "Имя, название вашего бизнеса, сайт/соцсети бренда, ваш личный WhatsApp/Telegram. С вами связывается менеджер и назначает время созвона",
    },
    {
      icon: MessageSquare,
      title: "Совместный созвон в формате телемоста",
      description:
        "Разбираем ваш бизнес, операционку, текущий маркетинг. Определяем, что работает, а что нет, и что можно улучшить",
    },
    {
      icon: CheckCircle2,
      title: "Предварительная стратегия",
      description:
        "После созвона вы получаете краткий план по маркетингу: ключевые точки роста, основные каналы, первичные шаги. Я предлагаю, как могу быть полезен. Дальше вы спокойно принимаете решение",
    },
  ]

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="consultation" className="py-12 md:py-20 lg:py-32 bg-cream/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-burgundy font-bold uppercase mb-4 md:mb-6 px-2">
            Бесплатная консультация<br className="hidden sm:block" />45 минут
          </h2>
          <p className="font-subheading text-base sm:text-lg md:text-xl text-burgundy max-w-3xl mx-auto px-4">
            и предварительная стратегия по маркетингу
          </p>
          <p className="font-body text-sm sm:text-base md:text-lg text-muted-foreground mt-3 md:mt-4 max-w-3xl mx-auto px-4">
            Формат входа, после которого вы уже понимаете, куда двигаться — даже если мы не начнём работать вместе.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8 mb-8 sm:mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            const { ref, isInView } = useInView()
            return (
              <div
                key={index}
                ref={ref}
                className={`flex flex-col md:flex-row gap-4 sm:gap-6 items-start ${
                  isInView ? "animate-in fade-in duration-1000" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-burgundy text-cream flex items-center justify-center font-heading text-2xl sm:text-3xl font-bold shadow-lg transition-transform duration-300 hover:scale-110 hover:rotate-12">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1 bg-cream p-5 sm:p-6 md:p-8 rounded-2xl border border-burgundy/10 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 mb-3">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-burgundy/10 rounded-full flex items-center justify-center">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-burgundy" />
                    </div>
                    <h3 className="font-subheading text-lg sm:text-xl md:text-2xl font-semibold text-burgundy sm:pt-2">
                      {step.title}
                    </h3>
                  </div>
                  <p className="font-body text-sm sm:text-base text-foreground/80 leading-relaxed sm:ml-14 md:ml-16">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center px-4">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-burgundy hover:bg-burgundy-dark text-cream text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-12 py-5 sm:py-6 h-auto w-full sm:w-auto transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Оставить заявку на консультацию
          </Button>
        </div>
      </div>
    </section>
  )
}
