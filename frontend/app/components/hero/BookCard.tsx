import { Books } from "@/app/interfaces/books";
import Image from "next/image";
import Link from "next/link";

export const BookCard = ({
  titulo,
  autor,
  descripcion,
  genero,
  imagen,
}: Books) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-72 hover:shadow-xl transition-shadow duration-300">
      <Link
        className="hover:opacity-90 transition-opacity"
        href={`/products/${titulo}`}
        target="_blank"
      >
        <Image
          src={imagen}
          alt={titulo}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
      </Link>

      <div className="p-4 flex flex-col justify-between h-72">
        <div>
          <span className="inline-block text-xs bg-blue-100 text-blue-700 px-3 py-0.5 rounded-full border border-blue-300 mb-3">
            {genero}
          </span>

          <Link
            className="text-lg font-bold text-gray-800 hover:text-blue-500 transition-colors mt-2 block"
            href={`/products/${titulo}`}
            target="_blank"
          >
            {titulo}
          </Link>

          <p className="text-sm text-gray-500 mt-1">
            por <i>{autor}</i>
          </p>

          <p className="text-sm text-gray-700 line-clamp-3 mt-2">
            {descripcion}
          </p>
        </div>

        <div className="mt-4 flex justify-center">
          <button className="text-xs bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded-full transition-all shadow-sm font-semibold uppercase tracking-wide">
            + agregar
          </button>
        </div>
      </div>
    </div>
  );
};
