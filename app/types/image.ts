import type { SanityImageCrop, SanityImageHotspot } from "@sanity/asset-utils"
import { schemaForType } from "./schema-for-type"
import { z } from "zod"

const sanityImageCropZ = schemaForType<SanityImageCrop>()(
  z.object({
    _type: z.literal("sanity.imageCrop"),
    let: z.number(),
    top: z.number(),
    bottom: z.number(),
    right: z.number(),
    left: z.number(),
  })
)

const sanityImageHotspotZ = schemaForType<SanityImageHotspot>()(
  z.object({
    _type: z.literal("sanity.imageHotspot"),
    x: z.number(),
    y: z.number(),
    height: z.number(),
    width: z.number(),
  })
)

const sanityImageZ = z.object({
  _type: z.string(),
  _id: z.string(),
  altText: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  metadata: z
    .object({
      blurHash: z.string().nullable(),
    })
    .nullable(),
})

const sanityImageObjectExtendedZ = z.object({
  asset: sanityImageZ,
  crop: sanityImageCropZ.nullable().transform((val) => val ?? undefined),
  hotspot: sanityImageHotspotZ.nullable().transform((val) => val ?? undefined),
})

export {
  sanityImageCropZ,
  sanityImageHotspotZ,
  sanityImageZ,
  sanityImageObjectExtendedZ,
}
