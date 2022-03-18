import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Collection1 from './../img/collection1.jpg'
import Collection2 from './../img/collection2.jpg'
import Collection3 from './../img/collection3.jpg'
import Collection4 from './../img/collection4.jpg'
import Collection5 from './../img/collection5.jpg'
import Collection6 from './../img/collection6.jpg'
import Collection7 from './../img/collection7.jpg'
import Collection8 from './../img/collection8.jpg'

import Avatar1 from './../img/ava1.jpg';
import Avatar2 from './../img/ava2.jpg';
import Avatar3 from './../img/ava3.jpg';
import Avatar4 from './../img/ava4.jpg';
import Avatar5 from './../img/ava5.jpg';
import Avatar6 from './../img/ava6.jpg';
import Avatar7 from './../img/ava7.jpg';
import Avatar8 from './../img/ava8.jpg';



const CollectionCard = (props) => {
    return (
        <div className="collection-card">
            <img src={props.collectImg} alt="" className="collectImg" />
            <div className="avatar">
                <div className="avatar-img">
                    <img src={props.avaImg} alt=""  />
                </div>
            </div>
            <p className="collect-name">{props.collection}</p>
            <p>ERC-{props.erc}</p>
        </div>
    )
}



export class Collections extends Component {
    render() {
        return (
            <div className="collections">
                <div className="container">
                    <div className="row collect-head">
                        <p className="content-p">MOST POPULAR</p>
                        <div className="head-coll">
                        <h3>Popular Collections</h3>
                        <p >Explore more
                        <FontAwesomeIcon icon={faArrowRight} style = {{"margin-left": "5px"}}/>
                         </p>
                        </div>
                    </div>

                    <div className="row collect-content">
                        <div className="col-12 col-md-6 col-lg-3 col-xl-3 mb-4">
                            <CollectionCard collectImg={Collection1} avaImg={Avatar1} collection="Virtual Worlds" erc="729" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 col-xl-3 mb-4">
                        <CollectionCard collectImg={Collection2} avaImg={Avatar2} collection="Digital Arts" erc="522" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 col-xl-3 mb-4">
                        <CollectionCard collectImg={Collection3} avaImg={Avatar3} collection="Sports" erc="495" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 col-xl-3 mb-4">
                        <CollectionCard collectImg={Collection4} avaImg={Avatar4} collection="Photography" erc="873" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 col-xl-3 mb-4">
                        <CollectionCard collectImg={Collection5} avaImg={Avatar5} collection="Trading Cards" erc="397" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 col-xl-3 mb-4">
                        <CollectionCard collectImg={Collection6} avaImg={Avatar6} collection="Walking On Air" erc="403" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 col-xl-3 mb-4">
                        <CollectionCard collectImg={Collection7} avaImg={Avatar7} collection="Domain Names" erc="963" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 col-xl-3 mb-4">
                        <CollectionCard collectImg={Collection8} avaImg={Avatar8} collection="Collectibles" erc="685" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Collections
