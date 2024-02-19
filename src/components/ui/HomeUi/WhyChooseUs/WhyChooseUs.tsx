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
        <div className="mt-20 px-3 lg:px-0">
            <div className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-10">
                <div className='text-center'>
                    <span className="md:text-3xl text-lg font-bold text-blue">
                        WHY CHOOSE US
                    </span>
                    <p className="md:text-2xl text-base font-bold text-gray">
                        Save your time with a <br />lot of features
                    </p>
                </div>

                <div className="col-span-2">
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={5}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Autoplay]}
                        autoplay={{ delay: 1500 }}
                        loop= {true}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="flex items-center">
                                <div className="flex flex-col justify-center items-center">
                                    <Image className="lg:w-32 lg:h-32 md:w-20 md:h-20 w-14 h-14" src={iconOne} alt="iconOne" />
                                    <p className="font-bold md:text-xl text-base text-gray">Fast Performance</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex items-center">
                                <div className="flex flex-col justify-center items-center">
                                    <Image className="lg:w-32 lg:h-32 md:w-20 md:h-20 w-14 h-14" src={iconTwo} alt="iconOne" />
                                    <p className="font-bold md:text-xl text-base text-gray">Standard Code</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex items-center">
                                <div className="flex flex-col justify-center items-center">
                                    <Image className="lg:w-32 lg:h-32 md:w-20 md:h-20 w-14 h-14" src={iconThree} alt="iconOne" />
                                    <p className="font-bold md:text-xl text-base text-gray">Responsive Design</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex items-center">
                                <div className="flex flex-col justify-center items-center ">
                                    <Image className="lg:w-32 lg:h-32 md:w-20 md:h-20 w-14 h-14" src={iconFour} alt="iconOne" />
                                    <p className="font-bold md:text-xl text-base text-gray">Quick Support</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseArea;
