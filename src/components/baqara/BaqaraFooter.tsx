/**
 * File: src/components/baqara/BaqaraFooter.tsx
 * Purpose: Footer for the Baqara page with simple links and legal note.
 */

import React from "react";
import AnimatedReveal from "../AnimatedReveal";
import { Briefcase, Users, Link as LinkIcon, Mail } from "lucide-react";

/**
 * BaqaraFooter
 * Displays quick informational links and a copyright line.
 *
 * @returns JSX.Element
 */
export default function BaqaraFooter(): JSX.Element {
  const links = [
    { label: "Notre entreprise", icon: <Briefcase className="w-4 h-4" /> },
    { label: "Notre équipe", icon: <Users className="w-4 h-4" /> },
    { label: "Nos partenaires", icon: <LinkIcon className="w-4 h-4" /> },
    { label: "Carrières", icon: <Briefcase className="w-4 h-4" /> },
    { label: "Contact", icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <footer className="mt-10 border-t border-gray-100 pt-5 dark:border-neutral-800">
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 text-xs sm:text-sm">
        {links.map((link, index) => (
          <AnimatedReveal key={link.label} delay={260 + index * 70}>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <span className="text-red-600 dark:text-red-300">{link.icon}</span>
              <span>{link.label}</span>
            </div>
          </AnimatedReveal>
        ))}
      </div>

      <p className="mt-5 text-[11px] text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Baqara — Abattoir &amp; produits à base de
        viande. Tous droits réservés.
      </p>
    </footer>
  );
}
