import Link from 'next/link';

import HomeIcon from '@/images/icons/icon-home-white-outline.svg';

interface PropInterface {
    hamburgerActive: boolean;
}

/**
 * Navbar component
 *
 * @param {PropInterface} { hamburgerActive }
 * @returns {*}
 */
const Navbar = ({ hamburgerActive }: PropInterface) => {
    return (
        <nav
            className={`absolute top-[10rem] left-0 z-50 h-full w-full md:relative md:top-0 md:block ${
                (!hamburgerActive && 'pointer-events-none') || ''
            }`}
        >
            <div
                className={`relative max-h-0 w-full overflow-hidden transition-all duration-500 md:h-full md:max-h-full ${
                    (hamburgerActive && 'max-h-[100rem] pb-8 md:pb-0') || ''
                }`}
            >
                <ul className="flex h-full w-full flex-col items-center justify-center gap-12 bg-white py-16 px-8 shadow-lg md:flex-row md:py-0 md:shadow-none">
                    <li className="grid w-full place-items-center md:w-auto">
                        <Link href="/" className="mx-auto md:-translate-y-1">
                            <HomeIcon className="fill-secondary" />
                        </Link>
                    </li>
                    <li className="w-full cursor-pointer whitespace-nowrap text-center transition-all hover:underline hover:decoration-secondary hover:underline-offset-8 md:w-auto">
                        <Link
                            href="#"
                            className="inline-block w-full text-[1.6rem] font-medium leading-8 text-secondary"
                        >
                            Who we are
                        </Link>
                    </li>
                    <li className="w-full cursor-pointer whitespace-nowrap text-center transition-all hover:underline hover:decoration-secondary hover:underline-offset-8 md:w-auto">
                        <Link
                            href="#"
                            className="inline-block w-full text-[1.6rem] font-medium leading-8 text-secondary"
                        >
                            Contact us
                        </Link>
                    </li>
                    <li className="w-full cursor-pointer whitespace-nowrap text-center transition-all hover:underline hover:decoration-secondary hover:underline-offset-8 md:w-auto">
                        <Link
                            href="#"
                            className="inline-block w-full text-[1.6rem] font-medium leading-8 text-secondary"
                        >
                            Pricing
                        </Link>
                    </li>

                    <li>
                        <Link href="#" className="">
                            <button
                                type="button"
                                className="cursor-pointer rounded-[1.5rem] border-2 border-primary bg-primary py-[1.8rem] px-[2.4rem] text-[1.6rem] font-medium uppercase leading-8 text-secondary transition-all hover:bg-transparent md:hover:text-primary"
                            >
                                Calendar
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
