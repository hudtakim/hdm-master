"use client";

import { motion } from "framer-motion";

export default function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      tech: "Next.js / Node.js",
    },
    {
      title: "ERP System",
      tech: "React / Express",
    },
    {
      title: "Company Profile",
      tech: "Next.js / Tailwind",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="portfolio">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-3xl font-bold">
            Portfolio <span className="text-red-500">Kami</span>
          </h2>

          <p className="mt-4 text-gray-600">
            Project terbaik kami
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {projects.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition"
            >
              <div className="h-40 bg-gray-200 rounded-xl" />

              <h3 className="mt-4 font-semibold text-lg">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {item.tech}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}