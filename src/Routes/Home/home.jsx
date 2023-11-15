import React from "react";
import { Header} from "../../Components/Header";
import { Category } from "../../Components/Category";
import { Add } from "../../Components/Add";
import { Livesession } from "../../Components/LiveSession";
import { Footer } from "../../Components/Footer";
import { Astrolger } from "../../Components/OurAstrologer";
import { Customerstory } from "../../Components/CustomerStory";
import { OurBlog } from "../../Components/OurBlog";
import { FAQ } from "../../Components/FAQ";
import { Asseen } from "../../Components/Asseenon";

export const Home=()=>{

  const questions = [
    {
      id: 1,
      question: 'Verified Astrologers',
      answer: 'Anytime Astro helps you connect with the best online Astrologers in India who will guide you through all the problems of your life and provide answers to all your queries through accurate Astrology predictions. Be it your love problems or money problems, our Astrologers can give you guidance on each and every aspect of your life You can chat with our Astrologers Live or on call and ask all your concerns. Whether it is Vedic Astrology, Tarot Reading, Psychic Reading, Horoscope or Numerology, we have certified online Astrologers who can provide you with the most accurate astro advice for your concern and give you effective solutions and remedies to resolve your problems.'
    },
    {
      id: 2,
      question: 'Ask An Astrologer Via Multiple Ways',
      answer: 'By offering you multiple ways to connect with online Astrologers, we make sure that you get the guidance you seek, anytime and anywhere.We offer Online Astrology consultation, through which you can connect with our Astrologers LIVE through a one-on-one chat or a call session. You can also opt to send a message to your chosen Astrologer and book a live session with them for online Astrology reading according to your concern, time and flexibility',
    },
    {
      id: 3,
      question: '100% Privacy Guaranteed',
      answer: 'At Anytime Astro, your privacy and security is our top priority. We adopt the highest security standards to keep your data and information secure. We ensure complete anonymity of your personal data, and any other information that you share with our Astrologers. Our platform operates in a 100% secure setting, so you can connect online with Astrologers without worrying about anything.',
    },
    
  ];
    return(
        <>
      <Header/>
      <Category/>
      <Add/>
      <Livesession/>
      <Astrolger/>
      <Customerstory/>
      <Asseen/>
      < OurBlog/>
      <FAQ data={questions}/>
      <Footer/>
        </>
    )
}