import { cn } from "~/lib/utils"

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("h-16 w-16", className)}>
      <svg viewBox="0 0 190 190" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="2"
          y="2"
          width="186"
          height="186"
          rx="7"
          fill="#0a0a0a"
          stroke="#0a0a0a"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M160.999 92.4765C161 92.3182 161 92.1596 161 92.001C161 51.1314 127.869 18 86.9991 18C46.1294 18 12.998 51.1314 12.998 92.001C12.998 92.1596 12.9985 92.3182 12.9995 92.4765H160.999Z"
          fill="#C6D228"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30.9994 100C30.9985 100.158 30.9979 100.317 30.9979 100.476C30.998 141.345 64.1293 174.477 104.999 174.477C145.869 174.477 179 141.345 179 100.476C179 100.317 178.999 100.158 178.998 100L30.9994 100Z"
          fill="#F4FF6B"
        />
      </svg>
    </div>
  )
}

export { Logo }
