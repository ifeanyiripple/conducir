'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Container from '@/components/ui/Container';
import Logo from '@/components/ui/Logo';
import ButtonLink from '@/components/ui/ButtonLink';
import { navLinks, site } from '@/lib/site';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isCurrent = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header id="top" className="sticky top-0 z-50 border-b border-white/10 bg-ink text-white">
      {/* Height must match the offset used in Hero (4.5rem mobile, 5rem desktop) */}
      <Container className="flex h-[4.5rem] items-center justify-between lg:h-20">
        <Logo light />

        <nav className="hidden items-center gap-10 xl:gap-12 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isCurrent(link.href) ? 'page' : undefined}
              className={`font-label text-[0.68rem] uppercase tracking-[0.18em] transition-colors hover:text-gold ${
                isCurrent(link.href) ? 'text-gold' : 'text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <ButtonLink href={site.mailto} size="sm" shape="hex" className="hidden lg:inline-flex">
          Let&rsquo;s talk
        </ButtonLink>

        <button
          type="button"
          className="flex size-11 flex-col items-center justify-center gap-2 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className={`h-0.5 w-7 bg-gold transition-transform ${open ? 'translate-y-1.25 rotate-45' : ''}`} />
          <span className={`h-0.5 w-7 bg-gold transition-transform ${open ? '-translate-y-1.25 -rotate-45' : ''}`} />
        </button>
      </Container>

      {open && (
        <nav className="border-t border-white/10 bg-ink lg:hidden" aria-label="Mobile navigation">
          <Container className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={isCurrent(link.href) ? 'page' : undefined}
                className={`border-b border-white/10 py-4 font-display text-xl font-bold uppercase tracking-tight ${
                  isCurrent(link.href) ? 'text-gold' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <ButtonLink href={site.mailto} className="mt-6">
              Let&rsquo;s talk
            </ButtonLink>
          </Container>
        </nav>
      )}
    </header>
  );
}
