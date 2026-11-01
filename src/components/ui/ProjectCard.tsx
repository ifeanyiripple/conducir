import Image from 'next/image';
import Link from 'next/link';
import ArrowIcon from '@/components/ui/ArrowIcon';
import { HEX } from '@/lib/hex';
import type { Project } from '@/lib/projects';

type Props = {
  project: Project;
  /** When set, the whole card is a link and shows "View project". */
  href?: string;
  sizes?: string;
  priority?: boolean;
};

/* Tall photo, with a white panel overlapping its bottom edge.
   Hover: photo zooms, ink fill sweeps across the panel and the text turns white. */
export default function ProjectCard({
  project,
  href,
  sizes = '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 85vw',
  priority = false,
}: Props) {
  const body = (
    <>
      <div className="relative aspect-[4/5] overflow-hidden bg-ink">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
      </div>

      <div className="relative z-10 -mt-16 ml-5 mr-5 overflow-hidden bg-white p-6 shadow-[0_24px_48px_-24px_rgb(17_17_17/0.4)] sm:ml-7 sm:mr-7 sm:p-8">
        <span
          aria-hidden="true"
          className="absolute inset-0 origin-left scale-x-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-x-100"
        />
        <div className="relative transition-colors duration-500 group-hover:text-white">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="block h-[11px] w-[9.5px] bg-gold" style={{ clipPath: HEX }} />
            <span className="font-label text-[0.62rem] uppercase tracking-[0.22em] text-gold-deep transition-colors duration-500 group-hover:text-gold-soft">
              {project.category}
            </span>
          </div>

          <h3 className="mt-4 font-display text-xl font-extrabold uppercase leading-[1.1] tracking-tight sm:text-2xl">
            {project.title}
          </h3>

          {href && (
            <div className="mt-6 flex items-center justify-between gap-4">
              <span className="text-sm font-bold">View project</span>
              <span className="grid size-11 shrink-0 place-items-center rounded-full border border-ink/30 transition-colors duration-500 group-hover:border-white">
                <ArrowIcon className="size-5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );

  const classes = 'group block';

  if (href) {
    return (
      <Link href={href} className={classes}>
        {body}
      </Link>
    );
  }

  return <div className={classes}>{body}</div>;
}
