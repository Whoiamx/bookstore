"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Books } from "@/app/interfaces/books";
import { Navbar } from "@/app/components/navbar/Navbar";
import Image from "next/image";

interface Props {
  params: {
    slug: string;
  };
}

export default function Page({ params }: Props) {
  const { slug } = params;
  const [product, setProduct] = useState<Books | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetch("http://localhost:4848/books")
      .then((response) => response.json())
      .then((data: Books[]) => {
        const foundBook = data.find((book) => book.slug === slug);
        if (!foundBook) {
          router.replace("/404");
        } else {
          setProduct(foundBook);
        }
      })
      .catch((err) => {
        console.error(err);
        // Opcional: mostrar mensaje de error o redirigir
      });
  }, [slug, router]);

  if (!product)
    return <p className="text-center mt-20 text-gray-500">Cargando libro...</p>;

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col md:flex-row">
          <Image
            src={`http://localhost:4848${product.imagen}`}
            width={400}
            height={400}
            alt={`Portada del libro ${product.titulo}`}
            className="h-64 w-full md:w-1/3 object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
          />
          <div className="p-6 flex flex-col flex-1">
            <h2 className="text-xl font-semibold mb-1">{product.titulo}</h2>
            <h3 className="text-md text-gray-500 mb-2">{product.autor}</h3>
            <p className="text-gray-700 text-sm mb-4 flex-1">
              {product.descripcion}
            </p>
            <input
              className="border-black border-2 w-20 mb-2 text-center"
              min={1}
              max={product.cantidad}
              type="number"
            />
            <button className="text-xs bg-green-700 text-white w-44 mb-4 text-nowrap h-10 rounded-sm transition-all shadow-sm font-semibold uppercase tracking-wide">
              Agregar al carrito
            </button>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                {product.genero}
              </span>
            </div>
            <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-200">
              <span className="text-lg font-bold text-emerald-600">
                Precio: $
                {product.precio !== undefined &&
                  product.precio.toLocaleString("es-AR")}
              </span>
              <span
                className={`text-sm font-medium ${
                  product.cantidad !== undefined && product.cantidad < 6
                    ? "text-red-500"
                    : "text-blue-600"
                }`}
              >
                Stock: {product.cantidad}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
