"use client"
import "../../../ui/HomeUi/ProjectsDone/Style.css"
import Marquee from "react-fast-marquee";
import projectOne from "../../../../asset/projects-img/pc-builder-1.webp";
import projectTwo from "../../../../asset/projects-img/athena-1.webp";
import projectThree from "../../../../asset/projects-img/creative-agency-1.webp";
import projectFour from "../../../../asset/projects-img/e-school-1.webp";
import projectFive from "../../../../asset/projects-img/hot-gadget-1.webp";
import projectSix from "../../../../asset/projects-img/power-x-1.webp";
import projectSeven from "../../../../asset/projects-img/reform-car-hunter-1.webp";
import Image from "next/image";


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const ProjectsDone = () => {
  return (
    <div className="mt-20 mx-3">
      <h1 className="text-7xl font-semibold text-center text-[#0C5ADB]">35+</h1>
      <h1 className="text-4xl font-semibold text-center text-[#453F41]">
        Projects we have done
      </h1>
      <Marquee pauseOnHover={true} className="mt-20 mb-20">
        <div className="flex items-center gap-4 mr-5">
          <div className="flex items-center gap-2 w-96">
            <Image
              width={50}
              height={50}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
              layout="responsive"
              className="w-full h-full ease-in-out duration-500 rounded-2xl object-top object-cover hover:object-bottom"
              src={projectOne}
              alt="projectOne"
            />
          </div>
          <div className="flex items-center gap-2 w-96">
            <Image
              width={50}
              height={50}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
              layout="responsive"
              className="w-full h-full ease-in-out duration-500 rounded-2xl object-top object-cover hover:object-bottom"
              src={projectTwo}
              alt="projectOne"
            />
          </div>
          <div className="flex items-center gap-2 w-96">
            <Image
              width={50}
              height={50}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
              layout="responsive"
              className="w-full h-full ease-in-out duration-500 rounded-2xl object-top object-cover hover:object-bottom"
              src={projectThree}
              alt="projectOne"
            />
          </div>
          <div className="flex items-center gap-2 w-96">
            <Image
              width={50}
              height={50}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
              layout="responsive"
              className="w-full h-full ease-in-out duration-500 rounded-2xl object-top object-cover hover:object-bottom"
              src={projectFour}
              alt="projectOne"
            />
          </div>
          <div className="flex items-center gap-2 w-96">
            <Image
              width={50}
              height={50}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
              layout="responsive"
              className="w-full h-full ease-in-out duration-500 rounded-2xl object-top object-cover hover:object-bottom"
              src={projectFive}
              alt="projectOne"
            />
          </div>
          <div className="flex items-center gap-2 w-96">
            <Image
              width={50}
              height={50}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
              layout="responsive"
              className="w-full h-full ease-in-out duration-500 rounded-2xl object-top object-cover hover:object-bottom"
              src={projectSix}
              alt="projectOne"
            />
          </div>
          <div className="flex items-center gap-2 w-96">
            <Image
              width={50}
              height={50}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
              layout="responsive"
              className="w-full h-full ease-in-out duration-500 rounded-2xl object-top object-cover hover:object-bottom"
              src={projectSeven}
              alt="projectOne"
            />
          </div>
        </div>
      </Marquee>


      
      <div className="relative h-full">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image width={50} height={300} src={projectOne} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={50} height={300} src={projectTwo} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={50} height={300} src={projectThree} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={50} height={300} src={projectFour} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={50} height={300} src={projectFive} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={50} height={300} src={projectSix} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={50} height={300} src={projectSeven} alt="img" />
        </SwiperSlide>

      </Swiper>
      </div>


    </div>
  );
};

export default ProjectsDone;
