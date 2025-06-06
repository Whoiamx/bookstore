"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation"; // o 'next/router' si usás Pages Router
import Link from "next/link";

interface FormState {
  username: string;
  password: string;
  confirmPassword: string;
}

export default function CreateAccount() {
  const router = useRouter();

  const [form, setForm] = useState<FormState>({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: form.username,
          password: form.password,
        }),
      });

      if (!res.ok) throw new Error("Error al crear la cuenta");

      router.push("/login");
    } catch (err: any) {
      setError(err.message || "Error desconocido");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Crear Cuenta</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-sm"
      >
        <input
          type="text"
          name="username"
          placeholder="Nombre de usuario"
          value={form.username}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Repetir contraseña"
          value={form.confirmPassword}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Crear cuenta
        </button>

        {error && <p className="text-red-500">{error}</p>}
      </form>
      <Link href="/auth/login">
        <button className="mt-4 text-sm text-blue-600 underline">
          ¿Ya tenés cuenta? Iniciar sesión
        </button>
      </Link>
    </main>
  );
}
