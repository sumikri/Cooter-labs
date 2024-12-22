import React from 'react'

/**
 * A text field component.
 *
 * @param {string} placeholder - The placeholder text for the input field.
 * @param {function} onChange - The function to call when the input value changes.
 * @param {string} value - The current value of the input field.
 * @param {string} type - The type of the input (e.g., "text", "password").
 * @param {string} name - The name of the input field.
 * @param {string} id - The id of the input field.
 * @param {boolean} disabled - Whether the input field is disabled.
 *
 * @returns {React.ReactElement} The input field element.
 */

const TextField = ({ placeholder, onChange, value, type, name, id, disabled }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            name={name}
            id={id}
            disabled={disabled}
            className='py-4 px-6 focus:border-t4 border rounded-full border-t3 disabled:border-d3 disabled:bg-sg bg-fw lg:text-desktop/body/regular md:text-tablet/body/regular text-mobile/body/regular outline-none'
        />
    )
}

export default TextField