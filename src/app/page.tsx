import styles from "../styles/page.module.css";

import Hero from "@/components/Hero";
import TattooShow from "@/components/TattooShow";
import About from "@/components/About";
import Arts from "@/components/Arts";
import Services from "@/components/Services";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className={styles.page}>
        <Hero />
        <TattooShow />
        <About />
        <Arts />
        <Services />
        <Awards />
        <Contact />
    </main>
  );
}
