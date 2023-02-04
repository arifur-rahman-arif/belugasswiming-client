import { Container } from '@/components/container';
import { RequestCallbackButton } from '@/components/button';
import { useEffect } from 'react';

/**
 * Masthead section of '/swimming-lesson-cost' page
 *
 * @returns {*}  {JSX.Element}
 */
const MastheadSwimmingLesson = (): JSX.Element => {
    useEffect(() => {
        document.querySelector('body')?.classList.remove('overflow-hidden');
    }, []);

    return (
        <>
            <div className="masthead w-full overflow-hidden bg-[url('/images/masthead/masthead-swimming-lession.webp')] bg-cover bg-center bg-no-repeat md:absolute md:h-[75rem] md:-translate-y-[13rem] md:bg-center md:pt-[13rem] 2xl:bg-[url('/images/masthead/masthead-swimming-lession-large.webp')]">
                <Container className="relative grid h-full grid-cols-1 justify-items-start pt-[7.3rem]">
                    <h1 className="mt-4 text-teal">Swimming lessons cost</h1>
                    <img
                        src="/images/logos/prices-that-make-you-swim.svg"
                        className="mt-8"
                        alt="Prices that make you Swim"
                        width={460}
                        height={116}
                    />
                    {/* <img
                        src="/images/logos/prices-that-make-you-swim-white.svg"
                        className="mt-8 md:hidden"
                        alt="Prices that make you Swim"
                    /> */}

                    <RequestCallbackButton />

                    <div className="flex flex-col items-start justify-start gap-[1.5rem] justify-self-end pb-24 pt-24 md:pt-0">
                        <img
                            src="/images/logos/logo-bsa.png"
                            alt="BSA"
                            className="max-h-[5.3rem] max-w-[13rem] xl:max-w-[15.2rem]"
                            width={152}
                            height={53}
                        />
                        <h3 className="text-teal md:text-white">beluga swimming academy</h3>
                    </div>
                </Container>
            </div>
            <div className="pointer-events-none invisible w-full md:h-[calc(75rem_-_13rem)]"></div>
        </>
    );
};
export default MastheadSwimmingLesson;
