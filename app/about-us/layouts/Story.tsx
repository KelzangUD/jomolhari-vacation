import Image, { StaticImageData } from "next/image";
import calenderIcon from "@/public/calendar.svg";
import markerIcon from "@/public/marker.svg";
import trophyIcon from "@/public/trophy.svg";
import { time } from "console";

const TimeLineData = [
  {
    title: "Founded in 2016",
    description:
      "Jomolhari Vacation was established with a passion for sharing the beauty of Bhutan.",
    icon: calenderIcon,
  },
  {
    title: "Expanded Trekking Routes",
    description:
      "We introduced new trekking routes to explore diverse landscape and cultures.",
    icon: markerIcon,
  },
  {
    title: "Received Sustainability Award",
    description:
      "Recognized for our commitment to responsible tourism practices.",
    icon: trophyIcon,
  },
];

const TimeLineItem: React.FC<{
  title: string;
  description: string;
  icon: StaticImageData;
  index: number;
}> = ({ title, description, icon, index }) => {
  return (
    <>
      <div className="flex gap-10">
        <div className="mt-2">
          <div className="relative w-5 h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7">
            <Image src={icon} alt={title} fill className="object-contain" />
          </div>
        </div>
        <div>
          <h6>{title}</h6>
          <p>{description}</p>
        </div>
      </div>
      {index < TimeLineData.length - 1 && (
        <hr className="border-black h-10 rotate-90 transform origin-center w-8 lg:w-9 xl:w-10 2xl:w-24 -translate-x-6.5 lg:-translate-x-7 lg:-translate-y-3.5 xl:-translate-x-6  -translate-y-2 xl:-translate-y-3 2xl:-translate-x-13" />
      )}
    </>
  );
};

export default function Story() {
  return (
    <div className="bg-white/70 bg-cover bg-center bg-[url('/story-bg.jpg')] bg-blend-overlay w-full h-90 lg:h-100 xl:h-150 p-5 md:p-10 xl:px-15 2xl:px-20">
      <div className="flex flex-col justify-center gap-2 md:gap-4 lg:gap-6 xl:h-[inherit] xl:gap-8">
        <h4>Our Story</h4>
        <div className="flex flex-col 2xl:gap-10">
          {TimeLineData?.map((item, index) => (
            <TimeLineItem
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
