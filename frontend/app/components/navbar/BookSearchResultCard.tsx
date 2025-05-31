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
    <div className="absolute mt-2 left-0 w-full z-50">
      <Link href={`/product/${slug}`} passHref>
        <div className="flex items-center bg-white text-black px-4 py-3 rounded-xl shadow-md space-x-4 border border-gray-300 hover:bg-gray-100 transition cursor-pointer">
          <div className="flex-shrink-0">
            <Image
              src={`http://localhost:4848${image}`}
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
    </div>
  );
};
