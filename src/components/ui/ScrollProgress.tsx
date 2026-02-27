'use client';

import { useScrollProgress } from '@/hooks/useScrollProgress';

/**
 * Thin gold progress bar at the top of the viewport.
 * Vanilla scroll listener — no animation library.
 */
export const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left pointer-events-none"
      style={{
        transform: `scaleX(${progress})`,
        background: 'linear-gradient(90deg, #BF754B, #D4936B)',
        transition: 'transform 0.1s linear',
      }}
    />
  );
};
