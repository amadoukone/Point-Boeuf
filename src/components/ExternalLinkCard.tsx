/**
 * File: src/components/ExternalLinkCard.tsx
 * Purpose: Small reusable card component that links to an external or internal site.
 */

import React from "react";
import { ExternalLink } from "lucide-react";

/**
 * ExternalLinkCardProps
 * @property name - Display name for the link
 * @property href - URL or internal hash path to open
 * @property description - Optional short description under the title
 * @property openInNewTab - When true opens in a new tab (default true). Set false for internal navigation.
 */
export interface ExternalLinkCardProps {
  name: string;
  href: string;
  description?: string;
  openInNewTab?: boolean;
}

/**
 * ExternalLinkCard
 * Renders a clickable card that opens a link. Supports opening in a new tab or navigating in-app.
 *
 * @param props ExternalLinkCardProps
 * @returns JSX.Element
 */
export default function ExternalLinkCard({
  name,
  href,
  description,
  openInNewTab = true,
}: ExternalLinkCardProps): JSX.Element {
  const anchorProps: React.AnchorHTMLAttributes<HTMLAnchorElement> = {
    href,
    className:
      "group block w-full max-w-md rounded-xl border border-gray-200 dark:border-neutral-700 p-6 bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1",
  };

  if (openInNewTab) {
    anchorProps.target = "_blank";
    anchorProps.rel = "noopener noreferrer";
  }

  return (
    <a {...anchorProps}>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{name}</h3>
          {description && (
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{description}</p>
          )}
        </div>
        <div className="ml-4 flex-shrink-0 flex items-center">
          <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-red-600 transition-colors" />
        </div>
      </div>
      <div className="mt-4">
        <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-red-50 text-red-700 dark:bg-transparent dark:text-red-400 border border-red-100">
          Ouvrir
        </span>
      </div>
    </a>
  );
}