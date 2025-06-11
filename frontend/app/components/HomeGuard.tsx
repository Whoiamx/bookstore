"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function HomeGuard({
  children,
}: {
  children: (username: string) => React.ReactNode;
}) {
  const router = useRouter();
  const [checking, setChecking] = useState(true);
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    fetch("https://bookstore-gxg7.onrender.com/protected", {
      method: "POST",
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then((data) => {
        setUsername(data.username);
        setChecking(false);
      })
      .catch(() => {
        router.replace("/auth/login");
      });
  }, []);

  if (checking) return <div>Cargando sesión...</div>;

  return <>{children(username)}</>; // 👈 Le pasás username como prop
}
