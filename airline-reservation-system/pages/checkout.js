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
        </div>


        <div class="container">
            <div class="row">
          <div class="col">
          <br></br>
      <form>
      <div class="form-row">
        <div class="col">
          <input type="text" class="form-control" placeholder="First name"></input>
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Last name"></input>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Email</label>
          <input type="email" class="form-control" id="inputEmail4" placeholder="Email"></input>
        </div>
      </div>
      <div class="form-group">
        <label for="inputAddress">Address</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
      </div>
      <div class="form-group">
        <label for="inputAddress2">Address 2</label>
        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputCity">City</label>
          <input type="text" class="form-control" id="inputCity"></input>
        </div>
        <div class="form-group col-md-4">
          <label for="inputState">State</label>
          <select id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="form-group col-md-2">
          <label for="inputZip">Zip</label>
          <input type="text" class="form-control" id="inputZip"></input>
        </div>
      </div>
      <br></br>
      <button type="submit" class="btn btn-primary">Checkout</button>
      <br></br>
      </form>
      <br></br>
          </div>
          <div class="col">
            <h1>Your Order:</h1>
          </div>
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