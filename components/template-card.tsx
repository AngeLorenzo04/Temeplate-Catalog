import Link from "next/link"
import Image from "next/image"
import type { Template } from "@/lib/templates"

export function TemplateCard({ template }: { template: Template }) {
  return (
    <Link
      href={`/templates/${template.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-md relative"
    >
      <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-900">
        <Image
          src={template.thumbnail}
          alt={template.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4 pb-6">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-semibold text-card-foreground">{template.name}</h3>
          <span className="shrink-0 rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
            {template.category}
          </span>
        </div>

        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">{template.description}</p>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
          {template.tags.map((tag) => (
            <span key={tag} className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {/* Bottom Maiolica Border for Card */}
      <div className="absolute bottom-0 left-0 w-full h-1.5" style={{ backgroundImage: 'url("/maiolica.png")', backgroundSize: 'contain', backgroundRepeat: 'repeat-x', backgroundPosition: 'center' }}></div>
    </Link>
  )
}
