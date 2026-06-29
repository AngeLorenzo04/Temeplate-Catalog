"use client"

import { useMemo, useState } from "react"
import type { Template } from "@/lib/templates"
import { TemplateCard } from "@/components/template-card"

const ALL = "All"

export function TemplateCatalog({
  templates,
  categories,
}: {
  templates: Template[]
  categories: string[]
}) {
  const [activeCategory, setActiveCategory] = useState<string>(ALL)

  const filters = useMemo(() => [ALL, ...categories], [categories])

  const visible = useMemo(
    () => (activeCategory === ALL ? templates : templates.filter((t) => t.category === activeCategory)),
    [templates, activeCategory],
  )

  return (
    <div className="flex flex-col gap-6">
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter templates by category">
        {filters.map((category) => {
          const isActive = category === activeCategory
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={isActive}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                isActive
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          )
        })}
      </div>

      {/* Grid */}
      {visible.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((template) => (
            <TemplateCard key={template.slug} template={template} />
          ))}
        </div>
      ) : (
        <p className="py-12 text-center text-muted-foreground">No templates found in this category.</p>
      )}
    </div>
  )
}
