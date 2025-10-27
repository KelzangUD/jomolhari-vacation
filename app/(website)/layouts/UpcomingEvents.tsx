import { StaticImageData } from "next/image";
import highLandImage from "@/public/highland festival.png";
import Card from "../components/Card";

interface EventData {
  image: StaticImageData; // Assuming highLandImage is a string URL
  title: string;
  date: string;
  location: string;
}

const data: EventData[] = [
  {
    image: highLandImage,
    title: "Laya Highland Festival",
    date: "Date: October 23-24, 2025",
    location: "Location: Laya village, Gasa District, Bhutan",
  },
];

export default function UpcomingEvents() {
  return (
    <>
      {data?.length > 0 && (
        <div className="p-5 pb-10 md:pb-15 xl:pb-20 2xl:pb-25 md:p-10 xl:p-15 2xl:p-20 bg-light-secondary">
          <h4>Upcoming Events</h4>
          <p className="mb-4 md:mb-6 2xl:mt-4 ">
            Join our scheduled adventures and cultural festivals in Bhutan.
          </p>
          {data?.map((item) => (
            <Card
              image={item?.image}
              title={item?.title}
              height="h-50 md:h-60 lg:h-80 xl:h-100 2xl:h-120"
              date={item?.date}
              location={item?.location}
              key={item?.title}
            />
          ))}
        </div>
      )}
    </>
  );
}
