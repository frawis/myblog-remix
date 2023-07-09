import type { Modules } from "~/types/module"
import { Hero } from "./hero"
import { TextWithImage } from "./text-with-image"

interface ModuleProps {
  module: Modules
}

const Module = ({ module }: ModuleProps) => {
  switch (module._type) {
    case "hero":
      return <Hero module={module} />
    case "textWithImage":
      return <TextWithImage module={module} />
    default:
      return null
  }
}

export { Module }
