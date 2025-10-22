import Image from "next/image";
import jomolhariTrekImage from "@/public/jomolhari trek.png";
import snowManTrekImage from "@/public/snow-man-trek.jpg";
import drukPathTrekImage from "@/public/druk-path-trek.jpg";
import dagalaTrekImage from "@/public/dagala-trek.jpg";
import Card from "../components/Card";

const trailsData = [
  {
    image: jomolhariTrekImage,
    title: "Jomolhari Trek",
    subtitle: "4D3N | Nu.10,500/-",
    difficulty: "Moderate",
  },
  {
    image: snowManTrekImage,
    title: "Snowman Trek",
    subtitle: "25D24N | Nu.100,500/-",
    difficulty: "Challenging",
  },
  {
    image: drukPathTrekImage,
    title: "Druk Path Trek",
    subtitle: "6D5N | Nu.20,500/-",
    difficulty: "Moderate",
  },
  {
    image: dagalaTrekImage,
    title: "Dagala Trek",
    subtitle: "6D5N | Nu.10,500/-",
    difficulty: "Moderate",
  },
];

export default function Trails() {
  return (
    <div className="p-5 md:p-10 xl:px-15 2xl:px-20 xl:py-25 bg-white">
      <h4 className="mt-15">Feature Packages</h4>
      <p className="my-2 xl:my-4">
        Explore our curated trekking/hiking itineraries in Bhutan ranging from
        easy day hikes to challenging multi-day treks.
      </p>
      <div className="relative">
        <input
          placeholder="Search for hike/trek"
          className="border border-border py-2 px-6 rounded-2xl bg-border/10 w-full my-2 pl-12"
        />
        <Image
          src="/search.svg"
          alt="search"
          width={20}
          height={20}
          className="absolute top-5 left-4"
        />
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 xl:gap-10 my-6 xl:my-10">
        {trailsData.map((trail) => (
          <Card
            image={trail?.image}
            title={trail?.title}
            subtitle={trail?.subtitle}
            height="h-50 md:h-70 xl:h-80 2xl:h-100"
            difficulty={trail?.difficulty}
            key={trail?.title}
          />
        ))}
      </div>
    </div>
  );
}
