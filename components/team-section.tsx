import { Code, Database, Smartphone, Bot, Sparkles, ImageIcon, Video, Zap, LineChart, PenTool } from "lucide-react"

export function TeamSection() {
  const myServices = ["Стратегия", "Маркетинг", "Контент", "Аналитика"]
  const partnerServices = [
    { icon: Code, text: "Бэкенд для сайтов и веб-приложений" },
    { icon: Database, text: "Логика интернет-магазинов" },
    { icon: Bot, text: "Боты, голосовые агенты, интеграции с CRM" },
    { icon: Smartphone, text: "Мобильные приложения" },
    { icon: Code, text: "Сайты и лендинги" },
  ]

  const tools = [
    { name: "GPT", category: "AI для контента", icon: Sparkles },
    { name: "Adobe Firefly", category: "AI для контента", icon: ImageIcon },
    { name: "Midjourney", category: "AI для контента", icon: PenTool },
    { name: "KLING AI", category: "AI для контента", icon: Video },
    { name: "Nano Banana 2", category: "AI для контента", icon: Zap },
    { name: "Gemini", category: "AI для ресёрча", icon: Sparkles },
    { name: "Дашборды аналитики", category: "Аналитика соцсетей", icon: LineChart },
  ]

  return (
    <section id="team" className="py-20 md:py-32 bg-burgundy text-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cream rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cream rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-6">
            Не только маркетинг
          </h2>
          <p className="font-subheading text-xl max-w-3xl mx-auto">но и автоматизация и ИИ</p>
          <p className="font-body text-lg mt-4 max-w-3xl mx-auto text-cream/90">
            Работая со мной, вы получаете не только CMO, но и доступ к сильным техспециалистам.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-cream/10 backdrop-blur-sm border border-cream/20 p-8 rounded-2xl">
            <h3 className="font-subheading text-2xl font-semibold mb-6">Я — CMO</h3>
            <div className="flex flex-wrap gap-3">
              {myServices.map((service, index) => (
                <span key={index} className="px-4 py-2 bg-cream/20 rounded-full font-body text-sm">
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-cream/10 backdrop-blur-sm border border-cream/20 p-8 rounded-2xl">
            <h3 className="font-subheading text-2xl font-semibold mb-6">Партнёр — Senior Fullstack DevOps</h3>
            <ul className="space-y-3">
              {partnerServices.map((service, index) => {
                const Icon = service.icon
                return (
                  <li key={index} className="flex gap-3 items-start">
                    <Icon className="w-5 h-5 flex-shrink-0 mt-0.5 text-cream/80" />
                    <span className="font-body text-sm text-cream/90">{service.text}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <h3 className="font-subheading text-2xl font-semibold text-center mb-10 flex items-center justify-center gap-3">
            <Sparkles className="w-7 h-7" />
            Инструменты и технологии
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => {
              const Icon = tool.icon
              return (
                <div
                  key={index}
                  className="bg-cream/10 backdrop-blur-sm border border-cream/20 p-6 rounded-xl text-center hover:bg-cream/20 hover:border-cream/40 hover:scale-105 transition-all duration-300 group"
                >
                  <Icon className="w-8 h-8 mx-auto mb-3 text-cream/80 group-hover:text-cream transition-colors" />
                  <p className="font-body text-base font-semibold mb-1">{tool.name}</p>
                  <p className="font-body text-xs text-cream/70">{tool.category}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
