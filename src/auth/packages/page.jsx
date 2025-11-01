"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

export default function PackagesPage() {
  const [selectedPlan, setSelectedPlan] = useState('professional');
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: { monthly: 29, yearly: 290 },
      description: 'Perfekt für kleine Stores',
      features: [
        'Bis zu 10.000 Seitenaufrufe',
        'Basis Analytics Dashboard',
        'E-Mail Support',
        'Grundlegende Berichte',
        '1 Shopify Store'
      ],
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional',
      price: { monthly: 49, yearly: 490 },
      description: 'Ideal für wachsende Unternehmen',
      features: [
        'Bis zu 50.000 Seitenaufrufe',
        'Erweiterte Analytics & Heatmaps',
        'Prioritäts-Support',
        'Datenexport',
        'Bis zu 3 Shopify Stores',
        'A/B Testing',
        'Erweiterte Berichte'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: { monthly: 99, yearly: 990 },
      description: 'Für große Unternehmen',
      features: [
        'Unbegrenzte Seitenaufrufe',
        'Alle Funktionen enthalten',
        'Dedizierter Support',
        'Custom Integrationen',
        'Unbegrenzte Stores',
        'White-Label Optionen',
        'API-Zugang'
      ],
      popular: false
    }
  ];

  const handleSelectPlan = (planId) => {
    setSelectedPlan(planId);
  };

  const handleContinue = () => {
    // Redirect to payment or dashboard
    window.location.href = '/dashboard';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Wählen Sie Ihren <span className="text-#8f1818">Plan</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Starten Sie mit einer kostenlosen 14-tägigen Testversion. Keine Kreditkarte erforderlich.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white rounded-lg p-1 shadow-lg">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-#8f1818 text-white shadow-lg'
                  : 'text-gray-600 hover:text-#8f1818'
              }`}
            >
              Monatlich
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                billingCycle === 'yearly'
                  ? 'bg-#8f1818 text-white shadow-lg'
                  : 'text-gray-600 hover:text-#8f1818'
              }`}
            >
              Jährlich
              <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                -20% sparen
              </span>
            </button>
          </div>
        </motion.div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                selectedPlan === plan.id
                  ? 'ring-2 ring-#8f1818 scale-105'
                  : 'hover:scale-102'
              } ${plan.popular ? 'border-2 border-#8f1818' : ''}`}
              onClick={() => handleSelectPlan(plan.id)}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-#8f1818 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Beliebteste Wahl
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    €{plan.price[billingCycle]}
                  </span>
                  <span className="text-gray-600 ml-2">
                    /{billingCycle === 'monthly' ? 'Monat' : 'Jahr'}
                  </span>
                </div>
                {billingCycle === 'yearly' && (
                  <p className="text-sm text-green-600 font-semibold">
                    Sie sparen €{plan.price.monthly * 12 - plan.price.yearly} pro Jahr
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg className="w-5 h-5 text-#8f1818 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-lg font-bold text-lg transition-all duration-300 ${
                  selectedPlan === plan.id
                    ? 'bg-#8f1818 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-#8f1818/10 hover:text-#8f1818'
                }`}
              >
                {selectedPlan === plan.id ? 'Ausgewählt' : 'Auswählen'}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Continue Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            onClick={handleContinue}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-#8f1818 text-white px-12 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Kostenlose Testversion starten
          </motion.button>
          <p className="text-sm text-gray-600 mt-4">
            14 Tage kostenlos • Keine Kreditkarte erforderlich • Jederzeit kündbar
          </p>
        </motion.div>
      </div>
    </div>
  );
}
