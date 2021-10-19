import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RestrictedItems() {
    return (
        <div>
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

            <div className = "container-fluid align-items-center p-3 mb-2 bg-light" style = {{ height: "100vh" }}>
                <h1>Carry-on baggage prohibited and restricted items</h1>
                <p className = "display-8"><strong>To keep everyone safe, there are some things you must not take into the aircraft cabin and some that need to comply with specific conditions.</strong></p>
                <div className = "card">
                    <div className = "card-header"><strong>List of prohibited items</strong></div>
                        <div className = "card-body ">
                            <blockquote className = "blockquote mb-0">
                            <h6 className = "text-sm">Sharp objects or cutting implements, such as knives, box cutters, letter openers, scissors, tradesman's tools, screwdrivers and darts</h6>
                            <h6 className = "text-sm">Sporting goods or club like items, such as baseball bats, pool cues, golf clubs, lacrosse sticks, ski poles, brass knuckles, hammers, boomerangs and didgeridoos</h6>                            <h6 className = "text-sm">Sharp objects or cutting implements, such as knives, box cutters, letter openers, scissors, tradesman's tools, screwdrivers and darts</h6>
                            <h6 className = "text-sm">More than one box of matches or lighter (see additional information below)</h6>                            
                            <h6 className = "text-sm">Sharp objects or cutting implements, such as knives, box cutters, letter openers, scissors, tradesman's tools, screwdrivers and darts</h6>
                            <h6 className = "text-sm">Firearms or weapons including replicas</h6>                            
                            <h6 className = "text-sm">Nearly all flammable, explosive, corrosive or toxic items</h6>
                            <h6 className = "text-sm">Printer or toner cartridges weighing 16oz or 453g or greater on flights departing to, through or from the USA, Vancouver and London</h6>                            <h6 className = "text-sm">Sharp objects or cutting implements, such as knives, box cutters, letter openers, scissors, tradesman's tools, screwdrivers and darts</h6>
                            <h6 className = "text-sm">Liquid oxygen systems (see gaseous oxygen cylinders under approval required below)</h6>                            
                            <h6 className = "text-sm">Disabling devices containing an irritant or incapacitating substance, such as pepper spray</h6>
                            <h6 className = "text-sm">Electric shock weapons containing dangerous goods such as explosives, compressed gas or lithium batteries</h6>                            
                            <h6 className = "text-sm">Sharp objects or cutting implements, such as knives, box cutters, letter openers, scissors, tradesman's tools, screwdrivers and darts</h6>
                            <h6 className = "text-sm">Aerosols that are not medicinal or toiletry items</h6>                            
                            <h6 className = "text-sm">Security type equipment - such as attaché cases, cash boxes and cash bags - that include lithium batteries, pyrotechnical material or other dangerous goods as part of the equipment</h6>
                            <h6 className = "text-sm">Hoverboard, Mini-Segway, solo wheel, air wheel, balance wheel, Lithium powered skateboard or Personal transportation devices with on-board storage and similar lithium battery powered small recreational vehicles</h6>                            
                            <h6 className = "text-sm">Installed or spare lithium batteries with ratings more than 160Wh or 8g lithium content, see travelling with lithium batteries</h6>
                            <h6 className = "text-sm">Durian fruit cannot be carried, either on your person, in carry-on or in checked in luggage</h6>
                            <h6 className = "text-sm">ㅤ</h6>
                            <footer className = "blockquote-footer">Updated 22 days ago</footer>
                            </blockquote>
                        </div>
                    </div>
                        <h1></h1>
                        <h2></h2>

                    <div className = "row">
                        <div className = "col-sm-6">
                            <div className = "card">
                                <div className = "card-body">
                                <h5 className =" card-title"><strong>For flights departing New Zealand</strong></h5>
                                <p className = "card-text">Please refer to the <a href = "https://www.aviation.govt.nz/">Aviation Security Service</a> website for detailed information.</p>
                                <p className = "card-text">On international flights, some items cannot be taken in your carry-on bag/s through security screening. Find out more at carry-on luggage restrictions.</p>
                                <p className = "card-text">Check you are not carrying prohibited items or dangerous goods that are restricted from carriage on all passenger flights.</p>
                                <p className = "card-text">For International flights you should check that any powders, liquids aerosols and gels in your carry-on luggage do not exceed the volume restrictions.</p>
                            </div>
                        </div>
                        </div>
                            <div className = "col-sm-6">
                                <div className = "card">
                                <div className = "card-body">
                                    <h5 className = "card-title">
                                    <h5 className = "card-title"><strong>For flights departing other countries</strong>
                                    </h5>    
                                    </h5>
                                    <p className = "card-text">Local airport security restrictions may further limit the quantities and conditions shown above and below.</p>
                                    <p className = "card-text">For flights departing from or through USA airports see the <a href = "https://www.tsa.gov/">TSA website</a></p>
                                    <p className = "card-text">For flights departing from or via the United Kingdom see the <a href = "https://www.caa.co.uk/Passengers/Before-you-fly/Baggage/What-items-can-I-travel-with/">UK authorities website</a></p>
                                    <p className = "card-text">For flights departing from or via Australia see the <a href = "https://www.homeaffairs.gov.au/about-us/what-we-do/travelsecure/carry-on-baggage/items-you-cant-take-on-plane">Home Affairs website</a></p>
                                    <p className = "card-text">For flights departing from or via Canada see the <a href = "https://www.icao.int/Security/Pages/default.aspx">ICAO website</a></p>
                                </div>
                            </div>
                    </div>
                        
        </div>



{/* <div class="card-group">
  <div class="card">
    <img class="card-img-top" src="..." alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="..." alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="..." alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div> */}
                    
                    <div className = "d-flex container-fluid fixed-bottom justify-content-center"><p className = "text-center"></p><p className = "text-center"></p></div>
                </div> 

  
   
              

  







  

        </div>     
    )
}
