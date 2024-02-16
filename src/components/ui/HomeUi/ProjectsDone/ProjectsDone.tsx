"use client"
// import Marquee from "react-fast-marquee";
import projectOne from "../../../../asset/projects-img/pc-builder-1.webp";
// import projectTwo from "../../../../asset/projects-img/athena-1.webp";
// import projectThree from "../../../../asset/projects-img/creative-agency-1.webp";
// import projectFour from "../../../../asset/projects-img/e-school-1.webp";
// import projectFive from "../../../../asset/projects-img/hot-gadget-1.webp";
// import projectSix from "../../../../asset/projects-img/power-x-1.webp";
// import projectSeven from "../../../../asset/projects-img/reform-car-hunter-1.webp";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const ProjectsDone = () => {
  return (
    <div className="mt-20 mx-3">
      <h1 className="text-7xl font-semibold text-center text-[#0C5ADB]">35+</h1>
      <h1 className="text-4xl font-semibold text-center text-[#453F41]">
        Projects we have done
      </h1>
      {/* <Marquee pauseOnHover={true} className="mt-20 mb-20">
        <div className="flex items-center gap-4 ">
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
                            alt="projectTwo"
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
                            alt="projectThree"
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
                            alt="projectFour"
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
                            alt="projectFive"
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
                            alt="projectSix"
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
                            alt="projectSeven"
                        />
          </div>
        </div>
      </Marquee> */}

      <Swiper
        // install Swiper modules
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5
        }}

        pagination={{el:'.swiper_pagination', clickable: true}}
        navigation={{
          nextEl:'.swiper_button_next'
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}

        className="swiper_container"
      >
        <SwiperSlide><Image
          width={50}
          height={50}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={100}
          layout="responsive"
          className="w-full h-full ease-in-out duration-500 rounded-2xl object-top object-cover hover:object-bottom"
          src={projectOne}
          alt="projectOne"
        /></SwiperSlide>
        <SwiperSlide><Image
                            width={50}
                            height={50}
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            quality={100}
                            layout="responsive"
                            className="w-full h-full ease-in-out duration-500 rounded-2xl object-top object-cover hover:object-bottom"
                            src={projectOne}
                            alt="projectOne"
                        /></SwiperSlide>
        <SwiperSlide><Image
                            width={50}
                            height={50}
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            quality={100}
                            layout="responsive"
                            className="w-full h-full ease-in-out duration-500 rounded-2xl object-top object-cover hover:object-bottom"
                            src={projectOne}
                            alt="projectOne"
                        /></SwiperSlide>
        <SwiperSlide><Image
                            width={50}
                            height={50}
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            quality={100}
                            layout="responsive"
                            className="w-full h-full ease-in-out duration-500 rounded-2xl object-top object-cover hover:object-bottom"
                            src={projectOne}
                            alt="projectOne"
                        /></SwiperSlide>

        <div className="slider_controller">
          <div className="swiper_button_prev slider_arrow">prev</div>
          <div className="swiper_button_next slider_arrow">next</div>

          <div className="swiper_pagination"></div>
        </div>
      </Swiper>


    </div>
  );
};

export default ProjectsDone;
