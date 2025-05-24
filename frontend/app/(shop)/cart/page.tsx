"use client";

import CartItem from "@/app/components/cart/CartItem";
import { Navbar } from "@/app/components/navbar/Navbar";
import Link from "next/link";
import { useState } from "react";

const productos = [
  {
    titulo: "El nombre del viento",
    autor: "Patrick Rothfuss",
    descripcion: "Una obra maestra de la fantasía moderna.",
    genero: "Fantasía",
    imagen: "/portadas/nombre-del-viento.jpg",
    categoria: "Libros",
    cantidad: 2,
    precio: 6500,
  },
];

export default function CartContainer() {
  const [productsInCart, setProductsInCart] = useState([]);
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Tu Carrito</h1>

        <div className="grid grid-cols-1 gap-6">
          {productsInCart.length !== 0 ? (
            productos.map((producto, i) => <CartItem key={i} {...producto} />)
          ) : (
            <div className="flex flex-col gap-4">
              <p>Lo sentimos no agregaste ningun producto al carrito :(</p>
              <Link
                className="bg-blue-500 p-2 text-white font-semibold w-64"
                href="/"
              >
                Volver a comprar ➡
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
