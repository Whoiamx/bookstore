import { Hero } from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import HomeGuard from "./components/HomeGuard";

export default function Home() {
  return (
    <HomeGuard>
      {(username: string) => (
        <>
          <Navbar username={username} />
          <Hero />
          <Footer />
        </>
      )}
    </HomeGuard>
  );
}
