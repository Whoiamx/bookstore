"use client";

import Link from "next/link";
import { Navbar } from "@/app/components/navbar/Navbar";
import { useBookStore } from "@/app/store/store";

export default function CheckoutPage() {
  const addressUser = useBookStore((state) => state.directionUser);
  const cartItems = useBookStore((state) => state.cart);

  const total = cartItems.reduce((acc, item) => {
    const precio = item?.precio ?? 0;
    const cantidad = item?.cantidad ?? 1;
    return acc + precio * cantidad;
  }, 0);

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-32">
        <h1 className="text-3xl font-bold mb-6">Confirmación de Compra</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl font-semibold mb-4">Resumen del pedido</h2>
            <div className="space-y-4">
              {cartItems && cartItems.length > 0 ? (
                <>
                  {cartItems.map((el, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center w-full border-b pb-2"
                    >
                      <div>
                        <p className="font-medium">{el.titulo}</p>
                        <p className="text-sm text-gray-600">
                          x{el.cantidad ?? 1} - ${el.precio ?? 0}
                        </p>
                        <p className=" font-semibold">
                          ${(el.precio ?? 0) * (el.cantidad ?? 1)}
                        </p>
                      </div>
                    </div>
                  ))}

                  <div className="flex justify-between mt-4 text-lg font-bold">
                    <span>Total:</span>
                    <span>${total}</span>
                  </div>
                </>
              ) : (
                <p>El carrito está vacío.</p>
              )}
            </div>
          </div>

          {addressUser ? (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">
                Datos del comprador
              </h2>

              <div className="border p-4 rounded bg-gray-50 space-y-2">
                <p>
                  <span className="font-semibold">Nombre:</span>{" "}
                  {addressUser.nombre}
                </p>
                <p>
                  <span className="font-semibold">Apellido:</span>{" "}
                  {addressUser.apellido}
                </p>
                <p>
                  <span className="font-semibold">Dirección:</span>{" "}
                  {addressUser.direccion}
                </p>
                <p>
                  <span className="font-semibold">Provincia:</span>{" "}
                  {addressUser.provincia}
                </p>
                <p>
                  <span className="font-semibold">Ciudad:</span>{" "}
                  {addressUser.ciudad}
                </p>
                <p>
                  <span className="font-semibold">Código postal:</span>{" "}
                  {addressUser.codigoPostal}
                </p>
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  {addressUser.email}
                </p>
              </div>

              <Link href="/checkout/payment">
                <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:cursor-pointer hover:bg-blue-800 w-full mt-4">
                  Finalizar compra
                </button>
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
