import { Container } from '@/components/container';
import { Section } from '@/components/section';
import { AppContextInterface, AppCtx } from '@/context/Context';
import SwimmingIcon from '@/images/icons/icon-swiming-yellow.svg';
import { useContext, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import IconVideoPlay from '@/images/icons/video-play.svg';
/**
 * Learn from best component
 *
 * @returns {*}
 */
const LearnFromBest = () => {
    const appCtx: AppContextInterface | null = useContext(AppCtx);
    const imgElement = useRef<HTMLImageElement>(null);
    const yellowElement = useRef<HTMLDivElement>(null);
    const spanElement = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!appCtx?.homePageDoorOpen) return;

        const sectionTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: imgElement.current,
                start: 'top 85%'
            }
        });

        sectionTimeline
            .to(yellowElement.current, {
                height: '15rem',
                duration: 1.5,
                ease: 'steps(12)'
            })
            .to(
                spanElement.current,
                {
                    transform: 'translateY(0%)',
                    opacity: 1,
                    duration: 1.5,
                    ease: 'sine.inOut'
                },
                '-=1'
            );
    }, [appCtx?.homePageDoorOpen]);

    return (
        <Section>
            <Container className="grid grid-flow-dense grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
                <div className="md:col-start-2 md:justify-self-end">
                    <SwimmingIcon className="max-h-[3.7rem] max-w-[5.1rem]" />
                    <h2 className="mt-12 max-w-[38.8rem]">Learn From the best</h2>
                    <h3 className="mt-4 text-teal">Experienced swimming instructors</h3>

                    <div className="mt-12 flex w-full flex-col gap-[1.5rem] md:max-w-[45rem]">
                        <p className="text-secondary">
                            We are a small group of world-class swimmers with more than 25 years of teaching experience.
                        </p>
                        <p className="text-secondary">
                            After our first free initial assessment of the facility and the student, we will tailored
                            the program to cater for the need of our students that can be delivered at the pool
                            provided.
                        </p>
                    </div>
                </div>

                <div className="flex flex-row-reverse items-start justify-start">
                    <span ref={yellowElement} className="h-0 w-[0.8rem] bg-primary"></span>
                    <div className="relative overflow-hidden">
                        <div className="relative">
                            <img
                                src="/images/section-images/person-swimming-2.png"
                                className="xl:min-h-[42.6rem]"
                                ref={imgElement}
                            />
                            <span className="absolute right-[12.9rem] bottom-[4.3rem] z-[2] grid h-[6.5rem] w-[6.5rem] cursor-pointer place-items-center rounded-full bg-primary">
                                <IconVideoPlay className="translate-x-[0.2rem]" />
                            </span>
                        </div>
                        <span
                            ref={spanElement}
                            className="relative -z-[1] mt-[1.5rem] block -translate-y-[200%] text-left text-[2.4rem] uppercase leading-[2.88rem] text-headingColor opacity-0"
                        >
                            individual medley event
                        </span>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default LearnFromBest;
