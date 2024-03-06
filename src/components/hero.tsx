import React from 'react'
import NextLink from 'next/link'
import { Icons } from '@/components/icons'
import { cn } from '@/lib/utils'
import { services } from '@/config/organization'
import { siteConfig } from '@/config/site'

const iconsBaseStyle = 'h-auto group-hover:scale-110 transition-transform duration-300'

interface BusinessIconsProps { className?: string }

const businessModelIcons = [
  ({ className } : BusinessIconsProps) => (<Icons.RehsokLogomark className={cn('w-[34px] sm:w-10 xl:w-[50px] fill-taxo-400', iconsBaseStyle, className)} />),
  ({ className } : BusinessIconsProps) => (<Icons.EmahLogomark className={cn('w-[38px] sm:w-11 xl:w-[52px] fill-emah', iconsBaseStyle, className)} />),
  ({ className } : BusinessIconsProps) => (<Icons.KeyperspotLogomark className={cn('w-[34px] sm:w-10 xl:w-12 fill-keyperspot', iconsBaseStyle, className)} />),
  ({ className } : BusinessIconsProps) => (<Icons.TaxoLogomark className={cn('w-8 sm:w-10 xl:w-11 fill-taxo', iconsBaseStyle, className)} />),
  ({ className } : BusinessIconsProps) => (<Icons.SerciusLogomark className={cn('w-8 sm:w-10 xl:w-11 fill-taxo-400', iconsBaseStyle, className)} />),
  ({ className } : BusinessIconsProps) => (<Icons.TechgeeksLogomark className={cn('w-11 sm:w-[52px] xl:w-[58px] fill-techgeeks', iconsBaseStyle, className)} />)
]

export const businesModeles = services.map((model, index) => ({
  ...model,
  Icon: (businessModelIcons[index] || (() => <Icons.ImageOff className='w-9 h-auto' />))
}))

interface HeroProps {
  title: string
}

export default function Hero ({ title }: HeroProps) {
  return (
    <section className='pt-spacing-8 pb-spacing-9'>
      <div className='h-full relative z-10 flex flex-col justify-center'>
        <div className='container'>
          <div className='max-w-[350px] sm:max-w-xl xl:max-w-4xl mx-auto text-center'>
            <NextLink
              href='/'
              aria-label={`Página principal de ${siteConfig.name}`}
            >
              <Icons.Logotype className='w-auto h-16 mx-auto sm:h-20 xl:h-[88px] fill-accent stroke-accent [fill-opacity:0] animate-draw [stroke-dasharray:1300] [stroke-dashoffset:1300] [animation-delay:500ms]' />
              <span className='sr-only'>{siteConfig.name}</span>
            </NextLink>
            <h1 className='f-display-1 font-header font-extrabold text-balance uppercase mt-spacing-6 opacity-0 animate-show [animation-delay:750ms]'>
              <span className='text-gradient'>
                {title}
              </span>
            </h1>
          </div>
          <div className='mt-spacing-6 opacity-0 animate-show [animation-delay:1s]'>
            <ul className='max-w-80 sm:max-w-full mx-auto sm:mx-0 flex flex-wrap justify-center gap-gutter'>
              {businesModeles.map((model, key) => (
                <li key={key}>
                  <NextLink
                    href={model.url}
                    target='_blank'
                    rel='noreferrer'
                    aria-label={`Página principal de ${model.name}, se abre en una nueva pestaña`}
                    className='group w-20 md:w-24 xl:w-28 h-20 md:h-24 xl:h-28 grid place-content-center border rounded-full bg-muted/60 hover:bg-muted backdrop-filter backdrop-saturate-200 transition-colors duration-300'
                  >
                    <model.Icon className='[&_*]:fill-foreground' />
                    <span className='sr-only'>{model.name}</span>
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
