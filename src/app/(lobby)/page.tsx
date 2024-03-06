import NextLink from 'next/link'
import { ArrowTopRightIcon } from '@radix-ui/react-icons'
import { Link } from '@/components/ui/link'
import { Icons } from '@/components/icons'
import { cn } from '@/lib/utils'
import { services } from '@/config/organization'
import { siteConfig } from '@/config/site'

const iconsBaseStyle = 'h-auto group-hover:scale-110 transition-transform duration-300'

const businessModelIcons = [
  ({ className } : { className?: string }) => (<Icons.RehsokLogomark className={cn('w-[34px] sm:w-10 xl:w-[50px] fill-rehsok', iconsBaseStyle, className)} />),
  ({ className } : { className?: string }) => (<Icons.EmahLogomark className={cn('w-[38px] sm:w-11 xl:w-[52px] fill-emah', iconsBaseStyle, className)} />),
  ({ className } : { className?: string }) => (<Icons.KeyperspotLogomark className={cn('w-[34px] sm:w-10 xl:w-12 fill-keyperspot', iconsBaseStyle, className)} />),
  ({ className } : { className?: string }) => (<Icons.TaxoLogomark className={cn('w-8 sm:w-10 xl:w-11 fill-taxo', iconsBaseStyle, className)} />),
  ({ className } : { className?: string }) => (<Icons.SerciusLogomark className={cn('w-8 sm:w-10 xl:w-11 fill-rehsok', iconsBaseStyle, className)} />),
  ({ className } : { className?: string }) => (<Icons.TechgeeksLogomark className={cn('w-11 sm:w-[52px] xl:w-[58px] fill-techgeeks', iconsBaseStyle, className)} />)
]

const businesModeles = services.map((model, index) => ({
  ...model,
  Icon: (businessModelIcons[index] || (() => <Icons.ImageOff className='w-9 h-auto' />))
}))

export default function IndexPage () {
  return (
    <>
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
                  {siteConfig.description}
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
                      className='group w-20 md:w-24 xl:w-28 h-20 md:h-24 xl:h-28 grid place-content-center border rounded-full bg-accent/10 hover:bg-accent/20 transition-colors duration-300'
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
      <section className='mt-spacing-7'>
        <div className='container'>
          <div className='grid place-content-center'>
            <h2 className='f-heading-1 font-header font-semibold text-balance text-center'>
              <span className='text-gradient'>
                Somos un corporativo que trabaja constantemente en innovar y perfeccionar los pilares
                fundamentales que toda empresa necesita para crecer y consolidarse con éxito
              </span>
            </h2>
            <Link
              href='/nosotros'
              variant='ghost'
              size='lg'
              aria-label={`Acerca de ${siteConfig.name}`}
              className='mt-spacing-5 mx-auto'
            >
              Acerca de nosotros
              <ArrowTopRightIcon className='w-auto h-4 lg:h-5 ml-2' />
            </Link>
          </div>
          <div className='pb-spacing-7'>
            {businesModeles.map((model, key) => (
              <article key={key} className='lg:cols-container lg:even:flex-row-reverse lg:items-center mt-spacing-9'>
                <div className={cn('lg:w-1/3-cols flex justify-center', key % 2 !== 0 ? 'lg:justify-end' : 'lg:justify-start')}>
                  <div className='w-32 lg:w-auto aspect-square bg-primary/10 border rounded-full flex justify-center items-center'>
                    <model.Icon className='w-1/2 sm:w-1/2 xl:w-1/2 h-auto' />
                  </div>
                </div>
                <div className={cn('w-full lg:w-2/3-cols mt-spacing-5 lg:mt-0', key % 2 === 0 ? '2xl:pl-8' : '2xl:pr-8')}>
                  <div className='text-center lg:text-left'>
                    <h3>
                      <span className='f-display-3 font-header font-semibold text-balance text-gradient'>
                        {model.name}
                      </span>
                    </h3>
                    <p className='mt-spacing-4 f-heading-2 text-balance'>
                      {model.description}
                    </p>
                  </div>
                  <Link
                    href={model.url}
                    target='_blank'
                    rel='noreferrer'
                    variant='ghost'
                    size='lg'
                    aria-label={`Página principal de ${model.name}, se abre en una nueva pestaña`}
                    className='mt-spacing-5 flex items-center gap-spacing-2 mx-auto lg:mx-0'
                  >
                    Visitar sitio
                    <ArrowTopRightIcon className='w-auto h-4 lg:h-[18px]' />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
