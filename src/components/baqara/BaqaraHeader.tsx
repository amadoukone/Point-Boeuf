/**
 * File: src/components/baqara/BaqaraHeader.tsx
 * Purpose: Hero header for the Baqara page with brand, tagline, stats and visual.
 */

import React from "react";
import AnimatedReveal from "../AnimatedReveal";
import { Truck, ShieldCheck, ThermometerSnowflake } from "lucide-react";

/**
 * BaqaraHeader
 * Main hero section introducing the Baqara brand and its positioning.
 *
 * @returns JSX.Element
 */
export default function BaqaraHeader(): JSX.Element {
  return (
    <AnimatedReveal delay={60}>
      <header className="grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-center">
        {/* Left: text, tagline, CTAs */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-3 py-1 text-xs font-medium text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-200">
            <Truck className="w-3.5 h-3.5" />
            <span>Abattoir &amp; produits à base de viande — Baqara</span>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Une viande suivie de l&apos;éleveur jusqu&apos;à votre assiette.
            </h1>
            <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-xl">
              Baqara combine un abattoir moderne, une production de viande
              séchée traditionnelle et une logistique réfrigérée pour garantir
              qualité, hygiène et traçabilité.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#commande"
              className="inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 transition-colors"
            >
              Commander maintenant
              <Truck className="w-4 h-4" />
            </a>
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-2 text-xs sm:text-sm text-gray-700 dark:border-neutral-700 dark:text-gray-200">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Contrôles vétérinaires &amp; chaîne du froid sécurisée</span>
            </div>
          </div>

          <dl className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="rounded-xl border border-gray-100 bg-gray-50 px-3 py-3 dark:border-neutral-800 dark:bg-neutral-900/70">
              <dt className="text-gray-500 dark:text-gray-400">Capacité</dt>
              <dd className="mt-1 text-base font-semibold text-gray-900 dark:text-white">
                120 t / mois
              </dd>
            </div>
            <div className="rounded-xl border border-gray-100 bg-gray-50 px-3 py-3 dark:border-neutral-800 dark:bg-neutral-900/70">
              <dt className="text-gray-500 dark:text-gray-400">Traçabilité</dt>
              <dd className="mt-1 text-base font-semibold text-gray-900 dark:text-white">
                100% des lots suivis
              </dd>
            </div>
            <div className="rounded-xl border border-gray-100 bg-gray-50 px-3 py-3 dark:border-neutral-800 dark:bg-neutral-900/70">
              <dt className="text-gray-500 dark:text-gray-400">
                Livraison fraîche
              </dt>
              <dd className="mt-1 flex items-center gap-1 text-base font-semibold text-gray-900 dark:text-white">
                <ThermometerSnowflake className="w-4 h-4 text-sky-500" />
                <span>&lt; 4°C</span>
              </dd>
            </div>
          </dl>
        </div>

        {/* Right: visual card */}
        <div className="relative h-56 sm:h-64 md:h-72">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-red-700 via-red-500 to-amber-400 shadow-xl overflow-hidden">
            <img
              src="https://pub-cdn.sider.ai/u/U03VH8G8NEJ/web-coder/6a0f9280a419c8a510509386/resource/ecd133c7-5d0d-4a25-85bb-59ad201b87dc.jpg"
              className="object-cover w-full h-full mix-blend-multiply"
              alt="Chaîne de production Baqara"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 text-xs text-white/90">
            <div className="space-y-1">
              <p className="font-semibold">Baqara — Abattoir &amp; transformation</p>
              <p className="text-[11px] text-white/70">
                Contrôle vétérinaire, hygiène renforcée et logistique intégrée.
              </p>
            </div>
            <div className="rounded-xl bg-black/40 px-3 py-2 text-[11px]">
              <p className="font-semibold">Certification</p>
              <p>Normes sanitaires en vigueur</p>
            </div>
          </div>
        </div>
      </header>
    </AnimatedReveal>
  );
}
