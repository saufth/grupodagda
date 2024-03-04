import NextLink from 'next/link'
import { Icons } from '@/components/icons'
import { history, services, values } from '@/config/organization'
import { cn } from '@/lib/utils'

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

export default function AboutPage () {
  return (
    <>
      <section className='pt-spacing-7 pb-spacing-9'>
        <div className='h-full relative z-10 flex flex-col justify-center'>
          <div className='container'>
            <div className='max-w-[350px] sm:max-w-xl xl:max-w-4xl mx-auto text-center'>
              <NextLink href='/'>
                <Icons.Logotype className='w-auto h-16 mx-auto sm:h-20 xl:h-[88px] fill-accent stroke-accent [fill-opacity:0] animate-draw [stroke-dasharray:1300] [stroke-dashoffset:1300]' />
              </NextLink>
              <h1 className='f-heading-1 font-header font-extrabold text-balance mt-spacing-6'>
                <span className='text-gradient'>
                  El éxito a corto, mediano y largo plazo de cualquier empresa, no
                  depende de un solo aspecto, sino de la sincronización de muchos
                </span>
              </h1>
            </div>
            <div className='mt-spacing-6'>
              <ul className='max-w-80 sm:max-w-full mx-auto sm:mx-0 flex flex-wrap justify-center gap-gutter'>
                {businesModeles.map((model, key) => (
                  <li key={key}>
                    <NextLink
                      href={model.url}
                      target='_blank'
                      rel='noreferrer'
                      className='group w-[70px] md:w-20 xl:w-24 h-[70px] md:h-20 xl:h-24 grid place-content-center border rounded-sm bg-accent/10 hover:bg-accent/20 transition-colors duration-300'
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
          <div className='py-spacing-9 border-y border-zinc-400 grid place-content-center h-3xl md:h-5xl xl:h-4xl 2xl:h-5xl'>
            <h2 className='f-heading-1 font-header font-semibold text-balance text-center'>
              <span className='text-gradient'>
                Aquí te presentamos los más importantes para nosotros, mismos que forman parte de nuestro
                ADN y que son la clave en la generación de soluciones de valor para nuestros clientes
              </span>
            </h2>
          </div>
          <div>
            {values.map((item, key) => (
              <article className='border-b border-zinc-400' key={key}>
                <div className='grid place-content-center h-3xl md:h-5xl xl:h-4xl 2xl:h-5xl'>
                  <div className='max-w-4xl mx-auto text-center'>
                    <h3>
                      <span className='f-heading-1 font-header font-semibold text-balance text-gradient'>
                        {item.title}
                      </span>
                    </h3>
                    {typeof item.description === 'string'
                      ? (
                        <p className='mt-spacing-4 f-heading-3 text-balance'>
                          {item.description}
                        </p>
                        )
                      : item.description.map((paragraph, key) => (
                        <div key={key} className='mt-spacing-4'>
                          <p className='mt-spacing-4 f-heading-3 text-balance'>
                            {paragraph}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className='container grid place-content-center py-spacing-9 border-b border-zinc-400'>
          <h2>
            <span className='f-heading-1 font-header font-semibold text-balance text-gradient'>
              Nuestra razón de ser
            </span>
          </h2>
          <div>
            {history.map((item, key) => (
              <p key={key} className='mt-spacing-4 f-heading-3 text-balance'>
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
