import Image from "next/image";


export default function Header() {
  return (
    <div className="relative bg-cover bg-top bg-[url('/sky.jpg')] w-full h-60 md:h-80 lg:h-100 xl:h-120 text-white bg-black/50">
      <h1 className="absolute bg-linear-to-b from-white/80 via-white via-[50%] to-primary bg-clip-text text-5xl text-transparent font-bold md:text-7xl lg:text-9xl left-1/2 -translate-x-1/2 top-22 md:top-30 xl:top-40 uppercase animate-[slide-up-and-fade_1.5s_ease-out_forwards_0.5s] opacity-0 tracking-widest">
        Jomolhari
      </h1>
      <h1 className="absolute bg-linear-to-b from-primary via-primary via-[50%] to-white bg-clip-text text-transparent font-bold text-4xl md:text-6xl lg:text-8xl left-1/2 -translate-x-1/2 top-33 md:top-50 lg:top-65 xl:top-75 uppercase z-10 animate-[slide-up-and-fade_1.5s_ease-out_forwards_0.5s] opacity-0 tracking-wider">
        Vacation
      </h1>
      <div className="absolute w-full h-45 md:h-70 lg:h-100 xl:h-120 top-15 md:top-20 2xl:top-25">
        <Image
          src="/jomolhari.svg"
          alt="jomolhari bg"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
