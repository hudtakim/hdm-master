"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gray-50" id="home">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-block bg-red-100 text-red-500 px-4 py-1 rounded-full text-sm mb-4">
            IT Solutions That Drive Your Business Forward
          </div>

          {/* Title */}
          <h1 className="text-5xl font-bold leading-tight">
            Solusi IT untuk <br />
            <span className="text-red-500">Bisnis Modern</span>
          </h1>

          {/* Desc */}
          <p className="mt-6 text-gray-600">
            Kami membantu bisnis berkembang dengan teknologi scalable, efisien, dan modern.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-red-500 text-white px-6 py-3 rounded-xl shadow-md hover:scale-105 transition">
              Get Started →
            </button>

            <button className="border px-6 py-3 rounded-xl hover:bg-gray-100 transition">
              Lihat Portfolio
            </button>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Placeholder Image */}
          <div className="w-full h-[350px] bg-gray-200 rounded-2xl shadow-lg" />

          {/* Floating Card 1 */}
          <div className="absolute top-5 left-5 bg-white px-4 py-2 rounded-xl shadow-md text-sm">
            🚀 Fast Performance
          </div>

          {/* Floating Card 2 */}
          <div className="absolute bottom-5 right-5 bg-white px-4 py-2 rounded-xl shadow-md text-sm">
            🔒 Secure System
          </div>
        </motion.div>

      </div>
    </section>
  );
}