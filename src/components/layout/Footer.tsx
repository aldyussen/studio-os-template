import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { NAV_LINKS } from '@/config/nav'
import { Container } from './Container'

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container>
        <div className="flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold">{siteConfig.name}</p>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} {siteConfig.author}. All rights
              reserved.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  )
}
