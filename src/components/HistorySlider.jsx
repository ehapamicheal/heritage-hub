import React from 'react';
import './history-slider.css'
import { historySlides } from '../data';

const HistorySlider = () => {

    // const historySlides = [...data, ...data];
  return (
    <div className="history_slider_container">
        <div className="history_slider_main flex_main">

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

        </div>

    </div>
  )
}

export default HistorySlider;