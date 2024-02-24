import Image from 'next/image'
import { Link } from '@/components/ui/link'
import { Icons } from '@/components/icons'
import { cn } from '@/lib/utils'
import { services } from '@/config/services'
import { businessModels, siteConfig } from '@/config/site'

const businessModelIcons = [
  () => (<Icons.RehsokLogomark className='w-12 fill-background' />),
  () => (<Icons.EmahLogomark className='w-[50px] fill-background' />),
  () => (<Icons.KeyperspotLogomark className='w-[46px] fill-background' />),
  () => (<Icons.TaxoLogomark className='w-10 fill-background' />),
  () => (<Icons.SerciusLogomark className='w-[42px] fill-background' />),
  () => (<Icons.TechgeeksLogomark className='w-14 fill-background' />)
]

const preparedBusinesModeles = businessModels.map((model, index) => (
  {
    ...model,
    Icon: (businessModelIcons[index] || (() => <Icons.ImageOff className='w-12 h-auto' />))
  }))

export default function IndexPage () {
  return (
    <>
      <section className='h-[100dvh] min-h-[500xp] lg:min-h-[600px] max-h-[1320px] -mt-[70px] lg:-mt-[158px] pt-[70px] lg:pt-[158px] relative bg-gradient-to-tr from-black via-black/90 to-black/90'>
        <div className='h-full relative z-10 flex flex-col justify-center border-'>
          <div className='container relative z-10 2xl:pb-40'>
            <div className='max-w-xs sm:max-w-xl xl:max-w-5xl mx-auto text-center'>
              <h1>
                <span className='f-display-1 font-header font-extrabold text-balance text-gradient'>
                  {siteConfig.slogan}
                </span>
              </h1>
            </div>
            <div className='w-full flex items-center justify-center gap-gutter mt-spacing-7'>
              {preparedBusinesModeles.map((model, key) => (
                <Link
                  key={key}
                  href={model.url}
                  target='_blank'
                  rel='noreferrer'
                  variant='ghost'
                  size='icon'
                  className='lg:w-24 lg:h-24 p-0 lg:p-0 grid place-content-center border rounded-2xl'
                >
                  <model.Icon />
                  <span className='sr-only'>{model.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id='nosotros' className='border-t'>
        <div className='container pb-gutter pt-spacing-7 md:py-spacing-7'>
          <div className='cols-container pt-spacing-3'>
            <div className='w-6-cols md:w-4-cols lg:w-6-cols'>
              <h2 className='f-heading-1 font-serif md:pr-9 lg:pr-11'>
                Lorem ipsum dolor sit
              </h2>
            </div>
            <div className='w-6-cols md:w-4-cols lg:w-6-cols mt-4 md:mt-0'>
              <p className='f-subhead-1'>
                Lorem ipsun dolor sit amet, consectetur adipiscing elit. Nulla quam velit ipsun dolor
                sit amet, consectetur adipiscing elit. Nulla quam velit ipsun dolor sit amet.
              </p>
            </div>
          </div>
          <div className='mt-spacing-9 space-y-spacing-7'>
            {services.map((serviceItem, key) => (
              <article className='cols-container items-center odd:flex-row-reverse' key={key}>
                <div className={cn('w-6-cols md:w-4-cols lg:w-5-cols h-full', (key % 2 === 0) ? 'pl-12' : 'pr-12')}>
                  <h3 className='f-heading-1 font-header text-balance'>
                    {serviceItem.title}
                  </h3>
                  <p className='mt-spacing-4 f-subhead-2 text-muted-foreground text-balance'>
                    {serviceItem.description}
                  </p>
                </div>
                <div className='w-6-cols md:w-4-cols lg:w-7-cols mt-gutter md:mt-0'>
                  <Image
                    src={serviceItem.image.src}
                    alt={serviceItem.image.alt}
                    width={serviceItem.image.width}
                    height={serviceItem.image.height}
                    sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
                    loading='lazy'
                    className='w-full'
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
