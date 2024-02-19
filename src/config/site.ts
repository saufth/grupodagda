import { type Author } from 'next/dist/lib/metadata/types/metadata-types'
import { type MainNavItem } from '@/types'

interface SiteConfig {
  name: string,
  description: string,
  slogan?: string,
  url: URL | string,
  author: Author,
  mainNav: MainNavItem[]
}

export const author: Author = {
  name: 'saufth',
  url: 'https://github.com/saufth'
}

export const siteNav: MainNavItem[] = [
  {
    title: 'Acerca de nosotros',
    href: '/nosotros'
  },
  {
    title: 'Ponte en contacto',
    href: '/contacto'
  }
]

export const domain = 'grupodagda.com'
export const contactEmail = `contacto@${domain}`

export const siteConfig: SiteConfig = {
  name: 'Grupo DAGDA',
  description: 'Lorem ipsun dolor sit amet espectatu ',
  slogan: 'Lorem ipsun dolor sit amet, consectetur adipiscing elit. Nulla quam velit ipsun dolor sit amet, consectetur adipiscing elit. Nulla quam velit ipsun dolor sit amet',
  url: `https://${domain}`,
  author,
  mainNav: [
    {
      title: 'Inicio',
      href: '/'
    },
    ...siteNav
  ]
}
