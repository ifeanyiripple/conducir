export default function ArrowIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M5 19 19 5M7 5h12v12" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
