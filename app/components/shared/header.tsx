import * as React from "react"
import { Link, NavLink, useLocation } from "@remix-run/react"
import { Wrapper } from "./ui/wrapper"
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { cn } from "~/lib/utils"

const Header = () => {
  const [open, setOpen] = React.useState(false)
  const location = useLocation()

  React.useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const handleToggle = () => {
    setOpen(!open)
  }

  return (
    <header className="border-b-2 border-black">
      <Wrapper className="flex h-16 items-center justify-between p-0">
        <div className="px-4">
          <Link to="/" className="font-display text-2xl font-bold">
            frasty
          </Link>
        </div>
        <div className="hidden sm:block">
          <div className="space-x-4">
            <Link
              to="/blog"
              className="inline-flex rounded-lg border-2 border-black px-4 py-1.5 font-medium shadow-[2px_2px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-lime-500/50 hover:font-normal hover:text-neutral-700 hover:shadow-[1px_1px_0px_rgba(0,0,0,0.7)] hover:transition-transform hover:duration-150 hover:ease-in-out"
            >
              Blog
            </Link>
            <Link
              to="/about"
              className="inline-flex rounded-lg border-2 border-black px-4 py-1.5 font-medium shadow-[2px_2px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-lime-500/50 hover:font-normal hover:text-neutral-700 hover:shadow-[1px_1px_0px_rgba(0,0,0,0.7)] hover:transition-transform hover:duration-150 hover:ease-in-out"
            >
              About
            </Link>
            <Link
              to="/uses"
              className="inline-flex rounded-lg border-2 border-black px-4 py-1.5 font-medium shadow-[2px_2px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-lime-500/50 hover:font-normal hover:text-neutral-700 hover:shadow-[1px_1px_0px_rgba(0,0,0,0.7)] hover:transition-transform hover:duration-150 hover:ease-in-out"
            >
              Uses
            </Link>
          </div>
        </div>
        <div className="sm:hidden">
          <div className="h-16 border-l-2 border-black">
            <Sheet open={open} onOpenChange={handleToggle}>
              <SheetTrigger asChild>
                <button
                  onClick={() => setOpen(true)}
                  className="inline-flex h-16 w-16 items-center justify-center bg-lime-500"
                >
                  <Menu size={24} className="h-6 w-6 text-black" />
                </button>
              </SheetTrigger>
              <SheetContent
                side={"right"}
                className="border-l-2 border-black px-0"
              >
                <SheetHeader>
                  <SheetTitle>frasty</SheetTitle>
                </SheetHeader>
                <div className="mt-2 grid">
                  <div className="border-t-2 border-black">
                    <NavLink
                      to="/blog"
                      className={({ isActive }) =>
                        cn(
                          "flex px-4 py-3 text-lg font-medium text-black",
                          isActive ? "bg-lime-500" : "bg-transparent"
                        )
                      }
                    >
                      Blog
                    </NavLink>
                  </div>
                  <div className="border-t-2 border-black">
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        cn(
                          "flex px-4 py-3 text-lg font-medium text-black",
                          isActive ? "bg-lime-500/50" : "bg-transparent"
                        )
                      }
                    >
                      About
                    </NavLink>
                  </div>
                  <div className="border-y-2 border-black">
                    <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        cn(
                          "flex px-4 py-3 text-lg font-medium text-black",
                          isActive ? "bg-lime-500/50" : "bg-transparent"
                        )
                      }
                    >
                      Contact
                    </NavLink>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Wrapper>
    </header>
  )
}

export { Header }
