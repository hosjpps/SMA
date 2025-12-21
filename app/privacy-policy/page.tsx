import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-burgundy font-bold uppercase mb-8">
            Политика конфиденциальности
          </h1>

          <div className="prose prose-lg max-w-none font-body text-foreground space-y-6">
            <section>
              <h2 className="font-heading text-2xl md:text-3xl text-burgundy font-bold uppercase mt-8 mb-4">1. Оператор персональных данных</h2>
              <p className="text-foreground/90 leading-relaxed">
                <strong>Оператор:</strong> SURIKOV Marketing Agency
              </p>
              <p className="text-foreground/90 leading-relaxed">
                <strong>Контактная информация:</strong> surikovmm@icloud.com
              </p>
              <p className="text-foreground/90 leading-relaxed">
                <strong>Адрес сайта:</strong> surikov-marketing.ru
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl text-burgundy font-bold uppercase mt-8 mb-4">2. Основные понятия</h2>
              <ul className="space-y-3 text-foreground/90 leading-relaxed">
                <li>
                  <strong>Персональные данные</strong> — любая информация, относящаяся к идентифицированному или идентифицируемому физлицу
                </li>
                <li>
                  <strong>Пользователь</strong> — субъект персональных данных, посетитель сайта
                </li>
                <li>
                  <strong>Cookie</strong> — небольшие файлы, сохраняемые на устройстве пользователя, содержащие техническую и идентифицирующую информацию
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl text-burgundy font-bold uppercase mt-8 mb-4">3. Цели, правовые основания и порядок обработки</h2>
              <h3 className="font-subheading text-xl text-burgundy font-semibold mt-6 mb-3">3.1. Обработка данных осуществляется для:</h3>
              <ul className="space-y-2 text-foreground/90 leading-relaxed list-disc pl-6">
                <li>оказания услуг, выполнения договорных и технических обязательств</li>
                <li>обратной связи, ответа на обращения</li>
                <li>маркетинга, аналитики, совершенствования сервиса</li>
                <li>соблюдения законодательства РФ</li>
              </ul>
              <h3 className="font-subheading text-xl text-burgundy font-semibold mt-6 mb-3">3.2. Основания обработки:</h3>
              <ul className="space-y-2 text-foreground/90 leading-relaxed list-disc pl-6">
                <li>добровольное согласие пользователя</li>
                <li>исполнение договора</li>
                <li>требования закона (152-ФЗ, 420-ФЗ, 149-ФЗ, 63-ФЗ)</li>
              </ul>
              <h3 className="font-subheading text-xl text-burgundy font-semibold mt-6 mb-3">3.3. Данные собираются через:</h3>
              <p className="text-foreground/90 leading-relaxed">
                формы сайта (заявки, анкеты, обратная связь), фото/файлы, переписку и автоматически — при помощи cookie, аналитики, технических журналов
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl text-burgundy font-bold uppercase mt-8 mb-4">4. Перечень и категории обрабатываемых данных</h2>
              <ul className="space-y-2 text-foreground/90 leading-relaxed list-disc pl-6">
                <li>ФИО, телефон, эл. почта</li>
                <li>Фото, комментарии, документы</li>
                <li>IP-адрес, cookie, сведения о браузере, устройстве</li>
                <li>История заказов и обращений</li>
                <li>Данные, собранные через Яндекс.Метрику/Google Analytics</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl text-burgundy font-bold uppercase mt-8 mb-4">5. Порядок получения согласия и информирования пользователя</h2>
              <p className="text-foreground/90 leading-relaxed mb-3">
                Согласие отдельно на каждую категорию:
              </p>
              <ul className="space-y-2 text-foreground/90 leading-relaxed list-disc pl-6">
                <li>через чекбокс под формой</li>
                <li>через cookie-баннер</li>
              </ul>
              <p className="text-foreground/90 leading-relaxed mt-4">
                Согласие нельзя считать полученным по умолчанию или при продолжении использования сайта. Пользователь в любой момент может отозвать согласие (по email или форме).
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl text-burgundy font-bold uppercase mt-8 mb-4">6. Политика в отношении файлов cookie</h2>
              <p className="text-foreground/90 leading-relaxed mb-3">
                Подробная информация о cookie доступна в{" "}
                <Link href="/cookie-policy" className="text-burgundy underline hover:text-burgundy-dark">
                  Политике использования файлов cookie
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl text-burgundy font-bold uppercase mt-8 mb-4">7. Передача данных третьим лицам</h2>
              <p className="text-foreground/90 leading-relaxed mb-3">
                Данные передаются исключительно:
              </p>
              <ul className="space-y-2 text-foreground/90 leading-relaxed list-disc pl-6">
                <li>на основании договора/закона (логистика, таможня, оплата)</li>
                <li>аналитическим и маркетинговым сервисам (Яндекс.Метрика, Google Analytics, с отдельным согласием)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl text-burgundy font-bold uppercase mt-8 mb-4">8. Локализация и трансграничная передача</h2>
              <p className="text-foreground/90 leading-relaxed">
                Все персональные данные граждан РФ хранятся и обрабатываются на серверах в РФ. Трансграничная передача — только при отдельном согласии и информировании.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl text-burgundy font-bold uppercase mt-8 mb-4">9. Сроки хранения и уничтожения</h2>
              <p className="text-foreground/90 leading-relaxed">
                Данные хранятся не дольше, чем требуется для целей обработки. Удаление/блокирование данных по заявлению пользователя без обоснованных задержек.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl text-burgundy font-bold uppercase mt-8 mb-4">10. Права пользователя</h2>
              <p className="text-foreground/90 leading-relaxed mb-3">
                Пользователь имеет право:
              </p>
              <ul className="space-y-2 text-foreground/90 leading-relaxed list-disc pl-6">
                <li>получать исчерпывающую информацию о своих данных и их обработке</li>
                <li>требовать исправления, блокирования, удаления персональных данных</li>
                <li>отозвать согласие на обработку данных и на cookie</li>
                <li>обратиться с жалобой к оператору/в Роскомнадзор</li>
                <li>контролировать cookie с помощью баннера и настроек браузера</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl text-burgundy font-bold uppercase mt-8 mb-4">11. Меры безопасности и защита данных</h2>
              <p className="text-foreground/90 leading-relaxed">
                Организационные и технические: пароли, антивирус, шифрование, аудит доступов, резервное копирование, журналы обработки согласий. Доступ к данным только у сотрудников, задействованных в оказании услуг.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl text-burgundy font-bold uppercase mt-8 mb-4">12. Обработка специальных категорий и биометрических данных</h2>
              <p className="text-foreground/90 leading-relaxed">
                Сайт не собирает и не хранит специальные категории персональных данных (паспорта, ИНН, биометрия). Биометрические данные не обрабатываются.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl text-burgundy font-bold uppercase mt-8 mb-4">13. Обработка обезличивания и запросы Минцифры</h2>
              <p className="text-foreground/90 leading-relaxed">
                В случае требования Минцифры РФ, Оператор готов предоставить обезличенную статистику обработки.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl text-burgundy font-bold uppercase mt-8 mb-4">14. Документооборот и хранение подтверждений согласий</h2>
              <p className="text-foreground/90 leading-relaxed">
                Все данные о согласии пользователей логируются и архивируются по срокам хранения.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl text-burgundy font-bold uppercase mt-8 mb-4">15. Актуальность, изменения и доступ к политике</h2>
              <p className="text-foreground/90 leading-relaxed">
                Политика размещена по ссылке в подвале всех страниц сайта рядом с местами сбора данных. Изменения публикуются незамедлительно, извещения — через сайт. Дата актуализации всегда указана.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl text-burgundy font-bold uppercase mt-8 mb-4">16. Контакты для обращения</h2>
              <p className="text-foreground/90 leading-relaxed">
                Любые вопросы — на <a href="mailto:surikovmm@icloud.com" className="text-burgundy underline hover:text-burgundy-dark">surikovmm@icloud.com</a> или через форму обратной связи на сайте.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-burgundy/20">
              <p className="text-sm text-foreground/70">
                Действует с {new Date().toLocaleDateString("ru-RU", { year: "numeric", month: "long", day: "numeric" })} года
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

