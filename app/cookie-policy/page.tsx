import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-burgundy font-bold uppercase mb-8">
            Политика использования файлов cookie
          </h1>

          <div className="prose prose-lg max-w-none font-body text-foreground space-y-6">
            <section>
              <h2 className="font-heading text-2xl md:text-3xl text-burgundy font-bold uppercase mt-8 mb-4">Общие положения</h2>
              <p className="text-foreground/90 leading-relaxed">
                Данный документ определяет порядок использования файлов cookie на сайте SURIKOV Marketing Agency, адрес: surikov-marketing.ru (далее — «Сайт», «Оператор», «мы»).
              </p>
              <p className="text-foreground/90 leading-relaxed mt-4">
                Политика разработана в соответствии с Федеральным законом №420-ФЗ и №152-ФЗ.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl text-burgundy font-bold uppercase mt-8 mb-4">Что такое cookie</h2>
              <p className="text-foreground/90 leading-relaxed">
                Cookie — небольшие текстовые файлы, которые сохраняются на устройстве пользователя при посещении сайта, и позволяют распознавать пользователя, запоминать его предпочтения, обеспечивать работу сайта, а также анализировать поведение.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl text-burgundy font-bold uppercase mt-8 mb-4">Какие cookie мы используем</h2>
              <p className="text-foreground/90 leading-relaxed mb-3">
                На нашем сайте используются следующие категории cookie:
              </p>
              <ul className="space-y-3 text-foreground/90 leading-relaxed list-disc pl-6">
                <li>
                  <strong>Технические (обязательные):</strong> нужны для корректной работы функций сайта (навигация, авторизация, сохранение настроек).
                </li>
                <li>
                  <strong>Аналитические:</strong> используются Яндекс.Метрикой, Google Analytics для анализа поведения пользователей, оценки посещаемости, оптимизации контента.
                </li>
                <li>
                  <strong>Маркетинговые/Рекламные:</strong> используются для продвижения услуг, хранения информации о переходах и аудитории (если подключены маркетинговые сервисы).
                </li>
              </ul>
              <p className="text-foreground/90 leading-relaxed mt-4">
                Мы не используем cookie для сбора чувствительных персональных данных, таких как паспортные или платёжные данные.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl text-burgundy font-bold uppercase mt-8 mb-4">Цели применения cookie</h2>
              <ul className="space-y-2 text-foreground/90 leading-relaxed list-disc pl-6">
                <li>Поддержка работы сайта и удобства пользователя</li>
                <li>Аналитика, статистика, улучшение качества услуг</li>
                <li>Персонализация предложений (при наличии маркетинговых сервисов)</li>
                <li>Безопасность и предотвращение несанкционированного доступа</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl text-burgundy font-bold uppercase mt-8 mb-4">Получение согласия пользователя</h2>
              <ul className="space-y-2 text-foreground/90 leading-relaxed list-disc pl-6">
                <li>При первом посещении сайта отображается специальный баннер, где пользователю предлагается ознакомиться с данной Политикой и выбрать категории cookie.</li>
                <li>Cookie, кроме технических, устанавливаются только после явного согласия пользователя (отдельная кнопка «Согласен»).</li>
                <li>Возможность отказаться: пользователь может выбрать только обязательные cookie, отклонить остальные или отключить все cookie через настройки браузера.</li>
                <li>Предустановленных галочек «разрешить все» нет.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl text-burgundy font-bold uppercase mt-8 mb-4">Передача cookie третьим лицам</h2>
              <p className="text-foreground/90 leading-relaxed">
                Аналитические и рекламные cookie могут быть переданы сервисам Яндекс, Google, Facebook, если это требуется для анализа или рекламы. В случае передачи cookie зарубежным сервисам пользователь информируется, и требуется отдельное согласие.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl text-burgundy font-bold uppercase mt-8 mb-4">Сроки хранения</h2>
              <ul className="space-y-2 text-foreground/90 leading-relaxed list-disc pl-6">
                <li>Технические cookie хранятся до завершения сессии (или до 1 года — если это необходимо для работы сайта).</li>
                <li>Аналитические и маркетинговые cookie — не более 2 лет, согласно настройкам сервисов.</li>
                <li>После истечения срока cookie автоматически удаляются, либо пользователь может удалить их вручную через настройки браузера.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl text-burgundy font-bold uppercase mt-8 mb-4">Как управлять cookie</h2>
              <p className="text-foreground/90 leading-relaxed mb-3">
                Пользователь может:
              </p>
              <ul className="space-y-2 text-foreground/90 leading-relaxed list-disc pl-6">
                <li>Отклонить cookie (в баннере при первом посещении или позже).</li>
                <li>Удалить сохранённые cookie через настройки своего браузера.</li>
                <li>Запросить сведения о используемых cookie, написав на e-mail:{" "}
                  <a href="mailto:surikovmm@icloud.com" className="text-burgundy underline hover:text-burgundy-dark">surikovmm@icloud.com</a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl text-burgundy font-bold uppercase mt-8 mb-4">Защита и безопасность</h2>
              <p className="text-foreground/90 leading-relaxed">
                Передача cookie осуществляется только по защищённому соединению HTTPS. Любая информация, собираемая с использованием cookie, защищена в соответствии с действующим законодательством РФ.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl text-burgundy font-bold uppercase mt-8 mb-4">Изменения политики</h2>
              <p className="text-foreground/90 leading-relaxed">
                Актуальная версия всегда опубликована по ссылке в подвале сайта. В случае обновлений пользователи информируются через сайт.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl md:text-3xl text-burgundy font-bold uppercase mt-8 mb-4">Контакты по вопросам cookie</h2>
              <p className="text-foreground/90 leading-relaxed">
                По вопросам, связанным с использованием cookie, можно обратиться по e-mail:{" "}
                <a href="mailto:surikovmm@icloud.com" className="text-burgundy underline hover:text-burgundy-dark">surikovmm@icloud.com</a>
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

