import Image from 'next/image'
import BackgroundVideo from '@/components/background-video'
import { CallToAction, CallToAbout } from '@/components/call-to-action'
import { services } from '@/config/services'
import { siteConfig } from '@/config/site'

export default function IndexPage () {
  return (
    <>
      <section className='h-[100dvh] min-h-[500xp] lg:min-h-[600px] max-h-[1320px] -mt-[70px] lg:-mt-[90px] pt-[70px] lg:pt-[90px]'>
        <div className='h-full relative z-10 flex flex-col justify-center border-b 2xl:border-b-0'>
          <div className='container relative z-10'>
            <div className='max-w-xs sm:max-w-md xl:max-w-lg mx-auto md:mx-0 2xl:pb-12 text-center md:text-left '>
              <h1>
                <span className='f-display-3 font-header font-semibold text-balance max-w-[322px] xs:max-w-none text-white md:text-gradient'>
                  {siteConfig.description}
                </span>
              </h1>
              <p className='mt-spacing-5'>
                <span className='f-subhead-2 font-medium text-balance text-white md:text-gradient'>
                  {siteConfig.slogan}.
                </span>
              </p>
              <div className='w-full mt-spacing-6 flex flex-col md:flex-row gap-4'>
                <CallToAction variant='ghost' />
                <CallToAbout variant='secondary' />
              </div>
            </div>
          </div>
          <div className='absolute inset-0'>
            <div className='w-full md:w-3/5 2xl:w-1/2 h-full absolute top-0 right-0 overflow-hidden md:border-l'>
              <BackgroundVideo src='/video/home-hero.mp4' />
            </div>
            <div className='hidden md:block w-0 md:w-2/5 2xl:w-1/2 h-full absolute top-0 left-0 bg-gradient-to-tr from-primary via-primary/80 to-primary/60' />
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
                <div className='w-6-cols md:w-4-cols lg:w-5-cols h-full odd:sm:pl-12 even:sm:pr-12'>
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
