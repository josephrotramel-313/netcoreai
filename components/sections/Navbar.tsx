"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"

const navLinks = [
  { label: "Services", href: "/#services", isHash: true },
  { label: "Blog", href: "/blog", isHash: false },
  { label: "Pricing", href: "/pricing", isHash: false },
  { label: "About", href: "/about", isHash: false },
  { label: "Contact", href: "/#contact", isHash: true },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const next = window.scrollY > 20
      if (next !== scrolled) setScrolled(next)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  const handleNavClick = (href: string, isHash: boolean) => {
    setMobileOpen(false)
    if (!isHash) {
      router.push(href)
      return
    }
    const hash = "#" + href.split("#")[1]
    if (pathname === "/") {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: "smooth" })
    } else {
      router.push(href)
    }
  }

  const handleLogoClick = () => {
    setMobileOpen(false)
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      router.push("/")
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-stone-950/90 backdrop-blur-xl border-b border-stone-800/60 shadow-2xl"
            : "bg-stone-950/40 backdrop-blur-md border-b border-stone-800/20"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <button
            onClick={handleLogoClick}
            className="cursor-pointer group"
            aria-label="Go to homepage"
          >
            <span className="text-xl font-bold tracking-tight select-none font-mono">
              <span className="text-accent">&lt;/&gt;</span>
              <span
                className="text-stone-50 group-hover:text-accent transition-colors duration-200"
                style={{
                  textShadow:
                    "1px 1px 0 rgb(20,40,70), 2px 2px 0 rgb(10,25,50), 3px 3px 0 rgb(5,15,35)",
                }}
              >
                NetCore
              </span>
              <span className="text-accent">&lt;/&gt;</span>
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.isHash ? (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href, link.isHash)}
                  className="text-sm font-medium text-stone-400 hover:text-stone-50 transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    pathname === link.href
                      ? "text-accent"
                      : "text-stone-400 hover:text-stone-50"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <button
            onClick={() => handleNavClick("/#contact", true)}
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
            className="fixed top-[65px] left-0 right-0 z-40 bg-stone-950/95 backdrop-blur-xl border-b border-stone-800 shadow-2xl p-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href, link.isHash)}
                  className={`text-left text-base font-medium transition-colors duration-200 cursor-pointer py-2 border-b border-stone-800/50 last:border-0 ${
                    !link.isHash && pathname === link.href
                      ? "text-accent"
                      : "text-stone-300 hover:text-accent"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("/#contact", true)}
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
