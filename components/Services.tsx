"use client";

import { motion } from "framer-motion";
import { Code, Settings, MessageCircle } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "Website modern, cepat, dan responsif.",
      icon: Code,
    },
    {
      title: "System Integration",
      desc: "Integrasi sistem yang efisien & scalable.",
      icon: Settings,
    },
    {
      title: "IT Consulting",
      desc: "Strategi IT untuk perkembangan bisnis.",
      icon: MessageCircle,
    },
  ];

  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            Layanan <span className="text-red-500">Kami</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Solusi IT terbaik untuk bisnis Anda
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {services.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="p-6 bg-gray-50 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-red-100 w-12 h-12 flex items-center justify-center rounded-xl">
                  <Icon className="text-red-500" />
                </div>

                <h3 className="mt-4 font-semibold text-lg">
                  {item.title}
                </h3>

                <p className="mt-2 text-gray-600 text-sm">
                  {item.desc}
                </p>

                <p className="mt-4 text-red-500 text-sm">
                  Learn More →
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}