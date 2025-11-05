import Image, { StaticImageData } from "next/image";

import passportIcon from "@/public/passport.svg";
import airplaneIcon from "@/public/airplane.svg";
import cameraIcon from "@/public/camera.svg";
import cardIcon from "@/public/card.svg";

const ListItem = ({
  icon,
  alt,
  desc,
}: {
  icon: StaticImageData;
  alt: string;
  desc: string;
}) => {
  return (
    <li className="flex gap-4 items-center">
      <div className="relative w-5 h-5">
        <Image src={icon} alt={alt} fill className="object-contain" />
      </div>
      <div>{desc}</div>
    </li>
  );
};

export default function Apply() {
  return (
    <section className="p-4 md:p-6 xl:p-8 bg-white rounded-md md:rounded-2xl shadow">
      <h6 className="font-semibold">What You’ll Need to Apply</h6>
      <p className="text-xs md:text-base text-secondary">
        To apply for a visa online, please prepare:
      </p>
      <ul className="flex flex-col gap-4 my-6 text-xs md:text-sm">
        <ListItem
          icon={passportIcon}
          alt="passport"
          desc="A digital copy of your valid passport"
        />
        <ListItem
          icon={cameraIcon}
          alt="camera"
          desc="A recent digital passport photo"
        />
        <ListItem
          icon={airplaneIcon}
          alt="airplane"
          desc="Your arrival and departure dates"
        />
        <ListItem icon={cardIcon} alt="card" desc="Payment details" />
      </ul>
      <i className="text-xs md:text-sm text-secondary text-justify leading-4">
        (Tip: Inform your bank about the international transfer to Bhutan to
        avoid delays.)
      </i>
      <div className="mt-6">
        {" "}
        <a
          href="https://immi.gov.bt/home/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-sm text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          {" "}
          Apply for Visa{" "}
        </a>{" "}
      </div>
    </section>
  );
}
