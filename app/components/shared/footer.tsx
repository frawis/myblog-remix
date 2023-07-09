import { Github, Twitter } from "lucide-react"
import { Wrapper } from "./ui/wrapper"
import { Link } from "@remix-run/react"

const Footer = () => {
  // calculate current year
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-t from-black to-neutral-800 py-4 lg:pb-12 lg:pt-20">
      <Wrapper>
        <div className="space-y-4 sm:flex sm:items-start sm:space-y-0 md:gap-x-6">
          <div className="md:basis-1/3">
            <div>
              <h2 className="font-display text-2xl font-bold text-white">
                Frasty
              </h2>
            </div>
            <div className="mt-4">
              <p className="text-neutral-300">
                My little blog on the world wide web.
              </p>
            </div>
          </div>
          <div className="md:basis-1/3">
            <div>
              <div className="font-display text-lg font-bold text-white sm:text-2xl">
                Links
              </div>
            </div>
            <div className="mt-2 sm:mt-4">
              <ul className="flex items-center gap-x-4">
                <li>
                  <Link
                    to="/imprint"
                    className="text-sm text-neutral-300 hover:text-lime-500 sm:text-base"
                  >
                    Imprint
                  </Link>
                </li>
                <li>
                  <Link
                    to="/imprint"
                    className="text-sm text-neutral-300 hover:text-lime-500 sm:text-base"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:basis-1/3">
            <div>
              <div className="font-display text-lg font-bold text-white sm:text-2xl">
                Social
              </div>
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
        <div>
          {/* Copyright */}
          <div className="mt-8 text-center text-sm text-neutral-300 sm:text-base">
            <p>&copy; {currentYear} frasty. All rights reserved.</p>
          </div>
        </div>
      </Wrapper>
    </footer>
  )
}

export { Footer }
