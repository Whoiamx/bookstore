import { Books } from "@/app/interfaces/books";

export const BookCard = ({
  titulo,
  autor,
  descripcion,
  genero,
  imagen,
}: Books) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden w-72">
      <img src={imagen} alt={titulo} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-1">{titulo}</h2>
        <p className="text-sm text-gray-600 mb-2">por {autor}</p>
        <p className="text-sm text-gray-800 mb-3">{descripcion}</p>
        <span className="text-xs text-white bg-blue-500 px-2 py-1 rounded">
          {genero}
        </span>
      </div>
    </div>
  );
};
