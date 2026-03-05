import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind classes with clsx (shadcn/utils pattern).
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
