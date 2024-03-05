'use client'
import React from 'react'
import NextLink from 'next/link'
import { ArrowRightIcon } from '@radix-ui/react-icons'
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
          'w-full absolute top-0 left-0 z-40 transition-colors duration-300 bg-black/0 backdrop-filter backdrop-blur-md',
          isOnTop && 'backdrop-filter-none',
          isMenuOpen && 'backdrop-filter-none'
        )}
      >
        <nav className='relative' aria-label={`${siteConfig.name} Directory`}>
          <div className='full-container px-gutter'>
            <div
              className='flex justify-between items-center 2xl:pt-20'
            >
              <div className='xl:w-1/4' />
              <NextLink href='/' onClick={closeMenu}>
                <Icons.Logotype className='w-auto h-14 lg:h-[72px] xl:h-24 fill-accent stroke-accent [fill-opacity:0] animate-draw [stroke-dasharray:1300] [stroke-dashoffset:1300]' />
                <span className='sr-only'>{siteConfig.name} home</span>
              </NextLink>
              <div className='xl:w-1/4 flex justify-end'>
                <button className='w-6 lg:w-[25px] h-[18px] lg:h-[22px] relative mr-2 2xl:mt-0 [&>span]:shadow' onClick={toggleMenu}>
                  <span className={cn('w-full h-0.5 bg-foreground/80 absolute top-0 right-0 transition-[transform,background-color] duration-500', isMenuOpen && 'inset-0 m-auto rotate-[135deg] bg-accent')} />
                  <span className={cn('w-full h-0.5 bg-foreground/80 absolute inset-0 m-auto transition-[transform,background-color] duration-500', isMenuOpen && 'opacity-0')} />
                  <span className={cn('w-full h-0.5 bg-foreground/80 absolute bottom-0 right-0 transition-[transform,background-color] duration-500', isMenuOpen && 'inset-0 m-auto -rotate-[135deg] bg-accent')} />
                  <span className='sr-only'>Toggle menu</span>
                </button>
              </div>
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
          'w-full h-0 bg-gradient-to-tl from-black/95 via-black/95 to-primary/95 backdrop-filter backdrop-blur-md fixed flex flex-col justify-between top-0 left-0 z-30 overflow-hidden transition-[height] duration-500',
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
