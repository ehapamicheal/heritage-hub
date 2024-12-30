import React from 'react';
import './hero-section.css';
// import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { heroImages } from '../data';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="hero_section_container">
        <div className="hero_section_main container">
            <div className="hero_left">
                <h1>Your guide to <span>Nigeria’s</span> rich heritage</h1>

                <p className="p1">Each post captures a moment of Nigeria rich cultural tapestry, offering a glimpse into the lives, customs, and artistry of the people who make Nigeria so special.</p>

                <Link className="join_link">Join the Conversation</Link>
            </div>

            <div className="hero_right">
                <div className="slider_container">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        slidesPerView={1}
                        spaceBetween={20}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false, 
                        }}
                    >
                        {heroImages.map((box) => (
                            <SwiperSlide key={box.id} className="box_content">
                                <img className="mage" src={box.mage} alt={box.title} />                            
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection;