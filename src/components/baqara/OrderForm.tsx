/**
 * File: src/components/baqara/OrderForm.tsx
 * Purpose: Client-side order form allowing Baqara customers to request products online.
 */

import React, { useState } from "react";
import AnimatedReveal from "../AnimatedReveal";
import { ShoppingCart, Mail } from "lucide-react";

/**
 * OrderFormData
 * Shape of the order form data stored in local state.
 */
interface OrderFormData {
  name: string;
  email: string;
  product: string;
  quantity: number;
  address: string;
  notes: string;
}

/**
 * OrderForm
 * Collects basic information (contact, produit, quantité, adresse).
 * Currently logs the data to the console and shows a simple alert.
 *
 * @returns JSX.Element
 */
export default function OrderForm(): JSX.Element {
  const [form, setForm] = useState<OrderFormData>({
    name: "",
    email: "",
    product: "Viande fraîche",
    quantity: 1,
    address: "",
    notes: "",
  });

  /**
   * handleChange
   * Generic handler for all input changes.
   *
   * @param e - Change event from input, textarea or select
   */
  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "quantity" ? Number(value) : value,
    }));
  }

  /**
   * handleSubmit
   * Handles form submission. Replace the alert/console log with an API call
   * once the backend is available.
   *
   * @param e - Form event
   */
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Placeholder: replace with real API integration.
    console.log("Commande Baqara soumise :", form);
    alert(
      `Merci ${form.name || "client"} — votre demande de commande a été reçue (simulation).`
    );
    setForm({
      name: "",
      email: "",
      product: "Viande fraîche",
      quantity: 1,
      address: "",
      notes: "",
    });
  }

  return (
    <AnimatedReveal delay={140}>
      <section
        id="commande"
        className="rounded-2xl border border-gray-100 bg-white/90 px-5 py-6 dark:border-neutral-800 dark:bg-neutral-950/90"
      >
        <header className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
              Commander en ligne
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
              Décrivez votre besoin, nous vous recontactons pour confirmer les
              quantités, le conditionnement et la livraison.
            </p>
          </div>
          <div className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-200">
            <ShoppingCart className="w-4 h-4" />
          </div>
        </header>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4 text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">
                Nom complet
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">
                Produit souhaité
              </label>
              <select
                name="product"
                value={form.product}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
              >
                <option>Viande fraîche</option>
                <option>Viande séchée</option>
                <option>Découpe spécifique</option>
                <option>Autre (préciser dans les notes)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">
                Quantité estimée (kg)
              </label>
              <input
                name="quantity"
                type="number"
                min={1}
                value={form.quantity}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">
              Adresse de livraison
            </label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              rows={2}
              className="mt-1 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">
              Notes complémentaires (jours de livraison, contraintes, etc.)
            </label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              rows={2}
              className="mt-1 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
              Envoyer la demande
            </button>
            <p className="flex items-center gap-1 text-[11px] text-gray-500 dark:text-gray-400">
              <Mail className="w-3.5 h-3.5" />
              <span>
                Nous vous répondrons par email avec un devis et une date
                proposée.
              </span>
            </p>
          </div>
        </form>
      </section>
    </AnimatedReveal>
  );
}
