import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, Eye } from "lucide-react"
import { getTemplate, templates } from "@/lib/templates"

export function generateStaticParams() {
  return templates.map((t) => ({ slug: t.slug }))
}

export default async function TemplateDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const template = getTemplate(slug)

  if (!template) {
    notFound()
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Back to catalog
      </Link>

      <div className="relative mb-8 flex aspect-[2/1] w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-sky-50 via-amber-50/50 to-blue-100 dark:from-slate-900 dark:via-amber-900/10 dark:to-blue-950 border border-border/50 shadow-md">
        <Image
          src={template.thumbnail}
          alt={template.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sky-900/40 via-transparent to-transparent opacity-80" />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight">{template.name}</h1>
          <span className="rounded-full border border-border bg-secondary px-3 py-0.5 text-xs font-medium text-secondary-foreground">
            {template.category}
          </span>
        </div>

        <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">{template.description}</p>

        <div className="flex flex-wrap gap-2">
          {template.tags.map((tag) => (
            <span key={tag} className="rounded-md bg-muted px-2.5 py-1 text-sm text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href={`/templates/${template.slug}/preview`}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 shadow-sm"
          >
            <Eye className="size-4" aria-hidden="true" />
            Live Preview
          </Link>
        </div>
      </div>
    </main>
  )
}
