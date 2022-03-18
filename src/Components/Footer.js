import React, { Component } from 'react'

import Logo from './../img/logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';




export class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12 col-md-12 col-lg-4 col-xl-4 first-c  mb-5">
                            <img src={Logo} alt="" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis non, fugit totam vel laboriosam vitae.</p>
                            <div className="social-i">
                            <a href=""><FontAwesomeIcon icon={faFacebookF} className="footer-i" /></a>
                            <a href=""><FontAwesomeIcon icon={faTwitter} className="footer-i" /></a>
                            <a href=""><FontAwesomeIcon icon={faGoogle} className="footer-i" /></a>
                            <a href=""><FontAwesomeIcon icon={faLinkedin} className="footer-i" /></a>

                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-2 col-xl-2 second-c mb-5">
                            <p>Useful Links</p>
                            <ul>
                                <li><a href="">All NFTs</a></li>
                                <li><a href="">How It Works</a></li>
                                <li><a href="">Create</a></li>
                                <li><a href="">Explore</a></li>
                                <li><a href="">Privacy & Terms</a></li>
                            </ul>
                        </div>

                        <div className="col-12 col-md-12 col-lg-3 col-xl-3 third-c mb-5">
                            <p>Community</p>
                            <ul>
                                <li><a href="">Help Center</a></li>
                                <li><a href="">Partners</a></li>
                                <li><a href="">Suggestions</a></li>
                                <li><a href="">Blog</a></li>
                                <li><a href="">Newsletter</a></li>
                            </ul>
                    </div>

                    <div className="col-12 col-md-12 col-lg-3 col-xl-3 fourth-c mb-5">
                        <p>Subscribe us</p>
                        <form action="">
                            <input type="email" placeholder = 'info@yourmail.com' />
                            <button>
                            <FontAwesomeIcon icon={faPaperPlane}  />
                            </button>
                        </form>
                    </div>


                    </div>

                   
                </div>

                <hr />

                <div className="row bottom-part ">
                    <p className= "col-12 col-md-6 col-lg-6 col-xl-6">©2021 NetStorm, All Rights Reserved.</p>
                    <p className= "col-12 col-md-6 col-lg-6 col-xl-6">Made with  By <a href="">Themeland</a></p>
                </div>
            </footer>
        )
    }
}

export default Footer
