/**
 * File: src/pages/Home.tsx
 * Purpose: Home page for the "point Boeuf" site. Contains header and external links.
 */

import React from "react";
import SiteHeader from "../components/SiteHeader";
import ExternalLinkCard from "../components/ExternalLinkCard";

/**
 * Home
 * Main landing page component that presents the company name and links to external sites.
 *
 * @returns JSX.Element
 */
export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-yellow-50 via-amber-50 to-white dark:from-neutral-900 dark:to-neutral-800 py-16">
      <div className="w-full max-w-4xl px-6">
        <div className="rounded-2xl p-10 bg-white dark:bg-gray-950 shadow-xl border border-gray-100 dark:border-neutral-800">
          <SiteHeader />

          <section className="mt-10 grid gap-6 sm:grid-cols-2">
            <ExternalLinkCard
              name="Baqara"
              href="#/baqara"
              description="Découvrir Baqara — nos activités et commander en ligne."
              openInNewTab={false}
            />

            <ExternalLinkCard
              name="Fawa weli"
              href="https://fawa-weli.example"
              description="Accéder à Fawa weli — plateforme partenaire."
            />
          </section>

          <footer className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            to do : Remplacez les URLs Fawa weli dans le code par les URLs réelles des sites externes.
          </footer>
        </div>
      </div>
    </main>
  );
}