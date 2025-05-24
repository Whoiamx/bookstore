"use client";

import { Books } from "@/app/interfaces/books";
import React, { useEffect, useState } from "react";
import { BookCard } from "./BookCard";

interface Props {
  titulo: string;
}

export const CardsContainer = ({ titulo }: Props) => {
  const [dataBook, setDataBook] = useState<Books[]>([]);

  useEffect(() => {
    fetch("http://localhost:4848/books", {})
      .then((response) => response.json())
      .then((data) => setDataBook(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-semibold text-xl">{titulo}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {dataBook.map((item, index) => (
          <BookCard
            key={index}
            titulo={item.titulo}
            descripcion={item.descripcion}
            autor={item.autor}
            genero={item.genero}
            imagen={`http://localhost:4848${item.imagen}`}
            slug={item.slug}
          />
        ))}
      </div>
    </div>
  );
};
