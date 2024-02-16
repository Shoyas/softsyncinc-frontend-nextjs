"use client";
import Typewriter from "typewriter-effect";
import imagesOne from "../../../../asset/v1.webp";
import imagesTwo from "../../../../asset/v2.webp";
import Image from "next/image";

const HeroArea = () => {
    return (
        <div className="mt-20 mx-3">
            <div className="flex flex-col items-center justify-center mt-40">
                <h1 className="text-5xl font-semibold text-center text-[#453F41]">
                    Create fast & powerful
                </h1>
                <div className="mx-auto">
                    <h1 className="text-5xl font-semibold text-center flex text-[#453F41]">
                        website for&nbsp;
                        <span className="text-[#0C5ADB] underline">
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
            <div className="flex flex-col items-center justify-center mt-20 ">
                <h4 className="text-xl z-10 text-center text-gray-500">
                    Let your creativity shine and start <br />
                    building your website today and impress your visitors.
                </h4>
            </div>
            <div className="flex ">
                <div className="w-96 rotate-45 flex-none ">
                    <Image
                        width={50}
                        height={50}
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={100}
                        layout="responsive"
                        className="w-full h-full ease-in-out duration-500 rounded-2xl object-top object-cover hover:object-bottom"
                        src={imagesOne}
                        alt="imagesOne"
                    />
                </div>
                <div className="grow">{""}</div>
                <div className="w-96 rotate-[-45deg] flex-none">

                    <Image
                        width={50}
                        height={50}
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={100}
                        layout="responsive"
                        className="w-full h-full ease-in-out duration-500 rounded-2xl object-top object-cover hover:object-bottom"
                        src={imagesTwo}
                        alt="imagesTwo"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroArea;
