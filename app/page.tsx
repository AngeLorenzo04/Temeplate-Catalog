import { templates, getCategories } from "@/lib/templates"
import { TemplateCatalog } from "@/components/template-catalog"

export default function Page() {
  const categories = getCategories()

  return (
    <main className="mx-auto w-full max-w-7xl px-4 md:px-6 py-10 md:py-24">
      {/* Premium Hero Section */}
      <div className="relative mb-14 md:mb-20 flex flex-col items-center text-center space-y-6">
        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-amber-400 mr-2 animate-pulse shadow-[0_0_8px_rgba(251,191,36,0.8)]"></span>
          Catalogo Aggiornato 2026
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-balance">
          L'eleganza del web <br className="hidden md:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-amber-400 to-primary">
            senza compromessi.
          </span>
        </h1>
        
        <p className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
          Esplora la nostra collezione premium di template. Design all'avanguardia, ispirati alla tradizione della Maiolica Laertina, pensati per far risaltare il tuo brand.
        </p>
      </div>

      <TemplateCatalog templates={templates} categories={categories} />
    </main>
  )
}
