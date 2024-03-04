import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
export default class Carousell extends Component {
  render() {
    return (
     <div >
       <MDBCarousel showControls fade className="shadow p-4 mb-5 bg-white rounded" >
      <MDBCarouselItem itemId={1}>
        <img style={{height:"500px"}} src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img style={{height:"500px"}} src='https://mdbootstrap.com/img/new/slides/042.jpg' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img  style={{height:"500px"}} src='https://mdbootstrap.com/img/new/slides/043.jpg' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
    </MDBCarousel>
     </div>
    );
  }
}
