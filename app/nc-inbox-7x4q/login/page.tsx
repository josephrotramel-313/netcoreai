'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { Lock } from 'lucide-react'

export default function DashboardLogin() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/dashboard-auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      if (res.ok) {
        router.push('/nc-inbox-7x4q')
      } else if (res.status === 429) {
        setError('Too many attempts. Try again later.')
      } else {
        setError('Incorrect password.')
      }
    } catch {
      setError('Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
          <div className="flex flex-col items-center mb-8">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#00F0FF]/10 border border-[#00F0FF]/20 mb-4">
              <Lock className="w-5 h-5 text-[#00F0FF]" />
            </div>
            <h1 className="text-xl font-bold text-[#EAEAEA]">Dashboard</h1>
            <p className="text-sm text-[#555] mt-1">Enter the password to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              autoFocus
              required
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[#EAEAEA] placeholder-[#555] focus:outline-none focus:border-[#00F0FF]/50 focus:bg-white/[0.07] transition-colors text-sm"
            />

            {error && (
              <p className="text-red-400 text-xs text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading || !password}
              className="w-full py-3 rounded-xl bg-[#00F0FF]/10 border border-[#00F0FF]/20 text-[#00F0FF] text-sm font-medium hover:bg-[#00F0FF]/20 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {loading ? 'Verifying…' : 'Enter'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
