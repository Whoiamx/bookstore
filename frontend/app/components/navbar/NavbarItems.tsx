import Link from "next/link";

export const NavbarItems = () => {
  return (
    <nav className="bg-gray-200">
      <ul className="flex flex-row sm:flex-row gap-4 sm:gap-5 text-gray-500 no-scrollbar whitespace-nowrap">
        <li>
          <Link
            className="hover:text-black text-sm transition-colors"
            href={"/all"}
          >
            Ver Todo
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-black text-sm transition-colors"
            href={"/category/autoayuda"}
          >
            Autoayuda
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-black text-sm transition-colors"
            href={"/category/ficcion-literatura"}
          >
            Ficcion y Literatura
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-black text-sm transition-colors"
            href={"/category/infantil"}
          >
            Infantil
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-black text-sm transition-colors"
            href={"/category/negocios-cseconomicas"}
          >
            Negocios y Cs. Economicas
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-black text-sm transition-colors"
            href={"/category/arte"}
          >
            Arte
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-black text-sm transition-colors"
            href={"/category/psicologia"}
          >
            Psicologia
          </Link>
        </li>
      </ul>
    </nav>
  );
};
