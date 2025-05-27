"use client";
import Link from "next/link";
import { useState } from "react";

export const AddressForm = () => {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    direccion: "",
    ciudad: "",
    provincia: "",
    codigoPostal: "",
    telefono: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos del formulario:", form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow space-y-4"
    >
      <h2 className="text-2xl font-bold mb-4">Dirección de envío</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
          className="p-3 border rounded-md w-full"
          required
        />
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          value={form.apellido}
          onChange={handleChange}
          className="p-3 border rounded-md w-full"
          required
        />
      </div>

      <input
        type="text"
        name="direccion"
        placeholder="Dirección (Calle y número)"
        value={form.direccion}
        onChange={handleChange}
        className="p-3 border rounded-md w-full"
        required
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <input
          type="text"
          name="ciudad"
          placeholder="Ciudad"
          value={form.ciudad}
          onChange={handleChange}
          className="p-3 border rounded-md w-full"
          required
        />
        <input
          type="text"
          name="provincia"
          placeholder="Provincia"
          value={form.provincia}
          onChange={handleChange}
          className="p-3 border rounded-md w-full"
          required
        />
        <input
          type="text"
          name="codigoPostal"
          placeholder="Código Postal"
          value={form.codigoPostal}
          onChange={handleChange}
          className="p-3 border rounded-md w-full"
          required
        />
      </div>

      <input
        type="tel"
        name="telefono"
        placeholder="Teléfono de contacto"
        value={form.telefono}
        onChange={handleChange}
        className="p-3 border rounded-md w-full"
        required
      />

      <Link href="/checkout">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded transition">
          Terminar la compra
        </button>
      </Link>
    </form>
  );
};
