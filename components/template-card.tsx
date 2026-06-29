import Link from "next/link"
import Image from "next/image"
import type { Template } from "@/lib/templates"
import { ArrowUpRight } from "lucide-react"

export function TemplateCard({ template }: { template: Template }) {
  return (
    <Link
      href={`/templates/${template.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-background/50 backdrop-blur-md shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1"
    >
      <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-950">
        <Image
          src={template.thumbnail}
          alt={template.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-1">
            <h3 className="font-semibold text-xl tracking-tight text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
              {template.name}
            </h3>
            <span className="inline-flex rounded-full bg-secondary/50 px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">
              {template.category}
            </span>
          </div>
          <div className="p-2 rounded-full bg-primary/5 text-primary opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
             <ArrowUpRight className="size-4" />
          </div>
        </div>

        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">{template.description}</p>

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {template.tags.map((tag) => (
            <span key={tag} className="rounded-md border border-border/50 bg-background/50 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
