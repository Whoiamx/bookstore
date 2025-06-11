import Image from "next/image";
import Link from "next/link";

type BookSearchResultCardProps = {
  title: string;
  price: number;
  image: string;
  slug: string;
};

export const BookSearchResultCard = ({
  title,
  price,
  image,
  slug,
}: BookSearchResultCardProps) => {
  return (
    <Link href={`/product/${slug}`} passHref>
      <div className="flex items-center bg-white text-black px-4 py-3 rounded-xl shadow-md space-x-4 border border-gray-300 hover:bg-gray-100 transition cursor-pointer">
        <div className="flex-shrink-0">
          <Image
            src={`https://bookstore-gxg7.onrender.com${image}`}
            alt={`Portada de ${title}`}
            width={60}
            height={80}
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-base font-semibold">{title}</p>
          <p className="text-sm text-gray-700">Precio: ${price}</p>
        </div>
      </div>
    </Link>
  );
};
