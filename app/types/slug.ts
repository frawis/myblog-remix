import { z } from "zod"

const slugZ = z.object({
  current: z.string(),
})

export { slugZ }
