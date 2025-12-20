"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Plus, Minus } from "lucide-react"

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Сколько стоят ваши услуги?",
      answer:
        "Стоимость зависит от задач и глубины входа. Бюджет на маркетинг от 100 000 ₽/месяц, мой чек как CMO — от 30 000 ₽/месяц. Точная цифра — после знакомства с бизнесом. Никаких сюрпризов — всё фиксируем заранее.",
    },
    {
      question: "Сколько времени нужно, чтобы увидеть первые результаты?",
      answer: "Первые изменения — 1-3 месяца. Стабильная система — 3-6 месяцев. Маркетинг — это процесс, а не кнопка.",
    },
    {
      question: "А если у нас уже есть маркетолог или агентство?",
      answer:
        "Я выстраиваю систему: кто за что отвечает, как измеряем результат. Ваши специалисты могут стать сильными исполнителями. Если кто-то не тянет — покажу это в метриках.",
    },
    {
      question: "Вы работаете только в России или по всему СНГ?",
      answer:
        "Онлайн-формат. Основной фокус — Россия и СНГ (Москва, регионы, Казахстан, Кыргызстан). Бизнес вне этих стран — обсуждаемо.",
    },
    {
      question: "Можно ли к вам прийти с бюджетом меньше 100 000 ₽?",
      answer:
        "Честно: я не для бизнесов, которые ещё не готовы вкладываться. Если бюджет ниже 100К — начните с консультации или аудита. Когда вырастете — начём плотно работать.",
    },
    {
      question: "Чем вы отличаетесь от обычного маркетингового агентства?",
      answer:
        "Уровнем вовлечения. Агентство продаёт услуги. Я захожу как CMO: разбираю бизнес, экономику, процессы. Мой фокус — не охваты, а «сколько бизнес заработал».",
    },
    {
      question: 'Что вообще такое "маркетинговый директор на аутсорсе"?',
      answer:
        "Та же роль, что и штатный CMO: стратегия, план, KPI, команда. Разница — в формате. Не нужно держать в штате, платить оклад и соцпакет. Фиксированные объёмы работ.",
    },
    {
      question: "Сколько людей будет работать над нашим проектом?",
      answer:
        "Команда под задачи. Базово: я (стратег, CMO). Подключаем подрядчиков: таргетолог, SEO, дизайнеры, бэкенд-разработчик. Для вас — один человек, с которым обсуждаете цели и результат.",
    },
    {
      question: "На какой срок имеет смысл заходить в работу?",
      answer:
        "Разовый аудит — есть. Но выстроить систему — от нескольких месяцев. Один цикл — диагностика, второй — запуск, третий — масштабирование. «Один месяц» — вряд ли сойдёмся.",
    },
    {
      question: "Какие гарантии вы даёте?",
      answer:
        "Я гарантирую прозрачность, системный подход и работу от измеримых показателей. Фиксируем точку входа, ставим реалистичные цели, отслеживаем динамику. Если гипотезы не срабатывают — показываю это и корректирую курс. Важен не красивый отчёт, а понимание собственником, что делает маркетинг.",
    },
  ]

  const handleCardClick = (clickedIndex: number) => {
    setOpenIndex((currentOpenIndex) => {
      // Если кликнули на уже открытый - закрываем
      if (currentOpenIndex === clickedIndex) {
        return null
      }
      // Иначе открываем только тот, на который кликнули
      return clickedIndex
    })
  }

  return (
    <section id="faq" className="py-12 md:py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-burgundy font-bold uppercase mb-4 md:mb-6 px-2">
            Часто задаваемые вопросы
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-3 sm:gap-4 items-start">
          {faqs.map((faq, index) => {
            const isOpen = openIndex !== null && openIndex === index
            
            return (
              <Card 
                key={`faq-${index}`}
                className={`border-burgundy/20 overflow-hidden hover:bg-cream/30 transition-colors cursor-pointer ${!isOpen ? 'h-[72px] sm:h-[80px]' : ''}`}
                onClick={(e) => {
                  e.stopPropagation()
                  handleCardClick(index)
                }}
              >
                <div className="w-full h-full py-2 sm:py-3 px-3 sm:px-4 flex justify-between items-center gap-2 text-left">
                  <h3 className="font-subheading text-base sm:text-lg font-semibold text-foreground line-clamp-2 leading-snug">{faq.question}</h3>
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-burgundy/10 flex items-center justify-center">
                    {isOpen ? (
                      <Minus className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-burgundy" />
                    ) : (
                      <Plus className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-burgundy" />
                    )}
                  </div>
                </div>

                {isOpen && (
                  <div className="px-3 sm:px-4 pb-3 animate-in fade-in duration-500">
                    <p className="font-body text-xs sm:text-sm text-foreground/80 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
