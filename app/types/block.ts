import type { TypedObject } from "@sanity/types"
import { z } from "zod"
import { schemaForType } from "./schema-for-type"

const baseTypedObjectZ = z
  .object({
    _type: z.string(),
    _key: z.string().optional(),
  })
  .passthrough()

const typedObjectZ = schemaForType<TypedObject>()(baseTypedObjectZ)

const typedObjectBlockZ = baseTypedObjectZ.extend({
  style: z.string().optional(),
})

export type TypedObjectBlock = z.infer<typeof typedObjectBlockZ>

export { baseTypedObjectZ, typedObjectZ }
