"use client";

import Link from "next/link";
import { IoCardOutline } from "react-icons/io5";
import { Navbar } from "@/app/components/navbar/Navbar";

const orders = [
  { id: "123", nombre: "Juan Pérez", pagada: true },
  { id: "456", nombre: "María Gómez", pagada: false },
];

export default function OrdersPage() {
  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Órdenes de compra</h1>

        {orders.length === 0 ? (
          <div className="bg-yellow-100 p-6 rounded text-center space-y-4">
            <p className="text-lg text-gray-700 font-semibold">
              Lo sentimos, no tenés órdenes generadas hasta el momento 😕
            </p>
            <Link
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 font-medium"
            >
              Ir a la tienda
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border rounded">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    #ID
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Nombre completo
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Estado
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Opciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {order.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {order.nombre}
                    </td>
                    <td className="px-6 py-4 text-sm flex items-center text-gray-700">
                      <IoCardOutline
                        className={`mr-2 ${
                          order.pagada ? "text-green-600" : "text-red-600"
                        }`}
                      />
                      <span
                        className={
                          order.pagada ? "text-green-700" : "text-red-700"
                        }
                      >
                        {order.pagada ? "Pagada" : "No pagada"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-blue-600 hover:underline">
                      <Link href={`/orders/${order.id}`}>Ver orden</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
