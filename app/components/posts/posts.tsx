import { Link } from "@remix-run/react"
import type { SanityDocument } from "@sanity/client"
import { Card, CardContent } from "../shared/ui/card"
import { ContentImage } from "../shared/content-image"

const Posts = ({ posts }: { posts: SanityDocument[] }) => {
  return (
    <main className="mx-auto max-w-6xl">
      <section className="grid gap-4 md:auto-cols-[minmax(250px,_1fr)] md:grid-flow-col md:grid-cols-3 md:grid-rows-[masonry]">
        {posts?.length > 0 ? (
          posts.map((post) => (
            <article className="relative flex h-full" key={post._id}>
              <Card>
                <CardContent>
                  <div>
                    <div className="mb-3 overflow-hidden rounded-md border-2 border-black">
                      <ContentImage value={post.mainImage} isInline />
                    </div>
                    <h2 className="mb-2 font-display text-2xl font-bold leading-tight">
                      <Link
                        to={`/blog/${post.slug.current}`}
                        className="after:absolute after:inset-0 after:z-10"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-base/5">{post.summary}</p>
                  </div>
                  <div className="mt-2">
                    <div className="flex justify-between">
                      {post.publishedAt && (
                        <div className="text-sm text-neutral-800">
                          {new Date(post.publishedAt).toLocaleDateString("de", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </article>
          ))
        ) : (
          <div className="text-center">No posts found.</div>
        )}
      </section>
    </main>
  )
}

export { Posts }
