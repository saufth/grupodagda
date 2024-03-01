import { Yantramanav as FontSans, Montserrat_Alternates as FonHeader } from 'next/font/google'

export const fontSans = FontSans({
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap'
})

export const fontHeader = FonHeader({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-header',
  subsets: ['latin'],
  display: 'swap'
})
