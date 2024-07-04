import React from 'react';
import product1 from './img/product4/1.jpg';
import product2 from './img/product4/2.jpg';
import product3 from './img/product4/3.jpg';
import product5 from './img/product4/5.jpg';
import product7 from './img/product4/7.png';
import product8 from './img/product4/8.png';
const ProductSection = () => {
    return (
        <>
            
            <section className="product" id="product">
            <h1 className="heading">latest <span>Products</span></h1>
            <div className="box-container">
                {/* First product */}
                <div className="box">
                    <div className="icons">
                        <a href="#" className="fa fa-heart"></a>
                        <a href="#" className="fa fa-share"></a>
                        <a href="#" className="fa fa-eye"></a>
                    </div>
                    <div className="content">
                        <img src={product1} alt="" />
                        <h3>Nike Shoes</h3>
                        <div className="price">$200 <span>$150</span></div>
                        <div className="stars">
                            {[...Array(5)].map((star, index) => (
                                <i className="fa fa-star" key={index}></i>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Second product */}
                <div className="box">
                    <div className="icons">
                        <a href="#" className="fa fa-heart"></a>
                        <a href="#" className="fa fa-share"></a>
                        <a href="#" className="fa fa-eye"></a>
                    </div>
                    <div className="content">
                        <img src={product2} alt="" />
                        <h3>Nike Shoes</h3>
                        <div className="price">$200 <span>$150</span></div>
                        <div className="stars">
                            {[...Array(5)].map((star, index) => (
                                <i className="fa fa-star" key={index}></i>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Third product */}
                <div className="box">
                    <div className="icons">
                        <a href="#" className="fa fa-heart"></a>
                        <a href="#" className="fa fa-share"></a>
                        <a href="#" className="fa fa-eye"></a>
                    </div>
                    <div className="content">
                        <img src={product3} alt="" />
                        <h3>Nike Shoes</h3>
                        <div className="price">$200 <span>$150</span></div>
                        <div className="stars">
                            {[...Array(5)].map((star, index) => (
                                <i className="fa fa-star" key={index}></i>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Fourth product */}
                <div className="box">
                    <div className="icons">
                        <a href="#" className="fa fa-heart"></a>
                        <a href="#" className="fa fa-share"></a>
                        <a href="#" className="fa fa-eye"></a>
                    </div>
                    <div className="content">
                        <img src={product5} alt="" />
                        <h3>Nike Shoes</h3>
                        <div className="price">$200 <span>$150</span></div>
                        <div className="stars">
                            {[...Array(5)].map((star, index) => (
                                <i className="fa fa-star" key={index}></i>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Fifth product */}
                <div className="box">
                    <div className="icons">
                        <a href="#" className="fa fa-heart"></a>
                        <a href="#" className="fa fa-share"></a>
                        <a href="#" className="fa fa-eye"></a>
                    </div>
                    <div className="content">
                        <img src={product7} alt="" />
                        <h3>Nike Shoes</h3>
                        <div className="price">$200 <span>$150</span></div>
                        <div className="stars">
                            {[...Array(5)].map((star, index) => (
                                <i className="fa fa-star" key={index}></i>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Sixth product */}
                <div className="box">
                    <div className="icons">
                        <a href="#" className="fa fa-heart"></a>
                        <a href="#" className="fa fa-share"></a>
                        <a href="#" className="fa fa-eye"></a>
                    </div>
                    <div className="content">
                        <img src={product8} alt="" />
                        <h3>Nike Shoes</h3>
                        <div className="price">$200 <span>$150</span></div>
                        <div className="stars">
                            {[...Array(5)].map((star, index) => (
                                <i className="fa fa-star" key={index}></i>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default ProductSection;
 