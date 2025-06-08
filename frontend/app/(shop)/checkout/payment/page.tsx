"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useBookStore } from "@/app/store/store";
import { ModalConfirmation } from "@/app/ui/ModalConfirmation";

export default function PaymentPage() {
  const router = useRouter();
  const cartItems = useBookStore((state) => state.cart);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [paymentDone, setPaymentDone] = useState(false);
  const [installments, setInstallments] = useState(1);

  const [cardData, setCardData] = useState({
    name: "",
    number: "",
    expiry: "",
    cvv: "",
  });

  const total = cartItems.reduce((acc, item) => {
    const precio = item?.precio ?? 0;
    const cantidad = item?.cantidad ?? 1;
    return acc + precio * cantidad;
  }, 0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "installments") {
      setInstallments(Number(value));
    } else {
      setCardData({ ...cardData, [name]: value });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!cardData.name) newErrors.name = "El nombre es obligatorio.";
    if (!/^\d{16}$/.test(cardData.number))
      newErrors.number = "Número inválido.";
    if (!/^\d{2}\/\d{2}$/.test(cardData.expiry))
      newErrors.expiry = "Formato: MM/AA";
    if (!/^\d{3}$/.test(cardData.cvv)) newErrors.cvv = "CVV inválido.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      setTimeout(() => {
        setPaymentDone(true);
      }, 1000);
    }
  };
  const cuotaMensual = (total / installments).toFixed(2);

  return (
    <>
      <div className="max-w-xl mx-auto px-4 py-32">
        <h1 className="text-3xl font-bold mb-6">Pago con tarjeta</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-semibold mb-1">Nombre completo</label>
            <input
              type="text"
              name="name"
              value={cardData.name}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2"
              placeholder="Juan Pérez"
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Número de tarjeta
            </label>
            <input
              type="text"
              name="number"
              value={cardData.number}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2"
              placeholder="1234123412341234"
              maxLength={16}
            />
            {errors.number && (
              <p className="text-red-600 text-sm mt-1">{errors.number}</p>
            )}
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block font-semibold mb-1">
                Vencimiento (MM/AA)
              </label>
              <input
                type="text"
                name="expiry"
                value={cardData.expiry}
                onChange={handleChange}
                className="w-full border rounded px-4 py-2"
                placeholder="12/25"
                maxLength={5}
              />
              {errors.expiry && (
                <p className="text-red-600 text-sm mt-1">{errors.expiry}</p>
              )}
            </div>

            <div className="w-1/2">
              <label className="block font-semibold mb-1">CVV</label>
              <input
                type="text"
                name="cvv"
                value={cardData.cvv}
                onChange={handleChange}
                className="w-full border rounded px-4 py-2"
                placeholder="123"
                maxLength={3}
              />
              {errors.cvv && (
                <p className="text-red-600 text-sm mt-1">{errors.cvv}</p>
              )}
            </div>
          </div>

          {/* Selector de cuotas */}
          <div>
            <label className="block font-semibold mb-1">
              Cuotas sin interés
            </label>
            <select
              name="installments"
              value={installments}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2"
            >
              {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>
                  {n} cuota{n > 1 ? "s" : ""} de ${(total / n).toFixed(2)}
                </option>
              ))}
            </select>
          </div>

          <div className="text-right  font-semibold text-lg">
            Total a pagar: <span className="text-blue-600">${total}</span>
            <br />
            {installments > 1 ? (
              <p className="text-gray-500">
                En {installments} cuota{installments > 1 ? "s" : ""} sin interes
                de <span className="text-gray-400">${cuotaMensual}</span>
              </p>
            ) : null}
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-800 w-full"
          >
            Pagar
          </button>
        </form>
        {paymentDone ? <ModalConfirmation /> : null}
      </div>
    </>
  );
}
