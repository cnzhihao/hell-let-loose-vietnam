import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

export function BrutalCard({
  className,
  ...props
}: ComponentPropsWithoutRef<'div'>) {
  return <div className={cn('border border-ink p-6', className)} {...props} />;
}
