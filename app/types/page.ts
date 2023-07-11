import { z } from "zod"
import { typedObjectZ } from "./block"

const pageZ = z.object({
  _id: z.string(),
  _updatedAt: z.string(),
  publishedAt: z.string().nullable(),
  createdAt: z.string().nullable(),
  title: z.string().nullable(),
  slug: z.string(),
  body: z.array(typedObjectZ).nullable(),
})

export type TPage = z.infer<typeof pageZ>
export { pageZ }
