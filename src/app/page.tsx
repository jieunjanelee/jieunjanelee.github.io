import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { WorkTeaser } from "@/components/sections/WorkTeaser";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <WorkTeaser />
      </main>
      <Footer />
    </>
  );
}
