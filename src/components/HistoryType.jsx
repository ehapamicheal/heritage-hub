import React, { useState, useEffect, useRef } from "react";
import './history-type.css';
import { IoIosArrowDown } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import { history } from '../data';

const HistoryType = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [latestTrend, setlatestTrend] = useState("Popular");
    const [openLatestTrend, setOpenLatestTrend] = useState(false);
    const filterRef = useRef(null);
    const dropdownRef = useRef(null);

    const handleToggle = () => {
        setIsVisible((prev) => !prev);
    };

    const handleClickOutside = (event) => {
        if (filterRef.current && !filterRef.current.contains(event.target)) {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    // For Following and unfollow
    const [followers, setFollowers] = useState({});

    const handleFollowers = (id) => {
        setFollowers((prevState) => ({
            ...prevState, [id]: !prevState[id],
        }));
    }

    //  OPEN THE POPULAR DROPWONS AND OPTIONS
    const handleLatest = () => {
        setOpenLatestTrend((prev) => !prev);
    }

    const handleLatestTrendText = (text) => {
        setlatestTrend(text);
        setOpenLatestTrend(false);
    }

    useEffect(() => {
        const handleClickOutside2 = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpenLatestTrend(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside2);
        
        return () => {
            document.removeEventListener("mousedown", handleClickOutside2);
        };
    }, []);

  return (

    <>
        <div className="history_container">
            <div className="history_main">
                <div className="popular_wrapper"  ref={dropdownRef}>
                    <div className="popular_box" onClick={handleLatest}>
                        <p>{latestTrend}</p>
                        <IoIosArrowDown className="icon" />
                    </div>
 
                    {openLatestTrend && (
                        <div className="filter_items_head">
                            <div className="filter_items_contents">
                                <p onClick={() => handleLatestTrendText("Popular")}>Popular</p>
                                <p onClick={() => handleLatestTrendText("Trending")}>Trending</p>
                                <p onClick={() => handleLatestTrendText("For you")}>For you</p>
                            </div>
                        </div>
                    )} 
                </div>

                <div className="type_box">
                    <p className="active">Language</p>
                    <p>Folklore </p>
                    <p>Festivals</p>
                    <p>Traditions</p>
                    <p>Cuisine</p>
                    <p>History</p>
                </div>

                <div className="filter_wrapper" ref={filterRef}>
                    <div className="filter_box" onClick={handleToggle}>
                        <IoFilter className="icon" />
                        <p>Filter</p>
                    </div>

                    {isVisible && (
                        <div className="filter_items_wrapper">
                            <div className="filter_items_contents">
                                <p>Region</p>
                                <p>Latest</p>
                                <p>Interest</p>
                                <p>Recommended</p>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div> 

        <div className="history_contents_wrapper_container">
            <div className="history_contents_wrapper">
                {history.map(items => (
                    <div className="card_content" key={items.id}>
                        <div className="avatar_box">
                            <div className="left_side">
                                <div className="box1">
                                    <img className="avatar" src={items.avatar} alt={items.name} />
                                    <h4 className="name">{items.name}</h4>
                                </div>

                                <div className="">
                                    <span className="trophy">{items.trophy}</span>
                                </div>
                            </div>

                            <div className="right_side">
                                <div className="box1">
                                    <p>{items.time}</p>
                                    <span className="options">{items.Options}</span>
                                </div>

                                <div className={`box2 ${followers[items.id] ? "active" : ""}`} onClick={() => handleFollowers(items.id)}>
                                    <p>{followers[items.id] ? "Following" : items.follow}</p>
                                </div>
                            </div>
                        </div>

                        <div className="p_box">
                            <p>{items.title}</p>
                        </div>

                        <div className="image_box">
                            <img src={items.cultureImage} alt="" />
                        </div>

                        <div className="likes_wrapper">
                            <div className="likes_left">
                                <div className="box1">
                                    <div className="box">
                                        <span className="like-icon">{items.like}</span>
                                        <p>{items.likeCount}</p>
                                    </div>

                                    <div className="box2">
                                        <span className="unlike_icon">{items.unLike}</span>
                                    </div>
                                </div>

                                <div className="box-2">
                                    <span className="comment_icon">{items.comment}</span>
                                    <p>{items.commentCount}</p>
                                </div>
                            </div>

                            <div className="likes_right">
                                <span className="book_mark_icon">{items.bookMark}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default HistoryType;