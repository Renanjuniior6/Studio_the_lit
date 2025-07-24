import About from "@/components/About";
import Hero from "@/components/Hero";

import styles from "../styles/page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <Hero />
      <About />
    </main>
  );
}
