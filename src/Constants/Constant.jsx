import img1 from "../assets/myPhoto.jpg"
import img2 from "../assets/logo1.png"
import img3 from "../assets/logo2.png"
import img4 from "../assets/logo3.png"
import img5 from "../assets/logo4.png"
import img6 from "../assets/logo5.png"
import img7 from "../assets/logo6.jpg"
import img8 from "../assets/logo7.jpg"
import { FaHome, FaMusic } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { MdSportsBasketball, MdMovie, MdFastfood } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { LiaBlogSolid } from "react-icons/lia";

// DATA CATEGORY

export const data = [
    { icon: <FaHome className="icon" />, span: "Home", category: "Home" },
    { icon: <IoGameController className="icon" />, span: "Gaming", category: "Gaming" },
    { icon: <MdSportsBasketball className="icon" />, span: "Sports", category: "Sports" },
    { icon: <GrTechnology className="icon" />, span: "Technology", category: "Technology" },
    { icon: <FaMusic className="icon" />, span: "Music", category: "Music" },
    { icon: <LiaBlogSolid className="icon" />, span: "Blogs", category: "Blogs" },
    { icon: <MdMovie className="icon" />, span: "Movies", category: "Movies" },
    { icon: <MdFastfood className="icon" />, span: "Food", category: "Food" }, 
];

export const categories = {
    Home: 15, 
    Sports: 17,      
    News: 25,         
    Music: 10,        
    Gaming: 20,       
    Technology: 28,   
    Movies: 24,      
    Food: 26,         
};

// SUBSCRIBE

export const Subscribe = [
    { img: img1, p: "Youssef" },
    { img: img2, p: "MrBeast" },
    { img: img3, p: "Liam" },
    { img: img4, p: "Noah" },
    { img: img5, p: "Elijah" },
    { img: img6, p: "Mason" },
    { img: img7, p: "Aiden" },
    { img: img8, p: "Zayn" },
];

// API

export const API_URL = "https://youtube.googleapis.com/youtube/v3";
export const apiKey = import.meta.env.VITE_API_KEY
