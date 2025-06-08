/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore

import { Books } from "@/app/interfaces/books";
import { Footer } from "@/app/components/footer/Footer";
import { Navbar } from "@/app/components/navbar/Navbar";
import ClientProductDetail from "@/app/components/ClientProductDetail";

export async function generateStaticParams() {
  const res = await fetch("http://localhost:3232/books");
  const books = (await res.json()) as Books[];
  return books.map((book) => ({ slug: book.slug }));
}

// params es ahora un Promise según Next.js 15
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <>
      <Navbar />
      <ClientProductDetail slug={slug} />
      <Footer />
    </>
  );
}
