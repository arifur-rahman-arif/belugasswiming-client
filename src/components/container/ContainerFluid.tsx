interface PropTypes {
    children: JSX.Element | JSX.Element[];
    className?: string | null;
}

/**
 * Container with a full width
 *
 * @param {PropTypes} { children, className }
 * @return {*}  {JSX.Element}
 */
const ContainerFluid = ({ children, className }: PropTypes): JSX.Element => {
    return <div className={`${className} : relative mx-auto w-full`}>{children}</div>;
};

export default ContainerFluid;
