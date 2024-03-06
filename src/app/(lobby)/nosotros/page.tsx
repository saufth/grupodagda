import NextLink from 'next/link'
import { Icons } from '@/components/icons'
import { history, services, culture } from '@/config/organization'
import { cn } from '@/lib/utils'
import { ArticleCard } from '@/components/cards/article-card'

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

export default function AboutPage () {
  return (
    <>
      <section className='pt-spacing-8 pb-spacing-9'>
        <div className='h-full relative z-10 flex flex-col justify-center'>
          <div className='container'>
            <div className='max-w-[350px] sm:max-w-xl xl:max-w-4xl mx-auto text-center'>
              <NextLink href='/'>
                <Icons.Logotype className='w-auto h-16 mx-auto sm:h-20 xl:h-[88px] fill-accent stroke-accent [fill-opacity:0] animate-draw [stroke-dasharray:1300] [stroke-dashoffset:1300] [animation-delay:500ms]' />
              </NextLink>
              <h1 className='sr-only'>{culture.title}</h1>
              <div className='f-display-1 font-header font-extrabold text-balance uppercase mt-spacing-6 opacity-0 animate-show [animation-delay:750ms]'>
                <span className='text-gradient'>
                  {culture.title}
                </span>
              </div>
            </div>
            <div className='mt-spacing-6 opacity-0 animate-show [animation-delay:1s]'>
              <ul className='max-w-80 sm:max-w-full mx-auto sm:mx-0 flex flex-wrap justify-center gap-gutter'>
                {businesModeles.map((model, key) => (
                  <li key={key}>
                    <NextLink
                      href={model.url}
                      target='_blank'
                      rel='noreferrer'
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
          <div className='max-w-5xl mx-auto text-center'>
            <h2 className='f-display-3 font-semibold font-header'>
              <span className='text-gradient'>
                Nuestra cultura
              </span>
            </h2>
            {typeof culture.description === 'string'
              ? (
                <p className='f-subhead-1 font-header font-semibold text-balancer'>
                  {culture.description}
                </p>
                )
              : (
                <div className='mt-spacing-4 text-center space-y-spacing-3'>
                  {culture.description?.map((paragraph, key) => (
                    <p key={key} className='f-subhead-1 font-header font-semibold text-balance'>
                      {paragraph}
                    </p>
                  ))}
                </div>
                )}
          </div>
          <div>
            {culture.items.map((item, key) => (
              <ArticleCard
                key={key}
                item={item}
                className='mt-spacing-9 lg:even:flex-row-reverse'
                headerClassName={key % 2 === 0 ? '2xl:pr-8' : '2xl:pl-8'}
              />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className='container grid place-content-center mt-spacing-7'>
          <h2>
            <span className='f-heading-1 font-header font-semibold text-balance text-gradient'>
              {history.title}
            </span>
          </h2>
          <div>
            {history.items.map((item, key) => (
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
