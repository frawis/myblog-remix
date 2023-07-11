import { Prose } from "~/components/shared/prose"
import { Content } from "~/components/shared/content"
import type { TPage } from "~/types/page"

const Page = ({ content }: { content: TPage }) => {
  const { title, body } = content
  return (
    <div className="py-4">
      <Prose>
        {title ? <h1>{title}</h1> : null}
        {body ? (
          <div>
            <Content value={body} />
          </div>
        ) : null}
      </Prose>
    </div>
  )
}

export { Page }
