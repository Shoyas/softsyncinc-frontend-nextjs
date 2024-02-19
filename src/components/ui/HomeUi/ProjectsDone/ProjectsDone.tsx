"use client"
import CountUp from 'react-countup';
import "../../../ui/HomeUi/ProjectsDone/Style.css"
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
import 'swiper/css/navigation';

import '../../../ui/HomeUi/ProjectsDone/Style.css'

// import required modules
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';


const ProjectsDone = () => {
  return (
    <div className="mt-20 px-3 lg:px-0">
      <h1 className="md:text-5xl text-3xl font-bold text-center text-blue"><CountUp delay={1} end={35} />+</h1>
      <h1 className="md:text-3xl text-xl font-bold text-center text-gray">
        Projects we have done
      </h1>

      <div className="flex justify-center items-center flex-col">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 5,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="mySwiper"
          loop={true}
        >
          <div className="flex justify-center items-center flex-col">
            <SwiperSlide>
              <Image className="img rounded-xl" style={{
                width: '50%',
                height: 'auto',
              }} src={projectOne} alt="projectOne" />
            </SwiperSlide>
            <SwiperSlide>
              <Image className="img rounded-xl" style={{
                width: '50%',
                height: 'auto',
              }} src={projectTwo} alt="projectTwo" />
            </SwiperSlide>
            <SwiperSlide>
              <Image className="img rounded-xl" style={{
                width: '50%',
                height: 'auto',
              }} src={projectThree} alt="projectThree" />
            </SwiperSlide>
            <SwiperSlide>
              <Image className="img rounded-xl" style={{
                width: '50%',
                height: 'auto',
              }} src={projectFour} alt="projectFour" />
            </SwiperSlide>
            <SwiperSlide>
              <Image className="img rounded-xl" style={{
                width: '50%',
                height: 'auto',
              }} src={projectFive} alt="projectFive" />
            </SwiperSlide>
            <SwiperSlide>
              <Image className="img rounded-xl" style={{
                width: '50%',
                height: 'auto',
              }} src={projectSix} alt="projectSix" />
            </SwiperSlide>
            <SwiperSlide>
              <Image className="img rounded-xl" style={{
                width: '50%',
                height: 'auto',
              }} src={projectSeven} alt="projectSeven" />
            </SwiperSlide>
          </div>
        </Swiper>
      </div>

    </div>
  );
};

export default ProjectsDone;
