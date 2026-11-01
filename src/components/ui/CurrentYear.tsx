'use client';

import { useSyncExternalStore } from 'react';

const subscribe = () => () => {};

/* Shows the visitor's current year. Renders `fallback` on the server and during
   hydration, then switches to the real year, so the copyright never goes stale. */
export default function CurrentYear({ fallback = 2026 }: { fallback?: number }) {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => fallback,
  );

  return <span>{year}</span>;
}
