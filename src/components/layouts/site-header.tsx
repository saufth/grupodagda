'use client'
import React from 'react'
import NextLink from 'next/link'
import { ArrowRightIcon } from '@radix-ui/react-icons'
// import { CallToAction } from '@/components/call-to-action'
import { Icons } from '@/components/icons'
import { Link } from '@/components/ui/link'
import { useScroll, useMotionValueEvent } from 'framer-motion'
import { cn } from '@/lib/utils'
import { contactEmail, siteConfig, siteNav } from '@/config/site'

export default function SiteHeader () {
  const [isOnTop, setIsOnTop] = React.useState(true)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const { scrollY } = useScroll()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  useMotionValueEvent(scrollY, 'change', (latestScrollY) => {
    setIsOnTop(latestScrollY < 1)
  })

  return (
    <>
      <header
        className={cn(
          'w-full sticky top-0 left-0 z-40 transition-all duration-300',
          isOnTop && '',
          isMenuOpen && 'bg-transparent'
        )}
      >
        <nav className='relative' aria-label={`${siteConfig.name} Directory`}>
          <div className='full-container'>
            <div className='w-full pt-16 pb-gutter flex justify-between'>
              <div className='xl:w-1/4'>
                <NextLink href='/' onClick={closeMenu}>
                  <Icons.Logotype className={cn('w-auto h-12 xl:h-[70px] transition-all duration-500 [&_*]:fill-accent', isMenuOpen && '[&_*]:fill-accent', isOnTop && '')} />
                  <span className='sr-only'>{siteConfig.name} home</span>
                </NextLink>
              </div>
              <button className='w-6 lg:w-[25px] h-5 lg:h-[22px] relative 2xl:mr-16 [&>span]:shadow' onClick={toggleMenu}>
                <span className={cn('w-full h-0.5 bg-background absolute top-0 right-0 transition-all duration-500', isMenuOpen && 'inset-0 m-auto rotate-[135deg] bg-accent')} />
                <span className={cn('w-full h-0.5 bg-background absolute inset-0 m-auto transition-all duration-500', isMenuOpen && 'opacity-0')} />
                <span className={cn('w-full h-0.5 bg-background absolute bottom-0 right-0 transition-all duration-500', isMenuOpen && 'inset-0 m-auto -rotate-[135deg] bg-accent')} />
                <span className='sr-only'>Toggle menu</span>
              </button>
              {/* <div className='h-full hidden xl:flex items-center gap-x-5'>
                <ul className='h-full flex items-center gap-x-5'>
                  {siteNav.map((navItem, key) => (
                    <li key={key} className='last:hidden'>
                      <Link href={navItem.href} className='xl:text-lg font-medium' variant='link'>
                        {navItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div> */}
              {/* <div className='xl:w-1/4 h-full flex items-center justify-end'>
                <CallToAction variant='outline' className='hidden xl:flex' />
              </div> */}
            </div>
          </div>
        </nav>
      </header>
      <div
        className={cn(
          'w-full h-0 bg-gradient-to-tl from-black/95 via-black/95 to-foreground/95 backdrop-filter backdrop-blur-md fixed flex flex-col justify-between top-0 left-0 z-30 overflow-hidden transition-[height] duration-500',
          isMenuOpen && 'h-[100dvh]'
        )}
      >
        <ul className='container mt-spacing-7'>
          {siteNav.map((navItem, key) => (
            <li key={key} className='border-b first:border-t-0'>
              <Link
                className='flex justify-between text-base text-secondary-foreground w-full px-0 py-2'
                href={navItem.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {navItem.title}
                <ArrowRightIcon className='w-4 h-4 [&_*]:fill-secondary-foreground' />
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
