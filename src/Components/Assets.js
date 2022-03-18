import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import Slider1 from './../img/slider1.jpg';
import Slider2 from './../img/slider2.jpg';
import Slider3 from './../img/slider3.jpg';
// import Slider4 from './../img/slider4.jpg';
// import Slider5 from './../img/slider5.jpg';
// import Slider6 from './../img/slider6.jpg';


import React, { Component } from 'react'


const AssetCard = (props) => {
    return (
        <div className="asset-card">
            <div className="asset-img">
            <img src={props.image} alt="" />
            </div>
            <h5>{props.name}</h5>
            <p> Owned by <a href=""> {props.author} </a> </p>
            <div className="eth">
                <p>{props.eth} ETH</p>
                <p>1 of 1</p>
            </div>
            <button>
            <FontAwesomeIcon icon={faShoppingBag} style = {{"margin-right": "5px"}}/>
            Place a bid
            </button>
        </div>
    )
}


export class Assets extends Component {
    render() {
        return (
          <div className="assets">
              <div className="container">
                  <div className="row assets-head mb-3">
                      <p className="content-p">EXCLUSIVE ASSETS</p>
                      <div className="assets-header">
                      <h3>Explore</h3>
                      <p>View all 
                      <FontAwesomeIcon icon={faArrowRight} style = {{"margin-left": "5px"}}/>
                      </p>
                      </div>
                  </div>
                  <div className="row assets-content">
                      <div className="col-12 col-md-6 col-lg-3 col-xl-3 mb-3">
                          <AssetCard image= {Slider1} author = "Richard" eth= "1.5" name = "Walking On Air" />
                      </div>
                      <div className="col-12 col-md-6 col-lg-3 col-xl-3 mb-3">
                      <AssetCard image= {Slider2} author = "John Deo" eth= "2.1" name = "Domain Names" />
                      </div>
                      <div className="col-12 col-md-6 col-lg-3 col-xl-3 mb-3">
                      <AssetCard image= {Slider3} author = "Arham" eth= "3.2" name = "Trading Cards" />
                      </div>
                      <div className="col-12 col-md-6 col-lg-3 col-xl-3 mb-3">
                      <AssetCard image= {Slider1} author = "Yasmin" eth= "1.1" name = "Industrial Revolution" />
                      </div>
                  </div>
              </div>

              <div className="row assets-content-2 justify-content-center">
                    <button className= "col-3 col-md-2 col-lg-2 col-xl-2">
                        Load More
                    </button>
              </div>
          </div>
        )
    }
}

export default Assets
