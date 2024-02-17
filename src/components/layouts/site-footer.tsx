import NextLink from 'next/link'
import { CallToAction } from '@/components/call-to-action'
import { Icons } from '@/components/icons'
import { Link } from '@/components/ui/link'
import { contactEmail, siteConfig, siteNav } from '@/config/site'

export default function SiteFooter () {
  return (
    <footer className='border-t pt-spacing-4 pb-spacing-7 bg-muted'>
      <div className='container-sm sm:flex sm:justify-between'>
        <div className='sm:mt-0 flex flex-col justify-between'>
          <div className='flex gap-x-2'>
            <NextLink href='/'>
              <Icons.Logoname className='w-full h-9 [&_*]:fill-white' />
              <span className='sr-only'>{siteConfig.name} home</span>
            </NextLink>
            <span className='text-lg text-white leading-none sm:leading-none mt-2.5'>
              {`© ${new Date().getFullYear()}`}
            </span>
          </div>
          <div className='hidden sm:block mt-spacing-5'>
            <div className='text-sm sm:text-base text-muted-foreground'>
              Correo electrónico
            </div>
            <Link className='text-lg lg:text-xl underline px-0 text-white' href={`mailto:${contactEmail}`}>
              {contactEmail}
            </Link>
          </div>
        </div>
        <nav className='flex flex-col gap-y-6 mt-4 sm:mt-0'>
          <ul className='flex flex-col gap-y-3 sm:gap-y-4'>
            {siteNav.map((navItem, key) => (
              <li key={key}>
                {key < siteNav.length - 1
                  ? (
                    <Link href={navItem.href} className='flex items-center gap-x-1 font-medium text-secondary-foreground' variant='link'>
                      {navItem.title}
                      <Icons.ArrowUpRight className='btn-icon w-4 h-4 fill-accent-foreground' />
                    </Link>
                    )
                  : (
                    <CallToAction className='[&>.btn-icon]:fill-secondary-foreground' variant='ghost' size='default' />
                    )}
              </li>
            ))}
          </ul>
        </nav>
        <div className='mt-spacing-6 block sm:hidden'>
          <div className='text-sm sm:text-base text-muted-foreground'>
            Correo electrónico
          </div>
          <Link className='text-lg lg:text-xl underline px-0 text-white' href={`mailto:${contactEmail}`}>
            {contactEmail}
          </Link>
        </div>
      </div>
    </footer>
  )
}
