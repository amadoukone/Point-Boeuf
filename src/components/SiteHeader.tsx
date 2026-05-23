/**
 * File: src/components/SiteHeader.tsx
 * Purpose: Header component displaying the site name "point Boeuf"
 */

import React from "react";

/**
 * SiteHeader
 * Displays the main site title with visual emphasis on "Boeuf".
 *
 * @returns JSX.Element
 */
export default function SiteHeader(): JSX.Element {
  return (
    <header className="text-center">
      <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        <span className="block">
          point <span className="text-red-600">Boeuf</span>
        </span>
      </h1>
      <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
        Le carrefour entre qualité et saveur — choisissez un site ci-dessous pour continuer.
      </p>
    </header>
  );
}