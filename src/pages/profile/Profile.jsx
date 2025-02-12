import { useState } from 'react';
import './profile.css';
import { RiTrophyFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { profileMages } from '../../data';
import profilePhoto from '../../images/profile-avatar.png';

const Profile = () => {
  const [activeTab, setActiveTab] = useState("my-post");


  return (
    <div className="cover_photo_container">

      <div className="cover_photo_box">
      </div>

      <div className="profile_photo_wrapper">
        <div className="profile_upload_box">
          <img src={profilePhoto} alt="Profile" />
        </div>
      </div>

      <div className="profile_name_box">
        <div className="name_box">
          <h1>Uche B.</h1>
          <RiTrophyFill className="cup_icon" />
        </div>
      </div>

      <div className="profile_contents_wrapper">
        <div className="bio_wrapper">
          <div className="bio_contents">
            <p>I am a young vibrant young man with passion for my fatherland</p>
          </div>
        </div>

        <div className="following_box">
          <div className="box_p">
            <p>Following: <span>120</span></p>
            <p>Followers: <span>2.5k</span></p>
          </div>

          <Link to="/profile-info" className="edit_link">Edit Profile</Link>
        </div>
      </div>


      <div className="saved_post_wrapper">
        <div className="saved_box">
          <p className={activeTab === "my-post" ? "active" : ""} onClick={() => setActiveTab("my-post")}>My Post</p>
          <p className={activeTab === "saved" ? "active" : ""} onClick={() => setActiveTab("saved")}>Saved</p>
        </div>
      </div>

      <div className="profile_post_images_wrapper">
        {activeTab === "my-post" && (
          <div className="profile_post_image_contents">
            {profileMages.map((mages) => (
              <div className="images_box" key={mages.id}>
                <img src={mages.profileImg} alt="posts" />
              </div>
            ))}
          </div>
        )}

        {activeTab === "saved" && (
          <div className="profile_saved_post_contents">
            <p>No contents</p>
          </div>
        )}

      </div>

    </div>
  )
}

export default Profile;