/**
 * File: src/components/baqara/Locations.tsx
 * Purpose: Display Baqara locations / points of sale with simple cards.
 */

import React from "react";
import AnimatedReveal from "../AnimatedReveal";
import { MapPin } from "lucide-react";

/**
 * Locations
 * Renders a list of Baqara branches or points of sale.
 *
 * @returns JSX.Element
 */
export default function Locations(): JSX.Element {
  const places = [
    { name: "Baqara — Site principal", address: "Adresse, Ville" },
    { name: "Point de vente 1", address: "Bacodjicoroni ACI,Bamako" },
    { name: "Point de vente 2", address: "Adresse, ville" },
  ];

  return (
    <AnimatedReveal delay={180}>
      <section className="rounded-2xl border border-gray-100 bg-white/90 px-5 py-6 dark:border-neutral-800 dark:bg-neutral-950/90">
        <header className="mb-4">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
            Où nous trouver
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
            Abattoir, dépôt et points de vente partenaires.
          </p>
        </header>

        <div className="space-y-3 text-sm">
          {places.map((p, index) => (
            <AnimatedReveal key={p.name} delay={220 + index * 70}>
              <div className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 px-3 py-3 dark:border-neutral-700 dark:bg-neutral-900/60">
                <div className="mt-1 text-red-600 dark:text-red-300">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    {p.name}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {p.address}
                  </p>
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </section>
    </AnimatedReveal>
  );
}
