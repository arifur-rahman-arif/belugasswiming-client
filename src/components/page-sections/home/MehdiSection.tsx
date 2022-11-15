import { Section } from '@/components/section';
import { useContext, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { AppContextInterface, AppCtx } from '@/context/Context';
import SunGlass from '@/images/icons/icon-sunglass-black.svg';

/**
 * Mahdi section right sided component
 *
 * @returns {*}  {JSX.Element}
 */
const MehdiSection = (): JSX.Element => {
    const appCtx: AppContextInterface | null = useContext(AppCtx);
    const yellowElement = useRef<HTMLDivElement>(null);
    const imgElement = useRef<HTMLImageElement>(null);
    const sportElement = useRef<HTMLDivElement>(null);
    const yellowTriggerElement = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!appCtx?.homePageDoorOpen) return;

        const sectionTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: imgElement.current,
                start: 'top 85%'
                // Markers: true
            }
        });

        gsap.to(yellowElement.current, {
            height: '8.7rem',
            duration: 1.5,
            ease: 'steps(12)',
            scrollTrigger: {
                trigger: yellowTriggerElement.current,
                start: 'top 85%'
            }
        });

        sectionTimeline.to(sportElement.current, {
            width: 'auto',
            duration: 1.5,
            ease: 'sine.inOut',
            zIndex: -1
        });
    }, [appCtx?.homePageDoorOpen]);

    return (
        <Section className="relative grid grid-cols-1  gap-12 pb-12 shadow-shadow1 md:grid-cols-2 md:gap-0 xl:min-h-[89.5rem]">
            <div className="mt-[4.6rem] ml-auto w-full px-8 md:max-w-[calc(var(--container-width)_/_2)] xl:px-0">
                <h2 className="max-w-[38.8rem]">Mehdi</h2>
                <h3 className="mt-4 text-teal">I love myself more in the water</h3>

                <div className="mt-12 flex w-full max-w-[45rem] flex-col gap-[1.5rem]">
                    <p className="text-secondary">
                        Mehdi is a former member of the Iranian waterpolo national team. He began swimming at the age of
                        seven and competed in the swimming national league at the age of eleven.
                    </p>
                    <p className="text-secondary">
                        Mehdi began teaching swimming at a private club in 1993 and coaching in 1998.
                    </p>
                    <p className="text-secondary">
                        Throughout his 29 years of teaching and high-level Olympic coaching, he has never stopped
                        teaching and coaching techniques that have earned him the title of master SWIMRIGHT'S talented
                        teacher.
                    </p>
                    <p className="text-secondary">
                        In 2005-2007, he was invited to play for the Polytechnic London team in the UK national league
                        and the Ealing club in the London league. During this time, Mehdi worked as a swimming coach for
                        the Ealing Club and as a fitness instructor for Virgin Active.
                    </p>
                    <p className="text-secondary">
                        Mehdi moved to Dubai in 2007 and founded the Dubai Waterpolo and Swimming Club with his European
                        friends. Mehdi returned to the UK in 2018 and began teaching private lessons to members of the
                        Royal Family and other high-ranking officials.
                    </p>
                    <p className="text-secondary">
                        Mehdi is excited to share his 29 years of experience with children of all ages to help them
                        improve their lifestyle on SWIMRIGHT.
                    </p>
                </div>
            </div>

            <div
                ref={yellowTriggerElement}
                className="grid bg-grey20 px-8 pt-12 md:absolute md:right-0 md:top-0 md:h-[calc(100%_+_calc(8.7rem_*_2))] md:w-2/4 md:-translate-y-[8.7rem] md:pt-0 xl:px-0"
            >
                <div className="relative grid grid-cols-1 items-start gap-[6.5rem] md:pb-[8.7rem]">
                    <span ref={yellowElement} className="absolute left-0 top-0 z-[2] h-0 w-[0.8rem] bg-primary"></span>

                    <div className="grid grid-cols-1 items-start gap-[2.5rem] md:mt-[19.2rem] md:ml-20 md:self-end xl:ml-[11.1rem]">
                        <div className="flex items-center justify-start gap-[1.5rem]">
                            <SunGlass className="max-h-[2.4rem] max-w-[4.23rem]" />
                            <p className="max-w-[22.5rem] text-left font-bold">
                                Former member of the Iranian waterpolo team
                            </p>
                        </div>
                        <div className="flex items-center justify-start gap-[1.5rem]">
                            <SunGlass className="max-h-[2.4rem] max-w-[4.23rem]" />
                            <p className="max-w-[22.5rem] text-left font-bold">Master SWIMRIGHT'S talented teacher</p>
                        </div>
                        <div className="flex items-center justify-start gap-[1.5rem]">
                            <SunGlass className="max-h-[2.4rem] max-w-[4.23rem]" />
                            <p className="max-w-[22.5rem] text-left font-bold">
                                Former Dubai Waterpolo and Swimming Club fouder
                            </p>
                        </div>
                    </div>

                    <div className="relative max-h-[52.7rem] max-w-[58.8rem] self-end md:ml-16 xl:ml-[7.5rem]">
                        <img src="/images/section-images/mehdi.png" className="z-[2]" ref={imgElement} />
                        <span
                            ref={sportElement}
                            style={{ writingMode: 'sideways-lr', WebkitTextStroke: '1px #000' }}
                            className="absolute top-0 left-0 z-[1] h-full w-0 overflow-hidden text-center text-[calc(2vmax_+_3rem)] font-bold capitalize leading-[5rem] text-transparent sm:leading-[6.5rem] lg:text-[8rem] lg:leading-[7.6rem]"
                        >
                            Splash on
                        </span>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default MehdiSection;
