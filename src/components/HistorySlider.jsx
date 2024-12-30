import React from 'react';
import './history-slider.css'
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Autoplay } from "swiper";
// import { Autoplay } from "swiper/modules";
import { historySlides } from '../data';

const HistorySlider = () => {

    // const historySlides = [...data, ...data];
  return (
    <div className="history_slider_container">
        <div className="history_slider_main flex_main">

            {/* {historySlides.map((item) => (
                <div className={`slider_contents_box slide${item.id}`} key={item.id}  style={{
                    marginRight: window.innerWidth <= 1100 ? "0.8rem" : "1rem",
                }}>
                    <div className="img_box">
                        <img src={item.slideMages} alt={item.title} />
                    </div>

                    <p>{item.title}</p>
                </div>
            ))} */}

               {/* {historySlides.map((item) => (
                <div className={`slider_contents_box slide${item.id}`} key={item.id}>
                    <div className="img_box">
                        <img src={item.slideMages} alt={item.title} />
                    </div>

                    <div className="p_box">
                        <p>{item.title}</p>
                    </div>
                </div>
            ))} */}

{/* {historySlides.map((item, index) => (
                <div
                    className={`slider_contents_box slide${item.id}`}
                    key={`${item.id}-${index}`}
                >
                    <div className="img_box">
                        <img src={item.slideMages} alt={item.title} />
                    </div>
                    <div className="p_box">
                        <p>{item.title}</p>
                    </div>
                </div>
            ))} */}

            {[...historySlides, ...historySlides].map((item, index) => (
                <div className={`slider_contents_box slide${index}`}
                    key={index} 
                >
                    <div className="img_box">
                        <img src={item.slideMages} alt={item.title} />
                    </div>
                    <div className="p_box">
                        <p>{item.title}</p>
                    </div>
                </div>
            ))}



{/* {[...historySlides, ...historySlides].map((item, index) => (
    <div
        className={`slider_contents_box slide${index}`}
        key={index} 
    >
        <div className="img_box">
            <img src={item.slideMages} alt={item.title} />
        </div>
        <div className="p_box">
            <p>{item.title}</p>
        </div>
    </div>
))} */}


            {/* <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={4}
                loop={true}
                autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
                }}
                speed={4000} 
                breakpoints={{
                320: { slidesPerView: 2},
                768: { slidesPerView: 3}, 
                1024: { slidesPerView: 4}, 
            }}
            >
                {historySlides.map((item) => (
                    <SwiperSlide className="slider_contents_box" key={item.id} >
                        <div>
                            <img src={item.slideMages} alt={item.title} />
                        </div>

                        <p>{item.title}</p>
                    </SwiperSlide>
                ))}
            </Swiper> */}
        </div>

        {/* Language */}
    </div>
  )
}

export default HistorySlider;