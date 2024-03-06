'use client'
import React from 'react'
import { Link } from '@/components/ui/link'
import { cn } from '@/lib/utils'
import { contactEmail, siteConfig } from '@/config/site'
import { services } from '@/config/organization'

export default function SiteHeader () {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <>
      <button
        className='w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 fixed right-gutter top-gutter z-40 transition-colors duration-300 bg-primary/10 backdrop-filter backdrop-blur-md grid place-content-center border rounded-full opacity-0 animate-show [animation-delay:1s]'
        onClick={toggleMenu}
      >
        <div className='flex'>
          <div className='w-[18px] sm:w-5 lg:w-[25px] h-3.5 sm:h-4 lg:h-[22px] relative'>
            <span className={cn('w-full h-0.5 bg-foreground/80 absolute top-0 right-0 transition-transform duration-500', isMenuOpen && 'inset-0 m-auto rotate-[135deg]')} />
            <span className={cn('w-full h-0.5 bg-foreground/80 absolute inset-0 m-auto transition-transform duration-500', isMenuOpen && 'opacity-0')} />
            <span className={cn('w-full h-0.5 bg-foreground/80 absolute bottom-0 right-0 transition-transform duration-500', isMenuOpen && 'inset-0 m-auto -rotate-[135deg]')} />
            <span className='sr-only'>Toggle menu</span>
          </div>
        </div>
      </button>
      <header
        className={cn(
          'w-full h-0 bg-black/60 backdrop-filter backdrop-blur-md fixed flex flex-col justify-between top-0 left-0 z-30 overflow-hidden transition-[height] duration-500',
          isMenuOpen && 'h-[100dvh]'
        )}
      >
        <div className='container'>
          <div className='lg:cols-container flex-col md:flex-row gap-y-7 md:gap-y-0 mt-spacing-7 lg:mt-spacing-9 space-y-spacing-6 lg:space-y-0'>
            <div className='lg:w-1/3-cols'>
              <div className='text-xl lg:text-2xl font-medium text-muted-foreground'>
                {siteConfig.name}
              </div>
              <ul className='space-y-spacing-3 mt-spacing-3'>
                {services.map((item, key) => (
                  <li key={key}>
                    <Link
                      href={item.url}
                      target='_blank'
                      rel='noreferrer'
                      aria-label={`Página principal de ${item.name}, se abre en una nueva pestaña`}
                      onClick={toggleMenu}
                      className='text-xl lg:text-2xl text-white'
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='lg:w-1/3-cols'>
              <div className='text-xl lg:text-2xl font-medium text-muted-foreground'>
                Directorio
              </div>
              <ul className='space-y-spacing-3 mt-spacing-3'>
                {siteConfig.mainNav.map((item, key) => (
                  <li key={key}>
                    <Link
                      href={item.href}
                      onClick={toggleMenu}
                      aria-label={item.title}
                      className='text-xl lg:text-2xl text-white'
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='lg:w-1/3-cols'>
              <div className='text-xl lg:text-2xl font-medium text-muted-foreground'>
                Correo electrónico
              </div>
              <Link
                href={`mailto:${contactEmail}`}
                target='_blank'
                rel='noreferrer'
                aria-label='Envia un mensaje con tu servicio de correo, se abre en una nueva pestaña'
                onClick={toggleMenu}
                className='text-xl lg:text-2xl text-white mt-spacing-3'
              >
                {contactEmail}
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
