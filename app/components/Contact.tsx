"use client";
import Image from "next/image";
import { motion } from "motion/react";
import phoneIcon from "@/public/phone.svg";
import mailIcon from "@/public/Mail.svg";

export default function Contact({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="my-8 xl:mt-10">
      <h6 className="my-1">{title}</h6>
      <p className="text-sm md:text-xl">{subtitle}</p>
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 xl:gap-10">
          <div className="relative w-4 h-4 2xl:w-6 2xl:h-6">
            <Image src={phoneIcon} alt="phone" fill className="object-cover" />
          </div>
          <span className="ml-2">
            <p className="text-sm xl:text-base">Phone/whatsapp info</p>
            <p className="text-secondary text-sm xl:text-base ">+97517914799</p>
          </span>
        </span>
        <motion.div
          initial={{
            scale: 1,
            y: 0,
          }}
          whileHover={{
            y: -3,
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          <a
            className="px-6 py-2 rounded-md bg-blue-100 cursor-pointer font-bold text-xs md:text-base text-blue-500"
            href="tel:+97517914799"
          >
            Call
          </a>
        </motion.div>
      </div>
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 xl:gap-10">
          <div className="relative w-4 h-4 2xl:w-6 2xl:h-6">
            <Image src={mailIcon} alt="mail" fill className="object-cover" />
          </div>
          <span className="ml-2">
            <p className="text-sm xl:text-base">Mail</p>
            <p className="text-secondary text-sm xl:text-base ">
              sonamvacation@gmail.com
            </p>
          </span>
        </span>
        <motion.div
          initial={{
            scale: 1,
            y: 0,
          }}
          whileHover={{
            y: -3,
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          <a
            className="px-6 py-2 rounded-md bg-blue-100 cursor-pointer font-bold text-xs md:text-base text-blue-500"
            href="mailto:sonamvacation@gmail.com"
          >
            Send Mail
          </a>
        </motion.div>
      </div>
    </div>
  );
}
