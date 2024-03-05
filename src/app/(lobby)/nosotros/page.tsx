import NextImage from 'next/image'
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
      <section className='pt-spacing-7 pb-spacing-9'>
        <div className='h-full relative z-10 flex flex-col justify-center'>
          <div className='container'>
            <div className='max-w-[350px] sm:max-w-xl xl:max-w-4xl mx-auto text-center'>
              <NextLink href='/'>
                <Icons.Logotype className='w-auto h-16 mx-auto sm:h-20 xl:h-[88px] fill-accent stroke-accent [fill-opacity:0] animate-draw [stroke-dasharray:1300] [stroke-dashoffset:1300]' />
              </NextLink>
              <h1 className='sr-only'>{culture.title}</h1>
              <div className='f-display-1 font-header font-extrabold text-balance uppercase mt-spacing-6'>
                <span className='text-gradient'>
                  {culture.title}
                </span>
              </div>
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
          <div className='text-center'>
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
              <ArticleCard className='mt-spacing-9 lg:even:flex-row-reverse' headerClassName={key % 2 === 0 ? '2xl:pr-8' : '2xl:pl-8'} item={item} key={key} />
              // <article className='lg:cols-container lg:even:flex-row-reverse mt-spacing-9' key={key}>
              //   <div className={cn('lg:w-1/2-cols flex flex-col justify-center', key % 2 === 0 ? '2xl:pr-8' : '2xl:pl-8')}>
              //     <h3 className='f-heading-2 font-header font-semibold text-balance text-center lg:text-left'>
              //       <span className='text-gradient'>
              //         {item.title}
              //       </span>
              //     </h3>
              //     <div className='mt-spacing-4 space-y-spacing-3 text-center lg:text-left'>
              //       {typeof item.description === 'string'
              //         ? (
              //           <p className='f-subhead-2 text-balance'>
              //             {item.description}
              //           </p>
              //           )
              //         : item.description?.map((paragraph, key) => (
              //           <p key={key} className='f-subhead-2 text-balance'>
              //             {paragraph}
              //           </p>
              //         ))}
              //     </div>
              //   </div>
              //   <div className='lg:w-1/2-cols mt-spacing-5 lg:mt-0 lg:flex lg:items-center'>
              //     {item.image && (
              //       <NextImage
              //         className='w-full h-auto aspect-video rounded-xl'
              //         loading='lazy'
              //         {...item.image}
              //       />
              //     )}
              //   </div>
              // </article>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className='container grid place-content-center mt-spacing-9'>
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
