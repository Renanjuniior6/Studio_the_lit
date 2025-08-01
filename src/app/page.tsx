import TattooShow from "@/components/TattooShow";
import Hero from "@/components/Hero";
import About from "@/components/About";

import styles from "../styles/page.module.css";
import Arts from "@/components/Arts";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className={styles.page}>
        <Hero />
        <TattooShow />
        <About />
        <Arts />
        <Services />
    </main>
  );
}
