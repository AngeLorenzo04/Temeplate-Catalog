export type Template = {
  slug: string
  name: string
  description: string
  category: string
  tags: string[]
  thumbnail: string
  /** Tailwind classes used to render the colored placeholder thumbnail */
  thumbnailColor: string
  /** The URL where the template is hosted (e.g. Vercel) */
  demoUrl: string
}

export const templates: Template[] = [
  {
    slug: "landing-page",
    name: "NetScore26",
    description:
      "Sito web pensato per le divertirsi con gli amici, divertiti a fare predizioni sui risultati delle partite di calcio e a sfidare i tuoi amici!",
    category: "Personale",
    tags: ["hero", "cta", "marketing", "responsive"],
    thumbnail: "/plate_blue.png",
    thumbnailColor: "bg-blue-500",
    demoUrl: "https://netscore26.cloud/",
  },
  {
    slug: "admin-dashboard",
    name: "Admin Dashboard",
    description:
      "A data-dense internal tool layout featuring a fixed sidebar, summary stat cards, and a sortable data table. Built for managing users, orders, and metrics.",
    category: "Application",
    tags: ["sidebar", "table", "charts", "dashboard"],
    thumbnail: "/plate_green.png",
    thumbnailColor: "bg-emerald-500",
    demoUrl: "https://example.vercel.app",
  },
  {
    slug: "portfolio",
    name: "Portfolio",
    description:
      "A clean personal showcase to display projects, skills, and contact details. Designed for designers, developers, and creatives who want to stand out.",
    category: "Personal",
    tags: ["gallery", "about", "minimal", "creative"],
    thumbnail: "/plate_orange.png",
    thumbnailColor: "bg-orange-500",
    demoUrl: "https://example.vercel.app",
  },
  {
    slug: "saas-pricing-page",
    name: "SaaS Pricing Page",
    description:
      "A three-tier pricing layout with feature comparisons, a highlighted recommended plan, and FAQs. Ideal for subscription products and SaaS businesses.",
    category: "Marketing",
    tags: ["pricing", "tiers", "saas", "comparison"],
    thumbnail: "/plate_red.png",
    thumbnailColor: "bg-rose-500",
    demoUrl: "https://example.vercel.app",
  }
]

export function getTemplate(slug: string): Template | undefined {
  return templates.find((t) => t.slug === slug)
}

export function getCategories(): string[] {
  return Array.from(new Set(templates.map((t) => t.category)))
}
