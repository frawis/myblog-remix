import * as React from "react"
import { Link, NavLink, useLocation } from "@remix-run/react"
import { Wrapper } from "~/components/shared/ui/wrapper"
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { cn } from "~/lib/utils"
import { Logo } from "~/components/shared/logo"

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
    <header className="border-b-2">
      <Wrapper className="flex h-16 items-center justify-between pr-0">
        <div>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 font-display text-2xl font-bold"
          >
            <Logo className="h-10 w-10" />
            <span>frasty</span>
          </Link>
        </div>
        <div className="hidden sm:block">
          <div className="space-x-4">
            <Link
              to="/blog"
              className="inline-flex rounded-lg border-2 px-4 py-1.5 font-medium shadow-[2px_2px_0px_rgba(255,255,255,0.8)] hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-lime-500 hover:font-normal hover:text-neutral-700 hover:shadow-[1px_1px_0px_rgba(0,0,0,0.7)] hover:transition-transform hover:duration-150 hover:ease-in-out"
            >
              Blog
            </Link>
            <Link
              to="/about"
              className="inline-flex rounded-lg border-2 px-4 py-1.5 font-medium shadow-[2px_2px_0px_rgba(255,255,255,0.8)] hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-lime-500 hover:font-normal hover:text-neutral-700 hover:shadow-[1px_1px_0px_rgba(0,0,0,0.7)] hover:transition-transform hover:duration-150 hover:ease-in-out"
            >
              About
            </Link>
            <Link
              to="/uses"
              className="inline-flex rounded-lg border-2 px-4 py-1.5 font-medium shadow-[2px_2px_0px_rgba(255,255,255,0.8)] hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-lime-500 hover:font-normal hover:text-neutral-700 hover:shadow-[1px_1px_0px_rgba(0,0,0,0.7)] hover:transition-transform hover:duration-150 hover:ease-in-out"
            >
              Uses
            </Link>
          </div>
        </div>
        <div className="sm:hidden">
          <div className="h-16 border-l-2">
            <Sheet open={open} onOpenChange={handleToggle}>
              <SheetTrigger asChild>
                <button
                  onClick={() => setOpen(true)}
                  className="inline-flex h-16 w-16 items-center justify-center bg-lime-500"
                >
                  <Menu size={24} className="h-6 w-6 text-black" />
                </button>
              </SheetTrigger>
              <SheetContent side={"right"} className="border-l-2  px-0">
                <SheetHeader>
                  <SheetTitle>frasty</SheetTitle>
                </SheetHeader>
                <div className="mt-2 grid">
                  <div className="border-t-2">
                    <NavLink
                      to="/blog"
                      className={({ isActive }) =>
                        cn(
                          "flex px-4 py-3 text-lg font-medium",
                          isActive
                            ? "bg-lime-500 text-neutral-950"
                            : "bg-transparent"
                        )
                      }
                    >
                      Blog
                    </NavLink>
                  </div>
                  <div className="border-y-2">
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        cn(
                          "flex px-4 py-3 text-lg font-medium",
                          isActive
                            ? "bg-lime-500 text-neutral-950"
                            : "bg-transparent"
                        )
                      }
                    >
                      About
                    </NavLink>
                  </div>
                  <div className="border-y-2">
                    <NavLink
                      to="/uses"
                      className={({ isActive }) =>
                        cn(
                          "flex px-4 py-3 text-lg font-medium",
                          isActive
                            ? "bg-lime-500 text-neutral-950"
                            : "bg-transparent"
                        )
                      }
                    >
                      Uses
                    </NavLink>
                  </div>
                  {/* <div className="border-y-2 ">
                    <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        cn(
                          "flex px-4 py-3 text-lg font-medium",
                          isActive ? "bg-lime-500/50" : "bg-transparent"
                        )
                      }
                    >
                      Contact
                    </NavLink>
                  </div> */}
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
