"use client";
import Typewriter from "typewriter-effect";
import imagesOne from "../../../../asset/v1.webp";
import imagesTwo from "../../../../asset/v2.webp";
import Image from "next/image";
// import avatarAnimation from "../../../../asset/animationIcon/avatar-animation.json"
// import cloudAnimation from "../../../../asset/animationIcon/cloud.json"
// import gradientAnimation from "../../../../asset/animationIcon/gradient.json"
import Lottie from "lottie-react";

const HeroArea = () => {
    return (
        <div className="mt-20 px-3 lg:px-0">
            <div className="flex flex-col items-center justify-center md:mt-32 mt-16">
                <h1 className="md:text-5xl text-3xl font-bold text-center text-gray">
                    Create fast & powerful
                </h1>
                <div className="mx-auto">
                    <h1 className="md:text-3xl text-xl font-bold md:leading-[60px] leading-9 text-center flex text-gray">
                        website for&nbsp;
                        <span className="text-blue underline">
                            <Typewriter
                                options={{
                                    strings: [
                                        "Web Agency ",
                                        "Digital Agency",
                                        "Creative Agency",
                                        "Marketing Agency",
                                        "Corporate",
                                        "Portfolio",
                                    ],
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
                <h4 className="md:text-xl text-sm z-10 text-center text-lightGray">
                    Let your creativity shine and start <br />
                    building your website today and impress your visitors.
                </h4>
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
