import React from 'react';
import './home.css';
import Navbar from '../../components/Navbar';
import HeroSection from '../../components/HeroSection';
// import { IoIosArrowDown } from "react-icons/io";
// import { IoFilter } from "react-icons/io5";
import HistoryType from '../../components/HistoryType';
import HistorySlider from '../../components/HistorySlider';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HistoryType />
      <HistorySlider />
      <Footer />

      {/* <div className="history_container">
        <div className="history_main">
          <div className="popular_box">
            <p>Popular</p>
            <IoIosArrowDown className="icon" />
          </div>

          <div className="type_box">
            <p className="active">Language</p>
            <p>Folklore </p>
            <p>Festivals</p>
            <p>Traditions</p>
            <p>Cuisine</p>
            <p>History</p>
          </div>

          <div className="filter_box">
            <IoFilter className="icon" />
            <p>Filter</p>
          </div>

        </div>
      </div> */}
    </>
  )
}

export default Home;