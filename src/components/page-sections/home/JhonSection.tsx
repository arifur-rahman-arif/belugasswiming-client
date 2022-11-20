import { ContainerFluid } from '@/components/container';
import { Section } from '@/components/section';
import { AppContextInterface, AppCtx } from '@/context/Context';
import { useContext, useRef, useEffect } from 'react';
import SunGlass from '@/images/icons/icon-sunglass-black.svg';
import IconLinkedin from '@/images/icons/icon-linkedin-outline.svg';
import IconFacebook from '@/images/icons/icon-facebook-outline.svg';
import IconInstagram from '@/images/icons/icon-instagram-outline.svg';
import { gsap } from 'gsap';

/**
 * Jhon section component
 *
 * @returns {*}  {JSX.Element}
 */
const JhonSection = (): JSX.Element => {
    const appCtx: AppContextInterface | null = useContext(AppCtx);
    const yellowElement = useRef<HTMLDivElement>(null);
    const yellowHorizontalElement = useRef<HTMLDivElement>(null);
    const imgElement = useRef<HTMLImageElement>(null);
    const sportElement = useRef<HTMLDivElement>(null);
    const socialElement = useRef<HTMLDivElement>(null);
    const yellowTriggerElement = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!appCtx?.homePageDoorOpen) return;

        const sectionTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: imgElement.current,
                start: 'top 75%'
                // Markers: true
            }
        });

        gsap.to(yellowElement.current, {
            height: '8.7rem',
            duration: 1.5,
            ease: 'steps(12)',
            scrollTrigger: {
                trigger: yellowTriggerElement.current,
                start: 'top 75%'
            }
        });

        gsap.to(yellowHorizontalElement.current, {
            width: '8.7rem',
            duration: 1.5,
            ease: 'steps(12)',
            scrollTrigger: {
                trigger: yellowTriggerElement.current,
                start: 'top 75%'
            }
        });

        sectionTimeline
            .to(sportElement.current, {
                width: 'auto',
                duration: 1.5,
                ease: 'sine.inOut',
                zIndex: 1
            })
            .to(socialElement.current, {
                height: 'auto',
                duration: 1.5,
                ease: 'sine.inOut'
            });
    }, [appCtx?.homePageDoorOpen]);

    return (
        <Section className="md:mt-[29.3rem]">
            <ContainerFluid className="relative grid grid-flow-dense grid-cols-1 gap-20 px-0 pb-12 shadow-shadow1 md:grid-cols-2 md:gap-0">
                <div className="w-full px-8 md:col-start-2 md:mt-[4.6rem] md:max-w-[calc(var(--container-width)_/_2)] md:pl-8 lg:pl-16 xl:pl-[12rem]">
                    <h2 className="max-w-[38.8rem]">John</h2>
                    <h3 className="mt-4 text-teal">It’s your time to swim</h3>

                    <div className="mt-12 flex w-full flex-col gap-[1.5rem] md:max-w-[45rem]">
                        <p className="text-secondary">
                            John initially learnt to swim as a means of tackling the effects of childhood asthma. He
                            then went on to win his categories in several Rio de Janeiro State Swimming Championships.
                        </p>
                        <p className="text-secondary">
                            John has not stopped swimming since and is now one of SwimRight’s most talented teachers.
                            Originally from Brazil he has also lived in Holland before coming to England. He has been
                            teaching in England since 2008 and holds a level 2 Certificate from STA governing body.
                        </p>
                        <p className="text-secondary">
                            John is a great advocate of a healthy lifestyle and when not in the pool he can be found
                            running or in the gym! His sporting highlight was when he finished 3rd in his age group at
                            the Astana 70.3 Ironman in 2019.
                        </p>
                        <p className="text-secondary">
                            He had also a good result finishing 5th at Bahrain 70.3 Ironman Middle-East Championship in
                            2016.
                        </p>
                        <p className="text-secondary">
                            He is currently training for qualifying for the World Championship event. Clearly wanting to
                            keep challenging himself and reaching for ever greater achievements, it is no surprise that
                            John finds the most enjoyable feeling when his student has joined a squad to be the
                            highlight of his job, especially when he is able to think back to their first lesson -
                            blowing bubbles!
                        </p>
                        <p className="text-secondary">
                            John values the ability to tailor the lessons to the pupil whether an adult or a child and
                            offers bespoke tuition enabling anyone to reach each individual’s goal. He always keep
                            himself updated with the latest news of the world of swimming. From the fastest way to
                            tumble turn to the new World Record.
                        </p>
                    </div>
                </div>

                <div
                    ref={yellowTriggerElement}
                    className="row-start-1 grid bg-grey20 px-8 pt-12 md:absolute md:left-0 md:top-0 md:h-[calc(100%_+_calc(8.7rem_*_2))] md:w-2/4 md:-translate-y-[8.7rem] md:pt-0 xl:px-0"
                >
                    <div className="relative grid w-full grid-cols-1 items-start gap-12 md:ml-auto md:max-w-[calc(var(--container-width)_/_2)] md:gap-0 md:pt-[19.2rem] md:pb-[8.7rem]">
                        <span
                            ref={yellowElement}
                            className="absolute top-0 right-0 z-[2] hidden h-0 w-[0.8rem] bg-primary md:block"
                        ></span>

                        <span
                            ref={yellowHorizontalElement}
                            className="absolute top-0 z-[2] h-[0.8rem] w-0 -translate-y-[calc(3rem_+_0.8rem)] -translate-x-8 bg-primary md:right-0 md:hidden"
                        ></span>

                        <div className="grid grid-cols-1 items-start gap-[2.5rem] md:ml-0 md:self-end xl:self-start">
                            <div className="flex items-center justify-start gap-[1.5rem]">
                                <SunGlass className="max-h-[2.4rem] max-w-[4.23rem]" />
                                <p className="max-w-[22.5rem] text-left font-bold">
                                    SwimRight’s most talented teachers
                                </p>
                            </div>
                            <div className="flex items-center justify-start gap-[1.5rem]">
                                <SunGlass className="max-h-[2.4rem] max-w-[4.23rem]" />
                                <p className="max-w-[22.5rem] text-left font-bold">
                                    Leven 2 swimming teacher certification
                                </p>
                            </div>
                            <div className="flex items-center justify-start gap-[1.5rem]">
                                <SunGlass className="max-h-[2.4rem] max-w-[4.23rem]" />
                                <p className="max-w-[22.5rem] text-left font-bold">
                                    3rd place holder, Astana 70.3 Ironman in 2019
                                </p>
                            </div>
                        </div>

                        <div className="relative max-h-[52.7rem] max-w-[58.8rem] self-end md:mr-16 xl:mr-[7.5rem]">
                            <img src="/images/section-images/jhon.png" className="relative z-[2]" ref={imgElement} />
                            <span
                                ref={sportElement}
                                style={{ writingMode: 'vertical-lr', WebkitTextStroke: '1px #000' }}
                                className="absolute top-0 left-0 z-[1] h-full w-0 rotate-180 overflow-hidden text-right text-[calc(2vmax_+_3rem)] font-bold capitalize leading-[5rem] text-transparent sm:leading-[6.5rem] lg:text-[8rem] lg:leading-[7rem]"
                            >
                                Splash on
                            </span>
                            <div
                                ref={socialElement}
                                className="absolute top-2/4 right-0 z-[3] grid h-0 -translate-x-2/4 grid-cols-1 items-start justify-items-center gap-8 overflow-hidden"
                            >
                                <a href="#">
                                    <IconLinkedin className="max-h-[2.4rem] max-w-[2.4rem]" />
                                </a>
                                <a href="#">
                                    <IconFacebook className="max-h-[2.4rem] max-w-[2.4rem]" />
                                </a>
                                <a href="#">
                                    <IconInstagram className="max-h-[2.4rem] max-w-[2.4rem]" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </ContainerFluid>
        </Section>
    );
};

export default JhonSection;
