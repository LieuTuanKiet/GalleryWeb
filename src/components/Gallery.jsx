import { useEffect, useState } from "react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Gallery(){
    const [items,setItems] = useState([]);
    useEffect(() => {
        fetch("https://68ab1247909a5835049dacb3.mockapi.io/test")
            .then(res => {
                return res.json();
            })
            .then(data => {
                setItems(data);
            })
            .catch(error => {
                console.log("Error",error);
            })
    },[])
    const settings = {
        dots: true,
        infitite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed:1000,
        slidesToShow:1,
        slidesToScroll:1,
        cssEase: "linear",
        pauseOnHover: true,
        arrows: false,
        centerMode: true,
        customPaging: i => (
            <div className="mt-8 md:mt-2 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-pink-400 opacity-50 hover:opacity-100"></div>
        )
    };
    return(
        <div className="min-h-[75vh] sm:w-full overflow-x-hidden bg-white relative"> 
            {/* Soft Pink Glow */}
            <div 
            className="absolute inset-0 z-0 pointer-events-none" 
            style={{
                backgroundImage: `
                radial-gradient(circle at center, #fbb6ce, transparent)
                `,
            }} 
            />
            {/* Your Content Here */}
            <div className="text-center font-semibold text-lg sm:text-3xl md:text-5xl sm:mt-6 sm:mb-5 bg-linear-to-tr from-secondary-color via-pink-600 to-purple-500 text-transparent bg-clip-text drop-shadow-pink-300 drop-shadow-lg">
                COMPETITION GALLERY
            </div>
            <div className="text-center font-semibold text-xl mb-4 sm:text-4xl md:text-6xl sm:pb-10 bg-linear-to-tr from-secondary-color via-pink-600 to-purple-500 text-transparent bg-clip-text bg-size-[200%] drop-shadow-lg drop-shadow-secondary-color/70 animate-waterfall">
                <span className="text-white">20/11</span> WEB DESIGN <span className="text-white">CONTEST</span>
            </div>
            
            <div className="pb-20">
                <Slider {...settings} className="mx-auto max-w-7xl">
                    {items.map((item) => (
                        <div key={item.id} className="p-2 max-w-[1180px] max-h-[620px] cursor-pointer">
                            <a href="#" target="_blank"><img src={item.img} alt="web contest" className="w-screen h-screen max-h-[300px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-screen object-cover object-center"/></a>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}