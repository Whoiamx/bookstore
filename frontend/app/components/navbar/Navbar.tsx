"use client";

import Image from "next/image";
import Link from "next/link";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { LuShoppingCart } from "react-icons/lu";
import { NavbarItems } from "./NavbarItems";
import { LabelCounter } from "@/app/ui/LabelCounter";
import { BookSearchResultCard } from "./BookSearchResultCard";
import { useState, useEffect } from "react";

interface DataInSearch {
  titulo: string;
  precio: number;
  imagen: string;
  slug: string;
}

interface NavbarProps {
  username?: string;
}

export const Navbar = ({ username }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [dataInSearch, setDataInSearch] = useState<DataInSearch | null>(null);

  useEffect(() => {
    if (searchInput.trim() === "") {
      setDataInSearch(null);
      return;
    }

    const delayDebounce = setTimeout(() => {
      fetch(`http://localhost:3232/book?search=${searchInput}`)
        .then((res) => res.json())
        .then((data) => {
          if (data && data.titulo) setDataInSearch(data);
          else setDataInSearch(null);
        })
        .catch(() => setDataInSearch(null));
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchInput]);

  return (
    <nav className="bg-[#002447] p-3">
      <div className="container mx-auto flex items-center justify-between flex-wrap gap-4">
        {/* Logo a la izquierda */}
        <div className="flex items-center gap-2 flex-shrink-0 text-white">
          <Link href={"/"}>
            <h1 className="font-extrabold text-3xl cursor-pointer">
              Book<span className="text-blue-300">S</span>tore
            </h1>
          </Link>
          <Image src="/libros.png" alt="logo" width={50} height={50} />
        </div>

        {/* Input búsqueda - centro, flexible */}
        <div className="relative flex-grow max-w-md w-full">
          <input
            type="search"
            placeholder="Busca tu libro favorito..."
            className="w-full p-2 rounded-b-sm text-gray-900 bg-white"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          {dataInSearch && (
            <div className="absolute top-full left-0 w-full z-50 mt-2 bg-white rounded shadow-lg max-h-60 overflow-auto">
              <BookSearchResultCard
                title={dataInSearch.titulo}
                price={dataInSearch.precio}
                image={dataInSearch.imagen}
                slug={dataInSearch.slug}
              />
            </div>
          )}
        </div>

        {/* Íconos + botón hamburguesa a la derecha */}
        <div className="flex items-center gap-6">
          <div className="flex gap-6 items-center text-white">
            {username && (
              <div className="flex items-center gap-2 text-sm">
                <FaUser />
                <span>Bienvenido {username.slice(0, 5)} 👋🏼</span>
              </div>
            )}
            <Link
              href="https://api.whatsapp.com/send/?phone=5491163099115"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <BsWhatsapp size={25} />
            </Link>
            <Link
              href={"/cart"}
              className="flex gap-2 items-center hover:text-blue-400"
            >
              <LuShoppingCart size={25} />
              <LabelCounter />
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* NavbarItems desplegable */}
      <div className={`${menuOpen ? "block" : "hidden"} `}>
        <NavbarItems />
      </div>
    </nav>
  );
};
