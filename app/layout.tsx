import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Link from 'next/link'
import { LayoutGrid } from 'lucide-react'
import { ThemeProvider } from '@/components/theme-provider'
import { ThemeToggle } from '@/components/theme-toggle'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Template Catalog — Browse & Preview Website Templates',
  description:
    'Browse, filter, and preview a curated catalog of website templates including landing pages, dashboards, portfolios, and pricing pages.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 text-foreground selection:bg-primary/20">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Subtle Ambient Glow */}
          <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/5 blur-[120px]" />
          </div>

          <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/60 backdrop-blur-xl transition-all">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <LayoutGrid className="size-4" aria-hidden="true" />
                </div>
                <span className="font-bold tracking-tight text-lg">La Bottega del Web</span>
              </Link>
              <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
                <Link href="/" className="transition-colors hover:text-primary">
                  Catalogo
                </Link>
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  Documentazione
                </a>
                <div className="pl-4 border-l border-border/50">
                  <ThemeToggle />
                </div>
              </nav>
            </div>
            {/* Elegant Gradient Accent Line */}
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />
          </header>
          
          <div className="flex-1 w-full flex flex-col">
            {children}
          </div>

          <footer className="mt-auto border-t border-border/40 bg-card/30 backdrop-blur-sm">
            <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="font-bold text-primary">La Bottega del Web</span>
                <span className="text-muted-foreground text-sm">© 2026. Tutti i diritti riservati.</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Design ispirato all'eleganza della Maiolica Laertina.
              </div>
            </div>
          </footer>
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
