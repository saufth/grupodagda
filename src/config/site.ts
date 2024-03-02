import { type Author } from 'next/dist/lib/metadata/types/metadata-types'
import { type SiteConfig, type MainNavItem } from '@/types'

export const author: Author = {
  name: 'saufth',
  url: 'https://github.com/saufth'
}

export const siteNav: MainNavItem[] = [
  {
    title: 'Nuestras soluciones',
    href: '/soluciones'
  },
  {
    title: 'Acerca de nosotros',
    href: '/nosotros'
  },
  {
    title: 'Nuestra razón de ser',
    href: '/razon-de-ser'
  },
  {
    title: 'Pongamonos en contacto',
    href: '/contacto'
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
      title: 'Página de inicio',
      href: '/'
    },
    ...siteNav
  ]
}
