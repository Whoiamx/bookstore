import { Books } from "@/app/interfaces/books";
import { Footer } from "@/app/components/footer/Footer";
import { Navbar } from "@/app/components/navbar/Navbar";
import ClientProductDetail from "@/app/components/ClientProductDetail";
import books from "@/lib/books.json";
export async function generateStaticParams() {
  // Usamos datos locales para evitar error de conexión en build
  return books.map((book) => ({ slug: book.slug }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return (
    <>
      <Navbar />
      <ClientProductDetail slug={slug} />
      <Footer />
    </>
  );
}
