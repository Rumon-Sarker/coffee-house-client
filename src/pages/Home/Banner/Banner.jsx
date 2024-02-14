import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../../assets/banner/banner1.jpg";
import banner2 from "../../../assets/banner/banner2.jpg";
import banner3 from "../../../assets/banner/banner3.jpg";
import banner4 from "../../../assets/banner/banner4.jpg";
import banner5 from "../../../assets/banner/banner5.jpg";

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={banner1} />
            </div>
            <div>
                <img src={banner2} />
            </div>
            <div>
                <img src={banner3} />

            </div>
            <div>
                <img src={banner4} />
            </div>
            <div>
                <img src={banner5} />
            </div>

        </Carousel>
    );
};

export default Banner;