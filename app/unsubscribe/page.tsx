"use client"

import { useState, FormEvent } from "react"
import Link from "next/link"
import Navbar from "@/components/sections/Navbar"
import Footer from "@/components/sections/Footer"
import { Mail, CheckCircle2, ArrowLeft } from "lucide-react"

export default function UnsubscribePage() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError("")
    setLoading(true)
    try {
      const res = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        const data = await res.json().catch(() => ({}))
        setError(data?.error ?? "Something went wrong. Please try again.")
      }
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="flex flex-col min-h-screen bg-[#0C0A09] text-stone-50">
      <Navbar />

      <section className="flex-1 flex items-center justify-center pt-32 pb-20 px-6">
        <div className="w-full max-w-md">
          {!submitted ? (
            <div className="rounded-2xl border border-stone-800 bg-stone-900/50 p-8">
              <div className="flex flex-col items-center mb-8 text-center">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-accent/10 border border-accent/20 mb-4">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <h1 className="text-2xl font-bold text-stone-50">Unsubscribe</h1>
                <p className="text-sm text-stone-400 mt-2">
                  Enter your email and we&apos;ll remove you from our list.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoFocus
                  required
                  className="w-full px-4 py-3 rounded-xl bg-stone-800/60 border border-stone-700 text-stone-50 placeholder-stone-500 focus:outline-none focus:border-accent/50 transition-colors text-sm"
                />

                {error && <p className="text-red-400 text-xs text-center">{error}</p>}

                <button
                  type="submit"
                  disabled={loading || !email}
                  className="w-full py-3 rounded-xl bg-accent hover:bg-accent/90 text-stone-950 font-semibold text-sm transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {loading ? "Submitting…" : "Unsubscribe"}
                </button>
              </form>
            </div>
          ) : (
            <div className="rounded-2xl border border-stone-800 bg-stone-900/50 p-8 text-center">
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-accent/10 border border-accent/20 mb-6 mx-auto">
                <CheckCircle2 className="w-7 h-7 text-accent" />
              </div>
              <h1 className="text-2xl font-bold text-stone-50 mb-3">You&apos;re unsubscribed</h1>
              <p className="text-stone-400 text-sm leading-relaxed mb-8">
                We&apos;ve received your request and removed{" "}
                <span className="text-stone-200 font-medium">{email}</span> from our list.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-accent/90 text-stone-950 font-semibold text-sm transition-all duration-200 hover:scale-105"
              >
                <ArrowLeft size={16} />
                Back to homepage
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
