import Image, { StaticImageData } from "next/image";
import personImage from "@/public/person.jpeg";

const teamMembers = [
  {
    name: "Sonam Rinchen",
    role: "Founder & Lead Guide",
    image: personImage,
  },
];

const TeamMemberCard: React.FC<{
  name: string;
  role: string;
  image: StaticImageData;
}> = ({ name, role, image }) => {
  return (
    <div className="flex flex-col items-center my-2 xl:my-4">
      <div className="relative w-25 h-25 lg:w-30 lg:h-30 xl:w-50 xl:h-50">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-full"
        />
      </div>
      <h6 className="mt-2 lg:mt-4 xl:mt-6">{name}</h6>
      <p className="text-secondary text-xs md:text-base">{role}</p>
    </div>
  );
};

export default function Team() {
  return (
    <div className="p-5 md:p-10 xl:p-15 2xl:p-20 bg-gray-100">
      <h4>Team</h4>
      <p className="my-2 xl:my-4 text-justify">
        At <b className="font-semibold">Jomolhari Vacation</b>, our
        passionate team is dedicated to exceptional service. Led by Mr. Sonam
        Rinchen, we have experienced guides, travel planners, and customer
        service experts who bring unique skills to make every Bhutan adventure
        seamless and special.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 xl:gap-4 xl:mt-10">
        {teamMembers?.map((item) => (
          <TeamMemberCard
            key={item.name}
            name={item.name}
            role={item.role}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}
