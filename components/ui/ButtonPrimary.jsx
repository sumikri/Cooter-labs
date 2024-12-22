'use client'

import React from 'react'

/**
 * A primary button component.
 *
 * @param {string} text - The text on the button.
 * @param {boolean} disabled - Whether the button is disabled.
 * @param {function} onClick - The function to call when the button is clicked.
 *
 * @returns {React.ReactElement} The button element.
 */
const ButtonPrimary = ({ text, disabled, onClick }) => {

    return (
        <button onClick={onClick} className='lg:py-4 px-6 py-3  rounded-full bg-t1 disabled:bg-sg  hover:bg-primary transition-all duration-300 text-secondary disabled:text-d3 text-mobile/button md:text-tablet/button lg:text-desktop/button hover:text-fw' disabled={disabled}>
            <span className=" ">
                {text}
            </span>
        </button>
    )
}

export default ButtonPrimary