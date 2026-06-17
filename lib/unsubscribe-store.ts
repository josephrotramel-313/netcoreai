import { promises as fs } from "fs"
import path from "path"

export type UnsubscribeEntry = {
  id: string
  email: string
  submittedAt: string
}

const DATA_DIR = path.join(process.cwd(), "data")
const DATA_FILE = path.join(DATA_DIR, "unsubscribes.json")

async function readAll(): Promise<UnsubscribeEntry[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8")
    return JSON.parse(raw) as UnsubscribeEntry[]
  } catch {
    return []
  }
}

async function writeAll(entries: UnsubscribeEntry[]): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true })
  await fs.writeFile(DATA_FILE, JSON.stringify(entries, null, 2), "utf-8")
}

export async function addUnsubscribe(email: string): Promise<UnsubscribeEntry> {
  const entries = await readAll()
  const entry: UnsubscribeEntry = {
    id: crypto.randomUUID(),
    email,
    submittedAt: new Date().toISOString(),
  }
  entries.push(entry)
  await writeAll(entries)
  return entry
}

export async function getUnsubscribes(): Promise<UnsubscribeEntry[]> {
  const entries = await readAll()
  return entries.sort(
    (a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime(),
  )
}
