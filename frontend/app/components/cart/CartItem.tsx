// components/CartItem.tsx

interface CartItemProps {
  titulo: string;
  autor: string;
  descripcion: string;
  genero: string;
  imagen: string;
  categoria?: string;
  cantidad?: number;
  precio?: number;
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
}: CartItemProps) {
  return (
    <div className="flex flex-col md:flex-row items-start bg-white rounded-xl shadow-md p-4">
      <img
        src={imagen}
        alt={titulo}
        className="w-full md:w-40 h-auto rounded-lg object-cover"
      />
      <div className="flex-1 md:ml-6 mt-4 md:mt-0">
        <h2 className="text-xl font-semibold">{titulo}</h2>
        <p className="text-sm text-gray-600">de {autor}</p>
        <p className="text-sm text-gray-500 mt-2">{descripcion}</p>
        <p className="mt-2 text-sm text-gray-700">
          Género: {genero} {categoria && `| Categoría: ${categoria}`}
        </p>
        <p className="text-lg font-bold mt-2">${precio.toLocaleString()}</p>

        <div className="flex items-center mt-3 gap-3">
          <span className="text-sm">Cantidad:</span>
          <input
            type="number"
            min={1}
            defaultValue={cantidad}
            className="w-16 border rounded px-2 py-1"
          />
          <p className="text-sm text-gray-700 ml-4">
            Subtotal: ${(precio * cantidad).toLocaleString()}
          </p>
          <button className="ml-auto text-red-500 hover:underline text-sm">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}
