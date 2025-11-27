"use client";
import { motion } from "motion/react";

import Link from "next/link";
import arrowRightIcon from "@/public/arrow-right.svg";
import Card from "../components/Card";
import PrimaryButton from "../ui/PrimaryButton";
import { packageData } from "../data/packageData";

export default function FeaturePackage() {
  return (
    <section className="z-10 p-5 md:p-10 xl:p-15 2xl:py-20 2xl:px-20 bg-white">
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <h4>Feature Packages</h4>
        <p className="my-2 lg:my-4">
          Discover our top travel experiences designed for every explorer.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 my-5 md:my-10">
        {packageData?.map((item) => (
          <Card
            image={item?.image}
            title={item?.title}
            subtitle={`${item?.packageDuration} | ${item?.packageFee}`}
            height="h-50 lg:h-60 xl:h-70"
            link={`/treks/${item?.title}`}
            key={item?.title}
          />
        ))}
      </div>
      <div className="">
        <Link href="/treks">
          <PrimaryButton
            text="Explore All"
            icon={arrowRightIcon}
            style="flex justify-between items-center gap-4"
          />
        </Link>
      </div>
    </section>
  );
}
