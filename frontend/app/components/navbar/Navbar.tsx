import Image from "next/image";
import { NavbarItems } from "./NavbarItems";
import { FaUser } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { LuShoppingCart } from "react-icons/lu";
import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <div className=" flex items-center p-3 justify-around bg-blue-400">
        <div className="flex items-center justify-center gap-2">
          <Link href={"/"}>
            <h1 className="font-extrabold text-3xl">
              Book<span className="text-blue-900">S</span>tore
            </h1>
          </Link>
          <Image src="/libros.png" alt="logo" width={50} height={50} />
        </div>
        <div>
          <input
            className="bg-white rounded-b-sm p-2 w-3xl h-10"
            type="search"
            placeholder="Busca tu libro favorito..."
          />
        </div>
        <div className="flex gap-8 justify-around items-center">
          <Link href={"/auth/login"}>
            <FaUser style={{ fontSize: 25, cursor: "pointer" }} />
          </Link>
          <BsWhatsapp style={{ fontSize: 25, cursor: "pointer" }} />
          <Link href={"/cart"}>
            <LuShoppingCart style={{ fontSize: 25, cursor: "pointer" }} />
          </Link>
        </div>
      </div>
      <div>
        <NavbarItems />
      </div>
    </>
  );
};
