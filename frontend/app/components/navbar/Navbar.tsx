"use client";
import Image from "next/image";
import { NavbarItems } from "./NavbarItems";
import { FaUser } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { LuShoppingCart } from "react-icons/lu";
import Link from "next/link";

import { LabelCounter } from "@/app/ui/LabelCounter";
import { useEffect, useState } from "react";
import { BookSearchResultCard } from "./BookSearchResultCard";

interface DataInSearch {
  titulo: string;
  precio: number;
  imagen: string;
  slug: string;
}

export const Navbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [dataInSearch, setDataInSearch] = useState<DataInSearch | null>(null);
  console.log(dataInSearch);

  useEffect(() => {
    if (searchInput.trim() === "") {
      setDataInSearch(null);
      return;
    }

    const delayDebounce = setTimeout(() => {
      fetch(`http://localhost:4848/book?search=${searchInput}`)
        .then((response) => response.json())
        .then((data) => {
          if (data && data.titulo) {
            setDataInSearch(data);
          } else {
            setDataInSearch(null);
          }
        })
        .catch((err) => {
          console.log(err);
          setDataInSearch(null);
        });
    }, 500); // debounce de 500ms para no saturar el backend

    return () => clearTimeout(delayDebounce);
  }, [searchInput]);

  return (
    <>
      <div className="relative flex items-center p-3 justify-around bg-[#002447]">
        <div className="flex items-center justify-center gap-2">
          <Link href={"/"}>
            <h1 className=" text-white font-extrabold text-3xl">
              Book<span className="text-blue-300">S</span>tore
            </h1>
          </Link>
          <Image src="/libros.png" alt="logo" width={50} height={50} />
        </div>
        <div className="relative w-[300px]">
          <input
            className="bg-white rounded-b-sm p-2 w-full h-10"
            type="search"
            placeholder="Busca tu libro favorito..."
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          {dataInSearch && (
            <div className="absolute top-full left-0 w-full z-50 mt-2">
              <BookSearchResultCard
                title={dataInSearch.titulo}
                price={dataInSearch.precio}
                image={dataInSearch.imagen}
                slug={dataInSearch.slug}
              />
            </div>
          )}
        </div>
        <div className="flex gap-8 justify-around items-center">
          <Link href={"/auth/login"}>
            <FaUser
              style={{ color: "white", fontSize: 25, cursor: "pointer" }}
            />
          </Link>
          <Link
            href={"https://api.whatsapp.com/send/?phone=5491163099115"}
            target="_blank"
          >
            <BsWhatsapp
              style={{ color: "white", fontSize: 25, cursor: "pointer" }}
            />
          </Link>
          <div className="flex gap-3 justify-center items-center">
            <Link href={"/cart"}>
              <LuShoppingCart
                style={{ color: "white", fontSize: 25, cursor: "pointer" }}
              />
            </Link>
            <LabelCounter />
          </div>
        </div>
      </div>
      <div>
        <NavbarItems />
      </div>
    </>
  );
};
