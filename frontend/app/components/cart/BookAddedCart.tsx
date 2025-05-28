import Image from "next/image";

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
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex items-center bg-gray-100  text-black px-6 py-4 rounded-xl shadow-md w-full max-w-sm space-x-4">
        <div className="flex-shrink-0">
          <Image src={image} alt="Imagen del libro" width={80} height={80} />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold mb-1">
            📚 ¡Libro agregado con éxito!
          </h2>
          <p>Título: {title}</p>
          <p>Cantidad: {quantity}</p>
          <p>Precio: ${price}</p>
        </div>
      </div>
    </div>
  );
}
