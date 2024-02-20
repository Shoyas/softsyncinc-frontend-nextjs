"use client"

import Link from "next/link";
import laptopAnimation from "../../../../asset/animationIcon/laptop.json"
// import codeAnimation from "../../../../asset/animationIcon/code.json"
import Lottie from "lottie-react";

const ResponsiveLayoutArea = () => {
    return (
        <div className="mt-20 px-3 lg:px-0">
            <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-6">
                <div>
                    <Lottie className="w-full" animationData={laptopAnimation} loop={true} />
                </div>
                <div>
                    <span className="lg:text-5xl md:text-3xl text-xl font-bold text-gray text-center lg:text-left">
                        Responsive Layout Retina Ready Design
                    </span>
                    <p className="lg:text-xl md:text-lg text-sm font-bold text-gray lg:my-5 my-2 text-center lg:text-left">
                        All the pages of our designed website are responsive. We used CSS
                        framework & RAW CSS to build the website.
                    </p>
                    <div className="lg:mt-10 mt-5 flex justify-center lg:justify-start">
                        <Link href="/contactUs" className="relative px-5 py-2 font-medium text-white group">
                            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-blueLight group-hover:bg-blue group-hover:skew-x-12"></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-blue group-hover:bg-blueLight group-hover:-skew-x-12"></span>
                            <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                            <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                            <span className="relative">Check It Live</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResponsiveLayoutArea;
