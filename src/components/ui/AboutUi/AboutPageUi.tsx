"use client"
import Lottie from "lottie-react";
import aboutAnimation from "../../../asset/animationIcon/about.json"

const AboutPageUi = () => {
    return (
        <div className="mt-20 px-3 lg:px-0 max-w-7xl mx-auto">
            <h4 className="mb-32 text-3xl font-bold text-center">
                <p className="text-blue underline dark:text-primary-400">About Us</p>
            </h4>

            <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-6">
                <div>
                    <Lottie className="w-11/12" animationData={aboutAnimation} loop={true} />
                </div>

                <div>
                    <span className="lg:text-5xl md:text-3xl text-xl font-bold text-gray text-center lg:text-left">
                        About ZARaN IT
                    </span>
                    <p className="lg:text-xl md:text-lg text-sm font-bold text-gray lg:my-5 my-2 text-center lg:text-left">
                        At ZARaN IT, we are passionate about transforming your ideas into visually stunning and impactful digital experiences.
                    </p>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-6">
                <div>
                    <span className="lg:text-5xl md:text-3xl text-xl font-bold text-gray text-center lg:text-left">
                        About ZARaN IT
                    </span>
                    <p className="lg:text-xl md:text-lg text-sm font-bold text-gray lg:my-5 my-2 text-center lg:text-left">
                        At ZARaN IT, we are passionate about transforming your ideas into visually stunning and impactful digital experiences.
                    </p>
                </div>

                <div>
                    <Lottie className="w-11/12" animationData={aboutAnimation} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default AboutPageUi;
