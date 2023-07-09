import { json } from "@remix-run/node"
import type {
  LoaderArgs,
  LoaderFunction,
  V2_MetaFunction,
} from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { ModuleGrid } from "~/components/modules/module-grid"

import { Wrapper } from "~/components/shared/ui/wrapper"
import { homeQuery } from "~/lib/queries"
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
  const content = await getClient(preview).fetch(homeQuery)

  return json({ content, preview })
}

export default function Index() {
  const { content, preview } = useLoaderData<typeof loader>()

  return preview?.token ? (
    <Wrapper>
      <h1>Preview Mode</h1>
      <pre>
        <code>{JSON.stringify(content, null, 2)}</code>
      </pre>
    </Wrapper>
  ) : (
    <main className="flex-1">
      <Wrapper>
        {content?.pageSections?.sections ? (
          <ModuleGrid modules={content?.pageSections?.sections} />
        ) : (
          <p>There are no modules to display.</p>
        )}
      </Wrapper>
    </main>
  )
}
