"use client";

import Image, { StaticImageData } from "next/image";
import mountainImage from "@/public/mountain.svg";
import leafImage from "@/public/leaf.svg";
import usersImage from "@/public/users.svg";
import { motion } from "motion/react";

type CardProps = {
  image: StaticImageData;
  title: string;
  desc: string;
  index: number;
};

const Card: React.FC<CardProps> = ({ image, title, desc, index }) => {
  return (
    <motion.div
      initial={{ scale: 0.7, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 * index }}
      viewport={{ once: false }}
      className="border border-border rounded-md md:rounded-2xl p-4 xl:p-8 bg-white"
    >
      <div className="relative w-5 h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <p className="font-bold my-2 xl:my-4">{title}</p>
      <p className="mt-2 2xl:mt-4 text-gray-600 text-justify">{desc}</p>
    </motion.div>
  );
};

export default function Values() {
  return (
    <section className="p-5 md:p-10 xl:px-15 2xl:p-20 bg-white">
      <motion.div
        initial={{ y: -30 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <h4>Values</h4>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6 my-2 md:my-5">
        <Card
          image={mountainImage}
          title="Authenticity"
          desc="We offer genuine experiences that immerse you in Bhutanese highlanders' culture and natural landscape."
          index={1}
        />
        <Card
          image={leafImage}
          title="Sustainability"
          desc="We are dedicated to responsible travel that minimizes our environmental impact."
          index={2}
        />
        <Card
          image={usersImage}
          title="Community"
          desc="We work closely with local communities to support their livelihoods and preserve their heritage."
          index={3}
        />
      </div>
    </section>
  );
}
