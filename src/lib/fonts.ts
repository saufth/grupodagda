import { Yantramanav as FontSans, Proza_Libre as FonHeader } from 'next/font/google'

export const fontSans = FontSans({
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap'
})

export const fontHeader = FonHeader({
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-header',
  subsets: ['latin'],
  display: 'swap'
})
