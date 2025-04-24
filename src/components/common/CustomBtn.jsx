import React from 'react'

const CustomBtn = ({ text, myClass }) => {
    return (
        <button className={` text-white cursor-pointer rounded-3xl border-2 border-white px-7 py-3 text-base font-semibold transition-all duration-300 hover:bg-white hover:text-[#1E71FF] hover:scale-105 ${myClass}`}>
            {text}
        </button>

    )
}

export default CustomBtn
