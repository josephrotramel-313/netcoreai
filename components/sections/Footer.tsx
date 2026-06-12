"use client"

import { Mail } from "lucide-react"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-stone-800 bg-[#0C0A09]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-bold tracking-tight">
              NetCore<span className="text-accent">AI</span>
            </span>
            <p className="text-stone-500 text-sm">
              Premium Web Development Agency
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {[
              { label: "About", href: "#about" },
              { label: "Services", href: "#services" },
              { label: "Workflow", href: "#workflow" },
              { label: "Team", href: "#team" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-stone-500 hover:text-stone-300 text-sm transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Email */}
          <a
            href="mailto:netcoreaisolutions@gmail.com"
            className="inline-flex items-center gap-2 text-stone-500 hover:text-accent text-sm transition-colors duration-200 cursor-pointer"
            aria-label="Send email to Net Core AI"
          >
            <Mail size={15} />
            netcoreaisolutions@gmail.com
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-stone-800/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-stone-600 text-xs">
            &copy; {year} Net Core AI. All rights reserved.
          </p>
          <p className="text-stone-700 text-xs">
            Built with precision. Delivered with purpose.
          </p>
        </div>
      </div>
    </footer>
  )
}
