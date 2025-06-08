import { Footer } from "@/app/components/footer/Footer";
import { Navbar } from "@/app/components/navbar/Navbar";
import ClientProductDetail from "@/app/components/ClientProductDetail";
import books from "@/lib/books.json";

export async function generateStaticParams() {
  // Retornamos los slugs para generar las rutas estáticas
  return books.map((book) => ({ slug: book.slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Como params es un Promise, debemos esperar su resolución
  const { slug } = await params;

  return (
    <>
      <Navbar />
      <ClientProductDetail slug={slug} />
      <Footer />
    </>
  );
}
