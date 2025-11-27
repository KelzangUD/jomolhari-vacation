import Image from "next/image";
import flowerIcon from "@/public/flower.svg";
import notesIcon from "@/public/notes.svg";
import { motion } from "motion/react";

export default function VisaFee() {
  return (
    <motion.div
      initial={{
        x: -10,
        opacity: 0.7,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{ once: false }}
      className="p-4 md:p-6 xl:p-8 bg-white rounded-md md:rounded-2xl shadow"
    >
      <h6 className="font-semibold">
        Visa Fees & Sustainable Development Fee (SDF)
      </h6>
      <p className="text-xs md:text-base my-4">
        As part of the visa application process, travelers must pay:
      </p>
      <ul className="flex flex-col md:flex-row gap-2 md:gap-4 my-6 text-xs md:text-sm">
        <li className="bg-gray-100 p-2 md:p-6 rounded-md md:rounded-2xl base-1/2 w-full flex flex-col justify-between">
          <div className="flex gap-4 items-center">
            <div className="relative h-6 w-6 md:w-10 md:h-10 bg-blue-100 rounded-full">
              <Image
                src={flowerIcon}
                alt="flower"
                fill
                className="object-contain p-1 md:p-2"
              />
            </div>
            <div className="font-semibold text-sm md:text-base">
              Sustainable Development Fee (SDF):
            </div>
          </div>
          <p className="text-xs md:text-sm text-secondary mt-4 leading-5 flex flex-col">
            <span className="text-sm md:text-xl font-bold text-black">
              US $100
            </span>
            <span>
              per day (per adult) Concessionary rates apply for children.
            </span>
          </p>
        </li>
        <li className="bg-gray-100 p-2 md:p-6 rounded-md md:rounded-2xl base-1/2 w-full flex flex-col justify-between">
          <div className="flex gap-4 items-center">
            <div className="relative h-6 w-6 md:w-10 md:h-10 bg-blue-100 rounded-full">
              <Image
                src={notesIcon}
                alt="document"
                fill
                className="object-contain p-1 md:p-2"
              />
            </div>
            <div className="font-semibold text-sm md:text-base">
              Visa Application Fee:
            </div>
          </div>
          <p className="text-xs md:text-sm text-secondary mt-4 leading-5 flex flex-col">
            <span className="text-sm md:text-xl font-bold text-black">
              US $40
            </span>
            <span>per (one-off, non-refundable)</span>
          </p>
        </li>
      </ul>
      <div className="flex items-center gap-4 my-4">
        <a
          href="https://immi.gov.bt/faq/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 items-center text-xs md:text-sm rounded-md cursor-pointer underline-offset-5 hover:underline hover:font-semibold transition ease-in-out duration-150"
        >
          For More Info →
        </a>
      </div>
    </motion.div>
  );
}
