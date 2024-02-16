"use client"
import Image from "next/image";
import aboutImage from "../../../asset/about.webp";
const AboutPageUi = () => {
    return (
        <div className="mt-20 mx-3">
            <h1 className="text-5xl font-semibold text-center text-[#0C5ADB] underline mt-10 mb-10">
                About Us
            </h1>
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-4 items-center justify-center mt-10 mb-10">
                <div className="mb-2">
                    <Image width={50}
                        height={50}
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={100}
                        layout="responsive"
                        src={aboutImage} alt="pidevs-image" />
                </div>
                <div className="mb-2">
                    <h1 className="text-5xl font-semibold text-[#453F41]">
                        About PiDevs
                    </h1>
                    <h4 className="text-xl mt-5 text-[#453F41]">
                        At PiDevs, we are passionate about transforming your ideas into
                        visually stunning and impactful digital experiences.
                    </h4>
                </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-4 items-center justify-center mt-10 mb-10">
                <div className="mb-2">
                    <h1 className="text-5xl font-semibold text-[#453F41]">
                        About PiDevs
                    </h1>
                    <h4 className="text-xl mt-5 text-[#453F41]">
                        At PiDevs, we are passionate about transforming your ideas into
                        visually stunning and impactful digital experiences.
                    </h4>
                </div>

                <div className="mb-2">
                    <Image width={50}
                        height={50}
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={100}
                        layout="responsive"
                        src={aboutImage} alt="pidevs-image" />
                </div>
            </div>
        </div>
    );
};

export default AboutPageUi;
