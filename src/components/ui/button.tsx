import { Button as BaseButton } from '@base-ui/react/button';
import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

export type ButtonVariant = 'primary' | 'secondary' | 'plain' | 'icon';

export function buttonVariants({
  className,
  variant = 'primary',
}: {
  className?: string;
  variant?: ButtonVariant;
} = {}) {
  return cn(
    'inline-flex items-center justify-center gap-2 border border-ink font-extrabold no-underline transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus disabled:cursor-not-allowed disabled:opacity-70',
    variant !== 'icon' &&
      'min-h-12 px-5 py-2.5 text-sm uppercase tracking-[0.08em]',
    variant === 'primary' && 'bg-orange text-ink hover:bg-orange-strong',
    variant === 'secondary' && 'bg-yellow text-ink hover:bg-yellow-soft',
    variant === 'plain' && 'bg-surface text-foreground hover:bg-muted',
    variant === 'icon' && 'size-11 bg-surface text-foreground hover:bg-muted',
    className
  );
}

export function Button({
  className,
  variant = 'primary',
  type = 'button',
  ...props
}: Omit<ComponentPropsWithoutRef<typeof BaseButton>, 'className'> & {
  className?: string;
  variant?: ButtonVariant;
}) {
  return (
    <BaseButton
      type={type}
      className={buttonVariants({ className, variant })}
      {...props}
    />
  );
}
