"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Link from "next/link"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-burgundy text-cream p-4 sm:p-6 shadow-2xl border-t-2 border-cream/20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="font-body text-sm sm:text-base leading-relaxed">
              Мы используем файлы cookie для улучшения работы сайта, аналитики и персонализации. Продолжая использовать сайт, вы соглашаетесь с{" "}
              <Link href="/cookie-policy" className="text-cream underline hover:text-cream/80 transition-colors">
                Политикой использования файлов cookie
              </Link>
              .
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Button
              onClick={handleReject}
              variant="outline"
              className="bg-transparent border-cream/30 text-cream hover:bg-cream/10 hover:border-cream/50 text-sm sm:text-base px-4 py-2"
            >
              Отклонить
            </Button>
            <Button
              onClick={handleAccept}
              className="bg-cream hover:bg-cream-light text-burgundy text-sm sm:text-base px-4 py-2"
            >
              Принять
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

