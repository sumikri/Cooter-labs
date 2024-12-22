/**
 * A Chip component.
 *
 * @param {string} variant - The variant of the Chip. Allowed values are
 *   'primary', 'secondary', 'tertiary', 'quaternary'. The default is 'primary'.
 * @param {string} text - The text to display in the Chip.
 *
 * @returns {React.ReactElement} The Chip element.
 */
const Chip = ({ variant, text }) => {

    let className = ''
    switch (variant) {
        case 'primary':
            className = 'bg-secondary '
            break;
        case 'secondary':
            className = 'bg-tm'
            break;
        case 'tertiary':
            className = 'bg-sg'
            break;
        case 'quaternary':
            className = 'bg-sg text-[14px] leading-5 tracking-[1.12px]'
            break;

        default:
            className = 'bg-secondary '
            break;
    }

    return (
        <span className={`lg:py-2 px-4 rounded-full ${className} text-t2 text-desktop/overline uppercase ${className}`}>
            {text}
        </span>
    )
}

export default Chip