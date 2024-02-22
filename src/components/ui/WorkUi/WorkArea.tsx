/* eslint-disable react/no-unescaped-entities */
"use client"
import Image from "next/image";
import demoImageOne from "../../../../src/asset/pic/Eventvibehub.webp"
import demoImageTwo from "../../../../src/asset/pic/GamerZone.webp"
import demoImageThree from "../../../../src/asset/pic/Starbucks.webp"


const WorkArea = () => {
  return (
    <div className="mt-24 px-3 lg:px-0 max-w-7xl mx-auto">
      <h4 className="mb-32 text-3xl font-bold text-center">
        <p className="text-blue underline dark:text-primary-400">We've completed</p>
      </h4>

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

export default WorkArea;