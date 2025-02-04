import React from "react";
import "./HomePage.css";
import { useState } from 'react';
import { IoMdHeart } from "react-icons/io";
import { IoMdSkipBackward } from "react-icons/io";
import { IoMdSkipForward } from "react-icons/io";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaSpotify, FaLinkedin, FaGoogle } from "react-icons/fa";
import { IoIosPause } from "react-icons/io";
import { IoMdShareAlt } from "react-icons/io";
import { Headings } from "./Headings";
import { GrNext } from "react-icons/gr";
import { ImLocation2 } from "react-icons/im";
import { BiSolidPhone } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { Custemer } from "./custemer";
// import { Custemer } from "./custemer";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div className="img-sec-1">
                <div className="img-1"></div>
                <div className="img-2"></div>
                <div className="img-3"></div>

                <div className="hero-section">
                    <img src="public\heading-home.png" alt="" className="home-heading" />
                    <div className="pro">
                        <input type="range" min="0" max="100" className="progress-slider" />
                        <h1 className="timer">0:44 / 6:09</h1>
                        <div className="btn-player">
                            <button className="like-btn">
                                <IoMdHeart fill="white" fontSize={20} />
                            </button>
                            <button className="skip-btn">
                                <IoMdSkipForward fill="white" fontSize={16} />
                            </button>
                            <button className="Pause-btn">
                                <IoIosPause fill="white" fontSize={20} />
                            </button>
                            <button className="prev-btn">
                                <IoMdSkipBackward fill="white" fontSize={16} />
                            </button>
                            <button className="share-btn">
                                <IoMdShareAlt fill="white" fontSize={17} />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="img-sec-2">
                <div className="music-i"></div>
                <img src="/public/image-4.png" className="img-4" alt="" />
                <img src="/public/image-5.png" className="img-5" alt="" />
                <img src="/public/play.png" className="play" alt="" />
                <img src="/public/image-6.png" className="img-6" alt="" />
            </div>
            {/* Toggle Button */}
            <button onClick={toggleMenu} className={`menu-button ${isOpen ? "open" : ""}`}>
                <span></span>
                <span></span>
            </button>

            {/* Navigation Menu */}
            <nav className={`nav-menu ${isOpen ? "active" : ""}`}>
                <ul className="navigation">
                    <li><a href="#">home</a></li>
                    <li><a href="#">event</a></li>
                    <li><a href="#">photos</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">service</a></li>
                    <li><a href="#">contect us</a></li>
                </ul>
            </nav>
            <div>
                <img src="public\SoundSphere.png" className="logo" />
            </div>


            <div className="upcommings-section">
                <Headings title={"Our Upcoming Events"} line={""} />
                <div class="container">
                    <div class="event">
                        <h1 className="number">12 <br />
                            <span className="date">sep 2024</span>
                        </h1>
                        <img src="\public\Ellipse1.png" />
                        <div class="event-content">
                            <h3 className="name-singer">MTV One Festival</h3>
                            <p className="subtitle-singer">Albert Flores</p>
                        </div>
                        <div class="buttons">
                            <button class="Buy-Tickets">Buy Tickets</button>
                            <button class="More-Info">More Info
                                <GrNext />
                            </button>
                        </div>
                    </div>
                    <div class="event2">
                        <h1 className="number">13 <br />
                            <span className="date">sep 2024</span>
                        </h1>
                        <img src="\public\Ellipse2.png" />
                        <div class="event-content">
                            <h3 className="name-singer"> Free session Jam </h3>
                            <p className="subtitle-singer">Marvin McKinney</p>
                        </div>
                        <div class="buttons">
                            <button class="Buy-Tickets">Buy Tickets</button>
                            <button class="More-Info">More Info
                                <GrNext />
                            </button>
                        </div>
                    </div>
                    <div class="event3">
                        <h1 className="number">18 <br />
                            <span className="date">sep 2024</span>
                        </h1>
                        <img src="\public\Ellipse3.png" />
                        <div class="event-content">
                            <h3 className="name-singer"> NYC Music Awards </h3>
                            <p className="subtitle-singer">Bessie Cooper</p>
                        </div>
                        <div class="buttons">
                            <button class="Buy-Tickets">Buy Tickets</button>
                            <button class="More-Info">More Info
                                <GrNext />
                            </button>
                        </div>
                    </div>
                    <div class="event4">
                        <h1 className="number">27 <br />
                            <span className="date">sep 2024</span>
                        </h1>
                        <img src="\public\Ellipse4.png" />
                        <div class="event-content">
                            <h3 className="name-singer"> NYC Music Awards </h3>
                            <p className="subtitle-singer">Cody Fisher</p>
                        </div>
                        <div class="buttons">
                            <button class="Buy-Tickets">Buy Tickets</button>
                            <button class="More-Info">More Info
                                <GrNext />
                            </button>
                        </div>
                    </div>
                    <div class="event5">
                        <h1 className="number">30 <br />
                            <span className="date">sep 2024</span>
                        </h1>
                        <img src="\public\Ellipse4.png" />
                        <div class="event-content">
                            <h3 className="name-singer">Botanica</h3>
                            <p className="subtitle-singer">Marvin McKinney</p>
                        </div>
                        <div class="buttons">
                            <button class="Buy-Tickets">Buy Tickets</button>
                            <button class="More-Info">More Info
                                <GrNext />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="music-about">
                    <Headings title={"Music About Us"} line={""}
                        id={"music-h"}
                        style={{ marginTop: "837px", textAlign: "center" }}
                        styles={{ marginLeft: "775px" }}
                    />
                    <div className="Music-About">
                        <div className="music-photo-flex"></div>
                        <div className="writing-section">
                            <h1 className="Soundsphere">Soulful Soundsphere</h1>
                            <div className="writing-pera">
                                <p className="Amet">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content.</p>
                                <p className="variations">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text all the Lorem Ipsum generators on the Internet.</p>
                            </div>
                            <div className="review">
                                <div className="flex-child">
                                    <h1 className="number-review">5800+</h1>
                                    <p className="name-review1">Happy Customer</p>
                                </div>
                                <div className="flex-child">
                                    <h1 className="number-review">26+</h1>
                                    <p className="name-review2">Event Artist</p>
                                </div>
                                <div className="flex-child">
                                    <h1 className="number-review">500+</h1>
                                    <p className="name-review3">Audience Capacity</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="highlighted">
                    <Headings title={"Highlighted Gallery Images"} line={""}
                        style={{ marginTop: "128px", width: "329px", marginLeft: "619px" }}
                        id={"high"}
                        styles={{ marginLeft: "860px" }}
                    />
                    <div className="highlighted-images">
                        <img src="\public\singer1.png" alt="" className="img-high" />
                        <img src="\public\singer2.png" alt="" className="img-high" />
                        <img src="\public\singer3.png" alt="" className="img-high" />
                        <img src="\public\singer4.png" alt="" className="img-high" />
                        <img src="\public\singer5.png" alt="" className="img-high" />
                        <img src="\public\singer6.png" alt="" className="img-high" />
                    </div>
                </div>
                <div className="video-part">
                    <Headings title={"Latest Videos"} line={""}
                        id={"video-head"}
                        style={{ marginTop: "85px", width: "329px", textAlign: "center" }}
                        styles={{ marginLeft: "793px" }}
                    />
                    <div className="videos">
                        <div className="video-container">
                            <img src="/public/video1.png" alt="Video 1" className="video" />
                            <AiOutlineYoutube className="youtube-icon" />
                        </div>
                        <div className="video-container">
                            <img src="/public/video2.png" alt="Video 2" className="video" />
                            <AiOutlineYoutube className="youtube-icon" />
                        </div>
                    </div>
                </div>
                <div className="customer">
                    <Headings
                        id={"custem"}
                        title={"Customer Reviews"} line={""}
                        style={{ marginTop: "85px", width: "329px" }}
                        styles={{ marginLeft: "766px" }}
                    />
                    <div className="customer-review">
                        <Custemer
                            id="cust-1"
                            img="/public/customer1.png"
                            name="Guy Hawkins"
                            pera="Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. Morbi in orci risus. Donec pretium f"
                            img2="/public/rect.png"
                        />
                        <Custemer
                            id="cust-2"
                            img="/public/custemer2.png"
                            pera="Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. P"
                            img2="/public/rect.png"
                            name="Jacob Jones"
                        />
                        <Custemer
                            id="cust-3"
                            img="/public/custemer3.png"
                            img2="/public/rect.png"
                            pera="In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat vo"
                            name="Eleanor Pena"
                        />
                    </div>
                </div>
                <div className="Send-Message">
                    <Headings
                        id={"Send-Us"}
                        title={"Send Us a Message"} line={""}
                        style={{ marginTop: "85px", width: "329px", marginLeft: "709px" }}
                        styles={{ marginLeft: "846px" }}
                    />
                    <div className="Send-Us-Message">
                        <div className="boxs-data">
                            <div className="box-loc">
                                <div className="detais-box">
                                    <ImLocation2 fill="white" id="icon-loc" />
                                    <p className="location-add">
                                        2715 Ash Dr. San <br />
                                        Jose, South Dakota 83475
                                    </p>
                                </div>
                            </div> <br />
                            <div className="box-loc">
                                <div className="detais-box">
                                    <BiSolidPhone fill="white" id="icon-loc" />
                                    <p className="location-add">
                                        (505) 555-0125
                                    </p>
                                </div>
                            </div> <br />
                            <div className="box-loc">
                                <div className="detais-box">
                                    <MdEmail fill="white" id="icon-loc" />
                                    <p className="location-add">
                                        soundsphere@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* form */}
                        <div class="form-container">
                            <form>
                                <div class="form-group">
                                    <label>Your Name :</label>
                                    <input type="text" placeholder="Enter Your Name" />
                                </div>
                                <div class="form-group">
                                    <label>Your E-mail :</label>
                                    <input type="email" placeholder="Enter Your e-mail" />
                                </div>
                                <div class="form-group">
                                    <label>Subject :</label>
                                    <input type="text" placeholder="Enter Subject" />
                                </div>
                                <div class="form-group">
                                    <label>Your Message :</label>
                                    <textarea placeholder="Enter Your Message"></textarea>
                                </div>
                                <button type="submit" class="submit-btn">Send </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="footer-parts">
                        <div className="footer-logo">
                            <img src="\public\SoundSphere2.png" className="logo-2" />
                        </div>
                        <div className="address-sec">
                            <div className="f-icon">
                                <ImLocation2 fill="white" id="icon-f" />
                                <MdEmail fill="white" id="icon-f" />
                                <BiSolidPhone fill="white" id="icon-f" />
                            </div>
                            <div className="add-p">
                                <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
                                <p>soundsphere@gmail.com</p>
                                <p>(505) 555-0125</p>
                            </div>
                        </div>
                        {/* Social Media Icons */}
                        <div className="footer-social">
                            <div className="social-icons">
                                <h3 className="sm">Social Media</h3>
                                <a href="#" aria-label="YouTube"><FaYoutube fill="white" /></a>
                                <a href="#" aria-label="Facebook"><FaFacebook fill="white" /></a>
                                <a href="#" aria-label="Twitter"><FaTwitter fill="white" /></a>
                                <a href="#" aria-label="Spotify"><FaSpotify fill="white" /></a>
                                <a href="#" aria-label="LinkedIn"><FaLinkedin fill="white" /></a>
                                <a href="#" aria-label="Instagram"><FaInstagram fill="white" /></a>
                                <a href="#" aria-label="Google"><FaGoogle fill="white" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-line"></div>
                </div>
            </div>
        </>
    );
};

export default Home;
