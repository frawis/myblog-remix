import { json } from "@remix-run/node"
import type {
  LoaderArgs,
  LoaderFunction,
  V2_MetaFunction,
} from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { Posts } from "~/components/posts/posts"
import { PostsPreview } from "~/components/posts/posts-preview"
import { Button } from "~/components/shared/ui/button"
import { Wrapper } from "~/components/shared/ui/wrapper"
import { postsQuery } from "~/lib/queries"
import { getClient } from "~/lib/sanity"
import { getSession } from "~/sessions"

export const meta: V2_MetaFunction = () => {
  return [
    { title: "frawis" },
    { name: "description", content: "My personal blog on the world wide web." },
  ]
}

export const loader: LoaderFunction = async ({ request }: LoaderArgs) => {
  const session = await getSession(request.headers.get("Cookie"))
  const token = session.get("preview")
  const preview = token ? { token } : undefined
  const posts = await getClient(preview).fetch(postsQuery)

  return json({ posts, preview })
}

export default function Index() {
  const { posts, preview } = useLoaderData<typeof loader>()

  return preview?.token ? (
    <Wrapper className="py-4 flex-1">
      <PostsPreview posts={posts} />
    </Wrapper>
  ) : (
    <Wrapper className="py-4 flex-1">
      {posts ? <Posts posts={posts} /> : null}
    </Wrapper>
  )
}
