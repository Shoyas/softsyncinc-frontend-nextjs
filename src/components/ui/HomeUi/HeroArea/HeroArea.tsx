"use client";
import Typewriter from 'typewriter-effect';
import imagesOne from "../../../../asset/v1.webp";
import imagesTwo from "../../../../asset/v2.webp";
import Image from "next/image";
// import avatarAnimation from "../../../../asset/animationIcon/avatar-animation.json"
// import cloudAnimation from "../../../../asset/animationIcon/cloud.json"
// import gradientAnimation from "../../../../asset/animationIcon/gradient.json"


const HeroArea = () => {
    return (
        <div className="mt-20 px-3 lg:px-0">
            <div className="flex flex-col items-center justify-center text-center md:mt-32 mt-16">
                <h1 className="font-bold lg:text-6xl md:text-5xl text-2xl text-gray">
                    Create fast & powerful
                </h1>
                <div className="mx-auto">
                    <h1 className="flex justify-center gap-3 text-gray lg:text-6xl md:text-5xl text-2xl leading-normal mb-5">
                        website for
                        <span className="text-[#0C5ADB] underline">
                            <Typewriter
                                options={{
                                    strings: ["Web Agency ",
                                        "Digital Agency",
                                        "Creative Agency",
                                        "Marketing Agency",
                                        "Corporate",
                                        "Portfolio",],
                                    autoStart: true,
                                    loop: true,
                                    cursor: "|",
                                }}
                            />
                        </span>
                    </h1>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center md:mt-20 mt-10">
                <p className="lg:text-xl md:text-lg text-base font-normal leading-normal z-10 text-center text-lightGray">
                    Let your creativity shine and start <br />
                    building your website today and impress your visitors.
                </p>
            </div>
            <div className="flex justify-around lg:gap-20 gap-5 -mt-12">
                <div>
                    <Image
                        className="lg:h-[450px] md:h-72 h-32 w-full object-cover md:rounded-2xl rounded-md rotate-45"
                        src={imagesOne}
                        alt="imagesOne"
                    />
                    <div>
                        {/* <Lottie className="w-full bg-cover lg:ml-12" animationData={gradientAnimation} loop={true} /> */}
                    </div>
                </div>

                <div>
                    <Image
                        className="lg:h-[450px] md:h-72 h-32 w-full object-cover md:rounded-2xl rounded-md -rotate-45"
                        src={imagesTwo}
                        alt="imagesTwo"
                    />
                    {/* <Lottie className="w-11/12 lg:ml-12" animationData={cloudAnimation} loop={true} /> */}
                </div>
            </div>
        </div>
    );
};

export default HeroArea;
