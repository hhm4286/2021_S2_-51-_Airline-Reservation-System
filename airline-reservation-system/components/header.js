import Link from 'next/link'
import Head from 'next/head'

export default function Header() {
  return (
    <div class="container-fluid justify-content-center">

      <Head>
        <title>Skyhub</title>
       <meta name="description" content="Skyhub" />
      <link rel="icon" href="/favicon.ico" />
      </Head>

    <div class="container p-3 mb-2 bg-light">

    <div class="container  border-bottom">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
            <Link href="/">
                <a class="nav-link">Home</a>
            </Link>
        </li>
        <li class="nav-item">
            <Link href="/bookings">
                <a class="nav-link">Booking</a>
            </Link>
        </li>
        <li class="nav-item">
            <Link href="/transport">
                <a class="nav-link">Transport</a>
            </Link>
        </li>
        <li class="nav-item">
            <Link href="/covid">
                <a class="nav-link">Covid-19</a>
            </Link>
        </li>
      </ul>
    </header>
    </div>

    <div class="container p-3 mb-2 bg-light"></div>

    </div>
</div>
  )
}