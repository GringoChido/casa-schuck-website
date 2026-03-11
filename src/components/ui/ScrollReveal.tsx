'use client';

import type { ReactNode, CSSProperties } from 'react';
import { useInView } from '@/hooks/useInView';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  duration?: number;
  y?: number;
  as?: 'div' | 'section' | 'article' | 'li';
}

/**
 * Scroll-triggered fade-in + translate-up using vanilla IntersectionObserver.
 * No animation library. CSS transitions only (GPU-accelerated).
 */
export const ScrollReveal = ({
  children,
  className,
  id,
  delay = 0,
  duration = 0.8,
  y = 20,
  as: Tag = 'div',
}: ScrollRevealProps) => {
  const { ref, inView } = useInView<HTMLElement>();

  const style: CSSProperties = {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : `translateY(${y}px)`,
    transition: `opacity ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}s, transform ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}s`,
    willChange: inView ? 'auto' : 'opacity, transform',
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} id={id} className={className} style={style}>
      {children}
    </Tag>
  );
};

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  index?: number;
  y?: number;
  duration?: number;
  staggerDelay?: number;
}

/**
 * Stagger item with built-in IntersectionObserver. Accepts an index for delay.
 * Uses CSS transitions — GPU-accelerated opacity + transform only.
 */
export const StaggerItem = ({
  children,
  className,
  index = 0,
  y = 20,
  duration = 0.6,
  staggerDelay = 0.15,
}: StaggerItemProps) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const delay = index * staggerDelay;

  const style: CSSProperties = {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : `translateY(${y}px)`,
    transition: `opacity ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}s, transform ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}s`,
    willChange: inView ? 'auto' : 'opacity, transform',
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
};
