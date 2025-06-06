import { redirect } from "next/navigation";
import { Hero } from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";

export default function Home() {
  redirect("/auth/login");
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}
