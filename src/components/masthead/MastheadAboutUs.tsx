import { Container } from '../container';

// Const animationStarted = false;

/**
 * Masthead section of 'about-us' page
 *
 * @returns {*}  {JSX.Element}
 */
const MastheadAboutUs = (): JSX.Element => {
    return (
        <>
            <div className="masthead w-full overflow-hidden bg-[url('/images/masthead/masthead-about-us.png')] bg-cover bg-no-repeat md:absolute md:h-[75rem] md:-translate-y-[13rem] md:pt-[13rem]">
                <Container className="relative grid h-full grid-cols-1 justify-items-start pt-[7.3rem]">
                    <h3 className="mt-4 text-teal">private swimming instructors</h3>
                    <img
                        src="/images/logos/all-about-swimright.svg"
                        className="mt-8"
                        alt="Your swimright journey starts here"
                    />

                    <button
                        type="button"
                        className={`mt-24 cursor-pointer rounded-[1.5rem] border-2 border-primary bg-transparent py-[1.8rem] px-[2.4rem] text-[1.6rem] font-bold uppercase leading-8 text-secondary transition-all hover:bg-primary `}
                    >
                        Request a call back
                    </button>

                    <div className="flex flex-col items-start justify-start gap-[1.5rem] justify-self-end pb-24 pt-24 md:pt-0">
                        <img
                            src="/images/logos/logo-bsa.svg"
                            alt="BSA"
                            className="max-h-[5.3rem] max-w-[13rem] xl:max-w-[15.2rem]"
                        />
                        <h3 className="text-teal md:text-white">beluga swimming academy</h3>
                    </div>
                </Container>
            </div>
            <div className="pointer-events-none invisible w-full md:h-[calc(75rem_-_13rem)]"></div>
        </>
    );
};
export default MastheadAboutUs;
