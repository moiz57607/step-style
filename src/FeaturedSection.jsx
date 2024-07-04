import React, { useState, useRef } from 'react';
import product1Image1 from './img/product1/1.jpg';
import product1Image2 from './img/product1/2.jpg';
import product1Image3 from './img/product1/3.jpg';
import product1Image4 from './img/product1/4.jpg';
import product2Image1 from './img/product2/1.jpg';
import product2Image2 from './img/product2/2.jpg';
import product2Image4 from './img/product2/4.jpg';
import product2Image3 from './img/product2/3.jpg';
import product3Image1 from './img/product3/1.jpg';
import product3Image2 from './img/product3/2.jpg';
import product3Image4 from './img/product3/4.jpg';
import product3Image3 from './img/product3/3.jpg';

const FeaturedSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const bigImagesRefs = useRef([]);

  const images = [
    [product1Image1, product1Image2, product1Image3, product1Image4],
    [product2Image1, product2Image2, product2Image3, product2Image4],
    [product3Image1, product3Image2, product3Image3, product3Image4],
  ];

  const handleImageClick = (index, productIndex) => {
    setActiveIndex(index);
    bigImagesRefs.current[productIndex].src = images[productIndex][index];
  };

  return (  
    <>
<section className="featured" id="featured">
      {images.map((productImages, productIndex) => (
        <div className="row" key={productIndex}>
          <div className="image-container">
            <div className="small-image">
              {productImages.map((image, index) => (
                <img
                  src={image}
                  alt=""
                  className={`featured-image-${productIndex + 1}`}
                  key={index}
                  onClick={() => handleImageClick(index, productIndex)}
                />
              ))}
            </div>
            <div className="big-image">
              <img
                src={productImages[0]}
                alt=""
                className={`big-image-${productIndex + 1}`}
                ref={ref => bigImagesRefs.current[productIndex] = ref}
              />
            </div>
          </div>
          <div className="content">
            <h3>new nike airmac shoes</h3>
            <div className="stars">
              {[...Array(5)].map((_, index) => (
                <i className="fa fa-star" key={index}></i>
              ))}
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Fugit officiis omnis quo laboriosam velit culpa ex illo, error enim nostrum?
            </p>
            <div className="price">$90 <span>$120</span></div>
            <a href="#" className="btn">add to cart</a>
          </div>
        </div>
      ))}
    </section>
    </>
  );
};

export default FeaturedSection;
