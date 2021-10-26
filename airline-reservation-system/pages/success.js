import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head'

const InvalidPage = () => {
    // const router = useRouter();

    // useEffect(() => {
    //     setTimeout(() => {
    //         router.push('/');
    //     }, 3000)
    // }, [])
    return (
    <div>
      <Head><title>Success! - Skyhub</title></Head>   
      <div className = "d-flex align-items-center bg-light" >
        <nav className = "navbar navbar-expand-lg navbar navbar-light bg-light">
          <button className = "navbar-toggler" type = "button" data-toggle = "collapse" data-target = "#navbarTogglerDemo03" aria-controls = "navbarTogglerDemo03" aria-expanded = "false" aria-label = "Toggle navigation">
            <span className = "navbar-toggler-icon"></span>
          </button>  
                    <nav className = "navbar navbar-light bg-light">
                      ㅤ<a className = "navbar-brand mb-0 h1" href = "/">Skyhub</a>
                    </nav>
                
          <div className = "collapse navbar-collapse" id = "navbarTogglerDemo03">
            <ul className = "navbar-nav mr-auto mt-2 mt-lg-0">
              <li className = "nav-item active">
                <a className = "nav-link" href = "/">HOME</a>
              </li>
              <li className = "nav-item">
                <a className = "nav-link" href = "#">COVID-19</a>
              </li>
              <li className = "nav-item">
                <a className = "nav-link" href = "/product">SERVICES</a>
              </li>  
              <li className = "nav-item">
                <a className = "nav-link position-static" href = "/cart"><img src = "cart.svg"></img></a>
              </li>  
            </ul>  
          </div>
        </nav>
      </div>

      <div className = "d-flex align-items-center justify-content-center p-3 mb-2 bg-light text-dark" style = {{ height: "100vh" }}>
        <div className = "container">

          <div className = "row">
            <div className = "col">
              <div className = "jumbotron">
                <div className = "card-body">
                  <h6 className = "display-2">SUCCESS!</h6>
                  <h1 className = "card-title display-1 text"><strong>Your order was placed.</strong></h1>
                    <p className = "card-text">We can't wait to have you onboard soon!</p>
                    <a className = "btn btn-primary btn-lg" href = "/" role = "button"><strong>BACK TO HOME</strong></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className = "container-fluid fixed-bottom"><p className = "text-center"></p><p className = "text-center">© 2021 Skyhub</p></div>
      </div>
    )
}
export default InvalidPage;