'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  /** Accent color for the curtain overlay */
  color?: string;
  /** Direction the curtain slides away */
  direction?: 'left' | 'right';
  /** Delay before the reveal starts */
  delay?: number;
  /** Duration of the curtain slide */
  duration?: number;
}

/**
 * Wraps an image (or any content) with a colored curtain overlay
 * that slides away on scroll-into-view. Creates a sophisticated
 * reveal effect used by award-winning hotel sites.
 *
 * The curtain is a brand-colored rectangle that covers the content
 * and slides off to one side, revealing the image underneath.
 */
export const ImageReveal = ({
  children,
  className,
  color = '#C17A56',
  direction = 'right',
  delay = 0.1,
  duration = 0.8,
}: ImageRevealProps) => {
  const prefersReduced = useReducedMotion();

  const curtainVariants = {
    hidden: {
      scaleX: 1,
      originX: direction === 'right' ? 1 : 0,
    },
    visible: {
      scaleX: 0,
      transition: {
        duration: prefersReduced ? 0 : duration,
        delay: prefersReduced ? 0 : delay,
        ease: [0.77, 0, 0.175, 1] as const,
      },
    },
  };

  const contentVariants = {
    hidden: prefersReduced
      ? { opacity: 1, scale: 1 }
      : { opacity: 0, scale: 1.08 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: prefersReduced ? 0 : duration * 0.8,
        delay: prefersReduced ? 0 : delay + duration * 0.3,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={`relative overflow-hidden ${className ?? ''}`}
    >
      {/* The image/content underneath */}
      <motion.div variants={contentVariants} className="w-full h-full">
        {children}
      </motion.div>

      {/* The colored curtain overlay */}
      <motion.div
        variants={curtainVariants}
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          backgroundColor: color,
          transformOrigin: direction === 'right' ? 'right center' : 'left center',
        }}
      />
    </motion.div>
  );
};
