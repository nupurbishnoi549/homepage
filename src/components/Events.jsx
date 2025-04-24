import React from 'react';
import scatboard from '../assets/images/png/scatboard.png';
import Heading from "./common/CustomHeading";
import CustomBtn from '../components/common/CustomBtn';
import { eventCards } from '../utils/helper';


const Events = () => {
    return (
        <section className="py-16 px-4">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 mb-16">
                    <div className="w-full lg:w-1/2">
                        <div className="relative w-[189px] mt-[30px]">
                            <div className="absolute w-full max-w-[20px] h-[8px] bg-[#01C8FF] right-0 bottom-[15px] z-[1]"></div>
                            <div className="absolute w-full max-w-[470px] h-[8px] bg-[#2C49FE] right-0 bottom-[15px]"></div>
                        </div>
                        <Heading headingText="Explore our latest events" className="!leading-[137%] !max-w-[332px]" />
                        <p className="text-gray-600 mb-4 font-normal text-base mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse
                            maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec arcu.
                        </p>
                        <p className="text-black text-base font-bold cursor-pointer">LEARN MORE</p>
                    </div>

                    <div className="flex flex-wrap gap-6 justify-center">
                        {eventCards.map((event, index) => (
                            <div key={index} className="w-full md:w-[48%] xl:w-[38%] group cursor-pointer">
                                <div className="transition-all duration-300 group-hover:shadow-md rounded overflow-hidden border border-gray-200 group-hover:bg-white">
                                    <img
                                        src={event.img}
                                        alt={event.alt}
                                        className="w-full h-auto object-contain"
                                    />
                                    <div className="p-4">
                                        <p className="text-sm font-normal text-gray-500">
                                            {event.date}
                                        </p>
                                        <p className="text-2xl font-medium">
                                            {event.title}
                                        </p>
                                        <p className="text-gray-600 font-normal text-base max-w-[272px]">
                                            {event.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="flex flex-col lg:flex-row justify-between gap-8">
                    <div className="w-full lg:w-1/2">
                        <img src={scatboard} alt="scatboard" className="w-[546px] mt-10 object-contain justify-center flex" />
                    </div>

                    <div className="w-full lg:w-2/5">
                        <div className="relative w-[189px] mt-[30px]">
                            <div className="absolute w-full max-w-[20px] h-[8px] bg-[#01C8FF] right-0 bottom-[15px] z-[1]"></div>
                            <div className="absolute w-full max-w-[470px] h-[8px] bg-[#2C49FE] right-0 bottom-[15px]"></div>
                        </div>
                        <Heading headingText="Join Us !" className="!leading-[100%]" />
                        <p className="text-gray-600 font-normal text-base mb-4 mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse
                            maximus ipsum sem. Donec ut justo et leo congue
                        </p>
                        <Heading headingText="Sign Up" className="!leading-[100%] !text-[35px]" />

                        <form className="space-y-4 mt-4">
                            <div className="flex flex-row gap-4">
                                <input type="text" placeholder="First Name" className="w-full p-2 border border-[#00000066] rounded font-normal text-base" />
                                <input type="text" placeholder="Last Name" className="w-full p-2 border border-[#00000066] rounded font-normal text-base" />
                            </div>
                            <input type="email" placeholder="Email Address" className="w-full p-2 border border-[#00000066] rounded font-normal text-base" />
                            <div className="flex flex-row gap-4">
                                <input type="password" placeholder="Password" className="w-full p-2 border border-[#00000066] rounded font-normal text-base" />
                                <input type="password" placeholder="Confirm Password" className="w-full p-2 border border-[#00000066] rounded font-normal text-base" />
                            </div>
                            <textarea placeholder="About Me" className="w-full p-2 border border-[#00000066] rounded h-24 resize-none font-normal text-base"></textarea>
                            <CustomBtn
                                text="Sign up" type='submit'
                                myClass="py-2 w-full rounded transition-all duration-300 hover:!bg-[#2C49FE] !text-[#1E71FF] font-semibold text-lg hover:!text-white !border !border-[#1E71FF]"
                            />


                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Events;
