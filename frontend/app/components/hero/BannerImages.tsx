import Image from "next/image";

export const BannerImages = () => {
  const banners = [
    { src: "/3.jpg", alt: "Banner 1" },
    { src: "/2.jpg", alt: "Banner 2" },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4 w-full">
      {banners.map((banner, index) => (
        <div
          key={index}
          className="w-full md:w-1/2 h-64 relative rounded-xl overflow-hidden"
        >
          <Image
            src={banner.src}
            alt={banner.alt}
            fill
            priority={index === 0}
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
};
