"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";

type PrimaryButtonProps = {
  text: string;
  onClick?: () => void;
  style?: string;
  icon?: StaticImageData;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  onClick,
  style,
  icon,
}) => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
      whileInView={{ opacity: 1 }}
      className={`bg-blue-600 py-2 px-4 rounded-md overflow-hidden cursor-pointer text-sm lg:text-base text-white ${style} hover:bg-blue-700`}
      onClick={onClick}
    >
      {text}
      {icon && <Image src={icon} alt="title" width={20} height={20} />}
    </motion.button>
  );
};

export default PrimaryButton;
