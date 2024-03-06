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
        className='w-10 lg:w-14 h-10 lg:h-14 fixed right-gutter top-gutter z-40 transition-colors duration-300 bg-secondary/5 backdrop-filter backdrop-blur-md grid place-content-center border rounded-full opacity-0 animate-show [animation-delay:1s]'
        onClick={toggleMenu}
      >
        <div className='flex'>
          <div className='w-4 lg:w-5 h-3 lg:h-4 relative'>
            <span className={cn('w-full h-0.5 bg-foreground/80 absolute top-0 right-0 transition-transform duration-500', isMenuOpen && 'inset-0 m-auto rotate-[135deg]')} />
            <span className={cn('w-full h-0.5 bg-foreground/80 absolute inset-0 m-auto transition-transform duration-500', isMenuOpen && 'opacity-0')} />
            <span className={cn('w-full h-0.5 bg-foreground/80 absolute bottom-0 right-0 transition-transform duration-500', isMenuOpen && 'inset-0 m-auto -rotate-[135deg]')} />
            <span className='sr-only'>Toggle menu</span>
          </div>
        </div>
      </button>
      <header
        className={cn(
          'w-0 h-[100dvh] bg-muted/90 backdrop-filter backdrop-blur-md fixed flex flex-col justify-between top-0 right-0 z-30 overflow-hidden transition-[width] duration-500',
          isMenuOpen && 'w-full'
        )}
      >
        <div className='container h-full flex items-center'>
          <div className='w-full lg:cols-container flex-col md:flex-row gap-y-7 md:gap-y-0 space-y-spacing-6 lg:space-y-0'>
            <div className='lg:w-1/3-cols'>
              <div className='text-lg lg:text-2xl font-medium text-muted-foreground'>
                {siteConfig.name}
              </div>
              <ul className='space-y-spacing-3 lg:space-y-spacing-4 mt-spacing3 lg:mt-spacing-4'>
                {services.map((item, key) => (
                  <li key={key}>
                    <Link
                      href={item.url}
                      target='_blank'
                      rel='noreferrer'
                      aria-label={`Página principal de ${item.name}, se abre en una nueva pestaña`}
                      onClick={toggleMenu}
                      className='text-xl lg:text-3xl text-white font-medium'
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <nav className='lg:w-1/3-cols' aria-label='Directorio'>
              <div className='text-lg lg:text-2xl font-medium text-muted-foreground'>
                Directorio
              </div>
              <ul className='space-y-spacing-3 lg:space-y-spacing-4 mt-spacing3 lg:mt-spacing-4'>
                {siteConfig.mainNav.map((item, key) => (
                  <li key={key}>
                    <Link
                      href={item.href}
                      onClick={toggleMenu}
                      aria-label={item.title}
                      className='text-xl lg:text-3xl text-white font-medium'
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className='lg:w-1/3-cols'>
              <div className='text-lg lg:text-2xl font-medium text-muted-foreground'>
                Correo electrónico
              </div>
              <Link
                href={`mailto:${contactEmail}`}
                target='_blank'
                rel='noreferrer'
                aria-label='Envia un mensaje con tu servicio de correo, se abre en una nueva pestaña'
                onClick={toggleMenu}
                className='text-xl lg:text-3xl text-white font-medium mt-spacing-3'
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
