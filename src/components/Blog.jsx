import React from 'react'
import CommonHeading from '../common/CommonHeading'
import { Blog_Crad } from '../common/Helper'
import Slider from "react-slick";
const Blog = () => {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 3000,
        cssEase: "linear",
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <div className='container pt-xxl'>
            <CommonHeading text="Our Blog" align="text-center" />
            <div className='flex justify-center'><p className='font-Plus text-center font-normal text-lg leading-[28.8px] text-dark_black max-w-[592px]'>Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade</p></div>

            <div className='flex max-xl:hidden gap-6 justify-center mt-14'>
                {Blog_Crad.map((data, Blog) => (
                    <div key={Blog} className='shadow-[0px_0px_12px_3px_#B6B6B640] rounded-3xl p-[24px] bg-white max-w-[364px] w-full min-h-[474px]'>
                        <img className='rounded-3xl max-w-[316px] w-full' src={data.img} alt="main_img" />
                        <p className='font-Plus text-2xl leading-[38.4px] text-black font-semibold mt-6'>{data.Sub_Heading}</p>
                    </div>
                ))}
            </div>
            <Slider {...settings} className="mt-14 h-[456px] blog_slider" >
                {Blog_Crad.map((data, Blog) => (
                    <div key={Blog} className='shadow-[0px_0px_12px_3px_#B6B6B640] max-lg:max-w-[332px] rounded-3xl p-[24px] bg-white max-w-[364px] w-full min-h-[474px]'>
                        <img className='rounded-3xl  max-w-[316px] w-full' src={data.img} alt="main_img" />
                        <p className='font-Plus text-2xl leading-[38.4px] text-black font-semibold mt-6'>{data.Sub_Heading}</p>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Blog