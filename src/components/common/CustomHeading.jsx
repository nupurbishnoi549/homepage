import React from 'react'

const Heading = ({ headingText, className }) => {
    return (
        <h2 className={`text-black font-bold md:text-48 text-5xl ${className} `}>{headingText}</h2>
    )
}

export default Heading