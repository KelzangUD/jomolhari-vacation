import Image, { StaticImageData } from "next/image";
import clockIcon from "@/public/Clock.svg";
import triangleIcon from "@/public/Triangle.svg";
import userIcon from "@/public/users.svg";
import { motion } from "motion/react";

type TrekOverViewProps = {
  trekOverview: string;
  days?: string;
  difficulty: string;
  groupSize: string;
};

const OverviewCard = ({
  icon,
  title,
  subtitle,
}: {
  icon: StaticImageData;
  title: string;
  subtitle?: string;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.7,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
      className="flex flex-col justify-between gap-4 items-center text-center p-4 shadow-xs bg-background rounded-md md:rounded-2xl"
    >
      <span className="relative w-12 h-12 bg-blue-100 rounded-full">
        <Image src={icon} alt="clock" fill className="object-contain p-3" />
      </span>
      <span>
        <h6 className="text-sm md:text-base">{title}</h6>
        <p className="text-secondary text-xs md:text-sm md:-mt-2">{subtitle}</p>
      </span>
    </motion.div>
  );
};

export default function TrekOverview({
  trekOverview,
  days,
  difficulty,
  groupSize,
}: TrekOverViewProps) {
  return (
    <section>
      <motion.div
        initial={{
          opacity: 0,
          y: -60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <h6 className="text-base md:text-2xl">Trek Overview</h6>
      </motion.div>
      <div className="grid grid-cols-3 gap-2 md:gap-6 my-4">
        <OverviewCard icon={clockIcon} title="Duration" subtitle={days} />
        <OverviewCard
          icon={triangleIcon}
          title="Difficulty"
          subtitle={difficulty}
        />
        <OverviewCard icon={userIcon} title="Group Size" subtitle={groupSize} />
      </div>
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <p className="my-2 text-xs md:text-base text-justify leading-6 text-secondary">
          {trekOverview}
        </p>
      </motion.div>
    </section>
  );
}
