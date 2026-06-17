import { redirect } from "next/navigation"
import { isAdminAuthorized } from "@/lib/admin-auth"
import { getUnsubscribes } from "@/lib/unsubscribe-store"
import { deleteUnsubscribeAction } from "./actions"
import { Mail, ArrowLeft, Trash2 } from "lucide-react"
import Link from "next/link"

export default async function AdminDashboard() {
  const authorized = await isAdminAuthorized()
  if (!authorized) {
    redirect("/admin6k3-hgio")
  }

  const unsubscribes = await getUnsubscribes()

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
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#777] hover:text-[#EAEAEA] transition-colors"
          >
            <ArrowLeft size={14} />
            Back to site
          </Link>
        </div>

        {unsubscribes.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-12 text-center">
            <Mail className="w-8 h-8 text-[#555] mx-auto mb-4" />
            <p className="text-[#777] text-sm">No unsubscribe requests yet.</p>
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
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
                      <form action={deleteUnsubscribeAction}>
                        <input type="hidden" name="id" value={entry.id} />
                        <button
                          type="submit"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-red-500/20 bg-red-500/5 text-red-400 hover:bg-red-500/10 hover:border-red-500/30 transition-colors text-xs font-medium"
                        >
                          <Trash2 size={12} />
                          Delete
                        </button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
