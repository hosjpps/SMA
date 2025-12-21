import Link from "next/link"
import { Send, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-burgundy text-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="font-heading text-2xl font-bold uppercase mb-2">SURIKOV</h3>
            <p className="font-subheading text-sm text-cream/80">Marketing Agency</p>
          </div>

          <div className="flex justify-center gap-6">
            <Link
              href="https://t.me/surikovm"
              target="_blank"
              className="w-12 h-12 bg-cream/10 rounded-full flex items-center justify-center hover:bg-cream/20 transition-all duration-300 hover:scale-110 hover:rotate-12"
              aria-label="Telegram"
            >
              <Send className="w-5 h-5 transition-transform duration-300" />
            </Link>
            <Link
              href="https://wa.me/89162202304"
              target="_blank"
              className="w-12 h-12 bg-cream/10 rounded-full flex items-center justify-center hover:bg-cream/20 transition-all duration-300 hover:scale-110 hover:rotate-12"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 transition-transform duration-300" />
            </Link>
          </div>

          <div className="text-center md:text-right">
            <p className="font-body text-sm text-cream/80">© 2025 Все права защищены</p>
            <div className="flex flex-col gap-1 mt-2">
              <Link href="/privacy-policy" className="font-body text-sm text-cream/80 hover:text-cream transition-colors">
                Политика конфиденциальности
              </Link>
              <Link href="/personal-data-policy" className="font-body text-sm text-cream/80 hover:text-cream transition-colors">
                Политика обработки персональных данных
              </Link>
              <Link href="/cookie-policy" className="font-body text-sm text-cream/80 hover:text-cream transition-colors">
                Политика использования cookie
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
