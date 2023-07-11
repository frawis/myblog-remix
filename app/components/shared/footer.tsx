import { Github, Twitter } from "lucide-react"
import { Wrapper } from "~/components/shared/ui/wrapper"
import { Link } from "@remix-run/react"
import { Logo } from "~/components/shared/logo"

const Footer = () => {
  // calculate current year
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t-2 bg-neutral-950 py-4 lg:pb-12 lg:pt-8">
      <Wrapper>
        <div className="space-y-4 sm:flex sm:items-start sm:space-y-0 md:gap-x-6">
          <div className="text-center md:basis-1/2 md:text-left">
            <div className="inline-flex space-x-2">
              <Logo className="h-8 w-8" />
              <div className="font-display text-2xl font-bold text-white">
                frasty
              </div>
            </div>
            <div className="mt-0.5">
              <p className="text-xs text-neutral-300">
                My little blog on the world wide web.
              </p>
            </div>
          </div>
          <div className="md:basis-1/2">
            <div className="flex w-full flex-col items-center justify-between space-y-4 sm:flex-row sm:items-start sm:space-y-0 lg:items-center">
              <div className="space-y-3 text-center sm:text-right">
                <Link
                  to="/imprint"
                  className="block text-sm text-lime-500 hover:text-lime-400 sm:text-base"
                >
                  Imprint
                </Link>
                <p className="text-sm">
                  &copy; {currentYear} frasty. All rights reserved.
                </p>
              </div>
              <div className="flex justify-start gap-x-2 md:mt-4">
                <a
                  href="https://twitter.com/frasty"
                  target="_blank"
                  rel="noreferrer nofollow"
                  className="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-lime-500 transition-colors duration-200 hover:bg-neutral-800 hover:text-lime-400/90"
                >
                  <span className="sr-only">Twitter</span>
                  <Twitter className="h-5 w-5 group-hover:scale-105" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer nofollow"
                  className="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-lime-500 transition-colors duration-200 hover:bg-neutral-800 hover:text-lime-400/90"
                >
                  <span className="sr-only">Github</span>
                  <Github className="h-5 w-5 group-hover:scale-105" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  )
}

export { Footer }
