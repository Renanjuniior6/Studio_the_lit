import styles from "../styles/page.module.css";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className={styles.page}>
      <Hero />
    </main>
  );
}
