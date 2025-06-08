"use client";

import Link from "next/link";
import { useBookStore } from "../store/store";

export const ModalConfirmation = () => {
  const addressUser = useBookStore((state) => state.directionUser);
  const cartItems = useBookStore((state) => state.cart);
  const clearCart = useBookStore((state) => state.clearCart);

  const handleGoHome = () => {
    clearCart();
  };

  const total = cartItems.reduce((acc, item) => {
    const precio = item?.precio ?? 0;
    const cantidad = item?.cantidad ?? 1;
    return acc + precio * cantidad;
  }, 0);

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 text-center animate-fade-in">
          <h1 className="text-2xl font-bold text-green-700 mb-4">
            ¡Pago exitoso!
          </h1>
          <p className="text-gray-700 mb-2">
            Muchas gracias por tu compra,{" "}
            <span className="font-semibold">{addressUser?.nombre}</span> 👏
          </p>
          <p className="text-sm text-gray-600 mb-4">
            Ya podés pasar a retirar tu pedido o aguardar el envío según la
            opción seleccionada.
          </p>

          <div className="bg-gray-100 p-4 rounded text-left mb-4">
            <h2 className="font-semibold mb-2 text-gray-800">
              Resumen de compra:
            </h2>
            <ul className="text-sm text-gray-700 space-y-1">
              {cartItems.map((item, idx) => (
                <li key={idx} className="flex justify-between">
                  <span>
                    {item.titulo} x{item.cantidad}
                  </span>
                  <span>${(item.precio ?? 0) * (item.cantidad ?? 1)}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between mt-2 font-bold text-base">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <Link href="/">
            <button
              onClick={() => handleGoHome()}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 w-full"
            >
              Volver al inicio
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
