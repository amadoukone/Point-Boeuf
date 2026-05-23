/**
 * File: src/components/baqara/AutoScrollGallery.tsx
 * Purpose: Horizontally auto-scrolling gallery (pure CSS animation) that loops
 *          over up to 4 images without creating any horizontal overflow or
 *          bloquer le défilement vertical de la page.
 */

import React from "react";

/**
 * AutoScrollGalleryProps
 * Props for the auto-scrolling gallery component.
 */
export interface AutoScrollGalleryProps {
  /** Array of image URLs to display (will be limited to 4 items) */
  images: string[];
  /** Height of the gallery in rem units */
  heightRem?: number;
  /**
   * Duration of one full loop in seconds.
   * A lower value means faster scrolling.
   */
  durationSec?: number;
  /** Optional aria label for accessibility */
  ariaLabel?: string;
}

/**
 * AutoScrollGallery
 * Renders a horizontal strip of up to 4 images that auto-scrolls using
 * a pure CSS marquee-like animation. Aucun handler d'événement n'est utilisé,
 * donc la molette de la souris continue à faire défiler la page normalement.
 *
 * @param props AutoScrollGalleryProps
 * @returns JSX.Element
 */
export default function AutoScrollGallery({
  images,
  heightRem = 8,
  durationSec = 28,
  ariaLabel = "Galerie d'illustration",
}: AutoScrollGalleryProps): JSX.Element {
  // Limit to 4 base images as requested.
  const baseImages = (images || []).slice(0, 4);

  if (!baseImages || baseImages.length === 0) {
    return (
      <section
        aria-label={ariaLabel}
        className="w-full baqara-gallery mt-1"
        aria-live="polite"
      >
        <div
          className="w-full rounded-xl border border-dashed border-gray-200 bg-gray-50/80 dark:border-neutral-700 dark:bg-neutral-900/80 flex items-center justify-center text-xs text-gray-500 dark:text-gray-400"
          style={{ height: `${heightRem}rem` }}
        >
          Aucune image disponible
        </div>
      </section>
    );
  }

  // Duplicate images internally for a seamless loop.
  const loopImages = [...baseImages, ...baseImages];

  return (
    <section
      aria-label={ariaLabel}
      className="w-full baqara-gallery mt-1"
      aria-live="off"
    >
      <div
        className="w-full overflow-hidden rounded-xl border border-red-100/70 bg-gradient-to-r from-red-50 via-white to-amber-50 shadow-sm dark:border-red-900/40 dark:bg-gradient-to-r dark:from-red-950 dark:via-neutral-950 dark:to-amber-900/20"
        style={{ height: `${heightRem}rem` }}
      >
        <div
          className="baqara-gallery-track"
          style={{ animationDuration: `${durationSec}s` }}
        >
          {loopImages.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className="flex-shrink-0 h-full relative"
              style={{ width: `${heightRem * 1.6}rem` }}
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover"
                draggable={false}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent opacity-70 mix-blend-multiply" />
            </div>
          ))}
        </div>
      </div>

      <p className="mt-1 text-[11px] text-right text-gray-500 dark:text-gray-400">
        Défilement automatique — survol pour mettre en pause
      </p>
    </section>
  );
}
