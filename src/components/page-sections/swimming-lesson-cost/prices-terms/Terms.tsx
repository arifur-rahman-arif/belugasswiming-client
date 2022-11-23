import { Container } from '@/components/container';
import { Section } from '@/components/section';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { HorizontalSlider } from '@/components/slider';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import IconSwimming from '@/icons/icon-swimming-black.svg';
import IconCalendar from '@/icons/icon-calender-outline.svg';

const sliders = [
    // Item 1
    <div className="grid h-full w-full grid-cols-[auto_1fr]">
        <span className="h-[15rem] w-[0.8rem] bg-primary"></span>

        <div
            className={`flex flex-col items-start justify-start bg-grey20 p-12 shadow-shadow1 xl:py-[8.5rem] xl:px-[6.7rem]`}
        >
            <strong className="text-left text-[2rem] font-bold leading-[2.4rem] text-headingColor">
                Sprint term 2023
            </strong>
            <span className="mt-4 text-left text-[1.6rem] font-bold uppercase leading-[1.8rem]">All levels</span>

            <div className="mt-12 grid grid-cols-1 justify-items-start gap-[2.5rem]">
                <div className="grid grid-cols-[1fr_auto] gap-y-[0.5] gap-x-4">
                    <IconCalendar className="max-h-[2.4rem] max-w-[2.4rem]" />
                    <span className="font-medium leading-[1.9rem] text-secondary">
                        Tuesday 3rd January - Sunday 2nd April
                    </span>
                    <span className="col-span-1 col-start-2 font-medium leading-[1.9rem] text-secondary">
                        <strong>Half term:</strong> Monday 1th feb - Sunday 19th Feb
                    </span>
                </div>

                <div className="grid grid-cols-[1fr_auto] gap-y-[0.5] gap-x-4">
                    <IconSwimming className="max-h-[2.4rem] max-w-[2.4rem]" />
                    <span className="font-medium leading-[1.9rem] text-secondary">Trainer</span>
                    <span className="col-span-1 col-start-2 font-medium leading-[1.9rem] text-secondary">
                        Mehdi Nesaie
                    </span>
                </div>
            </div>
        </div>
    </div>,
    // Item 2
    <div className="grid h-full w-full grid-cols-[auto_1fr]">
        <span className="h-[15rem] w-[0.8rem] bg-primary"></span>

        <div
            className={`flex flex-col items-start justify-start bg-white p-12 shadow-shadow1 xl:py-[8.5rem] xl:px-[6.7rem]`}
        >
            <strong className="text-left text-[2rem] font-bold leading-[2.4rem] text-headingColor">
                Easter Crash Course 2023
            </strong>
            <span className="mt-4 text-left text-[1.6rem] font-bold uppercase leading-[1.8rem]">All levels</span>

            <div className="mt-12 grid grid-cols-1 justify-items-start gap-[2.5rem]">
                <div className="grid grid-cols-[1fr_auto] gap-y-[0.5] gap-x-4">
                    <IconCalendar className="max-h-[2.4rem] max-w-[2.4rem]" />
                    <span className="font-medium leading-[1.9rem] text-secondary">
                        Monday 3rd April - Thursday 6th April
                    </span>
                    <span className="col-span-1 col-start-2 font-medium leading-[1.9rem] text-secondary">
                        Tuesday 11th April - Friday 14th April
                    </span>
                </div>

                <div className="grid grid-cols-[1fr_auto] gap-y-[0.5] gap-x-4">
                    <IconSwimming className="max-h-[2.4rem] max-w-[2.4rem]" />
                    <span className="font-medium leading-[1.9rem] text-secondary">Trainer</span>
                    <span className="col-span-1 col-start-2 font-medium leading-[1.9rem] text-secondary">
                        Mehdi | John
                    </span>
                </div>
            </div>
        </div>
    </div>,
    // Item 3
    <div className="grid h-full w-full grid-cols-[auto_1fr]">
        <span className="h-[15rem] w-[0.8rem] bg-primary"></span>

        <div
            className={`flex flex-col items-start justify-start bg-white p-12 shadow-shadow1 xl:py-[8.5rem] xl:px-[6.7rem]`}
        >
            <strong className="text-left text-[2rem] font-bold leading-[2.4rem] text-headingColor">
                Summer Term 2023
            </strong>
            <span className="mt-4 text-left text-[1.6rem] font-bold uppercase leading-[1.8rem]">All levels</span>

            <div className="mt-12 grid grid-cols-1 justify-items-start gap-[2.5rem]">
                <div className="grid grid-cols-[1fr_auto] gap-y-[0.5] gap-x-4">
                    <IconCalendar className="max-h-[2.4rem] max-w-[2.4rem]" />
                    <span className="font-medium leading-[1.9rem] text-secondary">
                        Monday 17th April - Sunday 23rd July
                    </span>
                    <span className="col-span-1 col-start-2 font-medium leading-[1.9rem] text-secondary">
                        Half Term : Monday 29th May - Sunday 4th Jun
                    </span>
                </div>

                <div>
                    <strong className="text-left text-[1.6rem] font-bold capitalize leading-[2.4rem] text-headingColor">
                        School half term <br /> 1 week crash course
                    </strong>
                </div>

                <div className="grid grid-cols-[1fr_auto] gap-y-[0.5] gap-x-4">
                    <IconSwimming className="max-h-[2.4rem] max-w-[2.4rem]" />
                    <span className="font-medium leading-[1.9rem] text-secondary">Trainer</span>
                    <span className="col-span-1 col-start-2 font-medium leading-[1.9rem] text-secondary">
                        Mehdi | Jhon
                    </span>
                </div>
            </div>
        </div>
    </div>
];

/**
 * Terms section component for '/swimming-lesson-cost' page
 *
 * @returns {*}  {JSX.Element}
 */
const Terms = (): JSX.Element => {
    const yellowElement = useRef<HTMLDivElement>(null);
    const imageElement = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
        }

        gsap.to(yellowElement.current, {
            height: '15rem',
            duration: 1.5,
            ease: 'steps(12)',
            scrollTrigger: {
                trigger: yellowElement.current,
                start: 'top 75%'
            }
        });
    }, []);

    return (
        <Section defaultClassName="mt-12">
            <Container className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-y-12">
                <span className="col-span-2 text-[2.4rem] font-bold uppercase leading-[2.8rem] text-headingColor">
                    Terms
                </span>

                <div className="col-span-2 grid h-full grid-cols-[auto_1fr] grid-rows-[1fr_auto] md:col-span-1">
                    <span ref={yellowElement} className="h-[0] w-[0.8rem] bg-primary"></span>

                    <div
                        ref={imageElement}
                        className="relative flex w-full items-center justify-center overflow-hidden py-16 px-12 shadow-shadow1 lg:py-[7.6rem] lg:px-40"
                    >
                        <img
                            className="mx-auto object-contain"
                            src="/images/section-images/swimming-tutorial.png"
                            alt=""
                        />
                    </div>
                </div>

                <HorizontalSlider sliders={sliders} />
            </Container>
        </Section>
    );
};

export default Terms;