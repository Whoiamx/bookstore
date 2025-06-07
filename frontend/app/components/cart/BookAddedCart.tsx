"use client";
import Image from "next/image";
import { useState } from "react";

type BookAddedCardProps = {
  title: string;
  quantity: number;
  price: number;
  image: string;
};

export default function BookAddedCard({
  title,
  quantity,
  price,
  image,
}: BookAddedCardProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 w-[90%] max-w-sm sm:right-6 sm:bottom-6">
      <div className="flex items-start bg-white text-black px-4 py-3 rounded-xl shadow-lg gap-4 border border-gray-300">
        <div className="flex-shrink-0">
          <Image
            src={image}
            alt={`Portada de ${title}`}
            width={64}
            height={64}
            className="rounded-md object-cover"
          />
        </div>

        <div className="flex flex-col text-sm sm:text-base flex-grow">
          <h2 className="font-bold text-base mb-1">
            📚 ¡Libro agregado con éxito!
          </h2>
          <p className="truncate">Título: {title}</p>
          <p>Cantidad: {quantity}</p>
          <p>Precio: ${price}</p>
        </div>

        <button
          onClick={() => setVisible(false)}
          className="text-gray-500 hover:text-gray-800 font-bold text-xl leading-none"
          aria-label="Cerrar"
        >
          ×
        </button>
      </div>
    </div>
  );
}
