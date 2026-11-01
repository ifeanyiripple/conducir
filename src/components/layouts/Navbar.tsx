'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import Container from '@/components/ui/Container';
import Logo from '@/components/ui/Logo';
import ButtonLink from '@/components/ui/ButtonLink';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { navLinks, site } from '@/lib/site';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isCurrent = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header id="top" className="sticky top-0 z-50 border-b border-white/10 bg-ink text-white">
      {/* Height must match the offset used in Hero (4.5rem mobile, 5rem desktop) */}
      <Container className="flex h-[4.5rem] items-center justify-between gap-4 lg:h-20">
        {/* min-w-0 lets the logo give way on narrow phones so it can never push the menu button out of view */}
        <div className="min-w-0">
          <Logo light />
        </div>

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

        {/* Desktop only. Hidden on this wrapper, not on ButtonLink: ButtonLink's own
            "inline-flex" class conflicts with a "hidden" passed in, so the button leaked onto mobile. */}
        <div className="hidden lg:block">
          <ButtonLink href={site.mailto} size="sm" shape="hex">
            Let&rsquo;s talk
          </ButtonLink>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          {/* SheetTrigger renders the <button> itself, so no nested button */}
          <SheetTrigger
            aria-label="Open menu"
            className="flex size-11 shrink-0 items-center justify-center text-gold lg:hidden"
          >
            <Menu className="size-8" strokeWidth={2} aria-hidden="true" />
          </SheetTrigger>

          {/* Full screen: override the Sheet's default 3/4 width and max-w-sm */}
          <SheetContent
            side="right"
            className="inset-0 h-dvh w-full max-w-none gap-0 border-0 bg-ink p-0 text-white sm:max-w-none [&>button]:right-6 [&>button]:top-6 [&>button]:text-gold [&>button]:opacity-100 [&>button_svg]:size-7"
          >
            <SheetHeader className="h-[4.5rem] justify-center border-b border-white/10 px-6">
              <SheetTitle className="font-label text-[0.68rem] font-normal uppercase tracking-[0.18em] text-white/60">
                Menu
              </SheetTitle>
              <SheetDescription className="sr-only">Main site navigation</SheetDescription>
            </SheetHeader>

            <nav className="flex flex-1 flex-col overflow-y-auto px-6 py-4" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                // Closed through state so the Link stays a plain anchor (no button wrapped around it)
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isCurrent(link.href) ? 'page' : undefined}
                  className={`border-b border-white/10 py-5 font-display text-2xl font-bold uppercase tracking-tight ${
                    isCurrent(link.href) ? 'text-gold' : 'text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}