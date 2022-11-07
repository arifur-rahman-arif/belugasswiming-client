interface PropTypes {
    children: JSX.Element | JSX.Element[];
    className?: string | null;
}

/**
 * General section of a webpage
 *
 * @param {PropTypes} { children, className }
 * @return {*}  {JSX.Element}
 */
const Section = ({ children, className }: PropTypes): JSX.Element => {
    return <section className={`${className} : mt-24 w-full px-8 sm:mt-36 md:mt-48`}>{children}</section>;
};

export default Section;
