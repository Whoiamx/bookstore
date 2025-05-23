// app/components/DoubleBanner.tsx
import Image from "next/image";

export const BannerImages = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full">
      <div className="w-full md:w-1/2 h-64 relative">
        <Image
          src="/3.jpg" // reemplazá con tus imágenes
          alt="Banner 1"
          fill
          className="object-cover rounded-xl"
        />
      </div>
      <div className="w-full md:w-1/2 h-64 relative">
        <Image
          src="/2.jpg"
          alt="Banner 2"
          fill
          className="object-cover rounded-xl"
        />
      </div>
    </div>
  );
};
