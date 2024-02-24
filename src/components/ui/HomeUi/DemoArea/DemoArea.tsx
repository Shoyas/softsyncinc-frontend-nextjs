"use client"
import Lottie from "lottie-react";
import Image from "next/image";
import checkAnimation from "../../../../asset/animationIcon/check-mark.json"
import demoImageOne from "../../../../asset/pic/Eventvibehub.webp"
import demoImageTwo from "../../../../asset/pic/GamerZone.webp"
import demoImageThree from "../../../../asset/pic/Starbucks.webp"

const DemoArea = () => {
    return (
        <div className="mt-24 px-3 lg:px-0">
            <h4 className="lg:text-4xl md:text-3xl text-2xl font-bold text-center leading-normal">
                <p className="text-blue dark:text-primary-400">Stunning Demos</p>
            </h4>

            {/* check mark */}
            <div className="flex justify-center gap-2 items-center">
                <div className="flex justify-center items-center">
                    <Lottie className="md:w-20 w-10" animationData={checkAnimation} loop={true} />
                    <h4 className="font-bold md:text-base text-sm text-center leading-normal text-gray">Fast Performance</h4>
                </div>
                <div className="flex justify-center items-center">
                    <Lottie className="md:w-20 w-10" animationData={checkAnimation} loop={true} />
                    <h4 className="font-bold md:text-base text-sm text-center leading-normal text-gray">Seo Standard Code</h4>
                </div>
                <div className="flex justify-center items-center">
                    <Lottie className="md:w-20 w-10" animationData={checkAnimation} loop={true} />
                    <h4 className="font-bold md:text-base text-sm text-center leading-normal text-gray">Quick Support</h4>
                </div>
            </div>


            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* card start */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    className="bg-gradient-to-br from-gradientBlue via-gradientGray to-gradientBlue rounded-3xl p-7 cursor-pointer">
                    <div className="h-96 transition-all">
                        <Image
                            className="w-full h-full ease-in-out duration-[5s] rounded-2xl object-top object-cover hover:object-bottom"
                            src={demoImageOne}
                            alt="demoImageOne"
                        />
                    </div>
                    <div className="group flex items-center justify-between mt-4">
                        <div className="">
                            <h2 className="text-base text-white">Gamer Zone</h2>
                            <p className="text-white text-lg font-bold">
                                Online Games Shop
                            </p>
                        </div>
                    </div>
                </div>
                {/* card end */}

                {/* card start */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    className="bg-gradient-to-br from-gradientBlue via-gradientGray to-gradientBlue rounded-3xl p-7 cursor-pointer">
                    <div className="h-96 transition-all">
                        <Image
                            className="w-full h-full ease-in-out duration-[5s] rounded-2xl object-top object-cover hover:object-bottom"
                            src={demoImageTwo}
                            alt="demoImageOne"
                        />
                    </div>
                    <div className="group flex items-center justify-between mt-4">
                        <div className="">
                            <h2 className="text-base text-white">Event Management</h2>
                            <p className="text-white text-lg font-bold">
                                Online Event Management
                            </p>
                        </div>
                    </div>
                </div>
                {/* card end */}

                {/* card start */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    className="bg-gradient-to-br from-gradientBlue via-gradientGray to-gradientBlue rounded-3xl p-7 cursor-pointer">
                    <div className="h-96 transition-all">
                        <Image
                            className="w-full h-full ease-in-out duration-[5s] rounded-2xl object-top object-cover hover:object-bottom"
                            src={demoImageThree}
                            alt="demoImageOne"
                        />
                    </div>
                    <div className="group flex items-center justify-between mt-4">
                        <div className="">
                            <h2 className="text-base text-white">Coffee & Ice-cream Shop</h2>
                            <p className="text-white text-lg font-bold">
                                Online Coffee & Ice-cream Shop
                            </p>
                        </div>
                    </div>
                </div>
                {/* card end */}
            </div>
        </div>
    );
};


export default DemoArea;
