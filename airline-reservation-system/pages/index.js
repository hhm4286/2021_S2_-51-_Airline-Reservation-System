import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'



export default function Home() {
  return (

    <div className={styles.container}>

  
      <Head>
        <title>Skyhub</title>
       <meta name="description" content="Skyhub" />
      <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

      <div
  data-skyscanner-widget="FlightSearchWidget"
  data-locale="en-GB"
  data-market="NZ"
  data-currency="NZD"
  data-flight-type="return"
  data-colour="white"
  className={styles.div1}
></div>
<script src="https://widgets.skyscanner.net/widget-server/js/loader.js" async></script>


      </main>

      <footer className={styles.footer}>
        
         
  
         <p> Created in Auckland, New Zealand</p>
        
        
      </footer>
    </div>
  )
}




