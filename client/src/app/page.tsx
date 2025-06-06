import TopBar from "@/components/home/TopBar";
import Main from "@/components/home/Main";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container mt-5">
        <TopBar />
        <Main />
      </div>
    </>
  );
}
