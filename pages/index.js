import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image/'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Midtown Cafe</title>
      </Head>
      <main className={styles.main}>
        <Image src={"/images/food.svg"} width={250}
               height={250} alt="Food"/>
        <h1 className={styles.title}>
          The Midtown Cafe
        </h1>
        <p>Website under construction</p>
      </main>
    </div>
  )
}
