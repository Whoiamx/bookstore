"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Footer } from "@/app/components/footer/Footer";
import { BookCard } from "@/app/components/hero/BookCard";
import { Navbar } from "@/app/components/navbar/Navbar";
import { Books } from "@/app/interfaces/books";

export default function CategoryPage() {
  const params = useParams();
  const idParam = params.id;
  const id = Array.isArray(idParam) ? idParam[0] : idParam;

  const [filterCategory, setFilterCategory] = useState<Books[]>([]);

  useEffect(() => {
    fetch("https://bookstore-gxg7.onrender.com/books")
      .then((response) => response.json())
      .then((data) => setFilterCategory(data))
      .catch((err) => console.log(err));
  }, [id]);

  const filterBooksCategory = filterCategory.filter(
    (book) => book.categoria === id
  );

  return (
    <>
      <Navbar />
      <div className="flex mt-7 flex-col justify-center items-center">
        <h3 className="text-center text-3xl font-semibold mb-8">
          LIBROS DE {id?.toUpperCase()}
        </h3>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filterBooksCategory.map((item) => (
              <BookCard
                key={item.titulo}
                titulo={item.titulo}
                autor={item.autor}
                descripcion={item.descripcion}
                genero={item.genero}
                precio={item.precio}
                imagen={`https://bookstore-gxg7.onrender.com${item.imagen}`}
              />
            ))}
          </div>
        </div>
      </div>
      {filterBooksCategory.length ? <Footer /> : null}
    </>
  );
}
