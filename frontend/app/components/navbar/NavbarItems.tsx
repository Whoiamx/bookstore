import Link from "next/link";

export const NavbarItems = () => {
  return (
    <nav className="flex justify-around p-5 bg-gray-200">
      <ul className="flex  gap-5 text-gray-500  ">
        <li>
          {" "}
          <Link
            className="hover:text-black text-sm"
            href={"/category/autoayuda"}
          >
            Autoayuda
          </Link>{" "}
        </li>
        <li>
          <Link
            className="hover:text-black text-sm"
            href={"/category/ficcion-literatura"}
          >
            Ficcion y Literatura
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-black text-sm"
            href={"/category/infantil"}
          >
            Infantil
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-black text-sm"
            href={"/category/negocios-cseconomicas"}
          >
            Negocios y Cs. Economicas
          </Link>
        </li>
        <li>
          <Link className="hover:text-black text-sm" href={"/category/arte"}>
            Arte
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-black text-sm"
            href={"/category/psicologia"}
          >
            Psicologia
          </Link>
        </li>
      </ul>
    </nav>
  );
};
