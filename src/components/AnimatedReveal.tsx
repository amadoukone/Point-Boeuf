/**
 * File: src/components/AnimatedReveal.tsx
 * Purpose: Small reusable component that reveals its children with a smooth animation on mount.
 */

import React, { useEffect, useState } from "react";

export interface AnimatedRevealProps {
  /** Children elements to reveal */
  children: React.ReactNode;
  /** Additional class names for the container */
  className?: string;
  /** Delay in milliseconds before the reveal animation starts */
  delay?: number;
  /** Duration of the transition in ms (used to compute style) */
  duration?: number;
}

/**
 * AnimatedReveal
 * Adds a simple fade+slide-up animation to its children when they mount.
 *
 * @param props AnimatedRevealProps
 * @returns JSX.Element
 */
export default function AnimatedReveal({
  children,
  className = "",
  delay = 0,
  duration = 700,
}: AnimatedRevealProps): JSX.Element {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setVisible(true), delay);
    return () => window.clearTimeout(t);
  }, [delay]);

  return (
    <div
      className={`${className} will-change-transform`}
      style={{
        transition: `opacity ${duration}ms cubic-bezier(.16,.84,.44,1), transform ${duration}ms cubic-bezier(.16,.84,.44,1)`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(12px)",
      }}
    >
      {children}
    </div>
  );
}