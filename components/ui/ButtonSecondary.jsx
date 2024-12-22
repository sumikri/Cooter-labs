import React from 'react'

const ButtonSecondary = ({text,disabled,onClick}) => {
    return (
        <button
            className='py-4 px-6 border-primary disabled:border-d3 disabled:text-d3 disabled:bg-fw rounded-full border uppercase text-mobile/button md:text-tablet/button lg:text-desktop/button  hover:bg-primary hover:text-fw transition-all duration-300 text-primary'
            disabled={disabled}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default ButtonSecondary