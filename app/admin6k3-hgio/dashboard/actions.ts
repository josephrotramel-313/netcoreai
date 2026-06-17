"use server"

import { revalidatePath } from "next/cache"
import { isAdminAuthorized } from "@/lib/admin-auth"
import { deleteUnsubscribe } from "@/lib/unsubscribe-store"

export async function deleteUnsubscribeAction(formData: FormData) {
  const authorized = await isAdminAuthorized()
  if (!authorized) {
    throw new Error("Unauthorized")
  }

  const id = formData.get("id")
  if (typeof id !== "string" || !id) {
    throw new Error("Missing id")
  }

  await deleteUnsubscribe(id)
  revalidatePath("/admin6k3-hgio/dashboard")
}
