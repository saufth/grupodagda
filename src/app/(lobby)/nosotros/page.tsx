import { type Metadata } from 'next'
import { ArticleCard } from '@/components/cards/article-card'
import Hero from '@/components/hero'
import { history, culture } from '@/config/organization'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: 'Conocenos',
  description: culture.title
}

export default function AboutPage () {
  return (
    <>
      <Hero title={culture.title} />
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
