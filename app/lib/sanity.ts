import type { SanityClient } from "@sanity/client"
import { createClient } from "@sanity/client"

export const projectId: string = "zv8og8vl"
export const dataset: string = "production"
export const apiVersion: string = "2023-05-01"

export function getClient(preview?: { token?: string }): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
    perspective: "published",
  })
  if (preview) {
    if (!preview.token) {
      throw new Error("Preview token is missing")
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: "previewDrafts",
    })
  }
  return client
}
