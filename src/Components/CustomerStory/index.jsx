import React from "react";
import "./index.css"
import Carousel from 'react-multi-carousel';
import ReactStars from "react-rating-stars-component";
export const Customerstory=()=>{
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
          <div className= "customerstory">
          <div className="customerstory-heading">
                <h1>CUSTOMER STORIES</h1>
                <hr/>
                <p>
See why our users love us and how Anytime Astro helped them find their path to happiness!</p>
            </div>
            <Carousel responsive={responsive} className="astloger-crousel"> 
              <div id="stories">
                <div><img src="https://cdn.anytimeastro.com/dashaspeaks/web/content/anytimeastro/images/Rashami_Desai.png"/></div>
                <p className="rating-customerstory"> 
                <ReactStars
                count={5}
                onChange={ratingChanged}
                activeColor="#FFC200"
                size={24}
                
              />
                </p>
                <h4>Rashami Desai</h4>
                <p>Sports Personality</p>
                <p>Koi bhi problem ho love, career ya marriage aap bhi meri tarah India ki most trusted app Anytime Astro, jaha par 1000 se jyada certified astrologers se consult kar sakte hai. I can’t be more grateful to Anytime Astro and their Astrologers.</p>
              </div> 

              <div id="stories">
            <div><img src="https://cdn.anytimeastro.com/dashaspeaks/web/content/anytimeastro/images/Rashami_Desai.png"/></div>
            <p className="rating-customerstory"> 
            <ReactStars
            count={5}
            onChange={ratingChanged}
            activeColor="#FFC200"
            size={24}
            
           />
            </p>
            <h4>Rashami Desai</h4>
            <p>Sports Personality</p>
            <p>Koi bhi problem ho love, career ya marriage aap bhi meri tarah India ki most trusted app Anytime Astro, jaha par 1000 se jyada certified astrologers se consult kar sakte hai. I can’t be more grateful to Anytime Astro and their Astrologers.</p>
              </div> 

              <div id="stories">
            <div><img src="https://cdn.anytimeastro.com/dashaspeaks/web/content/anytimeastro/images/Rashami_Desai.png"/></div>
            <p className="rating-customerstory"> 
            <ReactStars
            count={5}
            onChange={ratingChanged}
            activeColor="#FFC200"
            size={24}
            
           />
            </p>
            <h4>Rashami Desai</h4>
            <p>Sports Personality</p>
            <p>Koi bhi problem ho love, career ya marriage aap bhi meri tarah India ki most trusted app Anytime Astro, jaha par 1000 se jyada certified astrologers se consult kar sakte hai. I can’t be more grateful to Anytime Astro and their Astrologers.</p>
              </div> 

              <div id="stories">
            <div><img src="https://cdn.anytimeastro.com/dashaspeaks/web/content/anytimeastro/images/Rashami_Desai.png"/></div>
            <p className="rating-customerstory"> 
            <ReactStars
            count={5}
            onChange={ratingChanged}
            activeColor="#FFC200"
            size={24}
            
           />
            </p>
            <h4>Rashami Desai</h4>
            <p>Sports Personality</p>
            <p>Koi bhi problem ho love, career ya marriage aap bhi meri tarah India ki most trusted app Anytime Astro, jaha par 1000 se jyada certified astrologers se consult kar sakte hai. I can’t be more grateful to Anytime Astro and their Astrologers.</p>
              </div> 

              <div id="stories">
            <div><img src="https://cdn.anytimeastro.com/dashaspeaks/web/content/anytimeastro/images/Rashami_Desai.png"/></div>
            <p className="rating-customerstory"> 
            <ReactStars
            count={5}
            onChange={ratingChanged}
            activeColor="#FFC200"
            size={24}
            
           />
            </p>
            <h4>Rashami Desai</h4>
            <p>Sports Personality</p>
            <p>Koi bhi problem ho love, career ya marriage aap bhi meri tarah India ki most trusted app Anytime Astro, jaha par 1000 se jyada certified astrologers se consult kar sakte hai. I can’t be more grateful to Anytime Astro and their Astrologers.</p>
              </div> 


              <div id="stories">
            <div><img src="https://cdn.anytimeastro.com/dashaspeaks/web/content/anytimeastro/images/Rashami_Desai.png"/></div>
            <p className="rating-customerstory"> 
            <ReactStars
            count={5}
            onChange={ratingChanged}
            activeColor="#FFC200"
            size={24}
            
           />
            </p>
            <h4>Rashami Desai</h4>
            <p>Sports Personality</p>
            <p>Koi bhi problem ho love, career ya marriage aap bhi meri tarah India ki most trusted app Anytime Astro, jaha par 1000 se jyada certified astrologers se consult kar sakte hai. I can’t be more grateful to Anytime Astro and their Astrologers.</p>
              </div> 
          </Carousel>
          </div>
        </>
    )
}