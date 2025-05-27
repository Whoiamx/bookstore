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
      <div className="flex items-center bg-green-100 border border-green-400 text-green-800 px-6 py-4 rounded-xl shadow-md w-full max-w-sm space-x-4">
        <div className="flex-shrink-0">
          <Image src={image} alt="Imagen del libro" width={80} height={80} />
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-1">
            📚 ¡Libro agregado con éxito!
          </h2>
          <p>
            <strong>Título:</strong> {title}
          </p>
          <p>
            <strong>Cantidad:</strong> {quantity}
          </p>
          <p>
            <strong>Precio:</strong> ${price}
          </p>
        </div>
      </div>
    </div>
  );
}
