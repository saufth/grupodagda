'use client'
import React from 'react'
import NextLink from 'next/link'
import { CallToAction } from '../call-to-action'
import { Icons } from '@/components/icons'
import { Link } from '@/components/ui/link'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { cn } from '@/lib/utils'
import { contactEmail, siteConfig, siteNav } from '@/config/site'

export default function SiteHeader () {
  const { scrollY } = useScroll()
  const [isOnTop, setIsOnTop] = React.useState(true)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  useMotionValueEvent(scrollY, 'change', (latestScrollY) => {
    setIsOnTop(latestScrollY < 1)
  })

  return (
    <>
      <header
        className={cn(
          'w-full sticky top-0 left-0 z-40 transition-colors duration-500 bg-background border-b',
          isOnTop && '',
          isMenuOpen && 'bg-transparent'
        )}
      >
        <nav className='relative' aria-label={`${siteConfig.name} Directory`}>
          <div className='container'>
            <div className='w-full h-[70px] lg:h-[90px] flex justify-between items-center'>
              <NextLink href='/' onClick={closeMenu}>
                <Icons.Logoname className={cn('w-full h-12 lg:h-[60px] transition-colors', isMenuOpen && '[&_*]:fill-accent')} />
                <span className='sr-only'>{siteConfig.name} home</span>
              </NextLink>
              <div className='h-full flex items-center gap-x-5'>
                <div className='h-full hidden lg:flex items-center gap-x-5'>
                  <ul className='h-full flex items-center gap-x-5'>
                    {siteNav.map((navItem, key) => (
                      <li key={key} className='last:hidden'>
                        <Link href={navItem.href} className='hidden lg:flex items-center gap-x-2 lg:text-lg font-medium' variant='link'>
                          {navItem.title}
                          <Icons.ArrowUpRight className='btn-icon w-5 h-5 fill-foreground' />
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <CallToAction size='lg' className='hidden lg:flex' />
                </div>
                <div className='block lg:hidden w-6 h-[15px]'>
                  <div className='w-full h-full relative' onClick={toggleMenu}>
                    <span className={cn('w-full h-0.5 bg-primary absolute top-0 right-0 transition-all duration-300', isMenuOpen && 'inset-0 m-auto rotate-45 bg-accent')} />
                    <span className={cn('w-full h-0.5 bg-primary absolute inset-0 m-auto transition-all duration-300', isMenuOpen && 'opacity-0')} />
                    <span className={cn('w-full h-0.5 bg-primary absolute bottom-0 right-0 transition-all duration-300', isMenuOpen && 'inset-0 m-auto -rotate-45 bg-accent')} />
                    <span className='sr-only'>Toggle menu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div
        className={cn(
          'w-full h-0 bg-gradient-to-tl from-black/95 via-black/95 to-primary/90 backdrop-filter backdrop-blur-md fixed flex flex-col justify-between top-0 left-0 z-30 overflow-hidden transition-[height] duration-500',
          isMenuOpen && 'h-[100dvh]'
        )}
      >
        <ul className='container mt-spacing-7'>
          {siteNav.map((navItem, key) => (
            <li key={key} className='border-b first:border-t-0'>
              <Link
                className='flex justify-between text-base text-secondary-foreground rounded-none w-full px-0 py-2'
                href={navItem.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {navItem.title}
                <Icons.ArrowRight className='w-4 h-4 fill-secondary-foreground' />
              </Link>
            </li>
          ))}
        </ul>
        <div className='container pb-8 flex justify-between items-end'>
          <div>
            <div className='text-sm sm:text-base text-secondary-foreground/80'>
              Correo electrónico
            </div>
            <Link className='px-0 text-lg text-secondary-foreground' href={`mailto:${contactEmail}`} onClick={() => setIsMenuOpen(false)}>
              {contactEmail}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
