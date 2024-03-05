import React from 'react'
import BackgroundSmoke from '@/components/background-smoke'
import SiteFooter from '@/components/layouts/site-footer'
import SiteHeader from '@/components/layouts/site-header'

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
