import { cn } from "~/lib/utils"

const Prose = ({
  as: Component = "div",
  children,
  className,
  ...props
}: {
  as?: any
  children?: React.ReactNode
  className?: string
}) => {
  return (
    <Component
      className={cn(
        "prose mx-auto max-w-5xl dark:prose-invert",
        "prose-headings:mb-2 prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight",
        className
      )}
      s
      {...props}
    >
      {children}
    </Component>
  )
}

export { Prose }
