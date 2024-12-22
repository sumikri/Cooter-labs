import React from 'react'
import { FaEnvelopeSquare } from 'react-icons/fa'

/**
 * A button component with an icon and text.
 *
 * @param {React.ReactNode} icon - The icon to display in the button.
 * @param {string} text - The text to display next to the icon.
 * @param {function} onClick - The function to call when the button is clicked.
 * @param {boolean} disabled - Whether the button is disabled.
 *
 * @returns {React.ReactElement} The button element.
 */

const IconButton = ({icon,text,onClick,disabled}) => {
    return (
        <button 
        className='py-4 px-6 border-t1 disabled:border-d3 disabled:text-d3 disabled:bg-fw rounded-full border uppercase text-mobile/button md:text-tablet/button lg:text-desktop/button text-t1 hover:bg-primary hover:text-fw transition-all duration-300 flex items-center gap-[10px]' 
        disabled={disabled} 
        onClick={onClick}
        >
            <span className="">
                {icon}
            </span>
            <span className="">
                {text}
            </span>
        </button>
    )
}

export default IconButton