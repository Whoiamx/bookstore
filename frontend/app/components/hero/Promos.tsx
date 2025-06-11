import Image from "next/image";
import React from "react";

const logos = [
  { name: "Banco Galicia", src: "/promos1.png" },
  { name: "Banco Nación", src: "/promos2.png" },
  { name: "Banco Santander", src: "/promos3.png" },
  { name: "Banco ICBC", src: "/promos4.png" },
  { name: "Banco BBVA", src: "/promos5.png" },
  { name: "Banco HSBC", src: "/promos6.png" },
];

export const Promos = () => {
  return (
    <div className="flex  justify-between items-center gap-10 flex-wrap  ">
      <h3 className="text-2xl font-bold">Promociones bancarias</h3>
      <div className="flex gap-5 flex-wrap">
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo.src}
            alt={logo.name}
            width={400}
            height={400}
            className="w-16 h-16 rounded-full object-cover border border-gray-300 shadow-md"
            unoptimized
          />
        ))}
      </div>
    </div>
  );
};
