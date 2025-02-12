import './set-profile-picture.css';
import { useState } from 'react';
import { RiImageAddLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const SetProfilePicture = () => {
    const [coverPhoto, setCoverPhoto] = useState("");
    const [profilePhoto, setProfilePhoto] = useState(null);


    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if(file) {
            const imageUrl = URL.createObjectURL(file);
            setCoverPhoto(imageUrl);
        }
    }
    

    const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          setProfilePhoto(reader.result); 
        };
        reader.readAsDataURL(file);
    }
    };


    return (
        <div className="set_profile_container">

            <div className={`set_profile_box ${coverPhoto ? "has-cover-photo" : ""}`} onClick={() => document.getElementById("coverPhotoInput").click()}
             style={{ backgroundImage: coverPhoto ? `url(${coverPhoto})` : "none" }}
            >
                {!coverPhoto && (
                    <span>
                    <RiImageAddLine />
                    </span>
                )}

                <input className="file-input" id="coverPhotoInput" type="file" accept="image/*" onChange={handleImageUpload}/>

            </div>

            <div className="set_profile_wrapper">
                <label className="profile_upload_box">
                    {!profilePhoto && (
                        <span className="icon_box">
                            <RiImageAddLine />
                        </span>
                    )}

                    {profilePhoto && <img src={profilePhoto} alt="Profile" />}
                    <input type="file" onChange={handleFileChange} accept="image/*" />
                </label>

            </div>

            <div className="set_profile_links">
                <Link to="/" className="skip_link">Skip</Link>
                <button className="submit_profile_btn">Submit</button>
            </div>

        </div>
    )
}

export default SetProfilePicture;