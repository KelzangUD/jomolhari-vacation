import Image, { StaticImageData } from "next/image";
import usersIcon from "@/public/users.svg";
import carIcon from "@/public/car.svg";
import foodIcon from "@/public/food.svg";
import gearIcon from "@/public/gear.svg";
import otherIcon from "@/public/other.svg";
import excludeIcon from "@/public/exclude.svg";
import { motion } from "motion/react";

const ListItem = ({
  icon,
  main,
  sub,
}: {
  icon: StaticImageData;
  main: string;
  sub?: string;
}) => {
  return (
    <motion.li
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
      className="flex gap-4"
    >
      <div className="absolute w-4 h-4 mt-2">
        <Image src={icon} alt={main} fill className="object-contain" />
      </div>
      <div className="ml-8 md:ml-10">
        <p className="font-semibold text-sm md:text-base">
          {main}:{" "}
          <span className="text-secondary text-sm md:text-base text-justify font-normal">
            {sub}
          </span>
        </p>
      </div>
    </motion.li>
  );
};

export default function Services({ exclusive }: { exclusive?: string[] }) {
  return (
    <div className="my-8 grid md:grid-cols-2 gap-8">
      <div>
        <h6 className="text-base md:text-2xl">What is Included ?</h6>
        <ul className="my-4 flex flex-col gap-2">
          <ListItem
            icon={usersIcon}
            main="Supporting Staff"
            sub="Potter ponies, professional trekking guide, Trekking cook, and trekking assistance"
          />
          <ListItem
            icon={carIcon}
            main="Logistics"
            sub="Transportation (Drop & Pick)."
          />
          <ListItem
            icon={foodIcon}
            main="Accommodation And Meals"
            sub="Accommodation (Tent, Guest House & Farm house), all meals (B, L & D), fruits, tea & snacks, and boiled drinking water."
          />
          <ListItem
            icon={gearIcon}
            main="Equipment"
            sub="Sleeping Tent, solar lamp, pillow, hot water bag, kitchen sets, kitchen tent, toilet."
          />
          <ListItem
            icon={otherIcon}
            main="Other"
            sub="Hot water for morning/evening washing and First Aid Kit."
          />
        </ul>
      </div>
      <div>
        <h6 className="text-base md:text-2xl">What is Excluded ?</h6>
        <ul className="my-4 flex flex-col gap-2">
          {exclusive?.map((item: string) => (
            <ListItem
              key={item}
              icon={excludeIcon}
              main={item.split(":")[0]}
              sub={item?.split(":")[1]}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
