import React, { useState, useEffect } from "react";
import CustomBtn from "./CustomBtn";
import round from "/src/assets/images/png/round.png";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";
    }, [menuOpen]);

    return (
        <header
            className={`z-50 fixed top-0 left-0 w-full transition-all duration-300 ${scrolling || menuOpen ? "bg-black" : "bg-transparent"
                } py-4`}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <img
                        src={round}
                        alt="round"
                        className="md:w-24 md:h-16 w-16 h-12 object-contain"
                    />
                    <h2 className="md:text-4xl text-2xl font-bold text-[#2C49FE]">
                        Events<span className="text-[#01C8FF]">Free</span>
                    </h2>
                </div>

                <ul className="hidden lg:flex items-center gap-8 text-white">
                    {["HOME", "EVENTS", "FEED", "USER NAME"].map((item, index) => (
                        <li key={index}>
                            <a href="#" className="hover:text-[#2C49FE] font-semibold text-base">
                                {item}
                            </a>
                        </li>
                    ))}
                    <li>
                        <CustomBtn
                            text="Log Out"
                            myClass="hover:!bg-[#2C49FE] !text-[#1E71FF] hover:!text-white !border !border-[#2C49FE]"
                        />
                    </li>
                </ul>

                <div className="lg:hidden text-white z-50 relative">
                    {menuOpen ? (
                        <X size={32} onClick={() => setMenuOpen(false)} className="cursor-pointer" />
                    ) : (
                        <Menu size={32} onClick={() => setMenuOpen(true)} className="cursor-pointer" />
                    )}
                </div>
            </div>

            {menuOpen && (
                <div className="fixed inset-0 bg-black flex flex-col justify-center items-center gap-6 text-white text-lg font-semibold z-40">
                    {["HOME", "EVENTS", "FEED", "USER NAME"].map((item, index) => (
                        <a key={index} href="#" className="hover:text-[#2C49FE]" onClick={() => setMenuOpen(false)}>
                            {item}
                        </a>
                    ))}
                    <CustomBtn
                        text="Log Out"
                        myClass="hover:!bg-[#1E71FF] !text-[#1E71FF] hover:!text-white !border !border-[#1E71FF]"
                    />
                </div>
            )}
        </header>
    );
};

export default Header;
