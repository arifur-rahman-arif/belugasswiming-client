import { AppContextInterface, AppCtx } from '@/context/Context';
import { useContext, useEffect, useRef } from 'react';

import { Container } from '@/components/container';
import { Section } from '@/components/section';
import SwimmingIcon from '@/images/icons/icon-swiming-yellow.svg';
import { gsap } from 'gsap';

/**
 * Private swimming component
 *
 * @returns {*}
 */
const PrivateSwiming = () => {
    const appCtx: AppContextInterface | null = useContext(AppCtx);
    const imgElement = useRef<HTMLImageElement>(null);
    const yellowElement = useRef<HTMLDivElement>(null);
    const sportElement = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!appCtx?.homePageDoorOpen) return;

        const sectionTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: imgElement.current,
                start: 'top 75%'
            }
        });

        sectionTimeline
            .to(yellowElement.current, {
                height: '15rem',
                duration: 1.5,
                ease: 'steps(12)'
            })
            .to(sportElement.current, {
                width: 'auto',
                duration: 1.5,
                ease: 'sine.inOut'
            });
    }, [appCtx?.homePageDoorOpen]);

    return (
        <Section>
            <Container className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
                <div>
                    <SwimmingIcon className="max-h-[3.7rem] max-w-[5.1rem]" />
                    <h2 className="mt-12">PRIVATE SWIMMING LESSONS</h2>
                    <h3 className="mt-4 text-teal">Learn to swim at your leisure.</h3>

                    <div className="mt-12 flex w-full flex-col gap-[1.5rem] md:max-w-[45rem]">
                        <p className="text-secondary">
                            Adults and children alike benefit from private swim lessons to improve their skills and
                            comfort in the water.
                        </p>
                        <p className="text-secondary">
                            They're ideal for students who learn best with one-on-one instruction, such as nervous
                            first-time swimmers, children with special needs, adults who have put off learning to swim,
                            and competitive swimmers who would benefit from targeted training on specific skill sets.
                        </p>
                        <p className="text-secondary">
                            Former runners and other athletes who want to learn about low-impact exercise options can
                            benefit from private lessons as well.
                        </p>
                    </div>
                </div>

                <div className="flex items-start justify-start">
                    <span ref={yellowElement} className="h-0 w-[0.8rem] bg-primary"></span>
                    <div className="relative">
                        <img
                            src="/images/section-images/person-swiming.webp"
                            className="xl:min-h-[42.6rem]"
                            ref={imgElement}
                        />
                        <span
                            ref={sportElement}
                            style={{ writingMode: 'vertical-lr', WebkitTextStroke: '1px #fff' }}
                            className="absolute top-0 left-0 z-[1] h-full w-0 rotate-180 overflow-hidden text-center text-[calc(2vmax_+_1rem)] capitalize leading-[4rem] text-transparent md:text-[4rem] md:leading-[7rem]"
                        >
                            More than a sport
                        </span>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default PrivateSwiming;
