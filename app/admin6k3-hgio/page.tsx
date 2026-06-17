"use client"

import { useState, FormEvent } from "react"
import Link from "next/link"
import { Lock, Mail, Trash2, ArrowLeft } from "lucide-react"

type UnsubscribeEntry = {
  id: string
  email: string
  submittedAt: string
}

export default function AdminPage() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [authed, setAuthed] = useState(false)
  const [unsubscribes, setUnsubscribes] = useState<UnsubscribeEntry[]>([])
  const [deletingId, setDeletingId] = useState<string | null>(null)

  async function handleLogin(e: FormEvent) {
    e.preventDefault()
    setError("")
    setLoading(true)
    try {
      const res = await fetch("/api/admin-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok) {
        setUnsubscribes(data.unsubscribes ?? [])
        setAuthed(true)
      } else if (res.status === 429) {
        setError("Too many attempts. Try again later.")
      } else {
        setError("Incorrect password.")
      }
    } catch {
      setError("Something went wrong.")
    } finally {
      setLoading(false)
    }
  }

  async function handleDelete(id: string) {
    setDeletingId(id)
    try {
      const res = await fetch("/api/admin-delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, id }),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok) {
        setUnsubscribes(data.unsubscribes ?? [])
      }
    } finally {
      setDeletingId(null)
    }
  }

  function handleLock() {
    setAuthed(false)
    setPassword("")
    setUnsubscribes([])
  }

  if (!authed) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <div className="flex flex-col items-center mb-8">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#64b5f6]/10 border border-[#64b5f6]/20 mb-4">
                <Lock className="w-5 h-5 text-[#64b5f6]" />
              </div>
              <h1 className="text-xl font-bold text-[#EAEAEA]">Admin</h1>
              <p className="text-sm text-[#555] mt-1">Enter the password to continue</p>
            </div>

            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                autoFocus
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[#EAEAEA] placeholder-[#555] focus:outline-none focus:border-[#64b5f6]/50 focus:bg-white/[0.07] transition-colors text-sm"
              />

              {error && <p className="text-red-400 text-xs text-center">{error}</p>}

              <button
                type="submit"
                disabled={loading || !password}
                className="w-full py-3 rounded-xl bg-[#64b5f6]/10 border border-[#64b5f6]/20 text-[#64b5f6] text-sm font-medium hover:bg-[#64b5f6]/20 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {loading ? "Verifying…" : "Enter"}
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-[#EAEAEA]">Unsubscribe Requests</h1>
            <p className="text-sm text-[#777] mt-1">
              {unsubscribes.length} total request{unsubscribes.length === 1 ? "" : "s"}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handleLock}
              className="text-sm text-[#777] hover:text-[#EAEAEA] transition-colors"
            >
              Lock
            </button>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[#777] hover:text-[#EAEAEA] transition-colors"
            >
              <ArrowLeft size={14} />
              Back to site
            </Link>
          </div>
        </div>

        {unsubscribes.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-12 text-center">
            <Mail className="w-8 h-8 text-[#555] mx-auto mb-4" />
            <p className="text-[#777] text-sm">No unsubscribe requests yet.</p>
          </div>
        ) : (
          <>
            {/* Mobile: stacked cards. Avoids the horizontal-scroll-vs-tap conflict
                that a wide table has on touch devices. */}
            <div className="flex flex-col gap-3 md:hidden">
              {unsubscribes.map((entry) => (
                <div
                  key={entry.id}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <p className="text-[#EAEAEA] font-medium break-all">{entry.email}</p>
                  <p className="text-[#777] text-xs mt-1">
                    {new Date(entry.submittedAt).toLocaleString()}
                  </p>
                  <button
                    onClick={() => handleDelete(entry.id)}
                    disabled={deletingId === entry.id}
                    className="touch-manipulation mt-3 inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-lg border border-red-500/20 bg-red-500/5 text-red-400 active:bg-red-500/15 transition-colors text-sm font-medium disabled:opacity-50"
                  >
                    <Trash2 size={14} />
                    {deletingId === entry.id ? "Deleting…" : "Delete"}
                  </button>
                </div>
              ))}
            </div>

            {/* Desktop / tablet: table, wrapped so any overflow scrolls inside
                the table instead of the page. */}
            <div className="hidden md:block rounded-2xl border border-white/10 bg-white/[0.03] overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.02]">
                    <th className="text-left px-6 py-4 text-[#777] font-semibold">Email</th>
                    <th className="text-left px-6 py-4 text-[#777] font-semibold">Submitted</th>
                    <th className="text-right px-6 py-4 text-[#777] font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {unsubscribes.map((entry, i) => (
                    <tr
                      key={entry.id}
                      className={`border-b border-white/5 last:border-0 ${
                        i % 2 === 0 ? "bg-white/[0.01]" : ""
                      }`}
                    >
                      <td className="px-6 py-4 text-[#EAEAEA]">{entry.email}</td>
                      <td className="px-6 py-4 text-[#777]">
                        {new Date(entry.submittedAt).toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => handleDelete(entry.id)}
                          disabled={deletingId === entry.id}
                          className="touch-manipulation inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-red-500/20 bg-red-500/5 text-red-400 hover:bg-red-500/10 hover:border-red-500/30 transition-colors text-xs font-medium disabled:opacity-50"
                        >
                          <Trash2 size={12} />
                          {deletingId === entry.id ? "Deleting…" : "Delete"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
