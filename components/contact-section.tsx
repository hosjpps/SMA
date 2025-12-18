"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Phone, Mail } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    website: "",
    contact: "",
    comment: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", business: "", website: "", contact: "", comment: "" })

    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-cream-light to-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-burgundy font-bold uppercase mb-6">
            Готовы перейти от хаоса в маркетинге к системе?
          </h2>
          <p className="font-subheading text-xl text-foreground/80">
            Тогда оставляйте контактные данные для первичной консультации!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="p-6 shadow-xl border-burgundy/20 order-2 md:order-1">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-burgundy/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-subheading text-2xl font-semibold text-burgundy mb-3">Спасибо за заявку!</h3>
                <p className="font-body text-foreground/80">Мы свяжемся с вами в ближайшее время.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block font-body text-sm font-medium text-foreground mb-2">
                    Имя <span className="text-burgundy">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-burgundy/20 focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/20 transition-all"
                    placeholder="Ваше имя"
                  />
                </div>

                <div>
                  <label htmlFor="business" className="block font-body text-sm font-medium text-foreground mb-2">
                    Бизнес / ниша <span className="text-burgundy">*</span>
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    required
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-burgundy/20 focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/20 transition-all"
                    placeholder="Например: Fashion / Retail"
                  />
                </div>

                <div>
                  <label htmlFor="website" className="block font-body text-sm font-medium text-foreground mb-2">
                    Сайт / соцсети
                  </label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-burgundy/20 focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/20 transition-all"
                    placeholder="Ссылка на ваш сайт или соцсети"
                  />
                </div>

                <div>
                  <label htmlFor="contact" className="block font-body text-sm font-medium text-foreground mb-2">
                    Ваш Телеграм / WhatsApp <span className="text-burgundy">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    required
                    value={formData.contact}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-burgundy/20 focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/20 transition-all"
                    placeholder="@username или +7..."
                  />
                </div>

                <div>
                  <label htmlFor="comment" className="block font-body text-sm font-medium text-foreground mb-2">
                    Комментарий
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    rows={3}
                    value={formData.comment}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-burgundy/20 focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/20 transition-all resize-none"
                    placeholder="Расскажите кратко о вашей задаче"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-burgundy hover:bg-burgundy-dark text-cream text-lg py-4 h-auto"
                >
                  {isSubmitting ? "Отправка..." : "Отправить заявку"}
                </Button>

                <p className="text-center text-sm text-muted-foreground whitespace-nowrap">
                  Нажимая кнопку, вы соглашаетесь с <button type="button" className="text-burgundy hover:underline">политикой конфиденциальности</button>
                </p>
              </form>
            )}
          </Card>

          <div className="space-y-6 order-1 md:order-2">
            <Card className="p-8 bg-burgundy text-cream border-burgundy shadow-xl">
              <h3 className="font-subheading text-2xl font-semibold mb-4">Что вы получите?</h3>
              <ul className="space-y-4 font-body">
                <li className="flex gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Бесплатную консультацию 45 минут</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Предварительную стратегию по маркетингу</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Анализ текущей ситуации в вашем бизнесе</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Конкретные рекомендации и точки роста</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-burgundy/20">
              <h3 className="font-subheading text-xl font-semibold text-burgundy mb-6">Контактная информация</h3>
              <div className="space-y-4 font-body text-foreground/80">
                <div className="flex gap-3 items-start">
                  <Mail className="w-5 h-5 text-burgundy flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-sm">info@surikov-marketing.ru</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Phone className="w-5 h-5 text-burgundy flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Telegram / WhatsApp</p>
                    <p className="text-sm">Указывайте в форме заявки</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <MapPin className="w-5 h-5 text-burgundy flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">География</p>
                    <p className="text-sm">Работаем онлайн по всей России и СНГ</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
