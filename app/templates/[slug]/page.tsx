import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Code2, Eye } from "lucide-react"
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

      <div
        className={`mb-8 flex aspect-[2/1] items-center justify-center rounded-xl ${template.thumbnailColor}`}
        aria-hidden="true"
      >
        <span className="text-2xl font-semibold text-white/90">{template.name}</span>
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
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Eye className="size-4" aria-hidden="true" />
            Live Preview
          </Link>
          <button
            type="button"
            disabled
            aria-disabled="true"
            className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-medium text-muted-foreground opacity-60"
          >
            <Code2 className="size-4" aria-hidden="true" />
            View Code
          </button>
        </div>
      </div>
    </main>
  )
}
