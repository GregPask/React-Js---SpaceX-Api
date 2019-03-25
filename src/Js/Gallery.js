import React, { Component } from 'react';
import Overlay from "./Navoverlay";

import Lightbox from "react-image-lightbox";
import 'react-image-lightbox/style.css';
import { Link } from "react-router-dom";

const images = [
    "https://images.pexels.com/photos/256219/pexels-photo-256219.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    "https://images.pexels.com/photos/256297/pexels-photo-256297.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    "https://cdn.mos.cms.futurecdn.net/NMwasUPmRFzY3ayztk55yS.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Iridium-4_Mission_%2825557986177%29.jpg/1200px-Iridium-4_Mission_%2825557986177%29.jpg",
    "https://e3.365dm.com/17/12/1600x900/skynews-spacex-california-pic-danny-sullivan_4190244.jpg?20171223043609",
    "https://thumbs-prod.si-cdn.com/tgny1TLAwlXLHFqgGcUBcGcJLVc=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/f0/c7/f0c7098c-4267-407a-964c-0eb844cd6fe1/file-20180207-74470-1x5fdkt.png",
    "https://media.wired.com/photos/5c1ad89941433e76e10a9cf8/master/pass/falcon.jpg"
];

class Gallery extends Component {
    state = { 
        isOpen: false,
        photoIndex: 0
     }
    render() { 

        let { isOpen, photoIndex} = this.state;
        return ( 
            <div id="gallery">
            <Overlay />
                {/* <h2>Gallery</h2> */}
                <button onClick={() => this.setState({isOpen: true})}>View our Gallery</button>

                <Link id="gallery-btn" to="/launches">View Launches</Link>


            {this.state.isOpen && (
	        <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                onCloseRequest={() => this.setState({ isOpen: false })}
                imageCaption = {`${photoIndex + 1} of ${images.length}`}
                onMovePrevRequest={() =>
                this.setState({
                    photoIndex: (photoIndex + images.length - 1) % images.length,
                })
                }
                onMoveNextRequest={() =>
                this.setState({
                    photoIndex: (photoIndex + 1) % images.length,
                })
                }
          />
          )}
            </div>
         );
    }
}
 
export default Gallery;