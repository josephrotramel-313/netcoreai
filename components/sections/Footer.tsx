"use client"

import { Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-stone-800 bg-[#0C0A09]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="block mb-3">
              <span className="text-xl font-bold tracking-tight">
                NetCore<span className="text-accent">AI</span>
              </span>
            </Link>
            <p className="text-stone-500 text-sm leading-relaxed">
              Premium Web Development Agency. Custom code. Real results.
            </p>
            <a
              href="mailto:netcoreaisolutions@gmail.com"
              className="inline-flex items-center gap-2 text-stone-500 hover:text-accent text-sm transition-colors duration-200 mt-4"
              aria-label="Send email to Net Core AI"
            >
              <Mail size={14} />
              netcoreaisolutions@gmail.com
            </a>
          </div>

          {/* Company links */}
          <div>
            <p className="text-stone-300 text-sm font-semibold mb-4">Company</p>
            <nav className="flex flex-col gap-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Pricing", href: "/pricing" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-stone-500 hover:text-stone-300 text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services links */}
          <div>
            <p className="text-stone-300 text-sm font-semibold mb-4">Services</p>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Website Development", href: "/pricing" },
                { label: "Monthly Retainer", href: "/pricing#retainer" },
                { label: "AI Lead Chatbot", href: "/pricing#addons" },
                { label: "Analytics Dashboard", href: "/pricing#addons" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-stone-500 hover:text-stone-300 text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Site sections */}
          <div>
            <p className="text-stone-300 text-sm font-semibold mb-4">Quick Links</p>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Our Services", href: "/#services" },
                { label: "How We Work", href: "/#workflow" },
                { label: "The Team", href: "/#team" },
                { label: "Contact Us", href: "/#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-stone-500 hover:text-stone-300 text-sm transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-stone-800/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-stone-600 text-xs">
            &copy; {year} Net Core AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-stone-700 hover:text-stone-500 text-xs transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/tos" className="text-stone-700 hover:text-stone-500 text-xs transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
          <p className="text-stone-700 text-xs">
            Built with precision. Delivered with purpose.
          </p>
        </div>
      </div>
    </footer>
  )
}
