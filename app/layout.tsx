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
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-sky-400/20 dark:bg-sky-500/20 blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-amber-400/15 dark:bg-amber-500/15 blur-[120px]" />
          </div>

          <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/60 backdrop-blur-xl transition-all">
            <div className="mx-auto flex h-14 md:h-16 max-w-7xl items-center justify-between px-4 md:px-6">
              <Link href="/" className="flex items-center gap-2 md:gap-3 group">
                <div className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-lg bg-sky-100 text-sky-600 dark:bg-sky-900 dark:text-sky-300 group-hover:bg-amber-400 group-hover:text-amber-950 transition-colors">
                  <LayoutGrid className="size-3.5 md:size-4" aria-hidden="true" />
                </div>
                <span className="font-bold tracking-tight text-base md:text-lg group-hover:text-amber-500 transition-colors hidden sm:block">La Bottega del Web</span>
                <span className="font-bold tracking-tight text-base sm:hidden group-hover:text-amber-500 transition-colors">LBDW</span>
              </Link>
              <nav className="flex items-center gap-3 md:gap-6 text-xs md:text-sm font-medium text-muted-foreground">
                <Link href="/" className="transition-colors hover:text-amber-500">
                  Catalogo
                </Link>
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-amber-500 hidden sm:block"
                >
                  Documentazione
                </a>
                <div className="pl-3 md:pl-4 border-l border-border/50">
                  <ThemeToggle />
                </div>
              </nav>
            </div>
            {/* Elegant Gradient Accent Line */}
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-50" />
          </header>
          
          <div className="flex-1 w-full flex flex-col relative z-10 overflow-hidden">
            {children}
            
            {/* Elegant Maiolica Lions (More Visible) */}
            <div className="absolute bottom-0 left-0 -z-10 opacity-30 dark:opacity-25 pointer-events-none transition-opacity hidden md:block">
              <img src="/lion.png" alt="" className="w-64 sm:w-80 md:w-96 lg:w-[500px] h-auto scale-x-[-1]" />
            </div>
            <div className="absolute bottom-0 right-0 -z-10 opacity-30 dark:opacity-25 pointer-events-none transition-opacity">
              <img src="/lion.png" alt="" className="w-48 sm:w-80 md:w-96 lg:w-[500px] h-auto" />
            </div>
          </div>

          <footer className="mt-auto border-t border-border/40 bg-card/30 backdrop-blur-sm relative">
            {/* Subtle Maiolica Ribbon Border */}
            <div className="absolute top-0 left-0 w-full h-1.5 opacity-90" style={{ backgroundImage: 'url("/maiolica.png")', backgroundSize: 'contain', backgroundRepeat: 'repeat-x', backgroundPosition: 'center' }}></div>
            
            <div className="mx-auto max-w-7xl px-4 md:px-6 py-6 md:py-8 flex flex-col items-center md:flex-row md:justify-between gap-3 md:gap-4 mt-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2">
                <span className="font-bold text-primary">La Bottega del Web</span>
                <span className="text-muted-foreground text-xs md:text-sm">© 2026. Tutti i diritti riservati.</span>
              </div>
              <div className="text-xs md:text-sm text-muted-foreground flex items-center gap-2">
                <span>Design ispirato all'eleganza della Maiolica Laertina</span>
              </div>
            </div>
          </footer>
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
