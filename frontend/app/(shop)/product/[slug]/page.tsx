"use client";
import { BookCard } from "@/app/components/hero/BookCard";
import { Navbar } from "@/app/components/navbar/Navbar";
import { Books } from "@/app/interfaces/books";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  params: {
    slug: string;
  };
}

export default function Page({ params }: Props) {
  const { slug } = params;
  const [product, setProduct] = useState<Books | null>(null);

  useEffect(() => {
    fetch("http://localhost:4848/books")
      .then((response) => response.json())
      .then((data: Books[]) => {
        const foundBook = data.find((book) => book.slug === slug);
        if (!foundBook) {
          notFound(); // redirecciona si no existe
        } else {
          setProduct(foundBook);
        }
      })
      .catch((err) => console.log(err));
  }, [slug]);

  if (!product) return null; // o un loading spinner

  return (
    <>
      <Navbar />
      <div className="flex mt-7 flex-col justify-center items-center">
        <BookCard
          key={product.titulo}
          titulo={product.titulo}
          autor={product.autor}
          descripcion={product.descripcion}
          genero={product.genero}
          imagen={`http://localhost:4848${product.imagen}`}
        />
      </div>
    </>
  );
}
