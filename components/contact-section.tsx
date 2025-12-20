"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Phone, Mail } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

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
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Ошибка при отправке формы')
      }

      setSubmitted(true)
      setFormData({ name: "", business: "", website: "", contact: "", comment: "" })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError('Произошла ошибка. Попробуйте еще раз или свяжитесь с нами напрямую.')
      console.error('Form submission error:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-12 md:py-20 lg:py-32 bg-gradient-to-b from-cream-light to-cream">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-burgundy font-bold uppercase mb-4 md:mb-6 px-2">
            Готовы перейти от хаоса в маркетинге к системе?
          </h2>
          <p className="font-subheading text-base sm:text-lg md:text-xl text-foreground/80 px-4">
            Тогда оставляйте контактные данные для первичной консультации!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8">
          {(() => {
            const { ref: formRef, isInView: formInView } = useInView()
            return (
              <Card
                ref={formRef}
                className={`p-4 sm:p-5 md:p-6 shadow-xl border-burgundy/20 order-2 md:order-1 ${
                  formInView ? "animate-in fade-in duration-1000" : "opacity-0"
                }`}
              >
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
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div>
                  <label htmlFor="name" className="block font-body text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    Имя <span className="text-burgundy">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg border border-burgundy/20 focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/20 transition-all"
                    placeholder="Ваше имя"
                  />
                </div>

                <div>
                  <label htmlFor="business" className="block font-body text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    Бизнес / ниша <span className="text-burgundy">*</span>
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    required
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg border border-burgundy/20 focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/20 transition-all"
                    placeholder="Например: Fashion / Retail"
                  />
                </div>

                <div>
                  <label htmlFor="website" className="block font-body text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    Сайт / соцсети
                  </label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg border border-burgundy/20 focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/20 transition-all"
                    placeholder="Ссылка на ваш сайт или соцсети"
                  />
                </div>

                <div>
                  <label htmlFor="contact" className="block font-body text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    Ваш Телеграм / WhatsApp <span className="text-burgundy">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    required
                    value={formData.contact}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg border border-burgundy/20 focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/20 transition-all"
                    placeholder="@username или +7..."
                  />
                </div>

                <div>
                  <label htmlFor="comment" className="block font-body text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    Комментарий
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    rows={3}
                    value={formData.comment}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg border border-burgundy/20 focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/20 transition-all resize-none"
                    placeholder="Расскажите кратко о вашей задаче"
                  />
                </div>

                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-600">{error}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-burgundy hover:bg-burgundy-dark text-cream text-sm sm:text-base md:text-lg py-3 sm:py-4 h-auto transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  {isSubmitting ? "Отправка..." : "Отправить заявку"}
                </Button>

                <p className="text-center text-xs sm:text-sm text-muted-foreground break-words px-2">
                  Нажимая кнопку, вы соглашаетесь с <button type="button" className="text-burgundy hover:underline">политикой конфиденциальности</button>
                </p>
              </form>
            )}
          </Card>
            )
          })()}

          <div className="space-y-8 sm:space-y-10 order-1 md:order-2">
            {(() => {
              const { ref: benefitsRef, isInView: benefitsInView } = useInView()
              const { ref: contactRef, isInView: contactInView } = useInView()
              return (
                <>
                  <Card
                    ref={benefitsRef}
                    className={`p-5 sm:p-8 bg-burgundy text-cream border-burgundy shadow-xl transition-all duration-300 hover:scale-105 ${
                      benefitsInView ? "animate-in fade-in duration-1000" : "opacity-0"
                    }`}
                  >
                    <h3 className="font-subheading text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Что вы получите?</h3>
                    <ul className="space-y-3 sm:space-y-4 font-body">
                      {[
                        "Бесплатную консультацию 45 минут",
                        "Предварительную стратегию по маркетингу",
                        "Анализ текущей ситуации в вашем бизнесе",
                        "Конкретные рекомендации и точки роста"
                      ].map((item, index) => (
                        <li key={index} className="flex gap-2 sm:gap-3">
                          <span className="text-xl sm:text-2xl transition-transform duration-300 hover:scale-125 flex-shrink-0">✓</span>
                          <span className="text-sm sm:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>

                  <Card
                    ref={contactRef}
                    className={`px-5 py-[calc(1.25rem+5px)] sm:px-8 sm:py-[calc(2rem+5px)] border-burgundy/20 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                      contactInView ? "animate-in fade-in duration-1000" : "opacity-0"
                    }`}
                  >
                    <h3 className="font-subheading text-lg sm:text-xl font-semibold text-burgundy mb-4 sm:mb-6">Контактная информация</h3>
                    <div className="space-y-3 sm:space-y-4 font-body text-foreground/80">
                      <div className="flex gap-2 sm:gap-3 items-start">
                        <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-burgundy flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-foreground text-sm sm:text-base">Email</p>
                          <p className="text-xs sm:text-sm break-all">surikovmm@icloud.com</p>
                        </div>
                      </div>
                      <div className="flex gap-2 sm:gap-3 items-start">
                        <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-burgundy flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-foreground text-sm sm:text-base">Telegram / WhatsApp</p>
                          <p className="text-xs sm:text-sm break-all">@surikovm / 89162202304</p>
                        </div>
                      </div>
                      <div className="flex gap-2 sm:gap-3 items-start">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-burgundy flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-foreground text-sm sm:text-base">География</p>
                          <p className="text-xs sm:text-sm">Работаем онлайн по всей России и СНГ</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </>
              )
            })()}
          </div>
        </div>
      </div>
    </section>
  )
}
