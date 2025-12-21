"use client"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      // Если не на главной странице, переходим на главную с якорем
      router.push(`/#${id}`)
      setIsMobileMenuOpen(false)
      return
    }

    const element = document.getElementById(id)
    if (element) {
      // Учитываем высоту header при скролле
      const headerHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { label: "Услуги", id: "services" },
    { label: "Подход", id: "approach" },
    { label: "Кейсы", id: "cases" },
    { label: "Обо мне", id: "about" },
    { label: "Форматы", id: "formats" },
    { label: "FAQ", id: "faq" },
    { label: "Контакты", id: "contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-lg ${
        isScrolled ? "bg-cream/95 backdrop-blur-md" : "bg-burgundy"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("hero")}
          className={`font-heading text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight hover:opacity-80 transition-opacity ${
            isScrolled ? "text-burgundy" : "text-cream"
          }`}
        >
          SURIKOV
          <span className="block text-[10px] sm:text-xs font-subheading normal-case tracking-normal">Marketing Agency</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-body text-sm transition-all duration-300 hover:scale-110 ${
                isScrolled ? "text-foreground hover:text-burgundy" : "text-cream hover:text-cream/80"
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            onClick={() => scrollToSection("contact")}
            className={`hidden md:flex transition-all duration-300 hover:scale-105 hover:shadow-lg ${
              isScrolled ? "bg-burgundy hover:bg-burgundy-dark text-cream" : "bg-cream hover:bg-cream/90 text-burgundy"
            }`}
          >
            Получить консультацию
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${isScrolled ? "text-burgundy" : "text-cream"}`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-cream border-t border-burgundy/10 fixed top-full left-0 right-0 z-50 max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="container mx-auto px-4 sm:px-6 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-body text-sm text-foreground hover:text-burgundy transition-colors text-left py-2 break-words"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-burgundy hover:bg-burgundy-dark text-cream w-full mt-2 text-sm sm:text-base"
            >
              Получить консультацию
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
