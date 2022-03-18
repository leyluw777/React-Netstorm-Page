import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';
import { faClone } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';


const ArticleCard = (props) => {
    return (
        <div className="article-card">
           
            <FontAwesomeIcon icon={props.icon} className= "card-icon" />
            
            <h4 className= "card-head"> {props.head} </h4>
            <p> {props.paragraph} </p>
        </div>
    )
}
export class Article extends Component {
    render() {
        return (
            <div className="article">
                <div className="container">
                    <div className="row article-head mb-5">
                        <p> HOW IT WORKS </p>
                        <h3>Create and sell your NFTs</h3>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3 col-xl-3 mb-5">
                            <ArticleCard icon = {faWallet} head = "Set up your wallet" paragraph = "Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the NFT Marketplace in the top right corner. Learn about the wallets we support." />
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 col-xl-3 mb-5">
                        <ArticleCard icon = {faThLarge} head = "Create your collection" paragraph = "Click Create and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee." />
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 col-xl-3 mb-5">
                        <ArticleCard icon = {faClone} head = "Add your NFTs" paragraph = "Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content." />
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 col-xl-3 mb-5">
                        <ArticleCard icon = {faList} head = "List them for sale" paragraph = "Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs!" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Article
