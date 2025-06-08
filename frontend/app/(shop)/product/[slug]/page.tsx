import { Books } from "@/app/interfaces/books";
import { Footer } from "@/app/components/footer/Footer";
import { Navbar } from "@/app/components/navbar/Navbar";
import ClientProductDetail from "@/app/components/ClientProductDetail";

export async function generateStaticParams() {
  const res = await fetch("http://localhost:3232/books");
  const books: Books[] = await res.json();

  return books.map((book) => ({
    slug: book.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return (
    <>
      <Navbar />
      <ClientProductDetail slug={slug} />
      <Footer />
    </>
  );
}
