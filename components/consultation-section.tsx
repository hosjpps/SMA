"use client"

import { Button } from "@/components/ui/button"
import { Send, MessageSquare, CheckCircle2 } from "lucide-react"

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
    <section id="consultation" className="py-20 md:py-32 bg-cream/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-burgundy font-bold uppercase mb-6">
            Бесплатная консультация<br />45 минут
          </h2>
          <p className="font-subheading text-xl text-foreground/80 max-w-3xl mx-auto">
            и предварительная стратегия по маркетингу
          </p>
          <p className="font-body text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Формат входа, после которого вы уже понимаете, куда двигаться — даже если мы не начнём работать вместе.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-burgundy text-cream flex items-center justify-center font-heading text-3xl font-bold shadow-lg">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1 bg-cream p-8 rounded-2xl border border-burgundy/10 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="flex-shrink-0 w-12 h-12 bg-burgundy/10 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-burgundy" />
                    </div>
                    <h3 className="font-subheading text-xl md:text-2xl font-semibold text-burgundy pt-2">
                      {step.title}
                    </h3>
                  </div>
                  <p className="font-body text-foreground/80 leading-relaxed ml-16">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-burgundy hover:bg-burgundy-dark text-cream text-lg px-12 py-6 h-auto"
          >
            Оставить заявку на консультацию
          </Button>
        </div>
      </div>
    </section>
  )
}
