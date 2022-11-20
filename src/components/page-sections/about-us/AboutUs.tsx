import SwimmingIcon from '@/images/icons/icon-swiming-yellow.svg';
import { Section } from '@/components/section';
import { ContainerFluid } from '@/components/container';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

/**
 * Private swimming component
 *
 * @returns {*}
 */
const AboutUs = () => {
    const imgElement = useRef<HTMLImageElement>(null);
    const yellowElement = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
        }

        const timeLine = gsap.timeline({
            scrollTrigger: {
                trigger: imgElement.current,
                start: 'top 75%'
            }
        });

        if (window.innerWidth < 768) {
            timeLine
                .to(yellowElement.current, {
                    height: '8rem',
                    duration: 1.5,
                    ease: 'steps(12)'
                })
                .to(
                    imgElement.current,
                    {
                        opacity: 1,
                        x: 0,
                        duration: 1.5,
                        ease: 'sine.inOut'
                    },
                    '-=1'
                );
        } else {
            timeLine
                .to(yellowElement.current, {
                    height: '15rem',
                    duration: 1.5,
                    ease: 'steps(12)'
                })
                .to(
                    imgElement.current,
                    {
                        opacity: 1,
                        x: -70,
                        duration: 1.5,
                        ease: 'sine.inOut'
                    },
                    '-=1'
                );
        }
    }, []);

    return (
        <Section>
            <ContainerFluid className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
                <div className="ml-auto w-full md:max-w-[calc(var(--container-width)_/_2)]">
                    <SwimmingIcon className="max-h-[3.7rem] max-w-[5.1rem]" />
                    <h2 className="mt-12">ABout us</h2>
                    <h3 className="mt-4 text-teal">Your private swimming instructor</h3>

                    <div className="mt-12 flex w-full flex-col gap-[1.5rem] md:max-w-[45rem]">
                        <p className="text-secondary">
                            A little background how and why BSA “Beluga Swimming Academy” was created. The amount of
                            requests that my business associate and myself receive from squad swimmers to address issues
                            they have in regards to a specific stroke that made us think that we can offer sessions on a
                            specific stroke that will help the swimmer achieve the desired goals.
                        </p>
                        <p className="text-secondary">
                            That is why we believe that from the start of the learning process, the student should be
                            presented with the same biomechanics and technics of an Olympic swimmer.
                        </p>
                        <p className="text-secondary">
                            That is why our Trade Brand is SwimRight. All drills and exercises have been designed to
                            prepare the students physically and mentally for the stimulus needed to learn the correct
                            technic of each stroke.
                        </p>
                        <p className="text-secondary">
                            It has also been proved by many of our students that all the stimulus are cross fitted and
                            can be beneficial to other sports and to maintain a healthy lifestyle.
                        </p>
                    </div>
                </div>

                <div className="relative flex h-full w-full items-start  justify-start">
                    <div className="absolute top-0 left-0 ml-28 h-full w-full bg-grey20"></div>
                    <span
                        ref={yellowElement}
                        className="absolute top-0 left-0 h-0 w-[0.8rem] translate-x-[calc(7rem_-_0.8rem)] bg-primary"
                    ></span>
                    <div className="relative">
                        <img
                            src="/images/section-images/person-swimming-underwater.png"
                            className="relative translate-x-[7rem] opacity-0 md:-translate-x-0 xl:min-h-[46.7rem]"
                            ref={imgElement}
                        />
                    </div>
                    <span
                        style={{ WebkitTextStroke: '1px #000' }}
                        className="absolute bottom-0 left-0 z-[1] mb-12 overflow-hidden text-center text-[calc(2vmax_+_1rem)] capitalize leading-[4rem] text-transparent md:text-[4rem] md:leading-[7rem] xl:ml-[calc(7rem_+_5.7rem)]"
                    >
                        Swimming is in our DNA
                    </span>
                </div>
            </ContainerFluid>
        </Section>
    );
};

export default AboutUs;
