import { redirect } from "next/navigation";
import { Hero } from "./components/hero/Hero";
import { cookies } from "next/headers";

import { Navbar } from "./components/navbar/Navbar";
import { jwtDecode } from "jwt-decode";

export default async function Home() {
  const cookieStore = cookies();
  const token = await cookieStore.get("access-token")?.value;

  if (!token) {
    redirect("/auth/login");
  }
  const decoded = jwtDecode<{ id: string; username: string }>(token);
  const username = decoded.username;

  return (
    <div>
      <Navbar username={username} />
      <Hero />
    </div>
  );
}
