import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
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
      </ul>
      <a class="btn btn-primary btn-md " href="/signin" role="button">Sign In</a>
    </header>
    </div>

      <div class="container px-5 my-5">
    <form id="flightForm">
    <div class="form-floating mb-3">
            <select class="form-select" id="origin" aria-label="Origin">
                <option disabled selected value> -- select an option -- </option>
                <option value="auckland">Auckland</option>
                <option value="wellington">Wellington</option>
                <option value="christchurch">Christchurch</option>
                <option value="queenstown">Queenstown</option>
            </select>
            <label for="class">Origin</label>
        </div>
        <div class="form-floating mb-3">
            <select class="form-select" id="Destination" aria-label="Destination">
                <option disabled selected value> -- select an option -- </option>
                <option value="auckland">Auckland</option>
                <option value="wellington">Wellington</option>
                <option value="christchurch">Christchurch</option>
                <option value="queenstown">Queenstown</option>
            </select>
            <label for="class">Destination</label>
        </div>
        <div class="form-floating mb-3">
            <select class="form-select" id="class" aria-label="Class">
                <option value="Economy">Economy</option>
                <option value="Business">Business</option>
                <option value="First">First</option>
            </select>
            <label for="class">Class</label>
        </div>
        <div class="form-floating mb-3">
            <select class="form-select" id="ticket" aria-label="Ticket">
                <option value="Adult">Adult</option>
                <option value="Child">Child</option>
            </select>
            <label for="ticket">Ticket</label>
        </div>
        <div class="form-floating mb-3">
            <input class="form-control" id="numberOfTickets" type="text" placeholder="Number of tickets" data-sb-validations="required" />
            <label for="numberOfTickets">Number of tickets</label>
            <div class="invalid-feedback" data-sb-feedback="numberOfTickets:required">Number of tickets is required.</div>
        </div>
        
        <div class="container">
        <div class="row">
        <div class="col">
          1 of 2
        </div>
         <div class="col">
         2 of 2
         </div>
        </div>
        </div>

        <div class="d-grid">
             <a class="btn btn-primary btn-lg" href="/signin" role="button">Search</a>
        </div>
    </form>
</div>
     
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>



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




