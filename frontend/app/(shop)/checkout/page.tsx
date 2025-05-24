"use client";

import { Navbar } from "@/app/components/navbar/Navbar";
import Link from "next/link";

export default function CheckoutPage() {
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-32 ">
        <h1 className="text-3xl font-bold mb-6">Confirmación de Compra</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Resumen del pedido */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Resumen del pedido</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-2">
                <div>
                  <p className="font-medium">El nombre del viento</p>
                  <p className="text-sm text-gray-600">x2 - $6500</p>
                </div>
                <p className="font-semibold">$13.000</p>
              </div>

              <div className="flex items-center justify-between border-b pb-2">
                <div>
                  <p className="font-medium">Cien años de soledad</p>
                  <p className="text-sm text-gray-600">x1 - $7200</p>
                </div>
                <p className="font-semibold">$7.200</p>
              </div>

              <div className="flex justify-between mt-4 text-lg font-bold">
                <span>Total:</span>
                <span>$20.200</span>
              </div>
            </div>
          </div>

          {/* Datos del comprador */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Datos del comprador</h2>

            <div className="border p-4 rounded bg-gray-50 space-y-2">
              <p>
                <span className="font-semibold">Nombre:</span> Juan
              </p>
              <p>
                <span className="font-semibold">Apellido:</span> Pérez
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                juan.perez@email.com
              </p>
              <p>
                <span className="font-semibold">Dirección:</span> Av. Siempre
                Viva 123, Buenos Aires
              </p>
            </div>
            <Link href="/orders/123">
              <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-800 w-full mt-4">
                Finalizar compra
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
