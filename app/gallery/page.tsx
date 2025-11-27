"use client";
// import ImageGrid from "./components/ImageGrid";
import { motion } from "motion/react";
import Masonry from "@/components/Masonry";

const items = [
  {
    id: "1",
    img: "https://scontent.cdninstagram.com/v/t51.82787-15/568223007_18487318219072063_2978678883134072711_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ig_cache_key=Mzc0NzkzNDY4ODY3ODk1OTExMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjgxMHgxMDgwLnNkci5DMyJ9&_nc_ohc=RRG9vV1bqWMQ7kNvwFeYGvs&_nc_oc=Adkq0aiVOw-Yiin9n8LE8jg1V0Ph1F9N-SpRfN8r7XGUfZQ_w0rSCAv6EV6VtaE-Ff8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=zoFKInnJOYnwQ0f1Xrzgqg&oh=00_AfiKGyK52N1DOfeKmh9mBAFlIpOpMBHZnBhIjx9GPfc1Mw&oe=6924830C",
    height: 700,
  },
  {
    id: "2",
    img: "https://scontent.cdninstagram.com/v/t51.82787-15/582436718_18491882632072063_7803696890877670241_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ig_cache_key=Mzc2Njk1NDc4MDUyMjYzMjMzMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEyMDB4MTYwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=FBgkSYnEHOwQ7kNvwGfOB-E&_nc_oc=AdnK618KRyfY5cNdTqD42W9gDu0R8hUnVSGAXe54pfoafDZQLnxjV_IoJf-qCjEM714&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=gmDw9_WhwSGf88mY5aRtVg&oh=00_AfjtnCb7IJsEOj8g45V9OXZkU4i117cdaqYpYeTNU4kzTg&oe=692491D1",
    height: 650,
  },
  {
    id: "3",
    img: "https://scontent.cdninstagram.com/v/t51.82787-15/527205401_18474758155072063_8939532482757132779_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=MzY5MDQzNTUwMDAyNjA5Njg2MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE5MjB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=Mu1VGrAQ8QUQ7kNvwEvH7aa&_nc_oc=AdlETnw_FWxQWMXCahV52T6wIiQr5hRAuBMsSD28UV3IoFlAqGb9WaLcR35UXbh4DKY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=gmDw9_WhwSGf88mY5aRtVg&oh=00_AfjZBlQstHIFwvb9Y6pObuoDE3H5phSAHuR_Nv-M_KS-_Q&oe=69248112",
    height: 300,
  },
];

export default function Gallery() {
  return (
    <section className="p-5 md:p-10 xl:p-15 2xl:p-20 bg-white">
      <motion.div
        initial={{ y: -30 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <h4>Gallery</h4>
        <p className="my-4">
          Explore the breathtaking landscapes and vibrant culture of Bhutan
          through our curated collection of photos and videos from our treks.
        </p>
      </motion.div>
      {/* <ImageGrid /> */}
      <div>
        <Masonry
          items={items}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      </div>
    </section>
  );
}
