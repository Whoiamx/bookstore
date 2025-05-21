import Link from "next/link";

export const NavbarItems = () => {
  return (
    <nav className="flex justify-around p-5 bg-gray-200">
      <ul className="flex  gap-5 text-gray-500  ">
        <li>
          {" "}
          <Link className="hover:text-black text-sm" href={""}>
            Autoayuda
          </Link>{" "}
        </li>
        <li>
          <Link className="hover:text-black text-sm" href={""}>
            Ficcion y Literatura
          </Link>
        </li>
        <li>
          <Link className="hover:text-black text-sm" href={""}>
            Infantil
          </Link>
        </li>
        <li>
          <Link className="hover:text-black text-sm" href={""}>
            Negocios y Cs. Economicas
          </Link>
        </li>
        <li>
          <Link className="hover:text-black text-sm" href={""}>
            Arte
          </Link>
        </li>
        <li>
          <Link className="hover:text-black text-sm" href={""}>
            Psicologia
          </Link>
        </li>
      </ul>
    </nav>
  );
};
