import HomeIcon from '@/icons/icon-home-white-outline.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface PropInterface {
    hamburgerActive: boolean;
    stickyNavActive: boolean;
}

/**
 * Navbar component
 *
 * @param {PropInterface} { hamburgerActive }
 * @returns {JSX.Element}
 */
const Navbar = ({ hamburgerActive, stickyNavActive }: PropInterface): JSX.Element => {
    const router = useRouter();

    return (
        <nav className={`absolute top-[9rem] left-0 z-50 h-full w-full md:relative md:top-0 md:block`}>
            <div
                className={`relative max-h-0 w-full overflow-hidden transition-all duration-500 md:h-full md:max-h-full ${
                    (hamburgerActive && 'max-h-[100rem] pb-8 md:pb-0') || ''
                }`}
            >
                <ul className="flex h-full w-full flex-col items-center justify-center gap-12 bg-white py-16 shadow-lg md:flex-row md:justify-end md:bg-transparent md:py-0 md:shadow-none">
                    <li className="grid w-full cursor-pointer place-items-center md:w-auto">
                        <Link href="/" className="mx-auto md:-translate-y-1">
                            <HomeIcon
                                className={`${
                                    (stickyNavActive && 'md:!fill-secondary') || ''
                                } fill-secondary xl:fill-none ${router.pathname == '/' ? '!fill-primary' : ''}`}
                            />
                        </Link>
                    </li>
                    <li
                        className={`w-full cursor-pointer whitespace-nowrap text-center underline-offset-8 transition-all hover:underline  md:w-auto ${
                            (stickyNavActive && 'md:hover:decoration-secondary') || 'hover:md:decoration-primary'
                        } ${router.pathname == '/about-us' ? '!underline !decoration-primary' : ''}`}
                    >
                        <Link
                            href="/about-us"
                            className={`${
                                (stickyNavActive && 'md:!text-secondary') || ''
                            } inline-block w-full text-[1.6rem] font-medium leading-8 text-secondary hover:text-primary md:text-white ${
                                router.pathname == '/about-us' ? '!text-primary' : ''
                            }`}
                        >
                            Who we are
                        </Link>
                    </li>
                    <li
                        className={`w-full cursor-pointer whitespace-nowrap text-center underline-offset-8 transition-all hover:underline  md:w-auto ${
                            (stickyNavActive && 'md:hover:decoration-secondary') || 'hover:md:decoration-primary'
                        } ${router.pathname == '/swimming-lesson-cost' ? '!underline !decoration-primary' : ''}`}
                    >
                        <Link
                            href="/swimming-lesson-cost"
                            className={`${
                                (stickyNavActive && 'md:!text-secondary') || ''
                            } inline-block w-full text-[1.6rem] font-medium leading-8 text-secondary hover:text-primary md:text-white ${
                                router.pathname == '/swimming-lesson-cost' ? '!text-primary' : ''
                            }`}
                        >
                            Pricing
                        </Link>
                    </li>
                    <li
                        className={`w-full cursor-pointer whitespace-nowrap text-center underline-offset-8 transition-all hover:underline  md:w-auto ${
                            (stickyNavActive && 'md:hover:decoration-secondary') || 'hover:md:decoration-primary'
                        } ${router.pathname == '/contact-swimming-instructor' ? '!underline !decoration-primary' : ''}`}
                    >
                        <Link
                            href="/contact-swimming-instructor"
                            className={`${
                                (stickyNavActive && 'md:!text-secondary') || ''
                            } inline-block w-full text-[1.6rem] font-medium leading-8 text-secondary hover:text-primary md:text-white ${
                                router.pathname == '/contact-swimming-instructor' ? '!text-primary' : ''
                            }`}
                        >
                            Contact us
                        </Link>
                    </li>

                    <li>
                        <Link href="/swimming-lesson-cost" className="">
                            <button
                                type="button"
                                className={`cursor-pointer rounded-[1.5rem] border-2 border-primary bg-primary py-[1.8rem] px-[2.4rem] text-[1.6rem] font-bold uppercase leading-8 text-secondary transition-all hover:bg-transparent ${
                                    (stickyNavActive && 'md:hover:text-secondary') || 'md:hover:text-primary'
                                }`}
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
