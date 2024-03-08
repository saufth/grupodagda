import React from 'react'
import { type Metadata, type Viewport } from 'next'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import ThemeProvider from '@/components/layouts/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import GoogleSearchScript from '@/components/layouts/google-seacrch-script'
import { cn } from '@/lib/utils'
import { fontSans, fontHeader } from '@/lib/fonts'
import { siteConfig } from '@/config/site'
import { slogan, services } from '@/config/organization'
import '@/styles/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} ⚊ ${slogan}`,
    template: `${siteConfig.name} ⚊ %s`
  },
  description: siteConfig.description,
  keywords: [
    siteConfig.name,
    ...services.map(({ name }) => name)
  ],
  authors: siteConfig.author,
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  applicationName: siteConfig.name,
  generator: 'Next.js',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  userScalable: true,
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#000000' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ],
  colorScheme: 'normal'
}

export default function RootLayout ({ children }: React.PropsWithChildren) {
  return (
    <html
      lang='es'
      suppressHydrationWarning
      className={cn(
        fontSans.variable, fontHeader.variable,
        'font-sans antialiased !scroll-smooth select-none'
      )}
    >
      <body className='bg-background min-h-screen'>
        <ThemeProvider attribute='class' defaultTheme='light' forcedTheme='light'>
          {children}
          <Toaster />
          <TailwindIndicator />
        </ThemeProvider>
        <GoogleSearchScript />
      </body>
    </html>
  )
}
