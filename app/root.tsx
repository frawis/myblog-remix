import { cssBundleHref } from "@remix-run/css-bundle"
import {
  json,
  type LinksFunction,
  type LoaderArgs,
  type LoaderFunction,
} from "@remix-run/node"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react"
import { lazy, Suspense } from "react"
import { getSession } from "./sessions"
import styles from "~/styles/tailwind.css"
import fonts from "~/styles/fonts.css"
import { Header } from "./components/shared/header"
import { Footer } from "./components/shared/footer"

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://cdn.sanity.io" },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: fonts },
  { rel: "stylesheet", href: styles },
  {
    rel: "icon",
    type: "image/png",
    href: "/favicon-32x32.png",
    sizes: "32x32",
  },
]

const PreviewProvider = lazy(
  () => import("~/components/shared/preview-provider")
)

export const loader: LoaderFunction = async ({ request }: LoaderArgs) => {
  const session = await getSession(request.headers.get("Cookie"))
  const token = session.get("preview")
  const preview = token ? { token } : undefined

  return json({ preview })
}

export default function App() {
  const { preview } = useLoaderData<typeof loader>()
  const children = (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )

  return (
    <html lang="de" className="font-sans antialiased">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex min-h-screen flex-col border-white bg-neutral-950 font-sans text-white">
        {preview?.token ? (
          <PreviewProvider token={preview.token}>
            <Suspense fallback={children}>{children}</Suspense>
          </PreviewProvider>
        ) : (
          children
        )}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
