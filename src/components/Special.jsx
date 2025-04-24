import React from "react";
import tv from "../assets/images/png/tv.png";
import Heading from "./common/CustomHeading";
import { cards } from '../utils/helper';

const Special = () => {
    return (
        <section>
            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/2 justify-center flex mb-8 xl:mb-0">
                        <img src={tv} alt="tv" className="w-full object-contain" />
                    </div>

                    <div className="w-full xl:w-1/2 flex flex-col justify-center pl-0 lg:pl-8">
                        <div className="relative w-[189px] mt-[30px]">
                            <div className="absolute w-full max-w-[20px] h-[8px] bg-[#01C8FF] right-0 bottom-[15px] z-[1]"></div>
                            <div className="absolute w-full max-w-[470px] h-[8px] bg-[#2C49FE] right-0 bottom-[15px]"></div>
                        </div>
                        <Heading headingText="What make us special ?" className="!leading-[100%]" />
                        <p className="text-base font-normal pt-2 text-gray-700 mb-6 max-w-[633px] w-full">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                            efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem.
                            Donec ut justo et leo congue lacinia vitae nec arcu. Nunc elit elit,
                            malesuada id suscipit cursus.
                        </p>

                        <div className="flex flex-wrap justify-center gap-8 py-10">
                            {cards.map((card, index) => (
                                <div key={index} className="group">
                                    <div
                                        className={`relative w-64 p-6 pt-12 text-center rounded-md group-hover:bg-[#2C49FE] transition-all duration-300 text-white border-2 border-[#2C49FE] bg-white text-blue-700`}
                                    >
                                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-white border-2 border-[#2C49FE] flex items-center justify-center ">
                                            <img src={card.icon} alt={`${card.title} Icon`} className="w-8 h-8" />
                                        </div>

                                        <h3 className="font-semibold text-lg mb-2 text-[#2C49FE] group-hover:text-white transition-all duration-500 ease-linear">
                                            {card.title}
                                        </h3>
                                        <p className="text-sm  text-[#2D3CAE] group-hover:text-white transition-all duration-500 ease-linear">
                                            {card.content}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Special;
