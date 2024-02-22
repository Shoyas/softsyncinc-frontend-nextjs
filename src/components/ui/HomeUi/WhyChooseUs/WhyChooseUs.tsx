"use client"


import { Swiper, SwiperSlide } from 'swiper/react';
import iconOne from "../../../../asset/1.webp";
import iconTwo from "../../../../asset/2.webp";
import iconThree from "../../../../asset/3.webp";
import iconFour from "../../../../asset/4.webp";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/free-mode';
import { Autoplay, FreeMode } from 'swiper/modules';


const WhyChooseArea = () => {
    return (
        <section className="px-3 lg:px-0 mt-24">
            <div className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-4">
                <div className="text-center lg:text-left">
                    <h1 className="md:text-xl text-lg font-bold leading-normal text-blue">
                        WHY CHOOSE US
                    </h1>
                    <h4 className="lg:text-4xl md:text-3xl text-2xl text-gray mt-3">
                        Save your time with <br />a lot of features
                    </h4>
                </div>

                <div className="col-span-2">
                    <Swiper
                        breakpoints={{
                            340: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            700: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                            },
                        }}
                        freeMode={true}
                        modules={[FreeMode, Autoplay]}
                        // autoplay={{ delay: 2000 }}
                        loop={true}
                    >
                        <SwiperSlide className='slide-width'>
                            <div className='flex flex-col gap-4 justify-center items-center'>
                                <Image className="lg:w-32 lg:h-32 md:w-28 md:h-28 w-20 h-20" src={iconOne} alt="icon" />
                                <p className="font-semibold text-[#453F41]">Fast Performance</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='slide-width'>
                            <div className='flex flex-col gap-4 justify-center items-center'>
                                <Image className="lg:w-32 lg:h-32 md:w-28 md:h-28 w-20 h-20" src={iconTwo} alt="icon" />
                                <p className="font-semibold text-[#453F41]">Standard Code</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='slide-width'>
                            <div className='flex flex-col gap-4 justify-center items-center'>
                                <Image className="lg:w-32 lg:h-32 md:w-28 md:h-28 w-20 h-20" src={iconThree} alt="icon" />
                                <p className="font-semibold text-[#453F41]">
                                    Responsive Design
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='slide-width'>
                            <div className='flex flex-col gap-4 justify-center items-center'>
                                <Image className="lg:w-32 lg:h-32 md:w-28 md:h-28 w-20 h-20" src={iconFour} alt="icon" />
                                <p className="font-semibold text-[#453F41]">Quick Support</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseArea;
