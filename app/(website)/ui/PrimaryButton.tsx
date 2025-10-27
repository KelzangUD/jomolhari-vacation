"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image, { StaticImageData } from "next/image";

gsap.registerPlugin(ScrollTrigger);

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
  const buttonRef = useRef(null);
  useGSAP(
    () => {
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: buttonRef.current,
            toggleActions: "play reverse play reverse",
          },
        }
      );
    },
    { scope: buttonRef, revertOnUpdate: true }
  );
  return (
    <button
      ref={buttonRef}
      className={`bg-primary py-2 px-4 rounded-md overflow-hidden cursor-pointer text-sm lg:text-base text-white ${style} hover:bg-blue-700`}
      onClick={onClick}
    >
      {text}
      {icon && <Image src={icon} alt="title" width={20} height={20} />}
    </button>
  );
};

export default PrimaryButton;
