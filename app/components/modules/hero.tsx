import type { HeroModule } from "~/types/module"
import { ContentImage } from "../shared/content-image"
import { Typewriter } from "react-simple-typewriter"

interface HeroProps {
  module: HeroModule
}

const Hero = ({ module }: HeroProps) => {
  const { title, subtitle, image, slogans } = module
  return (
    <section className="relative mb-6 mt-4 lg:mx-auto lg:max-w-4xl">
      <div className="absolute -bottom-2 -right-2 left-2 top-2 rounded-xl border-2 bg-neutral-800" />
      <div className="relative flex flex-col-reverse overflow-hidden rounded-lg border-2 bg-neutral-950 sm:flex-row">
        <div className="relative p-4 sm:h-full sm:basis-1/2 sm:items-center sm:p-6">
          {title && (
            <div className="animate-in slide-in-from-top lg:mt-12">
              <h1 className="text-center font-display text-4xl font-bold sm:text-left md:text-6xl">
                {title}
              </h1>
            </div>
          )}
          {subtitle && (
            <div className="mt-2 animate-in fade-in-5 slide-in-from-left delay-150">
              <h2 className="text-center font-display text-xl sm:text-left md:text-3xl">
                {subtitle}
              </h2>
            </div>
          )}
          {slogans && (
            <div className="mt-2 text-center font-display text-2xl text-lime-500 sm:text-left">
              <Typewriter
                loop
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
                words={slogans}
              />
            </div>
          )}
        </div>
        <div className="p-4 sm:basis-1/2 lg:p-6">
          <div className="flex w-full items-center justify-center">
            <div className="overflow-hidden rounded-md border-2 lg:aspect-square lg:max-h-[384px]">
              <ContentImage className="" value={image} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Hero }
