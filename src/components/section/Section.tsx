interface PropInterface {
    children: JSX.Element | JSX.Element[];
    className?: string | null;
    defaultClassName?: string | null;
}

/**
 * General section of a webpage
 *
 * @param {PropTypes} { children, className }
 * @returns {*}  {JSX.Element}
 */
const Section = ({
    children,
    className,
    defaultClassName = 'mt-24 w-full px-8 sm:mt-36 md:mt-48'
}: PropInterface): JSX.Element => {
    return <section className={`${defaultClassName || ''} ${className || ''}`}>{children}</section>;
};

export default Section;