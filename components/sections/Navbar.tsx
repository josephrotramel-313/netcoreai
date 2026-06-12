"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Workflow", href: "#workflow" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const next = window.scrollY > 20
      if (next !== scrolled) setScrolled(next)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl rounded-2xl transition-all duration-300 ${
          scrolled
            ? "bg-stone-950/80 backdrop-blur-xl border border-stone-800/60 shadow-2xl"
            : "bg-stone-950/40 backdrop-blur-md border border-stone-800/30"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="cursor-pointer group"
            aria-label="Go to top"
          >
            <span
              className="text-xl font-bold tracking-tight text-stone-50 group-hover:text-accent transition-colors duration-200 select-none"
              style={{
                textShadow:
                  "1px 1px 0 rgb(30,50,80), 2px 2px 0 rgb(20,40,70), 3px 3px 0 rgb(10,25,50)",
              }}
            >
              NetCore<span className="text-accent">AI</span>
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-stone-400 hover:text-stone-50 transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => handleNavClick("#contact")}
            className="hidden md:inline-flex cursor-pointer px-5 py-2.5 rounded-lg bg-accent hover:bg-accent/90 text-stone-950 text-sm font-semibold transition-all duration-200 hover:scale-105"
          >
            Get a Quote
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden cursor-pointer text-stone-400 hover:text-stone-50 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 left-4 right-4 z-40 rounded-2xl bg-stone-950/95 backdrop-blur-xl border border-stone-800 shadow-2xl p-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-base font-medium text-stone-300 hover:text-accent transition-colors duration-200 cursor-pointer py-2 border-b border-stone-800/50 last:border-0"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("#contact")}
                className="cursor-pointer mt-2 px-5 py-3 rounded-lg bg-accent hover:bg-accent/90 text-stone-950 text-sm font-semibold transition-all duration-200 text-center"
              >
                Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
