import React, { Component } from 'react';
import Ava1 from './../img/ava1.jpg';
import Ava2 from './../img/ava2.jpg';
import Ava3 from './../img/ava3.jpg';
import Ava4 from './../img/ava4.jpg';
import Ava5 from './../img/ava5.jpg';
import Ava6 from './../img/ava6.jpg';

const ArtistCard =(props) => {
    return (
        <div className="artist-card">
            <div className="art-card-cont">
                <img src={props.avatar} alt="" />
                <div className="artist-info">
                <p className="email-p"> {props.email} </p>
                <p> {props.bnb} BNB </p>
                </div>
            </div>
        </div>
    )
}


export class Artists extends Component {
    render() {
        return (
           <div className="artists">
               <div className="container">
                   <div className="row art-head mb-3">
                        <p className = "content-p">CREATIVE ARTIST</p>
                        <h3>Top Sellers</h3>
                   </div>

                   <div className="row art-content ">
                       <div className="col-12  col-md-6 col-lg-4 col-xl-4 mb-4 mr-lg-3">
                           <ArtistCard avatar = {Ava1}  email = "@Richard" bnb = "1.5" />
                       </div>
                       <div className="col-12  col-md-6 col-lg-4 col-xl-4 mb-4">
                       <ArtistCard avatar = {Ava2}  email = "@JohnDeo" bnb = "2.3" />
                       </div>
                       <div className="col-12  col-md-6 col-lg-4 col-xl-4 mb-4">
                       <ArtistCard avatar = {Ava3}  email = "@Junaid" bnb = "2.5" />
                       </div>
                       <div className="col-12  col-md-6 col-lg-4 col-xl-4 mb-4">
                       <ArtistCard avatar = {Ava4}  email = "@Jasmin" bnb = "1.2" />
                       </div>
                       <div className="col-12  col-md-6 col-lg-4 col-xl-4 mb-4">
                       <ArtistCard avatar = {Ava5}  email = "@ArhamH" bnb = "3.2" />
                       </div>
                       <div className="col-12  col-md-6 col-lg-4 col-xl-4 mb-4">
                       <ArtistCard avatar = {Ava6}  email = "@Sara" bnb = "4.7" />
                       </div>
                   </div>
               </div>
           </div>
        )
    }
}

export default Artists
