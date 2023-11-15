import React from "react";
import "./index.css"
import ReactStars from "react-rating-stars-component";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export const Astrolger=()=>{
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
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
         <div className="ourastrolger">
            <div className="ourastrolgers-heading">
                <h1>OUR ASTROLOGERS</h1>
                <hr/>
                <p>Get in touch with the best Online Astrologers,anytime & anywhere</p>
            </div>
                <Carousel responsive={responsive} className="astloger-crousel"> 
                    
                    <div id = "astolager">
                <div>
                    <img src= "https://cdn.anytimeastro.com/dashaspeaks/expert/thumb/1b8a86b0-4c82-43a7-9e88-843cb36fb01d.png"/></div>
                <h4>Poonam Astrotarot</h4>
                <hr/>
                <p>Reviews:<span>10723</span></p>
                <p className="rating">
                <ReactStars
            count={5}
            onChange={ratingChanged}
            activeColor="#FFC200"
            size={24}
            
        />
        </p>
                    </div>
        
                    
                    <div id = "astolager">
                <div>
                    <img src= "https://cdn.anytimeastro.com/dashaspeaks/expert/thumb/1b8a86b0-4c82-43a7-9e88-843cb36fb01d.png"/></div>
                <h4>Poonam Astrotarot</h4>
                <hr/>
                <p>Reviews:<span>10723</span></p>
                <p className="rating">
                <ReactStars
            count={5}
            onChange={ratingChanged}
            activeColor="#FFC200"
            size={24}
            
        />
        </p>
                    </div>
        
                    
                    <div id = "astolager">
                <div>
                    <img src= "https://cdn.anytimeastro.com/dashaspeaks/expert/thumb/1b8a86b0-4c82-43a7-9e88-843cb36fb01d.png"/></div>
                <h4>Poonam Astrotarot</h4>
                <hr/>
                <p>Reviews:<span>10723</span></p>
                <p className="rating">
                <ReactStars
            count={5}
            onChange={ratingChanged}
            activeColor="#FFC200"
            size={24}
            
        />
        </p>
                    </div>
        
        
                    <div id = "astolager">
                <div>
                    <img src= "https://cdn.anytimeastro.com/dashaspeaks/expert/thumb/1b8a86b0-4c82-43a7-9e88-843cb36fb01d.png"/></div>
                <h4>Poonam Astrotarot</h4>
                <hr/>
                <p>Reviews:<span>10723</span></p>
                <p className="rating">
                <ReactStars
            count={5}
            onChange={ratingChanged}
            activeColor="#FFC200"
            size={24}
            
        />
        </p>
                    </div>
        
                    
                    <div id = "astolager">
                <div>
                    <img src= "https://cdn.anytimeastro.com/dashaspeaks/expert/thumb/1b8a86b0-4c82-43a7-9e88-843cb36fb01d.png"/></div>
                <h4>Poonam Astrotarot</h4>
                <hr/>
                <p>Reviews:<span>10723</span></p>
                <p className="rating">
                <ReactStars
            count={5}
            onChange={ratingChanged}
            activeColor="#FFC200"
            size={24}
            
        />
        </p>
                    </div>
        
                    
                    <div id = "astolager">
                <div>
                    <img src= "https://cdn.anytimeastro.com/dashaspeaks/expert/thumb/1b8a86b0-4c82-43a7-9e88-843cb36fb01d.png"/></div>
                <h4>Poonam Astrotarot</h4>
                <hr/>
                <p>Reviews:<span>10723</span></p>
                <p className="rating">
                <ReactStars
            count={5}
            onChange={ratingChanged}
            activeColor="#FFC200"
            size={24}
            
        />
        </p>
                    </div>
        
        
                    <div id = "astolager">
                <div>
                    <img src= "https://cdn.anytimeastro.com/dashaspeaks/expert/thumb/1b8a86b0-4c82-43a7-9e88-843cb36fb01d.png"/></div>
                <h4>Poonam Astrotarot</h4>
                <hr/>
                <p>Reviews:<span>10723</span></p>
                <p className="rating">
                <ReactStars
            count={5}
            onChange={ratingChanged}
            activeColor="#FFC200"
            size={24}
            
        />
        </p>
                    </div>
                </Carousel>
         </div>
       
        </>
    )
}