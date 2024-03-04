import { type Author } from 'next/dist/lib/metadata/types/metadata-types'
import { type SiteConfig, type MainNavItem } from '@/types'

export const author: Author = {
  name: 'saufth',
  url: 'https://github.com/saufth'
}

export const siteNav: MainNavItem[] = [
  {
    title: 'Acerca de nosotros',
    href: '/nosotros'
  }
]

export const domain = 'grupodagda.com'
export const contactEmail = `contacto@${domain}`

export const siteConfig: SiteConfig = {
  name: 'Grupo DAGDA',
  description: 'Impulsamos y consolidamos tu legado',
  url: `https://${domain}`,
  author,
  mainNav: [
    {
      title: 'Nuestras soluciones',
      href: '/'
    },
    ...siteNav
  ]
}
