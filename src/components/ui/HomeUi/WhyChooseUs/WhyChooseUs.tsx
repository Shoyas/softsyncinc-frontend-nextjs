"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Autoplay, FreeMode } from "swiper/modules";

import iconOne from "../../../../asset/1.webp";
import iconTwo from "../../../../asset/2.webp";
import iconThree from "../../../../asset/3.webp";
import iconFour from "../../../../asset/4.webp";
import Image from "next/image";

const WhyChooseArea = () => {
    return (
        <div className="mt-20">
            <div className="mx-3 pt-20 grid md:grid-cols-3 grid-cols-1 gap-4 grid-flow-row-dense ">
                <div className="pt-5">
                    <h1 className="text-2xl text-[#0C5ADB] font-semibold">
                        WHY CHOOSE US
                    </h1>
                    <h4 className="text-4xl text-[#453F41] pt-5">
                        Save your time with <br />a lot of features
                    </h4>
                </div>

                <div className="col-span-2">
                    <Swiper
                        breakpoints={{
                            340: {
                                slidesPerView: 2,
                                spaceBetween: 15,
                            },
                            700: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                            },
                        }}
                        freeMode={true}
                        modules={[FreeMode, Autoplay]}
                        autoplay={{ delay: 2000 }}
                        loop={true}
                        className="max-w-[90%] lg:max-w-[80%]"
                    >
                        <SwiperSlide>
                            <div className="w-32 h-32">
                                <Image
                                    width={50}
                                    height={50}
                                    loading="lazy"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    quality={100}
                                    layout="responsive"
                                    className="w-full h-full ease-in-out duration-500 rounded-2xl object-top object-cover hover:object-bottom"
                                    src={iconOne}
                                    alt="iconOne"
                                />
                            </div>
                            <h1 className="font-semibold text-[#453F41]">Fast Performance</h1>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-32 h-32">
                                <Image
                                    width={50}
                                    height={50}
                                    loading="lazy"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    quality={100}
                                    layout="responsive"
                                    className="w-full h-full ease-in-out duration-500 rounded-2xl object-top object-cover hover:object-bottom"
                                    src={iconTwo}
                                    alt="iconTwo"
                                />
                            </div>
                            <h1 className="font-semibold text-[#453F41]">Standard Code</h1>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-32 h-32">
                                <Image
                                    width={50}
                                    height={50}
                                    loading="lazy"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    quality={100}
                                    layout="responsive"
                                    className="w-full h-full ease-in-out duration-500 rounded-2xl object-top object-cover hover:object-bottom"
                                    src={iconThree}
                                    alt="iconThree"
                                />
                            </div>
                            <h1 className="font-semibold text-[#453F41]">
                                Responsive Design
                            </h1>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-32 h-32">
                                <Image
                                    width={50}
                                    height={50}
                                    loading="lazy"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    quality={100}
                                    layout="responsive"
                                    className="w-full h-full ease-in-out duration-500 rounded-2xl object-top object-cover hover:object-bottom"
                                    src={iconFour}
                                    alt="iconFour"
                                />
                            </div>
                            <h1 className="font-semibold text-[#453F41]">Quick Support</h1>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseArea;
