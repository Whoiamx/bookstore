"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Books } from "@/app/interfaces/books";
import Image from "next/image";
import { useBookStore } from "@/app/store/store";

interface Props {
  slug: string;
}

export default function ClientProductDetail({ slug }: Props) {
  const [book, setBook] = useState<Books | null>(null);
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const addToCart = useBookStore((state) => state.addToCart);

  useEffect(() => {
    fetch("https://bookstore-gxg7.onrender.com/books")
      .then((res) => res.json())
      .then((data: Books[]) => {
        const found = data.find((b) => b.slug === slug);
        if (!found) {
          router.replace("/404");
        } else {
          setBook(found);
        }
      });
  }, [slug, router]);

  if (!book) return <p className="text-center mt-20">Cargando libro...</p>;

  // Valor seguro para cantidad (stock)
  const stock = book.cantidad ?? 0;

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex flex-col md:flex-row bg-white rounded shadow-md overflow-hidden">
        <Image
          src={`https://bookstore-gxg7.onrender.com${book.imagen}`}
          alt={`Portada del libro ${book.titulo}`}
          width={400}
          height={400}
          className="object-cover md:w-1/3 w-full"
        />
        <div className="p-6 flex flex-col flex-1">
          <h2 className="text-2xl font-bold mb-2">{book.titulo}</h2>
          <h3 className="text-gray-600 mb-4">{book.autor}</h3>
          <p className="flex-grow">{book.descripcion}</p>
          <div className="mt-4">
            <label>
              Cantidad:
              <input
                type="number"
                min={1}
                max={stock}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="border ml-2 w-16 text-center"
              />
            </label>
          </div>
          <button
            onClick={() =>
              addToCart({
                ...book,
                cantidad: quantity,
              })
            }
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Agregar al carrito
          </button>
          <p className="mt-4 text-sm text-gray-700">Género: {book.genero}</p>
          <p className="mt-2 text-lg font-semibold">
            Precio: ${book.precio?.toLocaleString("es-AR")}
          </p>
          <p
            className={`mt-1 ${stock < 6 ? "text-red-600" : "text-green-600"}`}
          >
            Stock: {stock}
          </p>
        </div>
      </div>
    </main>
  );
}
