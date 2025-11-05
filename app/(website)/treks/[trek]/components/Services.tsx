import Image, { StaticImageData } from "next/image";
import usersIcon from "@/public/users.svg";
import carIcon from "@/public/car.svg";
import foodIcon from "@/public/food.svg";
import gearIcon from "@/public/gear.svg";
import otherIcon from "@/public/other.svg";
import excludeIcon from "@/public/exclude.svg";

type InclusiveProps = {
  supportAndStaff: string;
  logistics: string;
  accommodationAndMeals: string;
  equipment: string;
  Other: string;
};

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
    <li className="flex gap-4">
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
    </li>
  );
};

export default function Services({
  inclusive,
  exclusive,
}: {
  inclusive?: InclusiveProps;
  exclusive?: string[];
}) {
  return (
    <div className="my-8 grid md:grid-cols-2 gap-8">
      <div>
        <h6 className="text-base md:text-2xl">What is Included ?</h6>
        <ul className="my-4 flex flex-col gap-2">
          <ListItem
            icon={usersIcon}
            main="Support & Staff"
            sub={inclusive?.supportAndStaff}
          />
          <ListItem
            icon={carIcon}
            main="Logistics"
            sub={inclusive?.logistics}
          />
          <ListItem
            icon={foodIcon}
            main="Accommodation And Meals"
            sub={inclusive?.accommodationAndMeals}
          />
          <ListItem
            icon={gearIcon}
            main="Equipment"
            sub={inclusive?.equipment}
          />
          <ListItem icon={otherIcon} main="Other" sub={inclusive?.Other} />
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
