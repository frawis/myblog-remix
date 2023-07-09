import { z } from "zod"
import { typedObjectZ } from "./block"
import { slugZ } from "./slug"
import { sanityImageObjectExtendedZ } from "./image"

const postZ = z.object({
  _id: z.string(),
  _updatedAt: z.string(),
  publishedAt: z.string().nullable(),
  updatedAt: z.string().nullable(),
  title: z.string().nullable(),
  slug: slugZ,
  body: z.array(typedObjectZ).nullable(),
  mainImage: sanityImageObjectExtendedZ.nullable(),
})

const postsZ = z.array(postZ)

export type Post = z.infer<typeof postZ>
export { postZ, postsZ }
