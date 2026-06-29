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
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="border-b border-border bg-background relative">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
              <Link href="/" className="flex items-center gap-2 font-semibold">
                <LayoutGrid className="size-5 text-primary" aria-hidden="true" />
                <span>Template Catalog</span>
              </Link>
              <nav className="flex items-center gap-4 text-sm text-muted-foreground">
                <Link href="/" className="transition-colors hover:text-foreground">
                  Browse
                </Link>
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  Docs
                </a>
                <ThemeToggle />
              </nav>
            </div>
            {/* Header Maiolica Border */}
            <div className="h-4 sm:h-6 w-full" style={{ backgroundImage: 'url("/maiolica.png")', backgroundSize: 'contain', backgroundRepeat: 'repeat-x', backgroundPosition: 'center' }}></div>
          </header>
          
          <div className="flex-1 relative z-10 w-full overflow-hidden">
            {children}
            {/* Decorative Lions */}
            <div className="absolute bottom-0 left-0 -z-10 opacity-50 pointer-events-none">
              <img src="/lion.png" alt="" className="w-64 sm:w-80 md:w-96 lg:w-[450px] h-auto scale-x-[-1]" />
            </div>
            <div className="absolute bottom-0 right-0 -z-10 opacity-50 pointer-events-none">
              <img src="/lion.png" alt="" className="w-64 sm:w-80 md:w-96 lg:w-[450px] h-auto" />
            </div>
          </div>

          <footer className="mt-auto relative z-10">
            {/* Maiolica Border Ribbon */}
            <div className="h-4 sm:h-6 w-full" style={{ backgroundImage: 'url("/maiolica.png")', backgroundSize: 'contain', backgroundRepeat: 'repeat-x', backgroundPosition: 'center' }}></div>
            {/* Footer Content */}
            <div className="bg-[#0f3b7d] py-6 text-center text-white/90 text-sm font-medium tracking-wide">
              Copyright &copy; 2026 Template La Bottega del Web
            </div>
          </footer>
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
