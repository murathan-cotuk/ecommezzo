"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedSection() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section className="bg-gray-50 dark:bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* BAŞLIK */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl mr-40 ml-40 mb-20 font-bold text-gray-800 dark:text-gray-900"
        >
          Für diese Dinge sind wir der richtige Ansprechpartner für dich
        </motion.h1>

        {/* LİSTE */}
        <ul className="mt-8 space-y-6">
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <motion.img
                src="/logo1.png"
                alt="Logo"
                className="w-12 h-12"
                whileHover={{ scale: 1.1 }}
              />
              <div>
                <h2 className="text-lg font-semibold">Başlık 1</h2>
                <p className="text-gray-600">Kısa açıklama 1</p>
              </div>
            </div>

            {/* BUTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition-all duration-300"
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? "Details Verstecken" : "Details Anzeigen"}
            </motion.button>
          </motion.li>
        </ul>

        {/* DETAYLAR */}
        {showDetails && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-8 grid grid-cols-2 gap-6"
          >
            <div className="bg-white p-4 shadow-md rounded-lg">
              <h3 className="font-semibold">Tabel 1</h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Madde 1</li>
                <li>Madde 2</li>
                <li>Madde 3</li>
              </ul>
            </div>
            <div className="bg-white p-4 shadow-md rounded-lg">
              <h3 className="font-semibold">Tabel 2</h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Madde A</li>
                <li>Madde B</li>
                <li>Madde C</li>
              </ul>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
