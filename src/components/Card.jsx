import React from 'react';
import { handCards } from '../utils/helper';
import CustomBtn from '../components/common/CustomBtn';
import calendar from '../assets/images/svg/calendar.svg';
import mumbai from '../assets/images/svg/mumbai.svg';
import group from '../assets/images/svg/group.svg';

const Card = () => {
  return (
      <section className="min-h-screen flex flex-col items-center justify-center space-y-10 py-16">
          <div className="text-center">
              <div className="relative w-[189px] mt-[30px] mx-auto">
                  <div className="absolute w-full max-w-[20px] h-[8px] bg-[#01C8FF] right-0 bottom-[15px] z-[1]"></div>
                  <div className="absolute w-full max-w-[470px] h-[8px] bg-[#2C49FE] right-0 bottom-[15px]"></div>
              </div>
              <h1 className="md:text-5xl text-4xl font-bold ">Choose your Next Event</h1>
          </div>

          <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {handCards.map((card, index) => (
                  <div
                      key={index}
                      className="border border-[#00000033] hover:border-transparent rounded-[30px] p-8 transition-all duration-300 hover:shadow-[0px_8px_35px_0px_rgba(0,0,0,0.1)]"
                  >


                      <img src={card.img} alt="event" className="w-full rounded-lg" />
                      <p className="md:text-2xl text-lg font-semibold mt-4">{card.title}</p>
                      <div className="flex mt-2">
                          <p className="text-base font-normal text-gray-600 flex items-center gap-2">
                              <img src={calendar} alt="calendar" className="size-6" />{card.date}</p>
                      </div>
                      <div className="flex mt-2">
                          <p className="text-base font-normal text-gray-600 flex items-center gap-2">
                              <img src={mumbai} alt="mumbai" className="size-6" />{card.location}</p>
                      </div>
                      <div className="flex mt-2 mb-4">
                          <p className="text-base font-normal text-gray-600 flex items-center gap-2">
                              <img src={group} alt="group" className="size-6" />{card.attendees}</p>
                      </div>
                      <CustomBtn
                          text="go check" myClass="py-2 px-8 xl:!mt-4 rounded transition-all duration-300 hover:!bg-white !bg-[#1E71FF] !text-white !font-semibold !text-base hover:!text-[#1E71FF] !border !border-[#1E71FF]"/>
                  </div>
              ))}
          </div>
      </section>
  )
}

export default Card
