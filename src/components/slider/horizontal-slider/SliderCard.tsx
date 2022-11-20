import { ReactNode } from 'react';

interface PropInterface {
    children: ReactNode;
}

/**
 * Individual slider card
 *
 * @param {PropInterface} { index }
 * @returns {*}
 */
const SliderCard = ({ children }: PropInterface): JSX.Element => {
    return <>{children}</>;
};

export default SliderCard;
