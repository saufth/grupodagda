import { type Author } from 'next/dist/lib/metadata/types/metadata-types'
import { type NavItem, type MainNavItem } from '@/types'

interface SiteConfig {
  name: string,
  description: string,
  slogan?: string,
  url: URL | string,
  author: Author,
  mainNav: MainNavItem[]
}

type BusinessModelsConfig = Omit<SiteConfig, 'author' | 'mainNav'>

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

export const businessModels: BusinessModelsConfig[] = [
  {
    name: 'Rehsok',
    description: 'Creamos posibilidades para empresas orientadas a desarrollar un legado de progreso generacional.',
    url: 'https://rehsok.com'
  },
  {
    name: 'Emah',
    description: 'Impulsamos a emprendedores y empresarios a consolidar su modelo de negocio, ofreciendo productos intangibles de alto valor agregado para sus clientes',
    url: 'https://emah.mx'
  },
  {
    name: 'Keyperspot',
    description: 'Impulsamos el factor humano a través de soluciones tecnológicas, con el principal objetivo de transformarlo en un verdadero activo empresarial.',
    url: 'https://keyperspot.com'
  },
  {
    name: 'Taxo Contable',
    description: 'Negocios, contabilidad y finanzas',
    url: 'https://taxocontable.com'
  },
  {
    name: 'Sercius',
    description: 'Seguridad jurídica empresarial',
    url: 'https://sercius.mx'
  },
  {
    name: 'Techgeeks',
    description: 'Tecnología, control inteligente y seguridad',
    url: 'https://techgeeks.mx'
  }
]

export const domain = 'grupodagda.com'
export const contactEmail = `contacto@${domain}`

export const siteConfig: SiteConfig = {
  name: 'Grupo DAGDA',
  description: 'Lorem ipsun dolor sit amet espectatu',
  slogan: 'Posibilidades que generan valor',
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
