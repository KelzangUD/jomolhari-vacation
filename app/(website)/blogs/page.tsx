import Image from "next/image";
import himalayasImage from "@/public/himalayas.jpg";
import valleyImage from "@/public/valley.jpg";
import Card from "../components/Card";

const blogData = [
  {
    image: himalayasImage,
    title: "Trekking in the Himalayas: A Guide to Bhutan",
    author: "Kelzang",
    role: "Travel Blogger",
    date: "1st Jan 2024",
    desc: "Discover the best trekking routes in the Himalayas, focusing on the unique trails and cultural experiences in Bhutan.",
  },
  {
    image: valleyImage,
    title: "Exploring the Hidden Valleys of Bhutan",
    author: "Ugyen",
    role: "Trekker",
    date: "1st Jan 2025",
    desc: "Venture into the remote and untouched valleys of Bhutan, uncovering the natural beauty and cultural richness.",
  },
];

export default function Blogs() {
  return (
    <div className="p-5 md:p-10 xl:p-15 2xl:p-20 bg-white">
      <h4 className="mt-15">Blog</h4>
      <p className="my-2 xl:my-4">
        <span className="font-bold">Beyond reach</span>-experiences that inspire
        your next adventure.
      </p>
      <div className="relative">
        <input
          placeholder="Search for article"
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-10 mt-4 xl:mt-6">
        {blogData.map((blog) => (
          <Card
            image={blog?.image}
            title={blog?.title}
            desc={blog?.desc}
            height="h-50 md:h-70 xl:h-90 2xl:h-110"
            date={blog?.date}
            author={blog?.author}
            role={blog?.role}
            key={blog?.title}
          />
        ))}
      </div>
    </div>
  );
}
