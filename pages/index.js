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
        <a className={styles.visit} href="https://www.google.com/maps/place/The+Midtown+Cafe/@25.7686372,87.4703869,17z/data=!3m1!4b1!4m5!3m4!1s0x39eff916e521eddb:0xb9190efcc817d4fc!8m2!3d25.7686372!4d87.4725756">Visit Us</a>
      </main>
    </div>
  )
}
