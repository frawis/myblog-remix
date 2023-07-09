import type { HeroModule } from "~/types/module"

interface HeroProps {
  module: HeroModule
}

const Hero = ({ module }: HeroProps) => {
  const { title, subtitle, image } = module
  return (
    <section className="hero -mx-4">
      <div className="relative h-10 w-32">
        <div className="absolute inset-0 overflow-hidden rounded-tr-lg border-r-2 border-t-2 border-black">
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-neutral-800/10 mix-blend-multiply" />
          <div className="relative py-2 pl-4">01. Latest</div>
        </div>
        <div className="absolute left-32 right-0 h-1 bg-black"></div>
      </div>
      <div className="relative">
        {title && <h1>{title}</h1>}
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  )
}

export { Hero }
