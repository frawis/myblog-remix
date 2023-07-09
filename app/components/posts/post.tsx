import type { SanityDocument } from "@sanity/client"
import { Prose } from "../shared/prose"
import { Content } from "../shared/content"
import { ContentImage } from "../shared/content-image"
import { Post } from "~/types/post"

const Post = ({ post }: { post: Post }) => {
  const { title, body, mainImage } = post
  return (
    <article className="mx-auto grid max-w-7xl lg:grid-cols-12 lg:grid-rows-[repeat(4,_125px)_auto]">
      <div className="aspect-video overflow-hidden rounded-lg border-3 border-black shadow-[2px_2px_0_#000] sm:col-end-7 md:col-end-8 lg:col-start-1 lg:row-start-1 lg:row-end-5">
        <ContentImage value={mainImage} isInline={false} />
      </div>
      <div className="relative col-start-1 col-end-13 row-start-6 row-end-7 flex flex-col gap-[10px] sm:col-start-6 sm:col-end-12 sm:row-start-4 sm:rounded-lg sm:border-2 sm:border-black sm:bg-white sm:p-6 sm:pt-12 md:col-end-13 md:gap-5">
        <Prose>
          {title ? <h1>{title}</h1> : null}
          {body ? (
            <div>
              <Content value={body} />
            </div>
          ) : null}
        </Prose>
      </div>
    </article>
  )
}

export { Post }
