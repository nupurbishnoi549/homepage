import React from 'react';
import insta from '../assets/images/svg/insta.svg';
import facebook from '../assets/images/svg/facebook.svg';
import twitter from '../assets/images/svg/twitter.svg';
import round from "/src/assets/images/png/round.png";
import { services, events, galleryImages } from '../utils/helper';

const Footer = () => {
    return (
        <footer className="bg-[#0a0a0a] py-8 text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-between items-start">
                    <div className="lg:w-5/12 w-full mb-8 lg:mb-0">
                        <div className="flex items-center mb-6">
                            <img src={round} alt="round" className="md:w-24 md:h-16 w-16 h-12 object-contain" />
                            <h2 className="text-4xl font-bold text-[#2C49FE]">
                                Events<span className="text-[#01C8FF]">Free</span>
                            </h2>
                        </div>
                        <p className="text-gray-400 max-w-[346px] text-[14px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem.
                        </p>
                        <div className="flex gap-4 mt-4">
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <img src={insta} alt="Instagram" className="w-6" />
                            </a>
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <img src={facebook} alt="Facebook" className="w-6" />
                            </a>
                            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                                <img src={twitter} alt="Twitter" className="w-6" />
                            </a>
                        </div>
                    </div>

                    <div className="w-full lg:w-7/12 mt-8">
                        <div className="flex flex-wrap">
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                <ul>
                                    <li className="mb-3">SERVICES</li>
                                    {services.map((service, index) => (
                                        <li key={index} className="my-3">
                                            <span>{service.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                <ul>
                                    <li className="mb-3">EVENTS</li>
                                    {events.map((event, index) => (
                                        <li key={index} className="my-3">
                                            <span>{event.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3">
                                <h2 className="mb-3">GALLERY</h2>
                                <div className="grid grid-cols-3 gap-x-4 gap-y-3">
                                    {galleryImages.map((image, index) => (
                                        <div key={index} className="mb-3 flex justify-center">
                                            <img src={image.src} alt={image.alt} />
                                        </div>
                                    ))}
                                    <div className="mb-3 bg-[#2D3CAE87] flex justify-center items-center">
                                        <span className="text-xs text-center flex flex-col items-center">
                                            Show
                                            <br />
                                            More
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center text-sm text-gray-400 md:mt-16 mt-4 px-4">
                © Credits of companyName belong to companyName.
            </p>
        </footer>

    );
};

export default Footer;
