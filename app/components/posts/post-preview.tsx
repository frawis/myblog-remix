import { useParams } from "@remix-run/react"
import type { SanityDocument } from "@sanity/client"
import { useLiveQuery } from "@sanity/preview-kit"
import { postQuery } from "~/lib/queries"
import { Post } from "./post"

const PostPreview = ({ post }: { post: SanityDocument }) => {
  const params = useParams()
  const [data] = useLiveQuery(post, postQuery, params)

  return <Post post={data} />
}

export { PostPreview }
