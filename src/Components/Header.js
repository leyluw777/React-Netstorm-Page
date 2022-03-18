import React, { Component } from 'react';
import Logo from './../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';



export class Header extends Component {
    render() {
        return (
            <header>
                <div className="container ">
                    <div className="row nav-row align-items-center">
                        
                            <div className="logo col-2 col-sm-5 col-md-7 col-lg-8 col-xl-2">
                                <img src={Logo} alt="" />
                            </div>

                            <div className="navbar d-none d-xl-flex  col-xl-7">
                                <ul>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Explore</a></li>
                                    <li><a href="">Activity</a></li>
                                    <li><a href="">Community</a></li>
                                    <li><a href="">Pages</a></li>
                                    <li><a href="">Contact</a></li>
                                </ul>
                            </div>

                            <div className="right-nav col-10 col-sm-7 col-md-5 col-lg-4 col-xl-3">
                               
                                <FontAwesomeIcon icon={faBars} color = "white" className= "d-xl-none" style={{"margin-right": "20px"}} id="openMenu"/>

                            
                            <FontAwesomeIcon icon={faSearch} color = "white" style={{"margin-right": "20px"}}  id="openSearch" className="open-search"/>
                            
                            <button>
                            <FontAwesomeIcon icon={faWallet} style = {{"margin-right": "5px"}}/>
                            Wallet Connect
                            </button>
                            </div>
                    </div>

                    <div className="row head-row">
                        <div className="head-content col-12 col-md-6 col-lg-6 xol-xl-6 ">
                            <p className="content-p"> NETSTORM  </p>
                            <h1>Discover, collect, and sell extraordinary NFTs</h1>
                            <p>Explore on the world's best & largest NFT marketplace</p>
                            <div className="head-btns">

                                <button style={{"margin-right": "20px"}} >
                                <FontAwesomeIcon icon={faRocket} style = {{"margin-right": "5px"}}/>
                                Explore
                                </button >
                                
                                <button>
                                <FontAwesomeIcon icon={faEdit} style = {{"margin-right": "5px"}}/>
                                Create
                                </button>
                            </div>
                        </div>
                    </div>
              

        
                </div>
                
                <div className="search-box" id="searchBox">
                    <div className="search-head">
                        <p>Search</p>
                        <a id="closeSearch"><FontAwesomeIcon icon={faTimesCircle} style={{"font-size":"25px"}}/></a>
                        
                    </div>

                    <div className="search-content">
                        <h2>What are you looking for?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <form action="">
                            <input type="text" placeholder="Enter your keywords"/>
                            <button> Search</button>
                        </form>
                    </div>
                </div>


                <div className="toggle-menu" id="toggleMenu">
                        <div className="toggle-head">
                        <p>Menu</p>
                        <FontAwesomeIcon icon={faTimesCircle} style={{"font-size":"25px"}} id="closeMenu"/>
                        </div>
                        <div className="toggle-content">
                            <ul>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Explore</a></li>
                                    <li><a href="">Activity</a></li>
                                    <li><a href="">Community</a></li>
                                    <li><a href="">Pages</a></li>
                                    <li><a href="">Contact</a></li>
                            </ul>
                        </div>
                </div>

               <svg className="head-fig" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 465" version="1.1"><defs><linearGradient x1="49.7965246%" y1="28.2355058%" x2="49.7778147%" y2="98.4657689%" id="linearGradient-1"><stop stop-color="rgba(69,40,220, 0.15)" offset="0%"></stop><stop stop-color="rgba(87,4,138, 0.15)" offset="100%"></stop></linearGradient></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><polygon fill="url(#linearGradient-1)"><animate id="graph-animation" xmlns="http://www.w3.org/2000/svg" dur="2s" attributeName="points" values="0,464 0,464 111.6,464 282.5,464 457.4,464 613.4,464 762.3,464 912.3,464 1068.2,464 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,323.3 282.5,373 457.4,423.8 613.4,464 762.3,464 912.3,464 1068.2,464 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,336.6 457.4,363.5 613.4,414.4 762.3,464 912.3,464 1068.2,464 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,323.3 613.4,340 762.3,425.6 912.3,464 1068.2,464 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,290.4 762.3,368 912.3,446.4 1068.2,464 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,329.6 912.3,420 1068.2,427.6 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,402.4 1068.2,373 1191.2,412 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,376 1068.2,336.6 1191.2,334 1328.1,404 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,376 1068.2,282 1191.2,282 1328.1,314 1440.1,372.8 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,376 1068.2,282 1191.2,204 1328.1,254 1440.1,236 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,376 1068.2,282 1191.2,204 1328.1,164 1440.1,144.79999999999998 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,376 1068.2,282 1191.2,204 1328.1,164 1440.1,8 1440.1,464 0,464;" fill="freeze"></animate></polygon></g></svg>
            </header>
        )
    }
}

export default Header



