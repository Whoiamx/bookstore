import Image from "next/image";
import { NavbarItems } from "./NavbarItems";
import { FaUser } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { LuShoppingCart } from "react-icons/lu";

export const Navbar = () => {
  return (
    <>
      <div className=" flex items-center p-3 justify-around bg-blue-400">
        <Image src="/Logo El Ateneo.jpg" alt="logo" width={200} height={200} />
        <div>
          <input
            className="bg-white rounded-b-sm p-2 w-3xl h-10"
            type="search"
            placeholder="Busca tu libro favorito..."
          />
        </div>
        <div className="flex gap-8 justify-around items-center">
          <FaUser style={{ fontSize: 25, cursor: "pointer" }} />
          <BsWhatsapp style={{ fontSize: 25, cursor: "pointer" }} />
          <LuShoppingCart style={{ fontSize: 25, cursor: "pointer" }} />
        </div>
      </div>
      <div>
        <NavbarItems />
      </div>
    </>
  );
};
