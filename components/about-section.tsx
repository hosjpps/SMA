"use client"

import { Card } from "@/components/ui/card"
import { GraduationCap, Briefcase, Quote } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-20 lg:py-32 bg-burgundy">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-cream font-bold uppercase mb-4 md:mb-6 px-2">
            Кто будет вашим CMO
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 lg:order-1">
            {(() => {
              const { ref: textRef, isInView: textInView } = useInView()
              const { ref: cardRef, isInView: cardInView } = useInView()
              return (
                <>
                  <p
                    ref={textRef}
                    className={`font-body text-base sm:text-lg text-cream/90 leading-relaxed mb-4 md:mb-6 ${
                      textInView ? "animate-in fade-in duration-1000" : "opacity-0"
                    }`}
                  >
                    Я Максим, маркетолог и CMO на аутсорсе. Бакалавр РГГУ по направлению «Современные коммуникации и реклама /
                    Реклама и PR» и магистр по «Стратегическому и финансовому управлению в современных организациях».
                  </p>

                  <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                    {[
                      "Помогаю фаундерам в fashion, HoReCa, FMCG, юр.услугах, Retail, инфопродуктах и других сферах",
                      "Работаю как CMO: погружаюсь в процессы, цифры и продукт, а не в отчёты по охватам",
                      "Беру только тех, кто понимает, что бренду нужен маркетинг, но нет понимания как выстроить процессы",
                    ].map((item, index) => (
                      <li key={index} className="flex gap-2 md:gap-3 items-start">
                        <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-cream flex-shrink-0 mt-1 transition-transform duration-300 hover:rotate-12" />
                        <span className="font-body text-sm sm:text-base text-cream/90">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Card
                    ref={cardRef}
                    className={`bg-cream border-cream/20 p-4 sm:p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
                      cardInView ? "animate-in fade-in duration-1000" : "opacity-0"
                    }`}
                  >
                    <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-burgundy mb-2 sm:mb-3 transition-transform duration-300 hover:rotate-12" />
                    <p className="font-subheading text-lg sm:text-xl text-burgundy font-semibold italic">
                      «Я не настраиваю рекламу — я делаю так, чтобы она работала»
                    </p>
                  </Card>
                </>
              )
            })()}
          </div>

          <div className="order-1 lg:order-2">
            {(() => {
              const { ref: photoRef, isInView: photoInView } = useInView()
              const { ref: badgeRef, isInView: badgeInView } = useInView()
              return (
                <>
                  <div
                    ref={photoRef}
                    className={`relative max-w-[90%] sm:max-w-[85%] mx-auto ${
                      photoInView ? "animate-in fade-in duration-1000" : "opacity-0"
                    }`}
                  >
                    <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                      <img
                        src="/Макс_2.jpeg"
                        alt="Максим Суриков"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                      />
                    </div>
                    <div
                      ref={badgeRef}
                      className={`absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-cream text-burgundy p-4 sm:p-6 rounded-xl shadow-xl transition-transform duration-300 hover:scale-105 ${
                        badgeInView ? "animate-in fade-in duration-1000" : "opacity-0"
                      }`}
                    >
                      <GraduationCap className="w-8 h-8 sm:w-12 sm:h-12 mb-2 text-burgundy transition-transform duration-300 hover:rotate-12" />
                      <p className="font-subheading text-xs sm:text-sm font-semibold">РГГУ</p>
                      <p className="font-body text-[10px] sm:text-xs text-burgundy/80">Магистр стратегического управления</p>
                    </div>
                  </div>
                </>
              )
            })()}
          </div>
        </div>
      </div>
    </section>
  )
}
