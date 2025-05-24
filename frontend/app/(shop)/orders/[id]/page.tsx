"use client";

import { Navbar } from "@/app/components/navbar/Navbar";
import Link from "next/link";

interface Props {
  params: {
    id: string;
  };
}

export default function OrderPage({ params }: Props) {
  const isPaid = false; // Cambiá a true para simular orden pagada
  const { id } = params;
  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-2">Detalle de tu Orden</h1>
        <p className="text-gray-600 mb-4">
          Orden #{id} - {new Date().toLocaleDateString("es-AR")}
        </p>

        {/* Estado del pago */}
        <div
          className={`mb-8 px-4 py-3 rounded text-white font-semibold ${
            isPaid ? "bg-green-600" : "bg-yellow-500"
          }`}
        >
          {isPaid
            ? "✅ Orden pagada correctamente"
            : "⏳ Orden pendiente de pago"}
        </div>

        {/* Datos del comprador */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Comprador</h2>
          <div className="bg-gray-100 p-4 rounded space-y-2">
            <p>
              <span className="font-medium">Nombre:</span> Juan Pérez
            </p>
            <p>
              <span className="font-medium">Email:</span> juanperez@email.com
            </p>
            <p>
              <span className="font-medium">Dirección de envío:</span> Av.
              Siempreviva 123, CABA
            </p>
          </div>
        </div>

        {/* Productos comprados */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Productos</h2>
          <div className="space-y-4 bg-white border rounded p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">📘 El nombre del viento</p>
                <p className="text-sm text-gray-600">x2 unidades</p>
              </div>
              <p className="font-semibold">$13.000</p>
            </div>

            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">📕 La sombra del viento</p>
                <p className="text-sm text-gray-600">x1 unidad</p>
              </div>
              <p className="font-semibold">$7.200</p>
            </div>
          </div>
        </div>

        {/* Resumen */}
        <div className="mb-12">
          <div className="flex justify-between border-t pt-4 text-lg font-bold">
            <span>Total:</span>
            <span>$20.200</span>
          </div>
        </div>

        {/* Acciones */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 text-center"
          >
            Volver a la tienda
          </Link>

          {!isPaid && (
            <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 text-center">
              Ir a pagar
            </button>
          )}
        </div>
      </div>
    </>
  );
}
