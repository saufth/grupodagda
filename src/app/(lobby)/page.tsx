import { ArrowTopRightIcon } from '@radix-ui/react-icons'
import { Link } from '@/components/ui/link'
import Hero, { businesModeles } from '@/components/hero'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'

export default function IndexPage () {
  return (
    <>
      <Hero title={siteConfig.description} />
      <section>
        <div className='container'>
          <div className='grid place-content-center opacity-0 animate-show [animation-delay:1s]'>
            <h2 className='sr-only'>Nuestras soluciones</h2>
            <p className='f-heading-1 font-header font-semibold text-balance text-center'>
              <span className='text-gradient'>
                Somos un corporativo que trabaja constantemente en innovar y perfeccionar los pilares
                fundamentales que toda empresa necesita para crecer y consolidarse con éxito
              </span>
            </p>
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
                  <div className='w-32 lg:w-auto aspect-square bg-muted/20 border rounded-full flex justify-center items-center'>
                    <model.Icon className='w-1/2 sm:w-1/2 xl:w-1/2 h-auto' />
                  </div>
                </div>
                <div className={cn('w-full lg:w-2/3-cols mt-spacing-5 lg:mt-0', key % 2 === 0 ? 'lg:pl-8 2xl:pl-20' : '2xl:pr-8')}>
                  <div className='text-center lg:text-left'>
                    <h3>
                      <span className='f-display-3 font-header font-bold text-balance text-gradient'>
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
