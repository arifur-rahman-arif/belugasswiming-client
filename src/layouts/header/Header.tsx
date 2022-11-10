import { useState, MouseEvent } from 'react';
import Hamburger from './hamburger/Hamburger';
import Navbar from './Navbar';

/**
 * Header layout
 *
 * @returns {JSX.Element}
 */
const Header = (): JSX.Element => {
    const [hamburgerActive, setHamburgerActive] = useState<boolean>(false);

    /**
     * Toggle the state of the hamburger menu
     *
     * @param {MouseEvent<HTMLElement>} e
     */
    const toggleMenu = (e: MouseEvent<HTMLElement>) => {
        setHamburgerActive(!hamburgerActive);
    };

    return (
        <header className="sticky top-0 z-50 mx-auto w-full max-w-[var(--container-width)] bg-white">
            <div className="relative grid h-[10rem] w-full grid-cols-[1fr_auto] items-center justify-items-start px-8 md:h-auto md:px-0 xl:grid-cols-2">
                <div className="grid place-items-center md:mt-[4.8rem]">
                    <img className="h-[8.2rem] w-[16rem] object-contain" src="/images/logos/logo.svg" alt="" />
                </div>

                <Navbar hamburgerActive={hamburgerActive} />

                <Hamburger hamburgerActive={hamburgerActive} toggleMenu={toggleMenu} />
            </div>
        </header>
    );
};

export default Header;
