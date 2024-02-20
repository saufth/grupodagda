import { Link } from '@/components/ui/link'
import { contactEmail, siteConfig } from '@/config/site'

export default function SiteFooter () {
  return (
    <footer className='border-t pt-spacing-7 pb-spacing-8 bg-gradient-to-tr from-muted via-muted to-muted/95'>
      <div className='container flex flex-col md:flex-row gap-y-7 md:gap-y-0 md:justify-between'>
        <div>
          <span className='text-white font-header text-sm'>
            {`${siteConfig.name} © ${new Date().getFullYear()}`}
          </span>
        </div>
        <div>
          <div className='text-base sm:text-lg font-medium text-muted-foreground'>
            Directorio
          </div>
          <ul className='space-y-spacing-2 mt-spacing-3'>
            {siteConfig.mainNav.map((navItem, key) => (
              <li key={key}>
                <Link href={navItem.href} className='text-base xl:text-lg font-light text-white'>
                  {navItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className='text-base font-medium sm:text-lg text-muted-foreground'>
            Soluciones
          </div>
          <ul className='space-y-spacing-2 mt-spacing-3'>
            {siteConfig.mainNav.map((navItem, key) => (
              <li key={key}>
                <Link href={navItem.href} className='text-base xl:text-lg font-light text-white'>
                  {navItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className='text-base sm:text-lg font-medium text-muted-foreground'>
            Correo electrónico
          </div>
          <Link className='text-base xl:text-lg font-light text-white' href={`mailto:${contactEmail}`}>
            {contactEmail}
          </Link>
        </div>
      </div>
    </footer>
  )
}
