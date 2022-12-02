import { Container } from '@/components/container';
import { RequestCallbackButton } from '@/components/button';
import { useEffect } from 'react';

/**
 * Masthead section of 'about-us' page
 *
 * @returns {*}  {JSX.Element}
 */
const MastheadAboutUs = (): JSX.Element => {
    useEffect(() => {
        document.querySelector('body')?.classList.remove('overflow-hidden');
    }, []);

    return (
        <>
            <div className="masthead w-full overflow-hidden bg-[url('/images/masthead/masthead-about-us.png')] bg-cover bg-center bg-no-repeat md:absolute md:h-[75rem] md:-translate-y-[13rem] md:bg-center md:pt-[13rem] 2xl:bg-[url('/images/masthead/masthead-about-us-large.png')]">
                <Container className="relative grid h-full grid-cols-1 justify-items-start pt-[7.3rem]">
                    <h1 className="mt-4 text-teal">private swimming instructors</h1>
                    <img
                        src="/images/logos/all-about-swimright.svg"
                        className="mt-8"
                        alt="Your swimright journey starts here"
                    />

                    {/* <img
                        src="/images/logos/all-about-swimright-white.svg"
                        className="mt-8 md:hidden"
                        alt="Your swimright journey starts here"
                    /> */}

                    <RequestCallbackButton />

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
