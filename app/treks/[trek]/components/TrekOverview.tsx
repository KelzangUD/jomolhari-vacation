import Image from "next/image";
import clockIcon from "@/public/Clock.svg";
import triangleIcon from "@/public/Triangle.svg";
import userIcon from "@/public/users.svg";

type TrekOverViewProps = {
  trekOverview: string;
  days?: string;
  difficulty: string;
  groupSize: string;
};

export default function TrekOverview({
  trekOverview,
  days,
  difficulty,
  groupSize,
}: TrekOverViewProps) {
  return (
    <section>
      <h6 className="text-base md:text-2xl">Trek Overview</h6>
      <div className="grid grid-cols-3 gap-2 md:gap-6 my-4">
        <div className="flex flex-col justify-between gap-4 items-center text-center p-4 shadow-xs bg-background rounded-md md:rounded-2xl">
          <span className="relative w-12 h-12 bg-blue-100 rounded-full">
            <Image
              src={clockIcon}
              alt="clock"
              fill
              className="object-contain p-3"
            />
          </span>
          <span>
            <h6 className="text-sm md:text-base">Duration</h6>
            <p className="text-secondary text-xs md:text-sm md:-mt-2">{days}</p>
          </span>
        </div>
        <div className="flex flex-col justify-between gap-4 items-center text-center p-4 shadow-xs bg-background rounded-md md:rounded-2xl">
          <span className="relative w-12 h-12 bg-blue-100 rounded-full">
            <Image
              src={triangleIcon}
              alt="triangle"
              fill
              className="object-contain p-3"
            />
          </span>
          <span>
            <h6 className="text-sm md:text-base">Difficulty</h6>
            <p className="text-secondary text-xs md:text-sm md:-mt-2">
              {difficulty}
            </p>
          </span>
        </div>
        <div className="flex flex-col justify-between gap-4 items-center text-center p-4 shadow-xs bg-background rounded-md md:rounded-2xl">
          <span className="relative w-12 h-12 bg-blue-100 rounded-full">
            <Image
              src={userIcon}
              alt="users"
              fill
              className="object-contain p-3"
            />
          </span>
          <span>
            <h6 className="text-sm md:text-base">Group Size</h6>
            <p className="text-secondary text-xs md:text-sm md:-mt-2">
              {groupSize}
            </p>
          </span>
        </div>
      </div>
      <p className="my-2 text-xs md:text-base text-justify leading-6 text-secondary">
        {trekOverview}
      </p>
    </section>
  );
}
