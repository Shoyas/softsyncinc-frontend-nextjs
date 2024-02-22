"use client"
import Lottie from "lottie-react";
import aboutAnimation from "../../../asset/animationIcon/about.json"

const AboutPageUi = () => {
    return (
        <div className="mt-24 px-3 lg:px-0 max-w-7xl mx-auto">
            <h4 className="mb-32 text-3xl font-bold text-center">
                <p className="text-blue underline dark:text-primary-400">About Us</p>
            </h4>

            <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-center gap-6">
                <div className="flex justify-center items-center">
                    <Lottie className="lg:w-11/12 md:w-9/12 w-6/12" animationData={aboutAnimation} loop={true} />
                </div>

                <div>
                    <h4 className="md:text-3xl text-lg font-bold leading-normal text-blue text-center lg:text-left">
                        About SoftSync INC
                    </h4>
                    <p className="text-lg text-gray mt-3 text-center lg:text-left">
                        At SoftSync INC, we are passionate about transforming your ideas into visually stunning and impactful digital experiences.
                    </p>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-center gap-6 mt-24">
                <div>
                    <h4 className="md:text-3xl text-lg font-bold leading-normal text-blue text-center lg:text-left">
                        About SoftSync INC
                    </h4>
                    <p className="text-lg text-gray mt-3 text-center lg:text-left">
                        At SoftSync INC, we are passionate about transforming your ideas into visually stunning and impactful digital experiences.
                    </p>
                </div>

                <div className="flex justify-center items-center">
                    <Lottie className="lg:w-11/12 md:w-9/12 w-6/12" animationData={aboutAnimation} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default AboutPageUi;
