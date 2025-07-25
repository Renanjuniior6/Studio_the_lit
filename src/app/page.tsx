import About from "@/components/About";
import Hero from "@/components/Hero";
import Assessments from "@/components/Assessments";

import styles from "../styles/page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <Hero />
      <About />
      <Assessments />
    </main>
  );
}
