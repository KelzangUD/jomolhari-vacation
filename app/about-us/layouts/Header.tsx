"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Header() {
  return (
    <section className="p-5 md:p-10 xl:p-15 2xl:p-20 bg-black/60 bg-cover bg-left md:bg-center bg-[url('/header.jpg')] bg-scroll bg-blend-overlay">
      <div className="flex flex-col justify-center items-center h-[inherit] gap-4 xl:gap-8">
        <motion.span
          initial={{ y: -30 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="flex flex-col gap-6 md:gap-8 items-center my-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="relative w-10 md:w-20 h-10 md:h-20"
          >
            <Image
              src="./logo.svg"
              alt="logo"
              fill
              className="object-contain"
            />
          </motion.span>
          <h1 className="text-white font-bold text-3xl xl:mt-0 xl:leading-18 lg:text-6xl xl:text-7xl">
            Jomolhari Vacation
          </h1>
          <h4 className="text-white nd:-mt-6">
            <q>
              Experience the life of Highlanders in all Seasons with Reasons
            </q>
          </h4>
        </motion.span>
        <motion.div
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="text-base 2xl:text-2xl xl:leading-8 2xl:leading-9 max-w-2xl tracking-wide text-center text-gray-300 pb-10 md:pb-40"
        >
          From alpine meadows to nomadic camps,
          <b className="text-white">Jomolhari Vacation</b> brings you closer to{" "}
          <b className="text-white">Bhutan’s</b> wild beauty with expert guides
          and seamless planning.
        </motion.div>
      </div>
      <div className="text-white flex justify-center">
        <p className="animate-bounce items-center">&darr; Learn More &darr;</p>
      </div>
    </section>
  );
}
