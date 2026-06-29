import { templates, getCategories } from "@/lib/templates"
import { TemplateCatalog } from "@/components/template-catalog"
import Image from "next/image"

export default function Page() {
  const categories = getCategories()

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* Decorative Maiolica Header */}
      <div className="mb-10 w-full overflow-hidden rounded-xl border-4 border-primary/20 shadow-lg relative h-48 md:h-64">
        <Image 
          src="/maiolica.png" 
          alt="Maiolica Laertina Decoration" 
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/60 dark:bg-background/80 flex flex-col items-center justify-center p-6 text-center">
          <h1 className="text-balance text-4xl md:text-5xl font-extrabold tracking-tight text-primary drop-shadow-sm">
            La Bottega del Web
          </h1>
          <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-foreground font-medium text-lg drop-shadow-sm">
            Esplora il nostro catalogo di template ispirato all'eleganza della Maiolica Laertina.
          </p>
        </div>
      </div>

      <TemplateCatalog templates={templates} categories={categories} />
    </main>
  )
}
