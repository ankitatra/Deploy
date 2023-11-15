import React from "react";
import "./index.css";
import { FaFacebook ,FaInstagram ,FaLinkedin,FaYoutube, FaPinterest ,FaGooglePlay ,FaApple } from "react-icons/fa";

export const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-row">
                <div className="footer-col">
                    <footer className="footer-section">
                        <div className="footer-content">
                            <div className="footer-item">
                                <div className="footer-title">
                                    About us
                                </div>
                                <p className="footer-text">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 text of the printing.
                                </p>
                            </div>
                            <div className="footer-item">
                                <div className="footer-title">
                                    Latest themes
                                </div>
                                <div className="footer-links">
                                    <a href="#">Appointment</a>
                                    <a href="#">Health center</a>
                                    <a href="#">Quality</a>
                                    <a href="#">Wallstreet</a>
                                </div>
                            </div>
                            <div className="footer-item">
                                <div className="footer-title">
                                    Quick Links
                                </div>
                                <div className="footer-links">
                                    <a href="#">Blog</a>
                                    <a href="#">FAQ</a>
                                    <a href="#">Terms & conditions</a>
                                    <a href="#">Privacy policy</a>
                                </div>
                            </div>
                            <div className="footer-item">
                                <div className="footer-title">
                                    Quick Links
                                </div>
                                <div className="footer-links">
                                    <a href="#">Blog</a>
                                    <a href="#">FAQ</a>
                                    <a href="#">Terms & conditions</a>
                                    <a href="#">Privacy policy</a>
                                </div>
                            </div>


                            <div className="footer-item">
                                <div className="footer-title">
                                    Download Our App
                                </div>
                                <div className="footer-links">
                                    <div className="downloads-app">
                                    <FaGooglePlay />
                                    <div className="downloadapp-msg">
                                        <p>GET IT ON</p>
                                        <p>Google Play</p>
                                    </div>
                                    </div>
                                    <div className="downloads-app">
                                    <FaApple />
                                    <div className="downloadapp-msg">
                                        <p>Available on</p>
                                        <p>App Store</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="footer-social-links">
                                    <li>
                                        <a href="#">
                                           < FaFacebook/>
                                        </a>
                                        <a href="#">
                                            <FaInstagram />
                                            </a>
                                        <a href="#">
                                            <FaLinkedin/>
                                        </a>
                                        <a href="#">
                                            <FaYoutube/>
                                        </a>
                                        <a href="#">
                                            < FaPinterest/>
                                        </a>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </footer>
                    
                </div>
            </div>
            <div className="footer-bottom">
                    Copyright © 2020-2023 Innovana Astro Services Ltd. All Rights Reserved
                    </div>
        </div>
    );
};
