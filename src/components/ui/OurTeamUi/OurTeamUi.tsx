"use client"
import { FaLinkedinIn, FaGithub, FaTelegramPlane, FaBriefcase } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import zehad from "../../../asset/team/zehad.webp"
import rakibulislam from "../../../asset/team/Rakibulislam1.webp"
import shoyas from "../../../asset/team/shoyas-2.webp"
import bitue from "../../../asset/team/bitue.webp"

const OurTeamUi = () => {
    return (
        <section>
            <h4 className="mb-32 text-3xl font-bold text-center">
                <p className="text-blue underline dark:text-primary-400">Founders</p>
            </h4>
            <div className="max-w-7xl mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 gap-y-28 px-3 lg:px-0">
                <div className="rounded-lg bg-gradient-to-br from-gradientBlue via-gradientGray to-gradientBlue shadow-xl dark:bg-neutral-700">
                    <div className="flex justify-center -mt-[75px]">
                        <Image src={zehad} className="w-36 h-auto  rounded-full shadow-lg dark:shadow-black/20" alt="Zehad Khan" />
                    </div>
                    <div className="p-6 text-white">
                        <h5 className="mb-2 text-lg font-bold text-center">Zehad Khan</h5>
                        <p className="mb-4 text-base text-center">PHP Developer</p>
                        <div className="flex justify-center items-center gap-2">
                            <Link href='/' className="text-[#0077b5] mb-2 bg-transparent border-solid border-[1px] inline-block rounded-md px-3 py-2 text-xs font-medium uppercase leading-normal shadow-md transition hover:-translate-y-1 duration-200 ease-in-out hover:shadow-2xl focus:shadow-2xl focus:outline-none focus:ring-0 active:shadow-2xl">
                                <FaLinkedinIn size={20} />
                            </Link>

                            <Link href='/'
                                className="text-[#000] mb-2 bg-transparent border-solid border-[1px] inline-block rounded-md px-3 py-2 text-xs font-medium uppercase leading-normal shadow-md transition hover:-translate-y-1 duration-200 ease-in-out hover:shadow-2xl focus:shadow-2xl focus:outline-none focus:ring-0 active:shadow-2xl">
                                <FaGithub size={20} />
                            </Link>

                            <Link href='/'
                                className="text-[#c13584] mb-2 bg-transparent border-solid border-[1px] inline-block rounded-md px-3 py-2 text-xs font-medium uppercase leading-normal shadow-md transition hover:-translate-y-1 duration-200 ease-in-out hover:shadow-2xl focus:shadow-2xl focus:outline-none focus:ring-0 active:shadow-2xl">
                                <FaTelegramPlane size={20} />
                            </Link>

                            <Link href='/'
                                className="text-[#9146ff] mb-2 bg-transparent border-solid border-[1px] inline-block rounded-md px-3 py-2 text-xs font-medium uppercase leading-normal shadow-md transition hover:-translate-y-1 duration-200 ease-in-out hover:shadow-2xl focus:shadow-2xl focus:outline-none focus:ring-0 active:shadow-2xl">
                                <FaBriefcase size={20} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="rounded-lg bg-gradient-to-br from-gradientBlue via-gradientGray to-gradientBlue shadow-xl dark:bg-neutral-700">
                    <div className="flex justify-center -mt-[75px]">
                        <Image src={shoyas} className="w-36 h-auto  rounded-full shadow-lg dark:shadow-black/20" alt="Md. Nasir Uddin Shoyas" />
                    </div>
                    <div className="p-6 text-white">
                        <h5 className="mb-2 text-lg font-bold text-center">Md. Nasir Uddin Shoyas</h5>
                        <p className="mb-4 text-base text-center">Full Stack Developer</p>
                        <div className="flex justify-center items-center gap-2">
                            <Link href="https://www.linkedin.com/in/md-nasir-uddin4067"
                                target="_blank" className="text-[#0077b5] mb-2 bg-transparent border-solid border-[1px] inline-block rounded-md px-3 py-2 text-xs font-medium uppercase leading-normal shadow-md transition hover:-translate-y-1 duration-200 ease-in-out hover:shadow-2xl focus:shadow-2xl focus:outline-none focus:ring-0 active:shadow-2xl">
                                <FaLinkedinIn size={20} />
                            </Link>

                            <Link href="https://github.com/Shoyas"
                                target="_blank"
                                className="text-[#000] mb-2 bg-transparent border-solid border-[1px] inline-block rounded-md px-3 py-2 text-xs font-medium uppercase leading-normal shadow-md transition hover:-translate-y-1 duration-200 ease-in-out hover:shadow-2xl focus:shadow-2xl focus:outline-none focus:ring-0 active:shadow-2xl">
                                <FaGithub size={20} />
                            </Link>

                            <Link href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;tf=1&amp;to=md.nasiruddin4067@gmail.com"
                                target="_blank"
                                className="text-[#c13584] mb-2 bg-transparent border-solid border-[1px] inline-block rounded-md px-3 py-2 text-xs font-medium uppercase leading-normal shadow-md transition hover:-translate-y-1 duration-200 ease-in-out hover:shadow-2xl focus:shadow-2xl focus:outline-none focus:ring-0 active:shadow-2xl">
                                <FaTelegramPlane size={20} />
                            </Link>

                            <Link href="https://nasir-portfolio.netlify.app/"
                                target="_blank"
                                className="text-[#9146ff] mb-2 bg-transparent border-solid border-[1px] inline-block rounded-md px-3 py-2 text-xs font-medium uppercase leading-normal shadow-md transition hover:-translate-y-1 duration-200 ease-in-out hover:shadow-2xl focus:shadow-2xl focus:outline-none focus:ring-0 active:shadow-2xl">
                                <FaBriefcase size={20} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="rounded-lg bg-gradient-to-br from-gradientBlue via-gradientGray to-gradientBlue shadow-xl dark:bg-neutral-700">
                    <div className="flex justify-center -mt-[75px]">
                        <Image src={rakibulislam} className="w-36 h-auto  rounded-full shadow-lg dark:shadow-black/20" alt="Rakibul Islam" />
                    </div>
                    <div className="p-6 text-white">
                        <h5 className="mb-2 text-lg font-bold text-center">Rakibul Islam</h5>
                        <p className="mb-4 text-base text-center">MERN Stack Developer</p>
                        <div className="flex justify-center items-center gap-2">
                            <Link href="https://www.linkedin.com/in/iamrakib2/"
                                target="_blank" className="text-[#0077b5] mb-2 bg-transparent border-solid border-[1px] inline-block rounded-md px-3 py-2 text-xs font-medium uppercase leading-normal shadow-md transition hover:-translate-y-1 duration-200 ease-in-out hover:shadow-2xl focus:shadow-2xl focus:outline-none focus:ring-0 active:shadow-2xl">
                                <FaLinkedinIn size={20} />
                            </Link>

                            <Link href="https://github.com/Rakibulislam1"
                                target="_blank"
                                className="text-[#000] mb-2 bg-transparent border-solid border-[1px] inline-block rounded-md px-3 py-2 text-xs font-medium uppercase leading-normal shadow-md transition hover:-translate-y-1 duration-200 ease-in-out hover:shadow-2xl focus:shadow-2xl focus:outline-none focus:ring-0 active:shadow-2xl">
                                <FaGithub size={20} />
                            </Link>

                            <Link href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;tf=1&amp;to=rirakib03@gmail.com"
                                target="_blank"
                                className="text-[#c13584] mb-2 bg-transparent border-solid border-[1px] inline-block rounded-md px-3 py-2 text-xs font-medium uppercase leading-normal shadow-md transition hover:-translate-y-1 duration-200 ease-in-out hover:shadow-2xl focus:shadow-2xl focus:outline-none focus:ring-0 active:shadow-2xl">
                                <FaTelegramPlane size={20} />
                            </Link>

                            <Link href="https://rakibul-islam-v1.netlify.app/"
                                target="_blank"
                                className="text-[#9146ff] mb-2 bg-transparent border-solid border-[1px] inline-block rounded-md px-3 py-2 text-xs font-medium uppercase leading-normal shadow-md transition hover:-translate-y-1 duration-200 ease-in-out hover:shadow-2xl focus:shadow-2xl focus:outline-none focus:ring-0 active:shadow-2xl">
                                <FaBriefcase size={20} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="rounded-lg bg-gradient-to-br from-gradientBlue via-gradientGray to-gradientBlue shadow-xl dark:bg-neutral-700">
                    <div className="flex justify-center -mt-[75px]">
                        <Image src={bitue} className="w-36 h-auto  rounded-full shadow-lg dark:shadow-black/20" alt="Ashikul Islam Bitue" />
                    </div>
                    <div className="p-6 text-white">
                        <h5 className="mb-2 text-lg font-bold text-center">Ashikul Islam Bitue</h5>
                        <p className="mb-4 text-base text-center">Django Developer</p>
                        <div className="flex justify-center items-center gap-2">
                            <Link href='' className="text-[#0077b5] mb-2 bg-transparent border-solid border-[1px] inline-block rounded-md px-3 py-2 text-xs font-medium uppercase leading-normal shadow-md transition hover:-translate-y-1 duration-200 ease-in-out hover:shadow-2xl focus:shadow-2xl focus:outline-none focus:ring-0 active:shadow-2xl">
                                <FaLinkedinIn size={20} />
                            </Link>

                            <Link href=''
                                className="text-[#000] mb-2 bg-transparent border-solid border-[1px] inline-block rounded-md px-3 py-2 text-xs font-medium uppercase leading-normal shadow-md transition hover:-translate-y-1 duration-200 ease-in-out hover:shadow-2xl focus:shadow-2xl focus:outline-none focus:ring-0 active:shadow-2xl">
                                <FaGithub size={20} />
                            </Link>

                            <Link href='' 
                                className="text-[#c13584] mb-2 bg-transparent border-solid border-[1px] inline-block rounded-md px-3 py-2 text-xs font-medium uppercase leading-normal shadow-md transition hover:-translate-y-1 duration-200 ease-in-out hover:shadow-2xl focus:shadow-2xl focus:outline-none focus:ring-0 active:shadow-2xl">
                                <FaTelegramPlane size={20} />
                            </Link>

                            <Link href=''
                                className="text-[#9146ff] mb-2 bg-transparent border-solid border-[1px] inline-block rounded-md px-3 py-2 text-xs font-medium uppercase leading-normal shadow-md transition hover:-translate-y-1 duration-200 ease-in-out hover:shadow-2xl focus:shadow-2xl focus:outline-none focus:ring-0 active:shadow-2xl">
                                <FaBriefcase size={20} />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>




        </section>

    );
};

export default OurTeamUi;