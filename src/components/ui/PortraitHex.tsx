import Image from 'next/image';
import { PHOTO } from '@/lib/hex';

/* A portrait cut into a framed hexagon: gold band, a gap, then the photo.
   Without a photo it shows initials on charcoal. */
export default function PortraitHex({
  src,
  alt,
  initials,
  position = '50% 25%',
  ring = 'bg-white',
  sizes = '(min-width: 1024px) 260px, 50vw',
  priority = false,
  className = '',
}: {
  src?: string;
  alt: string;
  initials?: string;
  position?: string;
  /** Colour class for the gap ring, so it matches the section background */
  ring?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative mx-auto w-full ${className}`} style={{ aspectRatio: `${PHOTO.box.w} / ${PHOTO.box.h}` }}>
      <div className="absolute inset-0 bg-gold" style={{ clipPath: PHOTO.outerClip }} />
      <div className={`absolute inset-0 ${ring}`} style={{ clipPath: PHOTO.ringClip }} />
      <div className="absolute inset-0 overflow-hidden bg-charcoal" style={{ clipPath: PHOTO.innerClip }}>
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover"
            style={{ objectPosition: position }}
          />
        ) : (
          <span
            role="img"
            aria-label={alt}
            className="absolute inset-0 grid place-items-center font-display text-4xl font-extrabold text-gold"
          >
            {initials}
          </span>
        )}
      </div>
    </div>
  );
}
