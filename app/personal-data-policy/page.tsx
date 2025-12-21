import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PersonalDataPolicyPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-burgundy font-bold uppercase mb-8">
            Политика обработки персональных данных
          </h1>

          <div className="prose prose-lg max-w-none font-body text-foreground space-y-6">
            <section>
              <h2 className="font-heading text-2xl md:text-3xl text-burgundy font-bold uppercase mt-8 mb-4">Общие положения</h2>
              <p className="text-foreground/90 leading-relaxed">
                Настоящая Политика обработки персональных данных (далее — «Политика») определяет порядок обработки и защиты персональных данных посетителей сайта SURIKOV Marketing Agency (далее — «Оператор», «мы», «наш сайт»).
              </p>
              <p className="text-foreground/90 leading-relaxed mt-4">
                <strong>Оператор:</strong> SURIKOV Marketing Agency
              </p>
              <p className="text-foreground/90 leading-relaxed">
                <strong>Контакт для обращений по вопросам персональных данных:</strong>{" "}
                <a href="mailto:surikovmm@icloud.com" className="text-burgundy underline hover:text-burgundy-dark">surikovmm@icloud.com</a>
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl text-burgundy font-bold uppercase mt-8 mb-4">Цели обработки персональных данных</h2>
              <p className="text-foreground/90 leading-relaxed mb-3">
                Оператор обрабатывает персональные данные исключительно для:
              </p>
              <ul className="space-y-2 text-foreground/90 leading-relaxed list-disc pl-6">
                <li>оказания услуг по маркетингу, консультированию и управлению маркетинговыми процессами</li>
                <li>обратной связи, консультаций, уточнения деталей заказа</li>
                <li>выполнения договорных обязательств</li>
                <li>информирования о статусе услуг, изменениях условий</li>
                <li>проведения анализа качества услуг и оптимизации работы сайта</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl text-burgundy font-bold uppercase mt-8 mb-4">Персональные данные, которые собираются</h2>
              <ul className="space-y-2 text-foreground/90 leading-relaxed list-disc pl-6">
                <li>Имя, телефон, e-mail пользователя (через формы обратной связи/заявки)</li>
                <li>Текстовые комментарии, описания, фото или документы, предоставленные клиентом</li>
                <li>Контактные данные для связи и уведомлений</li>
                <li>IP-адрес, cookie-ID и информация о браузере — для технической поддержки, аналитики и безопасности</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl text-burgundy font-bold uppercase mt-8 mb-4">Правовые основания обработки</h2>
              <p className="text-foreground/90 leading-relaxed mb-3">
                Обработка данных осуществляется на основании:
              </p>
              <ul className="space-y-2 text-foreground/90 leading-relaxed list-disc pl-6">
                <li>добровольного согласия пользователя (галочка под формой, согласие на баннере cookie)</li>
                <li>исполнения договора (оказание услуг по вашему запросу)</li>
                <li>требований законодательства РФ (152-ФЗ, таможенные и налоговые обязательства)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl text-burgundy font-bold uppercase mt-8 mb-4">Порядок и условия обработки данных</h2>
              <ul className="space-y-2 text-foreground/90 leading-relaxed list-disc pl-6">
                <li>Сбор и обработка данных происходят только на территории РФ</li>
                <li>Хранение данных ведётся в защищённых системах с ограниченным доступом</li>
                <li>Данные не передаются третьим лицам, кроме случаев, прямо предусмотренных законом или необходимыми для исполнения договора (логистические партнёры, платежные операторы, сервисы анализа и мониторинга)</li>
                <li>Персональные данные могут быть переданы уполномоченным органам власти РФ согласно закону</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl text-burgundy font-bold uppercase mt-8 mb-4">Права пользователя</h2>
              <p className="text-foreground/90 leading-relaxed mb-3">
                Пользователь имеет право:
              </p>
              <ul className="space-y-2 text-foreground/90 leading-relaxed list-disc pl-6">
                <li>получать информацию о своих данных и целях их обработки</li>
                <li>требовать уточнения, блокирования или уничтожения данных</li>
                <li>отозвать согласие на обработку персональных данных, направив письменное уведомление на{" "}
                  <a href="mailto:surikovmm@icloud.com" className="text-burgundy underline hover:text-burgundy-dark">surikovmm@icloud.com</a>
                </li>
                <li>обжаловать действия Оператора в Роскомнадзоре и других уполномоченных органах</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl text-burgundy font-bold uppercase mt-8 mb-4">Меры по обеспечению безопасности</h2>
              <p className="text-foreground/90 leading-relaxed">
                Оператор принимает все необходимые организационные и технические меры для защиты персональных данных — использование паролей, шифрования, ограничение доступа, антивирус, регулярный аудит защищённости.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl text-burgundy font-bold uppercase mt-8 mb-4">Сроки хранения и порядок уничтожения</h2>
              <ul className="space-y-2 text-foreground/90 leading-relaxed list-disc pl-6">
                <li>Данные хранятся столько, сколько необходимо для выполнения целей обработки, или пока пользователь не потребует их удаления</li>
                <li>По истечении срока хранения или по заявлению пользователя данные уничтожаются</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl text-burgundy font-bold uppercase mt-8 mb-4">Трансграничная передача данных</h2>
              <p className="text-foreground/90 leading-relaxed">
                Если передача данных осуществляется зарубежным сервисам (Google Analytics), это отражено в политике, согласие пользователя обязательно.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl text-burgundy font-bold uppercase mt-8 mb-4">Контакты и порядок подачи обращения</h2>
              <p className="text-foreground/90 leading-relaxed">
                Для любых вопросов, отзывов согласия, запросов на удаление — пишите на{" "}
                <a href="mailto:surikovmm@icloud.com" className="text-burgundy underline hover:text-burgundy-dark">surikovmm@icloud.com</a> или через форму обратной связи на сайте.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-burgundy/20">
              <p className="text-sm text-foreground/70">
                Актуальная редакция действует с {new Date().toLocaleDateString("ru-RU", { year: "numeric", month: "long", day: "numeric" })} года
              </p>
              <p className="text-sm text-foreground/70 mt-2">
                © SURIKOV Marketing Agency, {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

