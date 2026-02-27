'use client';

import type { CSSProperties } from 'react';
import { useInView } from '@/hooks/useInView';

interface HeadingRevealProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
}

/**
 * Heading with a "breathing into place" letter-spacing expansion.
 * Fades in + expands from tighter tracking to final tracking.
 * Vanilla IntersectionObserver — no animation library.
 */
export const HeadingReveal = ({
  text,
  className,
  delay = 0,
  as: Tag = 'h2',
}: HeadingRevealProps) => {
  const { ref, inView } = useInView<HTMLHeadingElement>();

  const style: CSSProperties = {
    opacity: inView ? 1 : 0,
    letterSpacing: inView ? undefined : '0px',
    transform: inView ? 'translateY(0)' : 'translateY(12px)',
    transition: `opacity 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}s, letter-spacing 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}s, transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}s`,
    willChange: inView ? 'auto' : 'opacity, letter-spacing, transform',
  };

  return (
    <Tag ref={ref as React.Ref<HTMLHeadingElement>} className={className} style={style}>
      {text}
    </Tag>
  );
};
