import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default class Carousell extends Component {
  render() {
    return (
      <Carousel >
        <div style={{ height: "" }}>
          <img src="https://www.searchenginejournal.com/wp-content/uploads/2021/05/googles-top-products-carousels-seo-teardown-609a61dc7dd86.png" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="https://media.licdn.com/dms/image/D5612AQGpKHfPQhj44g/article-cover_image-shrink_720_1280/0/1660728087274?e=2147483647&v=beta&t=NNQyduKJGToVme7VHLkbTgICvJejztPLIfi5Je-X_i8" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="https://www.shutterstock.com/image-vector/shopping-online-on-website-mobile-260nw-2106913574.jpg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    );
  }
}
