import Image, { StaticImageData } from "next/image";
import mountainImage from "@/public/mountain.svg";
import leafImage from "@/public/leaf.svg";
import usersImage from "@/public/users.svg";

type CardProps = {
  image: StaticImageData;
  title: string;
  desc: string;
};

const Card: React.FC<CardProps> = ({ image, title, desc }) => {
  return (
    <div className="border border-border rounded-2xl p-4 xl:p-8 bg-white">
      <div className="relative w-5 h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover" // or object-contain
        />
      </div>
      <p className="font-bold my-2 xl:my-4">{title}</p>
      <p className="mt-2 2xl:mt-4 text-secondary text-justify">{desc}</p>
    </div>
  );
};

export default function Values() {
  return (
    <div className="p-5 md:p-10 xl:px-15 2xl:px-20 xl:py-30 bg-white">
      <h4>Values</h4>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-10 my-2 md:my-5 xl:my-10">
        <Card
          image={mountainImage}
          title="Authenticity"
          desc="We offer genuine experiences that immerse you in Bhutanese culture and natural beauty."
        />
        <Card
          image={leafImage}
          title="Sustainability"
          desc="We are dedicated to responsible travel that minimizes our environmental impact."
        />
        <Card
          image={usersImage}
          title="Community"
          desc="We work closely with local communities to support their livelihoods and preserve their heritage."
        />
      </div>
    </div>
  );
}
