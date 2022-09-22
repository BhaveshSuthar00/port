import React from 'react';
import ubuy from '../Assets/ubuy.gif'
import youtube from '../Assets/youtube.gif'
import soundCloud from '../Assets/soundCloud.gif'
import giftcard from '../Assets/giftcard.gif'
import { SiHtml5 } from "react-icons/si";
import { DiCss3,DiRequirejs,DiMongodb, DiReact } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiChakraui } from "react-icons/si";
export const holeThing = [
    {
      icons : [<SiChakraui />,<DiReact />,<DiCss3 />,<DiMongodb />,<SiExpress />],
      gifSource : soundCloud,
      headers : "soundCloud Clone",
      liveCode : "https://web-jinke-music.vercel.app/",
      sourceCode : "https://github.com/BhaveshSuthar00/soundCld-client-side",
      main : "This is a online audio streaming and distribution platform that allows users to stream, and share music and podcasts.",
      body : "This was a group project and contributors are Jevan, chandan, saurabh",
    },
    {
      icons : [
        <SiHtml5 />,
        <DiCss3 />,
        <DiRequirejs />,
        <IoLogoJavascript />,
        <DiMongodb />,
        <SiExpress />],
      gifSource : giftcard,
      headers : "Gift-Card Clone",
      liveCode : "https://enigmatic-beach-48011.herokuapp.com/",
      sourceCode : "https://github.com/BhaveshSuthar00/GiftCart-clone",
      main : "Gift-card is a e-commerce website, It is an online gift-card retailer based in Pittsburgh, Pennsylvania. It is considered the largest online gift card retailer and has appeared on the Inc.",
      body : "This was a group project and contributors are Yash, Kartik, Sumit, Mayar and Ankit",
    },
  
    {
      icons : [
        <SiHtml5 />,
        <DiCss3 />,
        <IoLogoJavascript />
      ],
      gifSource : ubuy,
      headers : "Ubuy Clone",
      liveCode : "https://ubuy-project.vercel.app/",
      sourceCode : "https://github.com/BhaveshSuthar00/ubuy-project",
      main : "Ubuy is not your usual e-commerce website, we provide our customers with access to an excellent variety of products. Today's shoppers want more in a shorter time period, and let's not forget the easy purchase methods and delivery to make it worth their while.",
      body : "This was a group project and contributors are Suresh, Prachi and Ankit",
    },
  
    {
      icons : [
        <SiHtml5 />,
        <DiCss3 />,
        <IoLogoJavascript />
      ],
      gifSource : youtube,
      headers : "Youtube Clone",
      liveCode : "https://tube-ten.vercel.app/",
      sourceCode : "https://github.com/BhaveshSuthar00/tube",
      main : "Youtube clone is my individual project. I created this when I was learning REST API.",
      body : "",
    },
  ]