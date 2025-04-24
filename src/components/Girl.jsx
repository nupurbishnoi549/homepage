import React from 'react'
import Heading from "./common/CustomHeading";
import { statsData } from '../utils/helper';

const Girl = () => {
    return (
        <section className="bg-cover relative bg-center bg-no-repeat bg-[url(./assets/images/png/girl.png)] bg-black/50 py-10">
            <div className="absolute inset-0 bg-[#2C49FE]/80 z-0"></div>
            <div className="container mx-auto px-4 relative z-10 text-white">
                <div className="text-center mb-10">
                    <Heading headingText="Lorem ipsum dolor sit amet, consectetur" className="!leading-[130%] !text-white !max-w-[708px] !mx-auto max-sm:!text-4xl" />
                    <p className="lg:text-base text-[15px] font-normal mx-auto pt-4 lg:max-w-[765px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in suscipit.<br />
                        Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-12 md:gap-16 lg:gap-20 text-white">
                    {statsData.map((item, index) => (
                        <div key={index} className="flex flex-col items-center min-w-[120px]">
                            <img
                                src={item.icon}
                                alt={item.label}
                                className="w-[42px] h-[42px] mb-2 object-contain"
                            />
                            <p className="text-4xl font-bold">{item.value}</p>
                            <p className="uppercase text-lg tracking-widest">{item.label}</p>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    )
}

export default Girl
