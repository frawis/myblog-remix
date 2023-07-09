import { LiveQueryProvider } from "@sanity/preview-kit"
import * as React from "react"
import { getClient } from "~/lib/sanity"
import { ExitPreview } from "./exit-preview"

interface IPreviewProviderProps {
  children: React.ReactNode
  token: string
}

const PreviewProvider = ({ children, token }: IPreviewProviderProps) => {
  const client = React.useMemo(() => getClient({ token }), [token])
  return (
    <LiveQueryProvider client={client}>
      {children}
      <ExitPreview />
    </LiveQueryProvider>
  )
}

export { PreviewProvider }
export default PreviewProvider
