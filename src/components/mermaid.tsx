'use client';

import { use, useEffect, useId, useState } from 'react';
import { useTheme } from 'next-themes';

const cache = new Map<string, Promise<unknown>>();

function cachePromise<T>(key: string, create: () => Promise<T>): Promise<T> {
  const cached = cache.get(key);
  if (cached) return cached as Promise<T>;
  const promise = create();
  cache.set(key, promise);
  return promise;
}

export function Mermaid({ chart, label }: { chart: string; label?: string }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="my-6 h-80 animate-pulse rounded-md bg-fd-muted" />;
  return <MermaidContent chart={chart} label={label} />;
}

function MermaidContent({ chart, label }: { chart: string; label?: string }) {
  const id = useId().replaceAll(':', '');
  const { resolvedTheme } = useTheme();
  const { default: mermaid } = use(cachePromise('mermaid-module', () => import('mermaid')));

  mermaid.initialize({
    startOnLoad: false,
    securityLevel: 'strict',
    fontFamily: 'inherit',
    theme: resolvedTheme === 'dark' ? 'dark' : 'default',
  });

  const { svg } = use(
    cachePromise(`${chart}-${resolvedTheme}`, () => mermaid.render(`diagram-${id}`, chart)),
  );

  return (
    <figure className="my-6 overflow-x-auto rounded-md border bg-fd-card p-3 sm:p-5">
      <div
        className="min-w-[720px] [&_svg]:mx-auto [&_svg]:h-auto [&_svg]:max-w-full"
        role="img"
        aria-label={label}
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      {label ? <figcaption className="mt-3 text-center text-sm text-fd-muted-foreground">{label}</figcaption> : null}
    </figure>
  );
}
