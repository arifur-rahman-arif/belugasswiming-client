import { Container } from '@/components/container';
import { useEffect } from 'react';

/**
 * Masthead section of 'about-us' page
 *
 * @returns {*}  {JSX.Element}
 */
const MastheadContact = (): JSX.Element => {
    useEffect(() => {
        document.querySelector('body')?.classList.remove('overflow-hidden');
    }, []);

    return (
        <>
            <div className="masthead w-full overflow-hidden bg-[url('/images/masthead/masthead-contact-mobile.png')] bg-cover bg-center bg-no-repeat md:absolute md:h-[75rem] md:-translate-y-[13rem] md:bg-[url('/images/masthead/masthead-contact.png')] md:bg-center md:pt-[13rem] 2xl:bg-[url('/images/masthead/masthead-contact-large.png')]">
                <Container className="relative grid h-full grid-cols-1 grid-rows-[auto_auto_1fr] justify-items-start pt-[7.3rem]">
                    <h1 className="mt-4 text-teal">
                        We try to reply
                        <br />
                        within 24hours
                    </h1>
                    <img src="/images/logos/contact-us.svg" className="mt-8" alt="Contact us" />
                    {/* <img src="/images/logos/contact-us-white.svg" className="mt-8 md:hidden" alt="Contact us" /> */}

                    <div className="flex flex-col items-start justify-end gap-[1.5rem] justify-self-end pb-24 pt-24 md:pt-0">
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
export default MastheadContact;
