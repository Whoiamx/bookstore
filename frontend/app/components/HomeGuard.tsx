// app/components/auth/HomeGuard.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function HomeGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    fetch("https://bookstore-gxg7.onrender.com/protected", {
      method: "POST",
      credentials: "include",
    })
      .then((r) => {
        if (!r.ok) throw new Error();
        return r.json();
      })
      .then(() => setChecking(false))
      .catch(() => router.replace("/auth/login"));
  }, [router]);

  if (checking) return null; // o un loader
  return <>{children}</>;
}
