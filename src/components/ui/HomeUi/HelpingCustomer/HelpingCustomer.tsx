/* eslint-disable react/no-unescaped-entities */
"use client"

import Link from "next/link";
import codeAnimation from "../../../../asset/animationIcon/code.json"
import Lottie from "lottie-react";

const HelpingCustomer = () => {
    return (
        <div className="mt-24 px-3 lg:px-0">
            <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-6">
                <div>
                    <h1 className="md:text-3xl text-lg font-bold leading-normal text-blue text-center lg:text-left">
                        We've been helping customer globally.
                    </h1>
                    <h4 className="text-lg text-gray mt-3 text-center lg:text-left">
                        Aliquam tristique libero at dui sodales, et placerat orci lobortis. Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem.
                    </h4>
                    <div className="lg:mt-10 mt-5 flex justify-center lg:justify-start">
                        <Link href="/contactUs" className="relative px-5 py-2 font-medium text-white group">
                            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-blueLight group-hover:bg-blue group-hover:skew-x-12"></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-blue group-hover:bg-blueLight group-hover:-skew-x-12"></span>
                            <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                            <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                            <span className="relative">More About Us</span>
                        </Link>
                    </div>
                </div>

                <div>
                    <Lottie className="w-11/12 lg:ml-12" animationData={codeAnimation} loop={true} />
                </div>

            </div>
        </div>
    );
};

export default HelpingCustomer;