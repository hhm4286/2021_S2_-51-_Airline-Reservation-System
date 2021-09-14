import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'


export default function Home() {
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
        <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
        <li class="nav-item"><a href="/booking" class="nav-link active" aria-current="page">Booking</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Transport</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Covid-19</a></li>
        <a class="btn btn-primary btn-md " href="/signin" role="button">Sign In</a>
      </ul>
    </header>
    </div>


    <div class="container-fluid justify-content-center border">

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div class="d-grid gap-2 col-6 mx-auto">
    <a class="btn btn-primary btn-lg" href="/checkout" role="button">Sign in</a>
    <a class="btn btn-primary btn-lg" href="/checkout" role="button">Checkout as guest</a>
</div>
        

     

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>


    </div>









    <div class="container">
        <footer class="py-3 my-4">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Booking</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Transport</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Covid-19</a></li>
        </ul>
          <p class="text-center text-muted">&copy; 2021 Skyhub</p>
        </footer>
      </div>
      </div>
    </div>
  )
}

