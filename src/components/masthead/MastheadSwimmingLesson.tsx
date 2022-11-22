import { Container } from '@/components/container';
import Link from 'next/link';
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
            <div className="masthead w-full overflow-hidden bg-[url('/images/masthead/masthead-about-us-large.png')] bg-cover bg-no-repeat md:absolute md:h-[75rem] md:-translate-y-[13rem] md:pt-[13rem] 2xl:bg-[url('/images/masthead/masthead-swimming-lession-large.png')]">
                <Container className="relative grid h-full grid-cols-1 justify-items-start pt-[7.3rem]">
                    <h1 className="mt-4 text-teal">swimming lessons cost</h1>
                    <img
                        src="/images/logos/prices-that-make-you-swim.svg"
                        className="mt-8"
                        alt="Prices that make you Swim"
                    />

                    <Link href="/contact-swimming-instructor">
                        <button
                            type="button"
                            className={`mt-24 cursor-pointer rounded-[1.5rem] border-2 border-primary bg-transparent py-[1.8rem] px-[2.4rem] text-[1.6rem] font-bold uppercase leading-8 text-secondary transition-all hover:bg-primary `}
                        >
                            Request a call back
                        </button>
                    </Link>

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
export default MastheadSwimmingLesson;
