/* Oversized hexagon (point up, like the Conducir mark) used as a quiet background shape.
   Set the colour with a text colour class, e.g. text-white/[0.07]. */
export default function GhostHex({ className = '', solid = false }: { className?: string; solid?: boolean }) {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 173.2 200" className={`pointer-events-none absolute ${className}`}>
      {solid ? (
        <polygon points="86.6,1 172.4,50.5 172.4,149.5 86.6,199 0.8,149.5 0.8,50.5" fill="currentColor" />
      ) : (
        <>
          <polygon
            points="86.6,1 172.4,50.5 172.4,149.5 86.6,199 0.8,149.5 0.8,50.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
          />
          <polygon
            points="86.6,16 159.4,58 159.4,142 86.6,184 13.8,142 13.8,58"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.4"
          />
        </>
      )}
    </svg>
  );
}
