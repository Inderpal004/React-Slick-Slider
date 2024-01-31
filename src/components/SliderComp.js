import React from 'react';
import Card from './Card';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function SliderComp() {
    const data = [
        {
            img: "/images/img1.jpeg",
            name: "Christene",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, consectetur eveniet. Unde nobis officia nihil quasi ipsa quo cum consequuntur veniam, soluta doloribus commodi necessitatibus?"
        },
        {
            img: "/images/img2.jpeg",
            name: "David Warner",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, consectetur eveniet. Unde nobis officia nihil quasi ipsa quo cum consequuntur veniam, soluta doloribus commodi necessitatibus?"
        },
        {
            img: "/images/img3.jpeg",
            name: "Black Widow",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, consectetur eveniet. Unde nobis officia nihil quasi ipsa quo cum consequuntur veniam, soluta doloribus commodi necessitatibus?"
        },
        {
            img: "/images/img4.jpeg",
            name: "Dr Strange",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, consectetur eveniet. Unde nobis officia nihil quasi ipsa quo cum consequuntur veniam, soluta doloribus commodi necessitatibus?"
        },
        {
            img: "/images/img5.jpeg",
            name: "Thor",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, consectetur eveniet. Unde nobis officia nihil quasi ipsa quo cum consequuntur veniam, soluta doloribus commodi necessitatibus?"
        },
        {
            img: "/images/img6.jpeg",
            name: "Captain America",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, consectetur eveniet. Unde nobis officia nihil quasi ipsa quo cum consequuntur veniam, soluta doloribus commodi necessitatibus?"
        },
    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1040,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div className='container w-full m-auto my-5 '>  
         <Slider {...settings}>
            {data.map((item, index) => (
                <Card key={index} item={item} />
            ))}
            </Slider>
        </div>
    )
}
