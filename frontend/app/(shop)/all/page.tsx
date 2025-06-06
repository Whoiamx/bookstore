"use client";
import { Footer } from "@/app/components/footer/Footer";
import { BookCard } from "@/app/components/hero/BookCard";
import { Navbar } from "@/app/components/navbar/Navbar";
import { Books } from "@/app/interfaces/books";
import { useEffect, useState } from "react";

export default function AllPage() {
  const [allBooks, setAllBooks] = useState<Books[]>([]);

  useEffect(() => {
    fetch("http://localhost:3232/books")
      .then((response) => response.json())
      .then((data) => setAllBooks(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center flex-col gap-4">
        <h2 className=" text-center p-10 font-semibold text-xl">
          Todos nuestros libros
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allBooks.map((item, index) => (
            <BookCard
              key={index}
              titulo={item.titulo}
              descripcion={item.descripcion}
              autor={item.autor}
              genero={item.genero}
              imagen={`http://localhost:3232${item.imagen}`}
              slug={item.slug}
              precio={item.precio}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
