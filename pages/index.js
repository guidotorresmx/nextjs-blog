import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome, this is a blog built with Next.JS and Bootstrap!
        </h1>
      </main>
    </div>
  );
}
