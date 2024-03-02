// import Image from 'next/image'
import NextLink from 'next/link'
import { Icons } from '@/components/icons'
// import { cn } from '@/lib/utils'
// import { services } from '@/config/services'
import { services } from '@/config/organization'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { Link } from '@/components/ui/link'

const iconsBaseStyle = 'h-auto group-hover:scale-110 transition-all duration-300'

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
      <section className='full-screen'>
        <div className='h-full relative z-10 flex flex-col justify-center'>
          <div className='container'>
            <div className='max-w-[350px] sm:max-w-xl xl:max-w-4xl mx-auto text-center'>
              <Icons.Logotype className='w-auto h-16 mx-auto sm:h-20 xl:h-[88px] fill-accent stroke-accent [fill-opacity:0] animate-draw [stroke-dasharray:1300] [stroke-dashoffset:1300]' />
              <h1 className='f-display-1 font-header font-extrabold text-balance uppercase mt-spacing-6'>
                <span className='text-gradient'>
                  {siteConfig.description}
                </span>
              </h1>
            </div>
            <div className='max-w-60 sm:max-w-xl xl:max-w-2xl mx-auto mt-spacing-6'>
              <ul className='cols-container gap-y-gutter'>
                {businesModeles.map((model, key) => (
                  <li key={key} className='w-2-cols sm:w-1/6-cols lg:w-2-cols'>
                    <NextLink
                      href={model.url}
                      target='_blank'
                      rel='noreferrer'
                      className='group w-full sm:w-full h-[70px] sm:h-[88px] md:h-20 xl:h-24 grid place-content-center border rounded-sm bg-accent/10 hover:bg-accent/20 transition-colors duration-300'
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
      <section id='nosotros'>
        <div className='container'>
          <h2 className='f-heading-2 font-header font-semibold text-balance text-center py-spacing-7 border-y border-zinc-200'>
            <span className='text-gradient'>
              Somos un corporativo que trabaja constantemente en innovar y perfeccionar los pilares
              fundamentales que toda empresa necesita para crecer y consolidarse con éxito.
            </span>
          </h2>
          <div className=''>
            {businesModeles.map((model, key) => (
              <article className='border-b border-zinc-200' key={key}>
                <div
                  className={cn(
                    'full-screen grid place-content-center',
                    (key % 2 === 0) ? '' : ''
                  )}
                >
                  <model.Icon className='w-16 sm:w-24 xl:w-32 h-auto mx-auto' />
                  <div className='max-w-4xl mx-auto text-center mt-spacing-5'>
                    <h3 className='f-display-3 font-header font-semibold text-balance'>
                      {model.name}
                    </h3>
                    <p className='mt-spacing-4 f-heading-2 text-balance'>
                      {model.description}.
                    </p>
                  </div>
                  <Link
                    href={model.url}
                    target='_blank'
                    rel='noreferrer'
                    variant='ghost'
                    size='lg'
                    className='mx-auto mt-spacing-5'
                  >
                    Visitar sitio
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
