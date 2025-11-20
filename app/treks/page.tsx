import Image from "next/image";
import Card from "../components/Card";
import { packageData } from "../data/packageData";

export default function Trails() {
  return (
    <div className="p-5 md:p-10 xl:p-15 2xl:p-20 bg-white">
      <h4>Feature Packages</h4>
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
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-6 my-6">
        {packageData?.map((item) => (
          <Card
            image={item?.image}
            title={item?.title}
            subtitle={`${item?.packageDuration} | ${item?.packageFee}`}
            height="h-50 lg:h-70 xl:h-90"
            link={`/treks/${item?.title}`}
            key={item?.title}
          />
        ))}
      </div>
    </div>
  );
}
