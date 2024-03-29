import Link from "next/link";


const Footer = () => {
    return (
        // <div className="mt-28 px-3 lg:px-0 mb-10">
        //     <Link href="/" className="flex flex-col items-center justify-center">
        //         <p className="md:text-5xl text-3xl font-bold text-center text-blue">
        //             SoftSync INC
        //         </p>
        //     </Link>
        //     <div className="flex flex-col items-center justify-center my-2">
        //         <p className="text-sm text-center text-gray font-bold">
        //             Copyright © {new Date().getFullYear()} - All right reserved by{" "}
        //             <span>
        //                 <Link className="text-blue underline font-bold" href="/">SoftSync INC</Link>
        //             </span>
        //         </p>
        //     </div>
        // </div>


        <>
            <div className="mt-24 max-w-7xl mx-auto">
                <div className="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
                    <div className="p-5">
                        <h3 className="font-bold text-xl text-blue">SoftSync INC</h3>
                    </div>
                    <div className="p-5">
                        <div className="text-sm uppercase text-blue font-bold">
                            Resources
                        </div>
                        <Link className="my-3 text-gray block" href="/#">
                            Documentation <span className="text-xs p-1" />
                        </Link>
                        <Link className="my-3 text-gray block" href="/#">
                            Tutorials <span className="text-xs p-1" />
                        </Link>
                        <Link className="my-3 text-gray block" href="/#">
                            Support <span className="text-xs p-1 text-blue">New</span>
                        </Link>
                    </div>
                    <div className="p-5">
                        <div className="text-sm uppercase text-blue font-bold">
                            Support
                        </div>
                        <Link className="my-3 text-gray block" href="/#">
                            Help Center <span className="text-xs p-1" />
                        </Link>
                        <Link className="my-3 text-gray block" href="/#">
                            Privacy Policy <span className="text-xs p-1" />
                        </Link>
                        <Link className="my-3 text-gray block" href="/#">
                            Conditions <span className="text-xs p-1" />
                        </Link>
                    </div>
                    <div className="p-5">
                        <div className="text-sm uppercase text-blue font-bold">
                            Contact us
                        </div>
                        <Link className="my-3 text-gray block" href="/#">
                            XXX XXXX, Floor 4 San Francisco, CA
                            <span className="text-xs p-1" />
                        </Link>
                        <Link className="my-3 text-gray block" href="/#">
                            softsyncinc@gmail.com
                            <span className="text-xs p-1" />
                        </Link>
                    </div>
                </div>
            </div>

            <hr className="mb-5 max-w-7xl mx-auto border-[1px]" />

            <div>
                <div className="flex pb-5 px-3 mx-auto text-sm flex-col max-w-screen-lg items-center">
                    <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                        <Link href="/#" className="w-6 mx-1">
                            <svg
                                className="fill-current cursor-pointer text-blue hover:text-blueLight"
                                width="100%"
                                height="100%"
                                viewBox="0 0 24 24"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xmlSpace="preserve"
                            >
                                <path
                                    id="Twitter"
                                    d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627
            5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-6.465,-3.192c-0.379,0.168
            -0.786,0.281 -1.213,0.333c0.436,-0.262 0.771,-0.676
            0.929,-1.169c-0.408,0.242 -0.86,0.418 -1.341,0.513c-0.385,-0.411
            -0.934,-0.667 -1.541,-0.667c-1.167,0 -2.112,0.945 -2.112,2.111c0,0.166
            0.018,0.327 0.054,0.482c-1.754,-0.088 -3.31,-0.929
            -4.352,-2.206c-0.181,0.311 -0.286,0.674 -0.286,1.061c0,0.733 0.373,1.379
            0.94,1.757c-0.346,-0.01 -0.672,-0.106 -0.956,-0.264c-0.001,0.009
            -0.001,0.018 -0.001,0.027c0,1.023 0.728,1.877 1.694,2.07c-0.177,0.049
            -0.364,0.075 -0.556,0.075c-0.137,0 -0.269,-0.014 -0.397,-0.038c0.268,0.838
            1.048,1.449 1.972,1.466c-0.723,0.566 -1.633,0.904 -2.622,0.904c-0.171,0
            -0.339,-0.01 -0.504,-0.03c0.934,0.599 2.044,0.949 3.237,0.949c3.883,0
            6.007,-3.217 6.007,-6.008c0,-0.091 -0.002,-0.183 -0.006,-0.273c0.413,-0.298
            0.771,-0.67 1.054,-1.093Z"
                                />
                            </svg>
                        </Link>
                        <Link href="/#" className="w-6 mx-1">
                            <svg
                                className="fill-current cursor-pointer text-blue hover:text-blueLight"
                                width="100%"
                                height="100%"
                                viewBox="0 0 24 24"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xmlSpace="preserve"
                            >
                                <path
                                    id="Facebook"
                                    d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627
            5.373,-12 12,-12c6.627,0 12,5.373
            12,12Zm-11.278,0l1.294,0l0.172,-1.617l-1.466,0l0.002,-0.808c0,-0.422
            0.04,-0.648 0.646,-0.648l0.809,0l0,-1.616l-1.295,0c-1.555,0 -2.103,0.784
            -2.103,2.102l0,0.97l-0.969,0l0,1.617l0.969,0l0,4.689l1.941,0l0,-4.689Z"
                                />
                            </svg>
                        </Link>
                       
                        <Link href="/#" className="w-6 mx-1">
                            <svg
                                className="fill-current cursor-pointer text-blue hover:text-blueLight"
                                width="100%"
                                height="100%"
                                viewBox="0 0 24 24"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xmlSpace="preserve"
                            >
                                <path
                                    id="Shape"
                                    d="M7.3,0.9c1.5,-0.6 3.1,-0.9 4.7,-0.9c1.6,0 3.2,0.3 4.7,0.9c1.5,0.6 2.8,1.5
            3.8,2.6c1,1.1 1.9,2.3 2.6,3.8c0.7,1.5 0.9,3 0.9,4.7c0,1.7 -0.3,3.2
            -0.9,4.7c-0.6,1.5 -1.5,2.8 -2.6,3.8c-1.1,1 -2.3,1.9 -3.8,2.6c-1.5,0.7
            -3.1,0.9 -4.7,0.9c-1.6,0 -3.2,-0.3 -4.7,-0.9c-1.5,-0.6 -2.8,-1.5
            -3.8,-2.6c-1,-1.1 -1.9,-2.3 -2.6,-3.8c-0.7,-1.5 -0.9,-3.1 -0.9,-4.7c0,-1.6
            0.3,-3.2 0.9,-4.7c0.6,-1.5 1.5,-2.8 2.6,-3.8c1.1,-1 2.3,-1.9
            3.8,-2.6Zm-0.3,7.1c0.6,0 1.1,-0.2 1.5,-0.5c0.4,-0.3 0.5,-0.8 0.5,-1.3c0,-0.5
            -0.2,-0.9 -0.6,-1.2c-0.4,-0.3 -0.8,-0.5 -1.4,-0.5c-0.6,0 -1.1,0.2
            -1.4,0.5c-0.3,0.3 -0.6,0.7 -0.6,1.2c0,0.5 0.2,0.9 0.5,1.3c0.3,0.4 0.9,0.5
            1.5,0.5Zm1.5,10l0,-8.5l-3,0l0,8.5l3,0Zm11,0l0,-4.5c0,-1.4 -0.3,-2.5
            -0.9,-3.3c-0.6,-0.8 -1.5,-1.2 -2.6,-1.2c-0.6,0 -1.1,0.2 -1.5,0.5c-0.4,0.3
            -0.8,0.8 -0.9,1.3l-0.1,-1.3l-3,0l0.1,2l0,6.5l3,0l0,-4.5c0,-0.6 0.1,-1.1
            0.4,-1.5c0.3,-0.4 0.6,-0.5 1.1,-0.5c0.5,0 0.9,0.2 1.1,0.5c0.2,0.3 0.4,0.8
            0.4,1.5l0,4.5l2.9,0Z"
                                />
                            </svg>
                        </Link>
                        
                    </div>
                    <div className="my-5">© Copyright {new Date().getFullYear()}. All Rights Reserved By SoftSync INC.</div>
                </div>
            </div>
        </>

    );
};

export default Footer;
