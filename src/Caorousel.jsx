import React, { useState, useEffect } from 'react';
import img1 from './img/slide/1.png';
import img2 from './img/slide/2.png';
import img3 from './img/slide/3.png';
import img4 from './img/slide/4.png';

const HomeSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide === 3 ? 0 : prevSlide + 1));
        }, 5000); // Change the interval to 5000 milliseconds (5 seconds)
        return () => clearInterval(interval);
    }, []); // Empty dependency array ensures this effect runs only once on component mount

    const prev = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? 3 : prevSlide - 1));
    };

    const next = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 3 ? 0 : prevSlide + 1));
    };

    const slides = [
        { image: img1, alt: 'Shoe 1' },
        { image: img2, alt: 'Shoe 2' },
        { image: img3, alt: 'Shoe 3' },
        { image: img4, alt: 'Shoe 4' }
    ];

    return (
        <section className="home" id="home">
            {slides.map((slide, index) => (
                <div className={`slide-container ${index === currentSlide ? 'active' : ''}`} key={index}>
                    <div className="slide">
                        <div className="content">
                            <span>Nike Sport Shoes</span>
                            <h3>Nike Metcon Shoes</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit 
                                Sunt nam adipisci ipsa officiis Amet pariatur eaque soluta 
                                sit iure neque voluptate.
                            </p>
                            <a href="#" className="btn">add to card</a>
                        </div>
                        <div className="image">
                            <img src={slide.image} alt={slide.alt} className="shoe" />
                        </div>
                    </div>
                </div>
            ))}
            <div id="prev" className="fa fa-angle-left" onClick={prev}></div>
            <div id="next" className="fa fa-angle-right" onClick={next}></div>
        </section>
    );
}

export default HomeSection;
