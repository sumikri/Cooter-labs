'use client'

import { useState } from 'react'
import { FaCheck } from 'react-icons/fa'

/**
 * A multi choice checkbox component.
 *
 * @param {string} label - The label on the checkbox.
 * @param {string} id - The id of the checkbox.
 * @param {string} name - The name of the checkbox.
 * @param {function} onChange - The function to call when the checkbox is changed.
 *
 * @returns {React.ReactElement} The checkbox element.
 */
const MultiChoice = ({label,id,name,onChange}) => {

    const [checked, setChecked] = useState(false)

    return (
        <label htmlFor='multichoice' className={`p-3  rounded-full flex items-center gap-[10px] w-fit ${checked ? 'bg-tm text-t1' : 'bg-sg text-t1'} transition-all duration-300`}>
            <input
                type="checkbox"
                name=""
                className='invisible absolute'
                id="multichoice"
                checked={checked}
                onChange={() => setChecked(!checked)}
            />
            <div className={`size-5 border-[3px] flex items-center justify-center  ${checked ? 'bg-t3 border-t3' : 'bg-sg border-t1'}`}>
                <span className={`text-xs text-fw ${checked ? 'text-t1' : 'text-sg'}`}>
                    <FaCheck />
                </span>
            </div>
            <span className="lg:text-desktop/body/small md:text-tablet/body/small text-mobile/body/small text-t1 capitalize">Multi Choice</span>
        </label>
    )
}

export default MultiChoice