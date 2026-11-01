import Link from 'next/link';
import Container from '@/components/ui/Container';
import CurrentYear from '@/components/ui/CurrentYear';
import Logo from '@/components/ui/Logo';
import GhostHex from '@/components/ui/GhostHex';
import { navLinks, site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="relative overflow-clip bg-ink-deep text-white">
      <GhostHex className="-bottom-40 -right-40 w-[520px] text-white/[0.05]" />

      <Container className="relative grid gap-16 py-24 sm:grid-cols-2 lg:grid-cols-4 lg:py-32">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo light />
          <p className="mt-8 font-display text-base font-bold uppercase tracking-[0.04em] text-gold">
            {site.motto}
          </p>
          <p className="mt-3 max-w-[28ch] text-sm leading-relaxed text-white/70">{site.strapline}</p>
        </div>

        <div>
          <h3 className="mb-5 font-label text-[0.66rem] uppercase tracking-[0.22em] text-gold-soft">Find us</h3>
          <address className="text-base not-italic leading-relaxed text-white/90">
            {site.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </div>

        <div>
          <h3 className="mb-5 font-label text-[0.66rem] uppercase tracking-[0.22em] text-gold-soft">Get in touch</h3>
          <div className="flex flex-col gap-2 text-base text-white/90">
            <a href={`mailto:${site.email}`} className="break-all transition-colors hover:text-gold">
              {site.email}
            </a>
            <a href={site.phoneHref} className="transition-colors hover:text-gold">
              {site.phone}
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-label text-[0.66rem] uppercase tracking-[0.22em] text-gold-soft">Explore</h3>
          <div className="flex flex-col gap-2 text-base text-white/90">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-gold">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>

      <div className="relative border-t border-white/15">
        <Container className="flex flex-col gap-3 py-8 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <span>
            &copy; <CurrentYear fallback={site.year} /> {site.name}. All rights reserved.
          </span>
          <a href="#top" className="transition-colors hover:text-white">
            Back to top
          </a>
        </Container>
      </div>
    </footer>
  );
}
