import { homeQuery } from "~/lib/queries"
import { Module } from "./module"
import { useLiveQuery } from "@sanity/preview-kit"
import type { SanityDocument } from "@sanity/client"
import type { Modules } from "~/types/module"

const ModuleGridPreview = ({ homeData }: { homeData: SanityDocument }) => {
  const [data] = useLiveQuery(homeData, homeQuery)

  return (
    <section className="module-grid">
      {data?.pageSections?.sections?.map((module: Modules, index: number) => (
        <Module key={index} module={module} />
      ))}
    </section>
  )
}

export { ModuleGridPreview }
