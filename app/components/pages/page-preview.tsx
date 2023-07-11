import { useParams } from "@remix-run/react"
import { useLiveQuery } from "@sanity/preview-kit"
import { pageQuery } from "~/lib/queries"
import { Page } from "./page"
import type { TPage } from "~/types/page"

const PagePreview = ({ content }: { content: TPage }) => {
  const params = useParams()
  const [data] = useLiveQuery(content, pageQuery, params)
  return <Page content={data} />
}

export { PagePreview }
