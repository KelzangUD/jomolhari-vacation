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
        <h1 className="font-bold text-3xl xl:mt-0 xl:leading-18 lg:text-4xl xl:text-5xl">
          To Our Guests
        </h1>
      </motion.div>
      <motion.div
        initial={{ y: 30 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <h4 className="text-center font-normal tracking-wide my-2 md:my-8 md:leading-12">
          At <b>Jomolhari Vacation</b>, you’re not just another trekker-you’re
          our honored guest. Our affordable, thoughtfully crafted packages
          invite you to explore <b>breathtaking destinations</b> (above 2000
          meters) and embrace a journey like no other. Join us in discovering
          happiness,
          <b>nomadic adventure</b>, and <b>meaningful connections</b> with the
          remotest communities of Bhutan.
        </h4>
      </motion.div>
    </section>
  );
}
