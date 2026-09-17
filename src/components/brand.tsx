import Image from 'next/image';

export function Brand() {
  return (
    <span className="flex min-w-0 items-center gap-2.5">
      <span className="grid size-11 shrink-0 place-items-center overflow-hidden rounded-xl">
        <Image
          src="/android-chrome-192x192.png"
          alt=""
          width={44}
          height={44}
          priority
          unoptimized
        />
      </span>
      <span className="min-w-0 leading-tight max-md:hidden">
        <span className="block truncate text-sm font-semibold">PutSMS</span>
        <span className="block truncate text-[11px] text-fd-muted-foreground">
          Docs
        </span>
      </span>
    </span>
  );
}
