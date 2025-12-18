"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
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
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("hero")}
          className={`font-heading text-xl md:text-2xl font-bold uppercase tracking-tight hover:opacity-80 transition-opacity ${
            isScrolled ? "text-burgundy" : "text-cream"
          }`}
        >
          SURIKOV
          <span className="block text-xs font-subheading normal-case tracking-normal">Marketing Agency</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-body text-sm transition-colors ${
                isScrolled ? "text-foreground hover:text-burgundy" : "text-cream hover:text-cream/80"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            onClick={() => scrollToSection("contact")}
            className={`hidden md:flex ${
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
        <div className="lg:hidden bg-cream border-t border-burgundy/10">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-body text-sm text-foreground hover:text-burgundy transition-colors text-left py-2"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-burgundy hover:bg-burgundy-dark text-cream w-full mt-2"
            >
              Получить консультацию
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
