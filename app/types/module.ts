import { z } from "zod"
import { sanityImageObjectExtendedZ } from "./image"

const heroModuleZ = z.object({
  _type: z.literal("hero"),
  _key: z.string(),
  title: z.string(),
  subtitle: z.string(),
  image: sanityImageObjectExtendedZ.nullable(),
})

export type HeroModule = z.infer<typeof heroModuleZ>

const textWithImageModuleZ = z.object({
  _type: z.literal("textWithImage"),
  _key: z.string(),
  layout: z.enum(["left", "right"]),
  title: z.string(),
  subtitle: z.string(),
  slogans: z.array(z.string()),
  image: sanityImageObjectExtendedZ.nullable(),
  excerpt: z.string(),
})

export type TextWithImageModule = z.infer<typeof textWithImageModuleZ>

export type Modules = HeroModule | TextWithImageModule

export { heroModuleZ, textWithImageModuleZ }
