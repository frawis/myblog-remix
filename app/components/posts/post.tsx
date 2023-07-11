import { Prose } from "../shared/prose"
import { Content } from "../shared/content"
import { ContentImage } from "../shared/content-image"
import { Post } from "~/types/post"

const Post = ({ post }: { post: Post }) => {
  const { title, body, mainImage } = post
  return (
    <article className="relative">
      <div className="mx-auto aspect-video max-w-5xl overflow-hidden rounded-lg border-2">
        <ContentImage value={mainImage} isInline={false} />
      </div>
      <div className="relative mt-3 lg:flex">
        {/* <div className="sticky top-0">
          <div>Meta Data</div>
          <div>Table of Contents</div>
        </div> */}
        <Prose className="mx-auto max-w-prose">
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
