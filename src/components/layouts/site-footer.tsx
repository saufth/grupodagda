import { Link } from '@/components/ui/link'
import { services } from '@/config/organization'
import { contactEmail, siteConfig } from '@/config/site'

export default function SiteFooter () {
  return (
    <footer className='py-spacing-7'>
      <div className='container pt-spacing-7 flex flex-col md:flex-row gap-y-7 md:gap-y-0 md:justify-between border-t border-zinc-400'>
        <div>
          <div className='text-base sm:text-lg font-medium text-muted-foreground'>
            {siteConfig.name}
          </div>
          <ul className='space-y-spacing-2 mt-spacing-3'>
            {services.map((item, key) => (
              <li key={key}>
                <Link
                  href={item.url}
                  target='_blank'
                  rel='noreferrer'
                  aria-label={`Página principal de ${item.name}, se abre en una nueva pestaña`}
                  className='text-base xl:text-lg font-light text-white'
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className='text-base font-medium sm:text-lg text-muted-foreground'>
            Directorio
          </div>
          <ul className='space-y-spacing-2 mt-spacing-3'>
            {siteConfig.mainNav.map((item, key) => (
              <li key={key}>
                <Link
                  href={item.href}
                  aria-label={item.title}
                  className='text-base xl:text-lg font-light text-white'
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className='text-base sm:text-lg font-medium text-muted-foreground'>
            Correo electrónico
          </div>
          <Link
            href={`mailto:${contactEmail}`}
            target='_blank'
            rel='noreferrer'
            aria-label='Envia un mensaje con tu servicio de correo, se abre en una nueva pestaña'
            className='text-base xl:text-lg font-light text-white'
          >
            {contactEmail}
          </Link>
        </div>
        <div>
          <span className='text-white font-header text-sm'>
            {`${siteConfig.name} © ${new Date().getFullYear()}`}
          </span>
        </div>
      </div>
    </footer>
  )
}
