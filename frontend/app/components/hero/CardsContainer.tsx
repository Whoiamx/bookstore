"use client";

import { Books } from "@/app/interfaces/books";
import React, { useEffect, useState } from "react";
import { BookCard } from "./BookCard";

interface Props {
  titulo: string;
}

export const CardsContainer = ({ titulo }: Props) => {
  const [dataBook, setDataBook] = useState<Books[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("http://localhost:3232/books?limit=8");
        if (!response.ok) {
          throw new Error(`Error en la petición: ${response.status}`);
        }
        const data = await response.json();
        setDataBook(data);
      } catch (err: any) {
        setError(err.message || "Error desconocido");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-semibold text-xl">{titulo}</h2>

      {loading && <p>Cargando libros...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {dataBook.map((item, index) => (
            <BookCard
              key={index}
              titulo={item.titulo}
              descripcion={item.descripcion}
              autor={item.autor}
              genero={item.genero}
              imagen={`http://localhost:3232${item.imagen}`}
              slug={item.slug}
              precio={item.precio}
              cantidad={item.cantidad}
            />
          ))}
        </div>
      )}
    </div>
  );
};
