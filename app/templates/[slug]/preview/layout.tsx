import type { ReactNode } from "react"

/**
 * Isolated preview layout.
 * Renders the template full-screen with no site header or footer so the
 * mockup is shown clean. It covers the root layout's chrome via a fixed,
 * full-viewport container.
 */
export default function PreviewLayout({ children }: { children: ReactNode }) {
  return <div className="fixed inset-0 z-50 overflow-auto bg-background">{children}</div>
}
