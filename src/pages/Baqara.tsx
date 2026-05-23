/**
 * File: src/pages/Baqara.tsx
 * Purpose: Full Baqara company page assembling hero, activities,
 *          order form, locations and footer into a single layout.
 */

import React from "react";
import BaqaraHeader from "../components/baqara/BaqaraHeader";
import ActivitySection from "../components/baqara/ActivitySection";
import OrderForm from "../components/baqara/OrderForm";
import Locations from "../components/baqara/Locations";
import BaqaraFooter from "../components/baqara/BaqaraFooter";
import { Scissors, Sun } from "lucide-react";

/**
 * BaqaraPage
 * Renders the main Baqara site page with sections for the abattoir,
 * dried meat production, ordering and locations.
 *
 * @returns JSX.Element
 */
export default function BaqaraPage(): JSX.Element {
  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-b from-amber-50 via-red-50/20 to-white py-10 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-800">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-gray-100 bg-white/90 p-6 shadow-xl shadow-red-100/40 backdrop-blur-sm sm:p-8 md:p-10 dark:border-neutral-800 dark:bg-neutral-950/90 dark:shadow-black/40">
          <BaqaraHeader />

          <section className="mt-10 space-y-8 md:space-y-10">
            <ActivitySection
              title="Abatoire"
              summary="De la réception des animaux à la livraison réfrigérée, l'abattoir Baqara applique des protocoles stricts pour l'hygiène, la traçabilité et le respect des normes."
              steps={[
                "Réception des animaux et inspection sanitaire",
                "Repos, stabulation et préparation",
                "Abattage dans le respect des normes en vigueur",
                "Découpe, parage et conditionnement",
                "Étiquetage, traçabilité et chargement en camion frigorifique",
              ]}
              imageSrc="https://pub-cdn.sider.ai/u/U03VH8G8NEJ/web-coder/6a0f9280a419c8a510509386/resource/33cad3ec-1306-45fd-bc5e-12db3e424221.jpg"
              icon={<Scissors className="w-5 h-5" />}
              delay={80}
            />

            <ActivitySection
              title="Production de viande séchée"
              summary="Une viande séchée inspirée des savoir-faire locaux : sélection des morceaux, salage, séchage contrôlé et conditionnement adapté aux besoins de vos clients."
              steps={[
                "Sélection des muscles adaptés à la transformation",
                "Saignée, salage et assaisonnement",
                "Séchage contrôlé (temps, température, hygrométrie)",
                "Contrôle qualité et découpe finale",
                "Conditionnement, stockage et distribution",
              ]}
              imageSrc="https://pub-cdn.sider.ai/u/U03VH8G8NEJ/web-coder/6a0f9280a419c8a510509386/resource/7f8da365-02d7-407e-8be1-020138c57649.jpg"
              icon={<Sun className="w-5 h-5" />}
              delay={160}
            />
          </section>

          <section className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">
            <OrderForm />
            <Locations />
          </section>

          <BaqaraFooter />
        </div>
      </div>
    </main>
  );
}
