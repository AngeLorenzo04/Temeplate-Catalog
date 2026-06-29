import { templates, getCategories } from "@/lib/templates"
import { TemplateCatalog } from "@/components/template-catalog"

export default function Page() {
  const categories = getCategories()

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="text-balance text-3xl font-bold tracking-tight">Website Templates</h1>
        <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          Browse a curated collection of starter templates. Filter by category, explore the details, and launch a live
          preview of any design.
        </p>
      </div>

      <TemplateCatalog templates={templates} categories={categories} />
    </main>
  )
}
