import React, { useRef } from "react";
import "./index.css";
import { BiSolidPhoneCall, BiMessageDetail } from 'react-icons/bi';
import { IoLogoAndroid, IoLogoApple } from "react-icons/io";

export const Add = () => {
    const videoRef = useRef(null);

    return (
        <>
            <div className="adds-container">
                <div className="adds-subcontainer">
                    <div className="adds">
                        <div className="add-video">
                            <video ref={videoRef} controls autoPlay loop playsInline className="cz video-background" poster="https://cdn.anytimeastro.com/dashaspeaks/web/content/anytimeastro/videos/thumb/acharyaji.png">
                                <source src="https://cdn.anytimeastro.com/dashaspeaks/web/content/anytimeastro/videos/acharyaji.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className="add-info">
                            <h1>Get First Chat Free</h1>
                            <h3>From India's Top Astrologers</h3>
                            <button>Chat Now</button>
                            <p>App Available on<IoLogoAndroid />Android <IoLogoApple />iOS</p>
                        </div>
                    </div>
                    <div className="talk">
                        <button> <BiSolidPhoneCall /> Talk To <span>Astrologer</span></button>
                        <button> <BiMessageDetail />Chat with <span>Astrologer</span></button>
                    </div>
                </div>
            </div>
        </>
    );
};
