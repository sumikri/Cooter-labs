import React from 'react'
import { FaAngleRight } from 'react-icons/fa'

const TextButton = ({ title }) => {
    return (
        <button className="text-mobile/button md:text-tablet/button lg:text-desktop/button text-t3 flex  items-center gap-0.5">
            <span className="capitalize">
                {title}
            </span>
            <span className="">
                <FaAngleRight />
            </span>
        </button>
    )
}

export default TextButton