import Hero from "@/components/Hero";
import LeetCode from "@/components/LeetCode";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <section className="w-full px-6 pb-12 antialiased bg-white">
      <Hero />
      <Skills />
      <LeetCode />
    </section>
  );
}
