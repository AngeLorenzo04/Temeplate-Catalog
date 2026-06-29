import Link from "next/link"
import { notFound } from "next/navigation"
import { X } from "lucide-react"
import { templates, getTemplate } from "@/lib/templates"

export function generateStaticParams() {
  return templates.map((t) => ({ slug: t.slug }))
}

export default async function PreviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const template = getTemplate(slug)

  if (!template || !template.demoUrl) {
    notFound()
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Floating exit control so the preview stays usable without site chrome */}
      <Link
        href={`/templates/${slug}`}
        className="fixed right-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-slate-900/90 px-4 py-2 text-sm font-medium text-white shadow-lg backdrop-blur transition-colors hover:bg-slate-900"
      >
        <X className="size-4" aria-hidden="true" />
        Exit preview
      </Link>

      <iframe 
        src={template.demoUrl} 
        title={`Preview of ${template.name}`}
        className="h-full w-full border-0"
        allow="fullscreen"
      />
    </div>
  )
}
