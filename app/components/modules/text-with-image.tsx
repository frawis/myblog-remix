import { cn } from "~/lib/utils"
import type { TextWithImageModule } from "~/types/module"
import { ContentImage } from "../shared/content-image"
import { Prose } from "../shared/prose"
import { PortableText } from "@portabletext/react"

interface TextWithImageProps {
  module: TextWithImageModule
}

const TextWithImage = ({ module }: TextWithImageProps) => {
  const { title, subtitle, layout, image, excerpt } = module
  return (
    <section className="mx-auto max-w-5xl py-4">
      <div
        className={cn(
          "flex flex-col items-start overflow-hidden rounded-lg border-2 border-black shadow-[4px_4px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_rgba(0,0,0,0.7)] hover:transition-transform hover:duration-150 hover:ease-in-out sm:gap-4 md:flex-row"
        )}
      >
        <div
          className={cn(
            "px-4 py-2 sm:basis-1/2",
            layout === "left" ? "order-2 sm:order-2" : "order-2 sm:order-1"
          )}
        >
          {title && (
            <h2 className="mb-2 font-display text-2xl font-extrabold text-black first:mt-2 sm:text-3xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-neutral-800 sm:text-lg">{subtitle}</p>
          )}
          {excerpt && (
            <Prose>
              <PortableText value={excerpt} />
            </Prose>
          )}
        </div>
        <div
          className={cn(
            "sm:basis-1/2",
            layout === "left" ? "sm:order-1" : "order-1 sm:order-2"
          )}
        >
          <ContentImage value={image} />
        </div>
      </div>
    </section>
  )
}

export { TextWithImage }
