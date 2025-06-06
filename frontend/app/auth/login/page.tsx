"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface LoginForm {
  username: string;
  password: string;
}

export default function Login() {
  const [form, setForm] = useState<LoginForm>({
    username: "",
    password: "",
  });

  const router = useRouter();
  const [error, setError] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3232/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", //
        body: JSON.stringify(form),
      });

      if (res.ok) {
        router.push("/");
      } else {
        const data = await res.json();
        throw new Error(data.error || "Error en el login");
      }
    } catch (err: any) {
      setError(err.message || "Error desconocido");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Iniciar Sesión</h1>

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

        {error && <p className="text-red-500">{error}</p>}
      </form>

      <Link href="/auth/create-account">
        <button className="text-blue-600">¿No tenés cuenta? Crear una</button>
      </Link>
    </main>
  );
}
