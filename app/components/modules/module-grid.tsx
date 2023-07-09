import type { Modules } from "~/types/module"
import { Module } from "./module"

interface ModuleGridProps {
  modules: Modules[]
}

const ModuleGrid = ({ modules }: ModuleGridProps) => {
  return (
    <div className="lg:space-y-16">
      {modules.map((module, index) => (
        <Module key={index} module={module} />
      ))}
    </div>
  )
}

export { ModuleGrid }
