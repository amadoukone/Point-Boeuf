/**
 * File: src/components/baqara/ActivitySection.tsx
 * Purpose: Reusable section to present a Baqara activity (Abattoir, Viande séchée, etc.)
 *          with title, summary, process steps and optional image. For "Abatoire/Abattoir"
 *          each step is illustrated with its own auto-scrolling gallery of 4 images.
 */

import React from "react";
import AnimatedReveal from "../AnimatedReveal";
import AutoScrollGallery from "./AutoScrollGallery";

/**
 * ActivitySectionProps
 * Props describing an activity block (ex: Abatoire, Production de viande séchée).
 */
export interface ActivitySectionProps {
  /** Activity title */
  title: string;
  /** Short description of the activity */
  summary: string;
  /** Ordered steps describing the process */
  steps: string[];
  /** Optional main image on the right side */
  imageSrc?: string;
  /** Optional icon beside the title */
  icon?: React.ReactNode;
  /** Optional animation delay in ms */
  delay?: number;
}

/**
 * createPlaceholderImagesForStep
 * Returns 4 placeholder image URLs to illustrate a given step.
 * You can later replace these with your own images while keeping the same structure.
 *
 * @param activity - Activity name (e.g. "Abatoire")
 * @param step - Step label (e.g. "Réception et inspection sanitaire")
 * @returns Array of 4 URLs
 */
function createPlaceholderImagesForStep(activity: string, step: string): string[] {
  const _key = `${activity} ${step}`.replace(/\s+/g, " ").trim();

  // For now we simply return 4 curated placeholders.
  // Replace each URL with a real photo if you want to customise the gallery.
  return [
    "https://pub-cdn.sider.ai/u/U03VH8G8NEJ/web-coder/6a0f9280a419c8a510509386/resource/bc617dd0-717b-4394-ad70-378d434e1038.jpg",
    "https://pub-cdn.sider.ai/u/U03VH8G8NEJ/web-coder/6a0f9280a419c8a510509386/resource/e4b2455e-67f5-42f1-8a12-b0f25b394b45.jpg",
    "https://pub-cdn.sider.ai/u/U03VH8G8NEJ/web-coder/6a0f9280a419c8a510509386/resource/b7a6b15c-ef89-4d4b-8bbe-271ee17e0c25.jpg",
    "https://pub-cdn.sider.ai/u/U03VH8G8NEJ/web-coder/6a0f9280a419c8a510509386/resource/37fb044a-40e1-4698-a4bc-c75e997aa75a.jpg",
  ];
}

/**
 * ActivitySection
 * Displays one Baqara activity in a card layout with steps, summary and optional
 * auto-scrolling galleries for the Abatoire activity.
 *
 * @param props ActivitySectionProps
 * @returns JSX.Element
 */
export default function ActivitySection({
  title,
  summary,
  steps,
  imageSrc,
  icon,
  delay = 0,
}: ActivitySectionProps): JSX.Element {
  const isAbatoire =
    title.toLowerCase().includes("abatoire") ||
    title.toLowerCase().includes("abattoir");

  return (
    <AnimatedReveal
      delay={delay}
      className="rounded-2xl border border-gray-100 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-sm px-5 py-6 sm:px-7 sm:py-8"
    >
      <section className="flex flex-col lg:flex-row gap-8 items-stretch">
        {/* Left: text and steps */}
        <div className="flex-1 min-w-0 space-y-4">
          <header className="flex items-start gap-3">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-300">
              {icon || (
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M9 12L11 14.2L15 9.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
                {title}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                {summary}
              </p>
            </div>
          </header>

          <div className="mt-2 space-y-3">
            <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-500 dark:text-gray-400">
              Notre processus
            </h3>
            <ol className="space-y-2 text-sm text-gray-700 dark:text-gray-200">
              {steps.map((step, index) => (
                <li key={index} className="flex gap-2">
                  <span className="mt-[2px] inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-50 text-[11px] font-semibold text-red-600 dark:bg-red-900/40 dark:text-red-200">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {isAbatoire && (
            <div className="mt-4 space-y-4">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Chaque étape est illustrée par une courte galerie de 4 images qui
                défilent automatiquement.
              </p>

              <div className="space-y-5">
                {steps.map((step, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        {step}
                      </span>
                    </div>

                    <AutoScrollGallery
                      images={createPlaceholderImagesForStep(title, step)}
                      heightRem={7.5}
                      durationSec={26 + index * 5}
                      ariaLabel={`${title} – étape ${index + 1}: ${step}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right: main visual */}
        <aside className="w-full lg:w-64 shrink-0 space-y-3">
          <div className="relative h-40 sm:h-44 rounded-2xl overflow-hidden bg-gradient-to-tr from-red-600 via-red-500 to-amber-400 dark:from-red-900 dark:via-red-700 dark:to-amber-500">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={`${title} illustration`}
                className="w-full h-full object-cover mix-blend-multiply"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-sm font-medium text-red-50/90">
                Visuel à venir
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white/90">
              <span>Traçabilité garantie</span>
              <span className="rounded-full bg-black/30 px-2 py-0.5">
                Baqara
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 text-[11px]">
            <span className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-2 py-1 text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-200">
              Respect des normes sanitaires
            </span>
            <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200">
              Chaîne du froid maîtrisée
            </span>
          </div>
        </aside>
      </section>
    </AnimatedReveal>
  );
}
