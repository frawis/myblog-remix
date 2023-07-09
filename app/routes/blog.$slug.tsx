import type { LoaderArgs, LoaderFunction } from "@remix-run/node"
import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { Post } from "~/components/posts/post"
import { PostPreview } from "~/components/posts/post-preview"
import { postQuery } from "~/lib/queries"
import { getClient } from "~/lib/sanity"
import { getSession } from "~/sessions"

export const loader: LoaderFunction = async ({
  request,
  params,
}: LoaderArgs) => {
  const session = await getSession(request.headers.get("Cookie"))
  const token = session.get("preview")
  const preview = token ? { token } : undefined

  const post = await getClient(preview).fetch(postQuery, params)

  return json({ post, preview })
}

export default function BlogEntry() {
  const { post, preview } = useLoaderData<typeof loader>()
  return (
    <main className="px-4 py-6">
      {preview?.token ? <PostPreview post={post} /> : <Post post={post} />}
    </main>
  )
}
