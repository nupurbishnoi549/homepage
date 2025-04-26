import React from "react";
import Header from "./common/Header";
import CustomBtn from '../components/common/CustomBtn';
import location from '../assets/images/svg/location.svg';
import date from '../assets/images/png/date.png';
import capacity from '../assets/images/svg/capacity.svg';

const EventSection = () => {
    return (
        <section className="relative bg-cover bg-center flex flex-col min-h-screen bg-[url(./assets/images/png/hero-bg.png)]">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60 z-10"></div>
            <Header />
            <div className="flex-grow flex items-center pt-12 z-10 relative">
                <div className="container mx-auto relative w-full px-3">
                    <p className="text-white md:text-[64px] text-[44px] font-bold xl:w-[1044px] leading-[150%] xl:mt-30 lg:mt-24 md:mt-14 mt-8">
                        Sed tortor in{" "}
                        <span className="relative whitespace-nowrap before:content-[''] before:absolute before:w-[55px] before:h-2 before:bg-[#01C8FF] before:right-0 before:bottom-[-10px] before:z-[1] after:content-[''] after:absolute after:w-full after:max-w-[470px] after:h-2 after:bg-[#2C49FE] after:right-0 after:bottom-[-10px]">
                            quisque morbi
                        </span>{" "}
                        scelerisque etiam eu.
                    </p>

                    <p className="text-white mt-4 ff-yantramanav xl:w-[765px] font-normal md:text-xl text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum<br />
                        suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec<br />
                        arcu. Nunc elit elit, malesuada id suscipit cursus,
                    </p>

                    <div className="flex items-center gap-6 pt-10 lg:mb-36 mb-12">
                        <CustomBtn text="Get Started" myClass="hover:!bg-[#2C49FE] !text-[#1E71FF] hover:!text-white !border !border-[#1E71FF]" />
                        <a href="#" className="text-white">Learn more</a>
                    </div>

                    <div className="flex flex-col md:flex-row w-full mb-16 ">
                        <div className="w-full lg:w-9/12 bg-blue-600/75 md:rounded-full rounded-2xl p-5">
                            <div className="flex flex-wrap justify-center items-center lg:gap-y-6">

                                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 py-2 px-4 border-0 lg:border-r lg:border-white">
                                    <div className="flex items-center justify-center space-x-4 pb-3">
                                        <img src={location} alt="location" className="size-8" />
                                        <div>
                                            <p className="text-white text-lg font-medium leading-6">Location</p>
                                            <p className="text-blue-200 text-sm">Search by city</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 py-2 px-4 border-0 lg:border-r lg:border-white">
                                    <div className="flex items-center justify-center space-x-4 pb-3">
                                        <img src={date} alt="date" className="size-6" />
                                        <div>
                                            <p className="text-white text-lg font-medium leading-6">Date</p>
                                            <p className="text-blue-200 text-sm">09/23/2021</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 py-2 px-4 border-0 lg:border-r lg:border-white">
                                    <div className="flex items-center justify-center space-x-4 pb-3">
                                        <img src={capacity} alt="capacity" className="size-8" />
                                        <div>
                                            <p className="text-white text-lg font-medium leading-6">Capacity</p>
                                            <p className="text-blue-200 text-sm">Search by city</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 py-2 px-4 flex justify-center lg:justify-end">
                                    <CustomBtn text="GO CHECK" myClass="hover:!bg-[#2C49FE] !bg-white !text-[#1E71FF] hover:!text-white hover!border-white" />
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default EventSection;
