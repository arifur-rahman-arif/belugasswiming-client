import { useEffect, useRef } from 'react';

import { Container } from '@/components/container';
import { HorizontalSlider } from '@/components/slider';
import IconDoubleSwimmingLarge from '@/icons/icon-double-swimming-large.svg';
import IconPurse from '@/icons/icon-purse.svg';
import IconSwimmingLarge from '@/icons/icon-swimming-large.svg';
import IconTimer from '@/icons/icon-timer.svg';
import Link from 'next/link';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Section } from '@/components/section';
import SwimmingIcon from '@/icons/icon-swiming-yellow.svg';
import { gsap } from 'gsap';

const sliders = [
    // Item 1
    <div className="grid h-full w-full grid-cols-[auto_1fr]">
        <span className="h-[15rem] w-[0.8rem] bg-primary"></span>

        <div className="flex flex-col items-center justify-start bg-grey20 p-12 shadow-shadow1 xl:px-[6rem] xl:pt-[5rem] xl:pb-[4.5rem]">
            <IconSwimmingLarge />
            <strong className="mt-[1.5rem] text-left text-[2rem] font-bold leading-[2.4rem] text-headingColor">
                Home swimming
            </strong>

            <div className="mt-16 grid grid-cols-[auto_1fr] gap-x-4 gap-y-[1.5rem]">
                <IconTimer />
                <span className="font-medium leading-[1.9rem] text-secondary">60min</span>
                <IconPurse />
                <span className="flex items-center justify-start gap-8 font-medium leading-[1.9rem] text-secondary">
                    <span className="font-medium leading-[1.9rem] text-grey60 line-through decoration-grey60">
                        £120
                    </span>
                    <span className="font-medium leading-[1.9rem] text-secondary">£90</span>
                </span>
            </div>

            <Link href="/contact-swimming-instructor/">
                <button
                    type="button"
                    className="mt-24 cursor-pointer rounded-[1.5rem] border-2 border-primary bg-primary px-8 py-6 text-[1.6rem] font-bold uppercase leading-8 text-secondary transition-all hover:bg-transparent md:py-[1.8rem] md:px-[2.4rem]"
                >
                    Request a call back
                </button>
            </Link>
        </div>
    </div>,
    // Item 2
    <div className="grid h-full w-full grid-cols-[auto_1fr]">
        <span className="h-[15rem] w-[0.8rem] bg-primary"></span>

        <div className="flex flex-col items-center justify-start bg-white p-12 shadow-shadow1 xl:px-[6rem] xl:pt-[5rem] xl:pb-[4.5rem]">
            <IconDoubleSwimmingLarge />
            <strong className="mt-[1.5rem] text-left text-[2rem] font-bold leading-[2.4rem] text-headingColor">
                One to one session
            </strong>

            <div className="mt-16 grid grid-cols-[auto_1fr] gap-x-4 gap-y-[1.5rem]">
                <IconTimer />
                <span className="font-medium leading-[1.9rem] text-secondary">30min</span>
                <IconPurse />
                <span className="flex items-center justify-start gap-8 font-medium leading-[1.9rem] text-secondary">
                    £75
                </span>
            </div>

            <Link href="/contact-swimming-instructor/">
                <button
                    type="button"
                    className="mt-24 cursor-pointer rounded-[1.5rem] border-2 border-primary bg-primary px-8 py-6 text-[1.6rem] font-bold uppercase leading-8 text-secondary transition-all hover:bg-transparent md:py-[1.8rem] md:px-[2.4rem]"
                >
                    Request a call back
                </button>
            </Link>
        </div>
    </div>
];

/**
 * Prices component
 *
 * @returns {*}  {JSX.Element}
 */
const Prices = (): JSX.Element => {
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
        <Section>
            <Container className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-y-12">
                <div className="col-span-2 col-start-1">
                    <SwimmingIcon className="max-h-[3.7rem] max-w-[5.1rem]" />
                    <h2 className="mt-12">Classes and Terms</h2>
                    <h3 className="mt-4 text-teal">All Age and levels swimming lessons</h3>
                </div>

                <span className="col-span-2 text-[2.4rem] font-bold uppercase leading-[2.8rem] text-headingColor">
                    Prices
                </span>

                <div className="col-span-2 grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] md:col-span-1">
                    <span ref={yellowElement} className="h-[0] w-[0.8rem] bg-primary"></span>

                    <div
                        ref={imageElement}
                        className="relative flex w-full flex-col items-start overflow-hidden py-16 px-12 shadow-shadow1 lg:py-[7.6rem] lg:px-40"
                    >
                        <img
                            className="mx-auto h-[17.7rem] w-[18rem]"
                            src="/images/section-images/person-ready-to-jump.webp"
                            alt=""
                            width={180}
                            height={177}
                        />

                        <span className="mt-[3.5rem] text-[3.2rem] font-bold uppercase leading-[3.8rem] text-headingColor">
                            Certified Trainers
                        </span>

                        <div className="mt-[3.5rem] flex flex-wrap items-start justify-start gap-[2.7rem]">
                            <div className="grid grid-cols-[1fr_auto] items-center gap-4">
                                <img
                                    src="/images/section-images/mehdi-rounded.webp"
                                    alt=""
                                    className="col-span-2"
                                    width={80}
                                    height={80}
                                />
                                <span>Mehdi Nesaie</span>
                                <a
                                    href="#"
                                    className="text-[1.6rem] capitalize leading-[1.8rem] text-teal underline-offset-4 transition-all hover:underline hover:decoration-teal"
                                >
                                    bio
                                </a>
                            </div>
                            <div className="grid grid-cols-[1fr_auto] items-center gap-4">
                                <img
                                    src="/images/section-images/jhon-rounded.webp"
                                    alt=""
                                    className="col-span-2"
                                    width={80}
                                    height={80}
                                />
                                <span>John Magalhaes</span>
                                <a
                                    href="#"
                                    className="text-[1.6rem] capitalize leading-[1.8rem] text-teal underline-offset-4 transition-all hover:underline hover:decoration-teal"
                                >
                                    bio
                                </a>
                            </div>
                        </div>

                        <span className="mt-[10rem] text-[2.4rem] font-bold uppercase leading-[2.8rem] text-headingColor md:mt-[15rem]">
                            Certifications
                        </span>

                        <div className="mt-12 flex flex-wrap items-center justify-start gap-x-24 gap-y-12">
                            <img src="/images/logos/swim-england.webp" alt="swim-england" width={171} height={54} />
                            <img
                                src="/images/logos/swimming-teachers-association.webp"
                                alt="swimming-teachers-association"
                                width={163}
                                height={73}
                            />
                        </div>
                    </div>
                </div>

                <HorizontalSlider sliders={sliders} minMaxHeight="max-h-[86rem] md:min-h-[85rem]" />
            </Container>
        </Section>
    );
};

export default Prices;
