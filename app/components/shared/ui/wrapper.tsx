import * as React from "react"
import { cn } from "~/lib/utils"

const Wrapper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mx-auto max-w-7xl p-4 sm:px-6 lg:px-8", className)}
    {...props}
  />
))
Wrapper.displayName = "Wrapper"

export { Wrapper }
