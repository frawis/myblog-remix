import type { PortableTextComponentProps } from "@portabletext/react"
import type { SanityImageSource } from "@sanity/asset-utils"
import { getImageDimensions } from "@sanity/asset-utils"
import { cn } from "~/lib/utils"
import urlBuilder from "@sanity/image-url"

type ContentImageAssetWithAlt = SanityImageSource & { alt: string }

const ContentImage = (
  props: PortableTextComponentProps<ContentImageAssetWithAlt>
) => {
  const { value, isInline } = props
  const { width, height } = getImageDimensions(value)

  return (
    <img
      src={urlBuilder({
        projectId: "zv8og8vl",
        dataset: "production",
      })
        .image(value)
        .width(isInline ? 340 : 800)
        .fit("max")
        .auto("format")
        .url()}
      style={{ aspectRatio: width / height }}
      className={cn(
        "not-prose h-auto w-full",
        isInline ? "inline-block" : "block"
      )}
      alt={value.alt || ""}
      loading="lazy"
    />
  )
}

export { ContentImage }
