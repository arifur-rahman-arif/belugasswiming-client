import { useState, MouseEvent, useRef, useEffect, useContext } from 'react';
import Hamburger from './hamburger/Hamburger';
import Navbar from './Navbar';
import { gsap } from 'gsap';
import { AppContextInterface, AppCtx } from '../../context/Context';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

/**
 * Header layout
 *
 * @returns {JSX.Element}
 */
const Header = (): JSX.Element => {
    const appCtx: AppContextInterface | null = useContext(AppCtx);
    const header = useRef<HTMLElement>(null);
    const [hamburgerActive, setHamburgerActive] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
        }
        // If (!appCtx?.homePageDoorOpen) return;

        gsap.to(header.current, {
            scrollTrigger: {
                trigger: '.masthead',
                toggleActions: 'play',
                markers: true
            }
            // Markers: true,
            // y: 500
        });
    }, [appCtx?.homePageDoorOpen]);

    /**
     * Toggle the state of the hamburger menu
     *
     * @param {MouseEvent<HTMLElement>} e
     */
    const toggleMenu = (e: MouseEvent<HTMLElement>) => {
        setHamburgerActive(!hamburgerActive);
    };

    return (
        <header
            ref={header}
            className="sticky top-0 left-0 z-50 mx-auto w-full max-w-[var(--container-width)] bg-white md:relative md:bg-transparent"
        >
            <div className="relative grid h-[10rem] w-full grid-cols-[1fr_auto] items-center justify-items-start px-8 md:h-auto xl:grid-cols-2 xl:px-0">
                <div className="grid place-items-center md:mt-[4.8rem]">
                    <img
                        className="w-[12rem] object-contain md:h-[8.2rem] md:w-[16rem]"
                        src="/images/logos/logo.svg"
                        alt=""
                    />
                </div>

                <Navbar hamburgerActive={hamburgerActive} />

                <Hamburger hamburgerActive={hamburgerActive} toggleMenu={toggleMenu} />
            </div>
        </header>
    );
};

export default Header;
