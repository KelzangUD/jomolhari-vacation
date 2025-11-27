"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <div className="p-5 md:p-10 xl:p-15 2xl:p-20  bg-white">
      <h4>Contact Us</h4>
      <p className="my-2 xl:my-4">
        We’re here to help! Reach out to us with any questions or inquires about
        our trekking/hiking adventure’s in Bhutan. You can reach us directly via
        phone or whatsapp or email.
      </p>
      <div className="my-4 xl:my-10 flex flex-col gap-4 md:gap-6">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 xl:gap-10">
            <div className="relative w-4 h-4 2xl:w-6 2xl:h-6">
              <Image
                src="/phone.svg"
                alt="phone"
                fill
                className="object-cover"
              />
            </div>
            <span className="ml-2">
              <p className="text-sm xl:text-base">Phone/whatsapp info</p>
              <p className="text-secondary text-sm xl:text-base ">
                +97517914799
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
              href="tel:+97517914799"
            >
              Call
            </a>
          </motion.div>
        </div>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 xl:gap-10">
            <div className="relative w-4 h-4 2xl:w-6 2xl:h-6">
              <Image
                src="/Mail.svg"
                alt="phone"
                fill
                className="object-cover"
              />
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
      <div>
        <h4>Social Network</h4>
        <div className="flex gap-5 mt-2 md:mt-8">
          <a
            href="https://wa.me/+97517914799"
            target="_blank"
            className="cursor-pointer transition duration-300 ease-in-out hover:scale-115 bg-gray-200 rounded"
          >
            <div className="relative w-8 h-8 md:w-10 md:h-10">
              <Image
                src="/whatsapp.svg"
                alt="whatsapp"
                fill
                className="object-cover p-2"
              />
            </div>
          </a>
          <a
            href="https://www.facebook.com/jomolharivacationtour/"
            target="_blank"
            className="cursor-pointer transition duration-300 ease-in-out hover:scale-115 bg-gray-200 rounded"
          >
            <div className="relative w-8 h-8 md:w-10 md:h-10">
              <Image
                src="/facebook.svg"
                alt="facebook"
                fill
                className="object-cover p-2"
              />
            </div>
          </a>
          <a
            href="https://www.instagram.com/jomolhari_vacation/"
            target="_blank"
            className="cursor-pointer transition duration-300 ease-in-out hover:scale-115 bg-gray-200 rounded"
          >
            <div className="relative w-8 h-8 md:w-10 md:h-10">
              <Image
                src="/instagram.svg"
                alt="instagram"
                fill
                className="object-cover p-2"
              />
            </div>
          </a>
          <a
            href="https://www.tiktok.com/@jomolharivac"
            target="_blank"
            className="cursor-pointer transition duration-300 ease-in-out hover:scale-115 bg-gray-200 rounded"
          >
            <div className="relative w-8 h-8 md:w-10 md:h-10">
              <Image
                src="/tik-tok.svg"
                alt="whatsapp"
                fill
                className="object-cover p-2"
              />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/sonam-rinchen-44571816a/"
            target="_blank"
            className="cursor-pointer transition duration-300 ease-in-out hover:scale-115 bg-gray-200 rounded"
          >
            <div className="relative w-8 h-8 md:w-10 md:h-10">
              <Image
                src="/linkedin.svg"
                alt="linkedin"
                fill
                className="object-cover p-2"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
