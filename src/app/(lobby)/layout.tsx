import React from 'react'
import SiteFooter from '@/components/layouts/site-footer'
import SiteHeader from '@/components/layouts/site-header'
import BackgroundSmoke from '@/components/background-smoke'

export default async function LobbyLayout ({ children }: React.PropsWithChildren) {
  return (
    <BackgroundSmoke>
      <SiteHeader />
      <main>
        {children}
      </main>
      <SiteFooter />
    </BackgroundSmoke>
  )
}
