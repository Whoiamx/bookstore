import { Producto } from "@/app/interfaces/books";
import CartItem from "./CartItem";
import Link from "next/link";
// ajustá el path si lo definiste en otro lado

interface Props {
  productos: Producto[];
}

export const CartContainer = ({ productos }: Props) => {
  const total = productos.reduce(
    (acc, prod) => acc + (prod.precio ?? 0) * (prod.cantidad ?? 1),
    0
  );

  return (
    <div className="w-full flex flex-col md:flex-row gap-8">
      <div className="flex-1 space-y-6">
        {productos.map((producto, i) => (
          <CartItem key={i} {...producto} />
        ))}
      </div>

      <div className="w-full md:w-[350px] bg-gray-100 p-6 rounded-lg shadow-md h-fit">
        <h2 className="text-xl font-semibold mb-4">Resumen de tu orden</h2>

        <div className="space-y-3 text-sm ">
          {productos.map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-start border-b pb-2 border-gray-300"
            >
              <div>
                <p className="font-medium">{item.titulo}</p>
                <p className="text-gray-500 text-xs pt-2">
                  <i>Cantidad:</i> {item.cantidad}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-right text-xs ">
                  ${item.precio?.toLocaleString()} x {item.cantidad} <br />
                </p>
                <span className="font-semibold ">
                  ${(item.precio! * item.cantidad!).toLocaleString()}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 border-t pt-4 text-lg font-bold flex justify-between">
          <span>Total:</span>
          <span>${total.toLocaleString()}</span>
        </div>
        <Link href="/checkout/address">
          <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Finalizar compra
          </button>
        </Link>
      </div>
    </div>
  );
};
