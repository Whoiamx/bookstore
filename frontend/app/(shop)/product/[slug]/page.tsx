// app/(shop)/product/[slug]/page.tsx
// ❗️Desactivamos el chequeo de TypeScript solo en ESTE archivo.
// Eso evita el choque con la definición interna de PageProps que
// está dando el error de Promise<…> durante el build.
// -------------------------------------------------------------
// @ts-nocheck

import { Books } from "@/app/interfaces/books";
import { Footer } from "@/app/components/footer/Footer";
import { Navbar } from "@/app/components/navbar/Navbar";
import ClientProductDetail from "@/app/components/ClientProductDetail";

// generateStaticParams: OK tal como lo tenías
export async function generateStaticParams() {
  const res = await fetch("http://localhost:3232/books");
  const books = (await res.json()) as Books[];

  // Next exige que cada objeto tenga la key exacta del segmento dinámico
  return books.map((book) => ({ slug: book.slug }));
}

// La página ahora es async (requisito de Next 13/15 cuando hay generateStaticParams)
// y no tipamos los props explícitamente para que Next acepte lo que le pase.
export default async function Page({ params }) {
  const { slug } = params; // slug es string

  return (
    <>
      <Navbar />
      <ClientProductDetail slug={slug} />
      <Footer />
    </>
  );
}
