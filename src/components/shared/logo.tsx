import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'field-logo-shell inline-flex shrink-0 items-center px-2 py-1',
        className
      )}
    >
      <img
        alt=""
        className="field-logo h-8 w-auto max-w-[10rem] object-contain object-left"
        src="/assets/hllv-wiki-logo.png"
      />
    </span>
  );
}
