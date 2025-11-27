"use client";

import Overview from "./components/Overview";
import VisaFee from "./components/VisaFee";
import Steps from "./components/Steps";
import Apply from "./components/Apply";
import Assistance from "./components/Assistance";
import { motion } from "motion/react";

export default function Visa() {
  return (
    <section className="p-5 md:p-10 xl:p-15 2xl:p-20 bg-cover bg-top bg-gray-100 bg-[url('/map.svg')] bg-blend-overlay">
      <motion.div
        initial={{ y: -30 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <h4>Bhutan Visa Information</h4>
        <p className="my-2 text-xs md:text-base">
          Your complete guide to visa applications, required documents, and
          entry requirements for your unforgettable journey to Bhutan.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-6 gap-8 mt-8">
        <div className="flex flex-col gap-4 md:col-span-4">
          <Overview />
          <VisaFee />
          <Steps />
        </div>
        <div className="flex flex-col gap-4 md:col-span-2">
          <Apply />
          <Assistance />
        </div>
      </div>
    </section>
  );
}
