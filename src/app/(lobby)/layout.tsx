import React from 'react'
import dynamic from 'next/dynamic'
import SiteFooter from '@/components/layouts/site-footer'
import SiteHeader from '@/components/layouts/site-header'
import { Icons } from '@/components/icons'

const BackgroundSmoke = dynamic(() => import('@/components/background-smoke'), {
  ssr: false
})

const Loading = () => (
  <div className='absolut inset-0 bg-black grid place-content-center'>
    <Icons.Logomark className='w-16 h-16 m-auto fill-accent' />
  </div>
)

export default async function LobbyLayout ({ children }: React.PropsWithChildren) {
  return (
    <React.Suspense fallback={<Loading />}>
      <BackgroundSmoke>
        <SiteHeader />
        <main>
          {children}
        </main>
        <SiteFooter />
      </BackgroundSmoke>
    </React.Suspense>
  )
}
