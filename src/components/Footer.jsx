import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaSpotify, FaLinkedin, FaGoogle } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { BiSolidPhone } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import "./HomePage.css"; // Make sure to include the CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Logo and Address */}
                <div className="footer-section">
                    <img src="public\SoundSphere2.png" />
                </div>

                {/* Navigation Links */}
                <div className="footer-section">
                    <p>
                        <ImLocation2 fill="white" id="icon-loc" />
                        2715 Ash Dr. San Jose, South Dakota 83475
                    </p>
                    <p>
                        <MdEmail fill="white" id="icon-loc" />
                        soundsphere@gmail.com
                    </p>
                    <p>
                        <BiSolidPhone fill="white" id="icon-loc" />
                        (505) 555-0125
                    </p>
                </div>



            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 SoundSphere. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
