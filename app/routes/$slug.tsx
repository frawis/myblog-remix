import type { LoaderArgs, LoaderFunction } from "@remix-run/node"
import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { Page } from "~/components/pages/page"
import { PagePreview } from "~/components/pages/page-preview"
import { Wrapper } from "~/components/shared/ui/wrapper"
import { pageQuery } from "~/lib/queries"
import { getClient } from "~/lib/sanity"
import { getSession } from "~/sessions"

export const loader: LoaderFunction = async ({
  request,
  params,
}: LoaderArgs) => {
  const session = await getSession(request.headers.get("Cookie"))
  const token = session.get("preview")
  const preview = token ? { token } : undefined

  const content = await getClient(preview).fetch(pageQuery, params)

  return json({ content, preview })
}

export default function () {
  const { content, preview } = useLoaderData<typeof loader>()
  return (
    <main className="flex-1">
      <Wrapper>
        {preview?.token ? (
          <PagePreview content={content} />
        ) : (
          <Page content={content} />
        )}
      </Wrapper>
    </main>
  )
}
