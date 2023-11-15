import React from "react";
import "./index.css"
import Carousel from 'react-multi-carousel';
import ReactStars from "react-rating-stars-component";
export const OurBlog=()=>{
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
        <div className="ourblog">
        <div id="liveseesion">
            <div> <h1>OUR BLOG</h1>
            <hr/>
            <p>Delve deeper into the world of Astrology, Psychic Reading & more with insightful articles and latest updates.</p>
            </div>


            
            <Carousel responsive={responsive}  className="Ourblog-crousel">
                <div id="part">
                    <div>   
                        <div><img src ="https://wpcontent.anytimeastro.com/blog_anytimeastro/blogimages/954/4389-compatibility-analysis-of-libra-and-sagittarius.jpg"/></div>
                    </div>
                    <div>  <p>Libra and Sagittarius Compatibility: Love, Friendship, Marriage, Sex, and Communication</p> 
                    <p>As per astrology, Libra is an Air sign ruled by the planet Venus, while Sagittarius is a Fire sign ruled by Jupiter. </p>
                <button>  Read More </button> </div>
                </div>

                <div id="part">
                    <div>   
                        <div><img src ="https://wpcontent.anytimeastro.com/blog_anytimeastro/blogimages/954/4389-compatibility-analysis-of-libra-and-sagittarius.jpg"/></div>
                    </div>
                    <div>  <p>Libra and Sagittarius Compatibility: Love, Friendship, Marriage, Sex, and Communication</p> 
                    <p>As per astrology, Libra is an Air sign ruled by the planet Venus, while Sagittarius is a Fire sign ruled by Jupiter. </p>
                <button>  Read More </button> </div>
                </div>

                <div id="part">
                    <div>   
                        <div><img src ="https://wpcontent.anytimeastro.com/blog_anytimeastro/blogimages/954/4389-compatibility-analysis-of-libra-and-sagittarius.jpg"/></div>
                    </div>
                    <div>  <p>Libra and Sagittarius Compatibility: Love, Friendship, Marriage, Sex, and Communication</p> 
                    <p>As per astrology, Libra is an Air sign ruled by the planet Venus, while Sagittarius is a Fire sign ruled by Jupiter. </p>
                <button>  Read More </button> </div>
                </div>


                <div id="part">
                    <div>   
                        <div><img src ="https://wpcontent.anytimeastro.com/blog_anytimeastro/blogimages/954/4389-compatibility-analysis-of-libra-and-sagittarius.jpg"/></div>
                    </div>
                    <div>  <p>Libra and Sagittarius Compatibility: Love, Friendship, Marriage, Sex, and Communication</p> 
                    <p>As per astrology, Libra is an Air sign ruled by the planet Venus, while Sagittarius is a Fire sign ruled by Jupiter. </p>
                <button>  Read More </button> </div>
                </div>


                <div id="part">
                    <div>   
                        <div><img src ="https://wpcontent.anytimeastro.com/blog_anytimeastro/blogimages/954/4389-compatibility-analysis-of-libra-and-sagittarius.jpg"/></div>
                    </div>
                    <div>  <p>Libra and Sagittarius Compatibility: Love, Friendship, Marriage, Sex, and Communication</p> 
                    <p>As per astrology, Libra is an Air sign ruled by the planet Venus, while Sagittarius is a Fire sign ruled by Jupiter. </p>
                <button>  Read More </button> </div>
                </div>


                <div id="part">
                    <div>   
                        <div><img src ="https://wpcontent.anytimeastro.com/blog_anytimeastro/blogimages/954/4389-compatibility-analysis-of-libra-and-sagittarius.jpg"/></div>
                    </div>
                    <div>  <p>Libra and Sagittarius Compatibility: Love, Friendship, Marriage, Sex, and Communication</p> 
                    <p>As per astrology, Libra is an Air sign ruled by the planet Venus, while Sagittarius is a Fire sign ruled by Jupiter. </p>
                <button>  Read More </button> </div>
                </div>


                <div id="part">
                    <div>   
                        <div><img src ="https://wpcontent.anytimeastro.com/blog_anytimeastro/blogimages/954/4389-compatibility-analysis-of-libra-and-sagittarius.jpg"/></div>
                    </div>
                    <div>  <p>Libra and Sagittarius Compatibility: Love, Friendship, Marriage, Sex, and Communication</p> 
                    <p>As per astrology, Libra is an Air sign ruled by the planet Venus, while Sagittarius is a Fire sign ruled by Jupiter. </p>
                <button>  Read More </button> </div>
                </div>

                <div id="part">
                    <div>   
                        <div><img src ="https://wpcontent.anytimeastro.com/blog_anytimeastro/blogimages/954/4389-compatibility-analysis-of-libra-and-sagittarius.jpg"/></div>
                    </div>
                    <div>  <p>Libra and Sagittarius Compatibility: Love, Friendship, Marriage, Sex, and Communication</p> 
                    <p>As per astrology, Libra is an Air sign ruled by the planet Venus, while Sagittarius is a Fire sign ruled by Jupiter. </p>
                <button>  Read More </button> </div>
                </div>
            </Carousel>
         
        </div>
    </div>
       
        </>
    )
}