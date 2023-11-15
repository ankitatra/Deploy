import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./index.css"
import { CiBellOn } from "react-icons/ci";
export const Livesession=()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1440 },
          items: 4
        },
        desktop: {
            breakpoint: { max: 1439, min: 1024 },
            items: 3
          },
        tablet: {
          breakpoint: { max: 1023, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
   return(
    <>
     <div className="livesession-container">
     <div className="livesession-heading">
                <h1>LIVE SESSIONS
</h1>
                <hr/>
                <p>Connect with top-rated Astrologers through live sessions for instant solutions</p>
            </div>
        <Carousel responsive={responsive} className="livesession-crousel"> 
            <div className="session">
                <div className="name-session">
                    <div className="live-image">
                        <img src="https://cdn.anytimeastro.com/anytimeastro/lives_exp/live/1906648/af03ea8b-e78b-43c7-a253-442ca8844e63.png" alt="live"/>
                    </div>
                    <div className="live-heading">
                        <h2>PremShanker</h2>
                        <p>Vastu</p>
                    </div>
                </div>
                <div className="status">
                    <p><CiBellOn />Sechduled</p>
                </div>
            </div>
            <div className="session">
                <div className="name-session">
                    <div className="live-image">
                        <img src="https://cdn.anytimeastro.com/anytimeastro/lives_exp/live/1906648/af03ea8b-e78b-43c7-a253-442ca8844e63.png" alt="live"/>
                    </div>
                    <div className="live-heading">
                        <h2>PremShanker</h2>
                        <p>Vastu</p>
                    </div>
                </div>
                <div className="status">
                    <p><CiBellOn />Sechduled</p>
                </div>
            </div>

            <div className="session">
                <div className="name-session">
                    <div className="live-image">
                        <img src="https://cdn.anytimeastro.com/anytimeastro/lives_exp/live/1906648/af03ea8b-e78b-43c7-a253-442ca8844e63.png" alt="live"/>
                    </div>
                    <div className="live-heading">
                        <h2>PremShanker</h2>
                        <p>Vastu</p>
                    </div>
                </div>
                <div className="status">
                    <p><CiBellOn />Sechduled</p>
                </div>
            </div>

            <div className="session">
                <div className="name-session">
                    <div className="live-image">
                        <img src="https://cdn.anytimeastro.com/anytimeastro/lives_exp/live/1906648/af03ea8b-e78b-43c7-a253-442ca8844e63.png" alt="live"/>
                    </div>
                    <div className="live-heading">
                        <h2>PremShanker</h2>
                        <p>Vastu</p>
                    </div>
                </div>
                <div className="status">
                    <p><CiBellOn />Sechduled</p>
                </div>
            </div>

            <div className="session">
                <div className="name-session">
                    <div className="live-image">
                        <img src="https://cdn.anytimeastro.com/anytimeastro/lives_exp/live/1906648/af03ea8b-e78b-43c7-a253-442ca8844e63.png" alt="live"/>
                    </div>
                    <div className="live-heading">
                        <h2>PremShanker</h2>
                        <p>Vastu</p>
                    </div>
                </div>
                <div className="status">
                    <p><CiBellOn />Sechduled</p>
                </div>
            </div>
            
        </Carousel>;
        
     </div>
    </>
   )
}

