import Link from "next/link"
import { Instagram, Send } from "lucide-react"

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
              href="https://t.me/surikov_marketing"
              target="_blank"
              className="w-12 h-12 bg-cream/10 rounded-full flex items-center justify-center hover:bg-cream/20 transition-colors"
              aria-label="Telegram"
            >
              <Send className="w-5 h-5" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="w-12 h-12 bg-cream/10 rounded-full flex items-center justify-center hover:bg-cream/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="https://vk.com"
              target="_blank"
              className="w-12 h-12 bg-cream/10 rounded-full flex items-center justify-center hover:bg-cream/20 transition-colors"
              aria-label="VK"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.13 14.72h-1.39c-.71 0-.93-.57-2.21-1.85-1.12-1.08-1.61-1.22-1.89-1.22-.39 0-.5.11-.5.64v1.68c0 .46-.14.73-1.35.73-1.98 0-4.18-1.21-5.73-3.46-2.33-3.27-2.97-5.74-2.97-6.24 0-.28.11-.54.64-.54h1.39c.48 0 .66.22.84.73.95 2.77 2.54 5.19 3.19 5.19.25 0 .36-.11.36-.74V9.37c-.09-1.31-.77-1.42-.77-1.88 0-.23.18-.46.48-.46h2.18c.4 0 .55.22.55.69v3.71c0 .4.18.55.3.55.25 0 .45-.15.9-.6 1.38-1.55 2.37-3.95 2.37-3.95.13-.28.35-.54.83-.54h1.39c.49 0 .6.25.49.69-.17.99-2.39 4.05-2.39 4.05-.21.34-.29.49 0 .88.21.28.89.87 1.35 1.4.82.94 1.47 1.72 1.64 2.27.18.54-.09.82-.58.82z" />
              </svg>
            </Link>
          </div>

          <div className="text-center md:text-right">
            <p className="font-body text-sm text-cream/80">© 2025 Все права защищены</p>
            <button className="font-body text-sm text-cream/80 hover:text-cream transition-colors mt-2">
              Политика конфиденциальности
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
