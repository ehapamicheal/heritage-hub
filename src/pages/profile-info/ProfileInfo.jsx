import './profile-info.css';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ProfileInfo = () => {
    const [dob, setDob] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    return (

        <main className="profile_info_container">
            <div className="profile_info_wrapper">
                <h1>Let’s know you</h1>

                <form action="">
                    <div className="input_box">
                        <label htmlFor="">State of Origin</label>
                        <div className="select_box">
                            <select>
                                <option value="Input State of Origin">Input State of Origin</option>
                                <option value="Abia">Abia</option>
                                <option value="Adamawa">Adamawa</option>
                                <option value="Akwa Ibom">Akwa Ibom</option>
                                <option value="Anambra">Anambra</option>
                                <option value="Bauchi">Bauchi</option>
                                <option value="Bayelsa">Bayelsa</option>
                                <option value="Benue">Benue</option>
                                <option value="Borno">Borno</option>
                                <option value="Cross River">Cross River</option>
                                <option value="Delta">Delta</option>
                                <option value="Ebonyi">Ebonyi</option>
                                <option value="Edo">Edo</option>
                                <option value="Ekiti">Ekiti</option>
                                <option value="Enugu">Enugu</option>
                                <option value="FCT">FCT</option>
                                <option value="Gombe">Gombe</option>
                                <option value="Imo">Imo</option>
                                <option value="Jigawa">Jigawa</option>
                                <option value="Kaduna">Kaduna</option>
                                <option value="Kano">Kano</option>
                                <option value="Katsina">Katsina</option>
                                <option value="Kebbi">Kebbi</option>
                                <option value="Kogi">Kogi</option>
                                <option value="Kwara">Kwara</option>
                                <option value="Lagos">Lagos</option>
                                <option value="Nasarawa">Nasarawa</option>
                                <option value="Niger">Niger</option>
                                <option value="Ogun">Ogun</option>
                                <option value="Ondo">Ondo</option>
                                <option value="Osun">Osun</option>
                                <option value="Oyo">Oyo</option>
                                <option value="Plateau">Plateau</option>
                                <option value="Rivers">Rivers</option>
                                <option value="Sokoto">Sokoto</option>
                                <option value="Taraba">Taraba</option>
                                <option value="Yobe">Yobe</option>
                                <option value="Zamfara">Zamfara</option>
                            </select>
                        </div>
                    </div>

                    <div className="input_box">
                        <label htmlFor="">Gender</label>
                        <div className="select_box">
                            <select>
                                <option value="what is your gender">What's your Gender?</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>

                        </div>
                    </div>

                    <div className="input_box">
                        <label htmlFor="dob">Date of Birth</label>
                        <div className="box">
                            <DatePicker
                                selected={dob}
                                onChange={(date) => {
                                    setDob(date);
                                }}
                                dateFormat="yyyy-MM-dd"
                                showYearDropdown
                                scrollableYearDropdown
                                yearDropdownItemNumber={100}
                                maxDate={new Date()}
                                placeholderText="When were you born?"
                                className="date"
                                onCalendarOpen={() => setIsOpen(true)}
                                onCalendarClose={() => setIsOpen(false)}
                            />

                            <span className={`dropDown-icon ${isOpen ? "rotate" : ""}`}>
                                <FaChevronDown />
                            </span>
                        </div>
                    </div>

                    <div className="input_box2">
                        <label>Residential Address</label>

                        <div className="select_city_content">
                            <div className="select_box">
                                <select name="">
                                    <option value="city">City</option>
                                </select>
                            </div>
                            
                            <div className="select_box">
                                <select name="">
                                    <option value="town">Town</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="text_area_box">
                        <label htmlFor="textarea">Bio</label>
                        <textarea className="text_area_input" name="" placeholder="Tell us more about your self"></textarea>
                    </div>

                    <div className="profile_info_button">
                        <Link to="/set-profile-picture" className="skip_link">Skip</Link>
                        <button type="submit" className="submit_profile_btn">Submit</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default ProfileInfo;


