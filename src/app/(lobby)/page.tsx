// import Image from 'next/image'
import NextLink from 'next/link'
import { Icons } from '@/components/icons'
// import { cn } from '@/lib/utils'
// import { services } from '@/config/services'
import { businessModels } from '@/config/organization'
import { siteConfig } from '@/config/site'

const businessModelIcons = [
  () => (<Icons.RehsokLogomark className='w-9 sm:w-12 xl:w-16 h-auto fill-foreground group-hover:scale-110 transition-all duration-300' />),
  () => (<Icons.EmahLogomark className='w-9 sm:w-12 xl:w-16 h-auto fill-foreground group-hover:scale-110 transition-all duration-300' />),
  () => (<Icons.KeyperspotLogomark className='w-7 sm:w-11 xl:w-14 h-auto fill-foreground group-hover:scale-110 transition-all duration-300' />),
  () => (<Icons.TaxoLogomark className='w-8 sm:w-10 xl:w-14 h-auto [&_*]:fill-foreground group-hover:scale-110 transition-all duration-300' />),
  () => (<Icons.SerciusLogomark className='w-8 sm:w-10 xl:w-14 h-auto fill-foreground group-hover:scale-110 transition-all duration-300' />),
  () => (<Icons.TechgeeksLogomark className='w-10 sm:w-14 xl:w-[74px] h-auto fill-foreground group-hover:scale-110 transition-all duration-300' />)
]

const preparedBusinesModeles = businessModels.map((model, index) => ({
  ...model,
  Icon: (businessModelIcons[index] || (() => <Icons.ImageOff className='w-12 h-auto' />))
}))
export default function IndexPage () {
  return (
    <>
      <section className='h-[100dvh] min-h-[500xp] lg:min-h-[600px] max-h-[1320px]'>
        <div className='h-full relative z-10 flex flex-col justify-center'>
          <div className='container pb-20 lg:pb-24 xl:pb-28'>
            <div className='max-w-[350px] sm:max-w-xl xl:max-w-4xl mx-auto text-center'>
              <h1 className='f-display-1 font-header font-extrabold text-balance uppercase'>
                <span className='text-gradient'>
                  {siteConfig.slogan}
                </span>
              </h1>
            </div>
            <div className='max-w-[270px] sm:max-w-2xl xl:max-w-4xl mx-auto'>
              <ul className='cols-container gap-y-gutter mt-spacing-7'>
                {preparedBusinesModeles.map((model, key) => (
                  <li key={key} className='w-2-cols sm:w-1/6-cols lg:w-2-cols'>
                    <NextLink
                      href={model.url}
                      target='_blank'
                      rel='noreferrer'
                      className='group w-20 sm:w-full h-20 sm:h-[88px] md:h-24 xl:h-32 grid place-content-center border rounded-sm bg-accent/10 hover:bg-accent/20 transition-colors duration-300'
                    >
                      <model.Icon />
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
        <div className='container py-spacing-7 border-y-2 border-zinc-200'>
          <h2 className='f-heading-2 font-header font-semibold text-balance text-center'>
            <span className='text-gradient'>
              Somos un corporativo que trabaja constantemente en innovar y perfeccionar los pilares fundamentales que toda empresa necesita para crecer y consolidarse con éxito.
            </span>
          </h2>
          {/* <div className='cols-container pt-spacing-3'>
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
          </div> */}
          {/* <div className='mt-spacing-9 space-y-spacing-7'>
            {services.map((serviceItem, key) => (
              <article className='cols-container items-center odd:flex-row-reverse' key={key}>
                <div
                  className={cn(
                    'w-6-cols md:w-4-cols lg:w-5-cols h-full',
                    (key % 2 === 0) ? 'pl-12' : 'pr-12'
                  )}
                >
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
          </div> */}
        </div>
      </section>
    </>
  )
}
