"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";

import { useRouter } from "next/navigation";

interface LoginForm {
  username: string;
  password: string;
}

export const dynamic = "force-dynamic";

export default function Login() {
  const [form, setForm] = useState<LoginForm>({ username: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      const r = await fetch("https://bookstore-gxg7.onrender.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(form),
      });

      if (!r.ok) {
        const { error } = await r.json();
        throw new Error(error ?? "Login failed");
      }

      const check = await fetch(
        "https://bookstore-gxg7.onrender.com/protected",
        { method: "POST", credentials: "include" }
      );

      if (check.ok) router.replace("/");
      else throw new Error("La sesión no se estableció");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error desconocido");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-14 p-4">
      <p className=" text-6xl font-extrabold">
        Book<span className="text-blue-600">S</span>tore
      </p>
      <h1 className="text-2xl font-medium mb-4">Iniciar Sesión</h1>

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

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Iniciar sesión
        </button>

        <div className="p-2">
          {error && (
            <p className="font-medium text-red-500">
              <i>{error}</i>
            </p>
          )}
        </div>
      </form>

      <Link href="/auth/create-account">
        <button className="p-2 text-blue-600 hover:cursor-pointer">
          ¿No tenés cuenta? Crear una cuenta.
        </button>
      </Link>
    </main>
  );
}
