import { Container } from '@/components/container';
import { Section } from '@/components/section';
import { AppContextInterface, AppCtx } from '@/context/Context';
import { useContext, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import PreferredFormOfContact from './PreferredFormOfContact';
import InputSection from './InputSection';
import Description from './Description';
import IconRefresh from '@/images/icons/icon-refresh.svg';

/**
 * Form component
 *
 * @returns {*}  {JSX.Element}
 */
const FormSection = (): JSX.Element => {
    const appCtx: AppContextInterface | null = useContext(AppCtx);
    const yellowElement = useRef<HTMLDivElement>(null);
    const yellowHorizontalElement = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!appCtx?.homePageDoorOpen) return;

        gsap.to(yellowElement.current, {
            height: '15rem',
            duration: 1.5,
            ease: 'steps(12)',
            scrollTrigger: {
                trigger: yellowElement.current,
                start: 'top 75%'
            }
        });

        gsap.to(yellowHorizontalElement.current, {
            width: '15rem',
            duration: 1.5,
            ease: 'steps(12)',
            scrollTrigger: {
                trigger: yellowHorizontalElement.current,
                start: 'top 75%'
            }
        });
    }, [appCtx?.homePageDoorOpen]);

    return (
        <Section>
            <Container className="relative grid grid-cols-1 md:grid-cols-[auto_1fr]">
                <span ref={yellowElement} className="hidden h-[0] w-[0.8rem] bg-primary md:block"></span>

                <span ref={yellowHorizontalElement} className="h-[0.8rem] w-0 bg-primary md:right-0 md:hidden"></span>

                <div className="grid grid-cols-1 shadow-shadow1 md:grid-cols-2">
                    <div className="flex flex-col items-center justify-start gap-24 py-24 px-8 sm:px-12 md:items-start xl:px-[7.4rem]">
                        <img
                            src="/images/section-images/front-swimmer.svg"
                            className="max-h-[12.1rem] w-full max-w-[32.7rem]"
                        />
                        <h2 className="max-w-[32.7rem]">Ready to SwimRight?</h2>
                        <div className="flex flex-col items-start justify-start gap-[1.5rem]">
                            <h3 className="font-bold">Get in tocuh</h3>
                            <p>We aim to reply to all enquiry within 24 hours</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-12 bg-grey20 px-8 py-24 sm:px-12 xl:grid-cols-2 xl:py-20">
                        {/* Form input area */}
                        <div className="flex flex-col items-start justify-start">
                            <PreferredFormOfContact />

                            <InputSection />
                        </div>

                        {/* Form text area */}
                        <Description />

                        <div className="flex items-center justify-start gap-[2.8rem] justify-self-end xl:col-span-2">
                            <span className="flex cursor-pointer items-center justify-center gap-4 px-8 py-12">
                                <IconRefresh className="max-h-[1.6rem] max-w-[1.6rem]" />
                                <span className="text-[1.4rem] font-medium uppercase leading-[1.6rem] text-headingColor">
                                    RESET
                                </span>
                            </span>
                            <button
                                type="button"
                                className={`cursor-pointer rounded-[1.5rem] border-2 border-primary bg-primary p-4 text-[1.6rem] font-bold uppercase leading-8 text-headingColor transition-all hover:bg-transparent sm:py-[1.8rem] sm:px-[2.4rem]`}
                            >
                                Send my request
                            </button>
                        </div>
                    </div>
                </div>
                <div></div>
            </Container>
        </Section>
    );
};

export default FormSection;
