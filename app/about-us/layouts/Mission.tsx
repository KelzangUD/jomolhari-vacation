"use client";

import { motion } from "motion/react";

export default function Mission() {
  return (
    <section className="p-5 md:p-10 xl:p-15 2xl:p-20 bg-gradient-to-b from-gray-200 to-gray-50 to-99% text-center">
      <motion.div
        initial={{ y: -30 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <h1 className="font-bold text-3xl xl:mt-0 xl:leading-18 lg:text-5xl xl:text-6xl">
          Mission
        </h1>
      </motion.div>
      <motion.div
        initial={{ y: 30 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <h4 className="text-center font-normal tracking-wide my-2 md:my-8 md:leading-12">
          Provide authentic and transformative trekking experiences in the heart
          of the Himalayas. We are committed to sustainable tourism, preserving
          Bhutan’s unique culture and environment, and creating unforgettable
          journeys for our clients.
        </h4>
      </motion.div>
    </section>
  );
}
