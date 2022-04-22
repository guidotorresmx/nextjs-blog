import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
export default function blog() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Blog <a href="./blog">entries.</a>
        </h1>

        <div className={styles.grid}>
          <a href="./copilot" className={styles.card}>
            <h2>Github Copilot &rarr;</h2>
            <p>Learn about Github Copilot and its functionality.</p>
          </a>

          <a href="./deploying" className={styles.card}>
            <h2>Deploying sites &rarr;</h2>
            <p>
              Learn about deploying a website with Github Pages, AWS and a
              custom Domain!
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
