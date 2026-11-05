"use client";

import { useEffect, useRef, useState } from "react";

import Logo from "../ui/Logo";

// Video file must be inside the /public folder. Change the name here if yours differs.
const VIDEO_SRC = "/hero.webm";
const POSTER_SRC = "/hero.jpeg";

type NavChild = { label: string; href: string };
type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
  mobileOnly?: boolean;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Showcase", href: "#" },
  {
    label: "The Experience",
    href: "#",
    children: [
      { label: "The DSC Experience", href: "#" },
      { label: "Sustainability", href: "#" },
      { label: "The DSC Library", href: "#" },
    ],
  },
  {
    label: "About Us",
    href: "#",
    children: [
      { label: "Overview", href: "#" },
      { label: "Our Team", href: "#" },
      { label: "Our Partners", href: "#" },
    ],
  },
  { label: "Featured News", href: "#" },
  { label: "Contact", href: "#", mobileOnly: true },
  { label: "Careers", href: "#" },
];

// Shared classes for the mobile menu links and buttons (horizontal padding is added per use)
const MOBILE_ITEM =
  "flex w-full cursor-pointer items-center gap-[6px] border-0 bg-transparent text-left [font-family:inherit] text-[15px] font-normal leading-[34px] text-white no-underline hover:font-semibold";

function ArrowDownIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.1}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="block h-9 w-9 max-[767px]:h-[26px] max-[767px]:w-[26px]"
    >
      <path d="M12 1.5v20.5" />
      <path d="M5 15l7 7 7-7" />
    </svg>
  );
}

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Force the background video to play. React does not always render the
  // "muted" attribute on the server, and browsers block autoplay without it.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    const tryPlay = () => {
      video.play().catch(() => {
        /* autoplay blocked: poster image stays visible */
      });
    };
    tryPlay();
    video.addEventListener("loadeddata", tryPlay);
    return () => video.removeEventListener("loadeddata", tryPlay);
  }, []);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close the mobile menu when resizing up to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenSub(null);
  };

  return (
    <section className="relative overflow-hidden font-[family-name:var(--font-work-sans),'Helvetica_Neue',Helvetica,Arial,sans-serif] text-[17px] leading-[2.058823529]">
      {/* Keyframes for the bouncing arrow (self-contained, no tailwind config needed) */}
      <style>{`
        @keyframes dscArrowBounce {
          0% { transform: translateY(0); }
          50% { transform: translateY(-20%); }
          100% { transform: translateY(0); }
        }
      `}</style>

      {/*
        On phones the hero fills the whole screen. svh is the visible height with the
        browser bars showing, so the bottom arrow is never hidden behind them.
      */}
      <div className="relative h-[85vh] min-h-[750px] w-full bg-black max-[1199px]:min-h-[700px] max-[991px]:min-h-[620px] max-[767px]:h-[100svh] max-[767px]:min-h-[480px] max-[519px]:min-h-[380px]">
        {/*
          Background video: kept at its native size (no stretching / cover) and
          centered horizontally and vertically inside the hero.
          max-w/max-h only stop it overflowing on screens smaller than the video.
        */}
        <video
          ref={videoRef}
          className="absolute left-1/2 top-1/2 mt-20 z-0 h-auto max-h-full w-auto max-w-full -translate-x-1/2 -translate-y-1/2"
          src={VIDEO_SRC}
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          aria-hidden="true"
        />

        {/* Header */}
        <header className="absolute inset-x-0 top-0 z-[60]">
          <div className="flex items-start px-[15px]">
            <div className="mt-5 min-w-0">
              <Logo light />
            </div>

            {/* Primary nav */}
            <nav
              className="flex-auto max-[767px]:hidden"
              aria-label="Main"
            >
              <ul className="mt-[25px] flex justify-center">
                {NAV_ITEMS.filter((item) => !item.mobileOnly).map((item) => (
                  <li key={item.label} className="group relative">
                    <a
                      href={item.href}
                      aria-haspopup={item.children ? "true" : undefined}
                      className="block whitespace-nowrap px-[25px] py-2 text-[15px] font-light leading-[34px] text-white no-underline transition-opacity duration-300 ease-in-out focus-visible:font-semibold focus-visible:tracking-[-0.5px] focus-visible:opacity-80 focus-visible:outline-none group-hover:font-semibold group-hover:tracking-[-0.5px] group-hover:opacity-80 max-[991px]:px-[10px]"
                    >
                      {item.label}
                    </a>
                    {item.children && (
                      <ul className="invisible absolute left-0 top-[calc(100%+2px)] z-[1000] m-0 min-w-[160px] -translate-y-1 bg-[#00374d] px-2 py-[5px] text-left opacity-0 shadow-[0_6px_12px_rgba(0,0,0,0.175)] transition-[opacity,transform,visibility] duration-[250ms] ease-in-out before:absolute before:inset-x-0 before:-top-1 before:h-1 before:content-[''] group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                        {item.children.map((child) => (
                          <li
                            key={child.label}
                            className="border-t border-[rgba(245,245,245,0.23)] first:border-t-0"
                          >
                            <a
                              href={child.href}
                              className="block whitespace-nowrap px-[2px] py-[3px] text-[13px] font-light leading-[34px] text-white no-underline hover:font-semibold focus-visible:font-semibold focus-visible:outline-none"
                            >
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Utility nav (Contact) */}
            <div className="flex-none max-[767px]:hidden">
              <ul className="mt-[25px] flex">
                <li>
                  <a
                    href="#"
                    className="block px-[11px] py-2 text-[10px] font-semibold uppercase leading-[34px] text-white no-underline transition-opacity duration-[350ms] ease-in-out hover:opacity-50 focus-visible:opacity-50 focus-visible:outline-none"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Hamburger toggle (mobile only) */}
            <button
              type="button"
              className="ml-auto mt-[26px] hidden cursor-pointer border-0 bg-transparent px-[10px] py-[9px] max-[767px]:block"
              aria-label="Toggle Navigation"
              aria-expanded={menuOpen}
              onClick={() => (menuOpen ? closeMenu() : setMenuOpen(true))}
            >
              <span
                className={`block h-[2px] w-[22px] origin-center rounded-[1px] bg-white transition-[transform,opacity,width] duration-[350ms] ease-in-out ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`mt-[5px] block h-[2px] origin-center rounded-[1px] bg-white transition-[transform,opacity,width] duration-[350ms] ease-in-out ${
                  menuOpen ? "w-[17px] opacity-0" : "w-[17px]"
                }`}
              />
              <span
                className={`mt-[5px] block h-[2px] origin-center rounded-[1px] bg-white transition-[transform,opacity,width] duration-[350ms] ease-in-out ${
                  menuOpen ? "w-[22px] -translate-y-[7px] -rotate-45" : "w-[12px]"
                }`}
              />
            </button>
          </div>
        </header>

        {/* Mobile menu */}
        <div
          className={`fixed inset-x-0 bottom-0 top-[71px] z-40 hidden bg-[#00374d] transition-[opacity,visibility] duration-[350ms] max-[767px]:block ${
            menuOpen ? "visible opacity-75" : "invisible opacity-0"
          }`}
          aria-hidden="true"
        />
        <nav
          className={`fixed bottom-0 left-0 top-[71px] z-[45] hidden w-full overflow-y-auto pb-[30px] pt-[10.5px] transition-transform duration-[400ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] max-[767px]:block ${
            menuOpen
              ? "pointer-events-auto translate-x-0"
              : "pointer-events-none -translate-x-full"
          }`}
          aria-label="Mobile"
          aria-hidden={!menuOpen}
        >
          <ul>
            {NAV_ITEMS.map((item) => {
              const isOpen = openSub === item.label;
              return (
                <li key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        tabIndex={menuOpen ? 0 : -1}
                        onClick={() => setOpenSub(isOpen ? null : item.label)}
                        className={`${MOBILE_ITEM} px-[18px]`}
                      >
                        {item.label}
                        <span aria-hidden="true">{isOpen ? "-" : "+"}</span>
                      </button>
                      <div
                        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <ul className="overflow-hidden">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <a
                                href={child.href}
                                tabIndex={menuOpen && isOpen ? 0 : -1}
                                onClick={closeMenu}
                                className={`${MOBILE_ITEM} pl-9 pr-[18px]`}
                              >
                                {child.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <a
                      href={item.href}
                      tabIndex={menuOpen ? 0 : -1}
                      onClick={closeMenu}
                      className={`${MOBILE_ITEM} px-[18px]`}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

       {/* Caption */}
<div className="relative z-10 px-[15px] pt-[15%] text-center text-white max-[991px]:pt-[20%] max-[767px]:absolute max-[767px]:inset-0 max-[767px]:flex max-[767px]:flex-col max-[767px]:items-center max-[767px]:justify-center max-[767px]:pt-0">
  <h1 className="m-0 font-[family-name:var(--font-playfair),Georgia,'Times_New_Roman',Times,serif] text-[71px] font-bold leading-[1.1] tracking-[0.4px] text-white max-[991px]:text-[35px] max-[519px]:text-[27px]">
    Creating Personal Resorts
    <sup className="relative top-[-0.5em] align-baseline text-[75%] leading-[0]">
      ®
    </sup>
  </h1>
  <div className="mt-8">
    <p className="m-0 font-[family-name:var(--font-michroma),Eurostile,Microgramma,sans-serif] text-[0.8rem] font-normal uppercase leading-[1.4] tracking-[0.22em] md:text-[1rem]">
      Conducir Engineering Limited
    </p>
  </div>
</div>

        {/* Jump link */}
        <div className="absolute bottom-5 left-0 z-10 w-full animate-[dscArrowBounce_500ms_ease-in_4s_2] text-center motion-reduce:animate-none">
          <a
            href="#dsc-learn-more"
            aria-label="Scroll down"
            className="inline-block text-white transition-opacity duration-300 ease-in-out hover:opacity-70"
          >
            <ArrowDownIcon />
          </a>
        </div>
      </div>
    </section>
  );
}