import ImageGrid from "./components/ImageGrid";

export default function Gallery() {
  return (
    <div className="p-5 md:p-10 xl:p-15 2xl:p-20  bg-white">
      <h4 className="mt-15">Gallery</h4>
      <p className="my-4">
        Explore the breathtaking landscapes and vibrant culture of Bhutan
        through our curated collection of photos and videos from our treks.
      </p>
      <ImageGrid />
    </div>
  );
}
