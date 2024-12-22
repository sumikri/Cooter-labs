'use client'

import { useState } from 'react'
import { FaCheck } from 'react-icons/fa'

/**
 * A radio button component.
 *
 * @param {string} label - The label on the radio button.
 * @param {string} id - The id of the radio button.
 * @param {string} name - The name of the radio button.
 * @param {function} onChange - The function to call when the radio button is changed.
 * @param {string} value - The value of the radio button.
 * @param {string} selectedValue - The selected value.
 * @param {boolean} defaultChecked - Whether the radio button is checked by default.
 *
 * @returns {React.ReactElement} The radio button element.
 */
const Choice = ({ label, id, name, onChange, value, selectedValue,defaultChecked }) => {

    const checked = selectedValue === value

    const handleChange = (event) => {
        onChange(event.target.value)
    }
    console.log(checked)

    return (
        <label htmlFor={id} className={`p-3  rounded-full flex items-center gap-[10px] w-fit ${checked ? 'bg-tm text-t1' : 'bg-sg text-t1'} transition-all duration-300`}>
            <input
                type="radio"
                name={name}
                className='invisible absolute'
                id={id}
                value={value}
                onChange={handleChange}
                defaultChecked={defaultChecked}
            />
            <div className={`size-5 border-[3px] rounded-full flex items-center justify-center  ${checked ? 'bg-t3 border-t3' : 'bg-sg border-t1'}`}>
                <span className={`text-xs text-fw ${checked ? 'text-t1' : 'text-sg'}`}>
                    <FaCheck />
                </span>
            </div>
            <span className="lg:text-desktop/body/small md:text-tablet/body/small text-mobile/body/small text-t1 capitalize">{label}</span>
        </label>
    )
}

export default Choice

