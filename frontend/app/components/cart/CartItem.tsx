import { useBookStore } from "@/app/store/store";
import Image from "next/image";

interface CartItemProps {
  titulo: string;
  autor: string;
  descripcion: string;
  genero: string;
  imagen: string;
  categoria?: string;
  cantidad?: number;
  precio?: number;
  slug?: string;
}

export default function CartItem({
  titulo,
  autor,
  descripcion,
  genero,
  imagen,
  categoria,
  cantidad = 1,
  precio = 0,
  slug,
}: CartItemProps) {
  const deleteBook = useBookStore((state) => state.deleteBookCart);

  const handleDeleteBoook = () => {
    deleteBook({
      titulo,
      autor,
      descripcion,
      genero,
      imagen,
      slug,
      precio,
    });
  };

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md p-4">
      <Image
        src={imagen}
        alt={titulo}
        width={100}
        height={100}
        className="w-full md:w-40 h-auto rounded-lg object-cover"
        unoptimized
      />
      <div className="flex-1 md:ml-6 mt-4 md:mt-0 space-y-2">
        <h2 className="text-xl font-semibold">{titulo}</h2>
        <p className="text-sm text-gray-600">de {autor}</p>
        <p className="text-sm text-gray-500">{descripcion}</p>
        <p className="text-sm text-gray-700">
          Género: {genero} {categoria && `| Categoría: ${categoria}`}
        </p>
        <p className="text-lg font-bold text-black">
          ${precio.toLocaleString()}
        </p>

        <div className="flex items-center gap-4 flex-wrap text-sm">
          <span>Cantidad:</span>
          <input
            type="number"
            min={1}
            defaultValue={cantidad}
            className="w-16 border rounded px-2 py-1 bg-gray-50"
            readOnly
          />
          <span>Subtotal: ${(precio * cantidad).toLocaleString()}</span>
          <button
            onClick={handleDeleteBoook}
            className="ml-auto text-red-500 hover:underline"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}
