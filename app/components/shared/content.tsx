import { PortableText } from "@portabletext/react"
import { ContentImage } from "./content-image"
import { Prose } from "./prose"

type ContentProps = {
  value: any[]
}

const components = {
  types: {
    image: ContentImage,
  },
}

const Content = (props: ContentProps) => {
  const { value } = props

  return <PortableText value={value} components={components} />
}

export { Content }
