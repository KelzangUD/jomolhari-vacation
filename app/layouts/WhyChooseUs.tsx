import Image, { StaticImageData } from "next/image";
import guidesImage from "@/public/guides.svg";
import packageImage from "@/public/package.svg";
import responsibleImage from "@/public/responsible.svg";

type CardProps = {
  image: StaticImageData;
  title: string;
  desc: string;
};

const Card: React.FC<CardProps> = ({ image, title, desc }) => {
  return (
    <div className="border border-border rounded-2xl p-3 lg:p-4 xl:p-6 2xl:p-8 text-justify">
      <div className="relative w-4 h-4 lg:w-6 lg:h-6 xl:w-10 xl:h-10">
        <Image
          src={image}
          alt="title"
          fill
          className="object-cover" // or object-contain
        />
      </div>
      <p className="font-bold my-2 lg:my-4">{title}</p>
      <p className="lg:mt-4 text-secondary text-xs lg:text-sm 2xl:text-xl">{desc}</p>
    </div>
  );
};

export default function WhyChooseUs() {
  return (
    <div className="p-5 md:p-10 xl:px-15 2xl:px-20 xl:py-30 bg-white">
      <h4>Why Choose Us?</h4>
      <h2 className="lg:mt-5 xl:mt-10">Your Journey, Our Expertise</h2>
      <p className="text-justify my-2 xl:my-4">
        We are committed to providing exceptional trekking experiences in
        Bhutan, ensuring your adventure is safe, memorable, and respectful of
        the local culture.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-10 my-4 lg:my-10">
        <Card
          image={guidesImage}
          title="Local Guides"
          desc="Our experienced local guides ensure your safety and provides invaluable insights into Bhutan’s rich culture and natural wonders."
        />
        <Card
          image={packageImage}
          title="Inclusive Packages"
          desc="Our packages include all necessary permits, accommodations, meals, and transportation, allowing you to focus on enjoying your trek."
        />
        <Card
          image={responsibleImage}
          title="Responsible Travel"
          desc="We are dedicated to sustainable and ethical tourism, minimizing our environmental impact and supporting local communities."
        />
      </div>
    </div>
  );
}
