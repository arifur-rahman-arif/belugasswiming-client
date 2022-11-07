interface PropTypes {
    children: JSX.Element | JSX.Element[];
    className?: string | null;
}

/**
 * Container with a fixed max-width
 *
 * @param {PropTypes} { children, className }
 * @return {*}  {JSX.Element}
 */
const Container = ({ children, className }: PropTypes): JSX.Element => {
    return <div className={`${className} : relative mx-auto w-full max-w-[var(--container-width)]`}>{children}</div>;
};

export default Container;
