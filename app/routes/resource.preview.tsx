import type { ActionFunction, LoaderFunction } from "@remix-run/node"
import { json, redirect } from "@remix-run/node"
import { commitSession, destroySession, getSession } from "~/sessions"

// A `POST` request to this route will exit the preview mode
export const action: ActionFunction = async ({ request }) => {
  if (request.method !== "POST") {
    return json({ message: "Only POST requests are allowed" }, 405)
  }

  const session = await getSession(request.headers.get("Cookie"))

  return redirect("/", {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  })
}

// A `GET` request to this route will show the preview mode

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"))

  const requestUrl = new URL(request.url)

  const entryType = requestUrl.searchParams.get("type")
  const entrySlug = requestUrl.searchParams.get("slug")

  if (!entryType || !entrySlug) {
    return new Response("Missing type or slug", { status: 401 })
  }

  let validUrl = "/"

  if (entryType === "post") {
    validUrl = `/blog/${entrySlug}`
  }

  session.set("preview", process.env.SANITY_API_READ_TOKEN)

  return redirect(validUrl, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  })
}
