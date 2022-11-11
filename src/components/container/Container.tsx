import { ReactNode } from 'react';

interface PropTypes {
    children: ReactNode;
    className?: string | null;
    defaultClassName?: string | null;
}

/**
 * Container with a fixed max-width
 *
 * @param {PropTypes} { children, className }
 * @returns {*}  {JSX.Element}
 */
const Container = ({
    children,
    className,
    defaultClassName = 'mx-auto w-full max-w-[var(--container-width)] px-8 xl:px-0'
}: PropTypes): JSX.Element => {
    return <div className={`${className} ${defaultClassName}`}>{children}</div>;
};

export default Container;
