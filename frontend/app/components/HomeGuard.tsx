"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function HomeGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    fetch("https://bookstore-gxg7.onrender.com/protected", {
      method: "POST",
      credentials: "include", // 👈 importante para cookies
    })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then((data) => {
        console.log("Sesión válida", data);
        setChecking(false); // 👈 CAMBIÁ ESTO
      })
      .catch(() => {
        console.warn("Sesión inválida");
        router.replace("/auth/login");
      });
  }, []);

  if (checking) return <div>Cargando sesión...</div>; // o un loader
  return <>{children}</>;
}
