import { useLiveQuery } from "@sanity/preview-kit"
import { postsQuery } from "~/lib/queries"
import { Posts } from "./posts"
import type { SanityDocument } from "@sanity/client"

const PostsPreview = ({ posts }: { posts: SanityDocument[] }) => {
  const [data] = useLiveQuery(posts, postsQuery)
  return (
    <main>
      <Posts posts={data} />
    </main>
  )
}

export { PostsPreview }
