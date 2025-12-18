import { motion } from "motion/react";

type itineraryOverviewArrayProps = {
  day: number;
  place: string;
  description: string;
  keyActivity: string;
};

type itineraryOverviewProps = {
  itineraryOverview?: itineraryOverviewArrayProps[];
};

const TimeLineItem: React.FC<{
  day: number;
  place: string;
  description: string;
  keyActivity: string;
}> = ({ day, place, description, keyActivity }) => {
  return (
    <>
      <motion.div
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
        className="relative pl-8 sm:pl-32 group"
      >
        <div className="font-semibold text-sm md:text-xl">{place}</div>
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-6 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-blue-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-0.5">
          <time className="md:-mt-1 sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase px-3 py-1 sm:mb-0 text-primary bg-blue-100 rounded-full">
            Day {day}
          </time>
          <div className="text-xs md:text-base text-slate-900 mt-2">
            {keyActivity}
          </div>
        </div>
        <div className="text-xs md:text-base text-secondary">{description}</div>
      </motion.div>
    </>
  );
};

export default function ItineraryOverview({
  itineraryOverview,
}: itineraryOverviewProps) {
  return (
    <div>
      <h6 className="text-base md:text-2xl">Itinerary Overview</h6>
      <div className="flex flex-col gap-8 my-2 md:my-8">
        {itineraryOverview?.map((item, index) => (
          <TimeLineItem
            key={index}
            day={item?.day}
            place={item?.place}
            description={item?.description}
            keyActivity={item?.keyActivity}
          />
        ))}
      </div>
    </div>
  );
}
