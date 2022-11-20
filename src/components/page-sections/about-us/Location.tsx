import { Container } from '@/components/container';
import { Section } from '@/components/section';
import SwimmingIcon from '@/images/icons/icon-swiming-yellow.svg';
import { MouseEvent, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import IconSwimming from '@/images/icons/icon-swimming-black-single-wave.svg';
import IconSwimmingDoubleWave from '@/images/icons/icon-swimming-black.svg';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

/**
 * Location section component`
 *
 * @returns {*}  {JSX.Element}
 */
const Location = (): JSX.Element => {
    const mapContainer = useRef<HTMLDivElement | null>(null);
    const query = gsap.utils.selector(mapContainer);
    const locationBox1 = useRef<HTMLDivElement | null>(null);
    const locationBox2 = useRef<HTMLDivElement | null>(null);
    const locationBox3 = useRef<HTMLDivElement | null>(null);
    const locationBox4 = useRef<HTMLDivElement | null>(null);
    const [locationBox, setLocationBox] = useState({
        'item-1': false,
        'item-2': false,
        'item-3': false,
        'item-4': false
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
        }

        const sectionTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: mapContainer.current,
                start: 'top 75%'
            }
        });

        sectionTimeline.to(query('.location-pin '), {
            opacity: 1,
            y: 0,
            duration: 1,
            cursor: 'pointer',
            ease: 'Bounce.easeOut'
        });
    }, []);

    useEffect(() => {
        // Item 1
        if (locationBox['item-1']) {
            gsap.to(locationBox1.current, {
                scale: 1,
                transformOrigin: 'bottom',
                duration: 0.3,
                zIndex: 5,
                ease: 'Sine.easeOut'
            });
        } else {
            gsap.to(locationBox1.current, {
                scale: 0,
                transformOrigin: 'bottom',
                duration: 0.3,
                ease: 'Sine.easeOut'
            });
        }

        // Item 2
        if (locationBox['item-2']) {
            gsap.to(locationBox2.current, {
                scale: 1,
                transformOrigin: 'bottom',
                duration: 0.3,
                zIndex: 99999,
                ease: 'Sine.easeOut'
            });
        } else {
            gsap.to(locationBox2.current, {
                scale: 0,
                transformOrigin: 'bottom',
                duration: 0.3,
                ease: 'Sine.easeOut'
            });
        }

        // Item 3
        if (locationBox['item-3']) {
            gsap.to(locationBox3.current, {
                scale: 1,
                transformOrigin: 'bottom',
                duration: 0.3,
                zIndex: 5,
                ease: 'Sine.easeOut'
            });
        } else {
            gsap.to(locationBox3.current, {
                scale: 0,
                transformOrigin: 'bottom',
                duration: 0.3,
                ease: 'Sine.easeOut'
            });
        }

        // Item 4
        if (locationBox['item-4']) {
            gsap.to(locationBox4.current, {
                scale: 1,
                transformOrigin: 'bottom',
                duration: 0.3,
                zIndex: 5,
                ease: 'Sine.easeOut'
            });
        } else {
            gsap.to(locationBox4.current, {
                scale: 0,
                transformOrigin: 'bottom',
                duration: 0.3,
                ease: 'Sine.easeOut'
            });
        }
    }, [locationBox]);

    /**
     * Animate the location box
     *
     * @param {MouseEvent<HTMLSpanElement>} e
     * @param {string} itemKey
     */
    const toggleMapLocation = (e: MouseEvent<HTMLSpanElement>, itemKey: string) => {
        // Set the other elements z index lower than current element
        document.querySelectorAll('.location-pin').forEach((element) => {
            gsap.to(element, {
                zIndex: 2
            });
        });

        gsap.to((e.target as any).parentNode.parentNode, {
            zIndex: 5
        });

        setLocationBox((current) => {
            const location = { ...current };

            for (const key in location) {
                if (Object.prototype.hasOwnProperty.call(location, key)) {
                    if (key === itemKey) {
                        // @ts-ignore
                        location[key] = !location[key];
                    } else {
                        // @ts-ignore
                        location[key] = false;
                    }
                }
            }

            return location;
        });
    };

    return (
        <Section className="md:mt-[23.4rem]">
            <Container className="grid grid-cols-1 items-center md:grid-cols-2">
                <div>
                    <SwimmingIcon className="max-h-[3.7rem] max-w-[5.1rem]" />
                    <h2 className="mt-12 max-w-[38.8rem]">Locations</h2>
                    <h3 className="mt-4 text-teal">We bring it to your home</h3>
                </div>
                <div className="grid place-items-center">
                    <img className="object-cover" src="/images/section-images/black-man-with-glass.png" alt="" />
                </div>

                <div
                    ref={mapContainer}
                    className="relative hidden min-h-[15rem] sm:min-h-[20rem] md:col-span-2 md:col-start-1 xl:block xl:min-h-[33rem]"
                >
                    {/* Item 1 */}
                    <div className="location-pin absolute top-2/4 left-[5%] z-[2] grid max-w-[calc(10vmin_+_6rem)] -translate-y-[100px] cursor-pointer grid-cols-[1fr_auto] content-center items-center justify-items-start gap-4 opacity-0 md:max-w-none">
                        <IconSwimming />
                        <span>SwimRighAt Ascot</span>
                        <span
                            className="relative col-span-2 justify-self-center"
                            onClick={(e) => toggleMapLocation(e, 'item-1')}
                        >
                            <img src="/images/icons/icon-location-pin-yellow.svg" className="w-full" alt="" />
                        </span>

                        {/* Full Location */}
                        <div
                            ref={locationBox1}
                            className="full-location absolute bottom-full left-2/4 z-[99] grid min-w-[48.8rem] -translate-y-[2rem] -translate-x-2/4 scale-0 grid-cols-1 items-start justify-items-start gap-[3.4rem] overflow-hidden bg-white pb-[3.5rem] shadow-shadow1"
                        >
                            <div className="h-[19rem] w-full">
                                <img
                                    src="/images/section-images/location-ascot.png"
                                    alt="Ascot"
                                    className="h-full w-full"
                                />
                            </div>

                            <div className="grid grid-cols-[1fr_auto] gap-4 px-12">
                                <span>
                                    <IconSwimmingDoubleWave />
                                </span>

                                <div className="flex max-w-[31.5rem] flex-col items-start justify-start gap-[3.5rem]">
                                    <p className="">At your residence or the swimming pool of your choice</p>
                                    <div className="flex items-start justify-start gap-[2.7rem] ">
                                        <div className="grid grid-cols-1 items-start justify-items-center gap-4">
                                            <img src="/images/section-images/mehdi-rounded.png" alt="" />
                                            <span>Mehdi</span>
                                        </div>
                                        <div className="grid grid-cols-1 items-start justify-items-center gap-4">
                                            <img src="/images/section-images/jhon-rounded.png" alt="" />
                                            <span>Mehdi</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="top-35 location-pin absolute left-1/4 top-20 z-[2] grid -translate-y-[100px] cursor-pointer grid-cols-[1fr_auto] content-center items-center justify-items-start gap-4 opacity-0">
                        <IconSwimming />
                        <span>SwimRigh At windsor</span>
                        <span
                            className="col-span-2 justify-self-center"
                            onClick={(e) => toggleMapLocation(e, 'item-2')}
                        >
                            <img src="/images/icons/icon-location-pin-yellow.svg" className="w-full" alt="" />
                        </span>

                        {/* Full Location */}
                        <div
                            ref={locationBox2}
                            className="full-location absolute bottom-full left-2/4 z-[99] grid min-w-[48.8rem] -translate-y-[2rem] -translate-x-2/4 scale-0 grid-cols-1 items-start justify-items-start gap-[3.4rem] overflow-hidden bg-white pb-[3.5rem] shadow-shadow1"
                        >
                            <div className="h-[19rem] w-full">
                                <img
                                    src="/images/section-images/location-windsor.png"
                                    alt="Ascot"
                                    className="h-full w-full"
                                />
                            </div>

                            <div className="grid grid-cols-[1fr_auto] gap-4 px-12">
                                <span>
                                    <IconSwimmingDoubleWave />
                                </span>

                                <div className="flex max-w-[31.5rem] flex-col items-start justify-start gap-[3.5rem]">
                                    <p className="">At your residence or the swimming pool of your choice</p>
                                    <div className="flex items-start justify-start gap-[2.7rem] ">
                                        <div className="grid grid-cols-1 items-start justify-items-center gap-4">
                                            <img src="/images/section-images/mehdi-rounded.png" alt="" />
                                            <span>Mehdi</span>
                                        </div>
                                        <div className="grid grid-cols-1 items-start justify-items-center gap-4">
                                            <img src="/images/section-images/jhon-rounded.png" alt="" />
                                            <span>Mehdi</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="location-pin absolute left-2/4 z-[2] grid -translate-y-[100px] cursor-pointer grid-cols-[1fr_auto] content-center items-center justify-items-start gap-4 opacity-0">
                        <IconSwimming />
                        <span>Adult SwimRigh At holand park</span>
                        <span
                            className="col-span-2 justify-self-center"
                            onClick={(e) => toggleMapLocation(e, 'item-3')}
                        >
                            <img src="/images/icons/icon-location-pin-yellow.svg" className="w-full" alt="" />
                        </span>

                        {/* Full Location */}
                        <div
                            ref={locationBox3}
                            className="full-location absolute bottom-full left-2/4 z-[99] grid min-w-[48.8rem] -translate-y-[2rem] -translate-x-2/4 scale-0 grid-cols-1 items-start justify-items-start gap-[3.4rem] overflow-hidden bg-white pb-[3.5rem] shadow-shadow1"
                        >
                            <div className="h-[19rem] w-full">
                                <img
                                    src="/images/section-images/location-holland.png"
                                    alt="Ascot"
                                    className="h-full w-full"
                                />
                            </div>

                            <div className="grid grid-cols-[1fr_auto] gap-4 px-12">
                                <span>
                                    <IconSwimmingDoubleWave />
                                </span>

                                <div className="flex max-w-[31.5rem] flex-col items-start justify-start gap-[3.5rem]">
                                    <p className="">At your residence or the swimming pool of your choice</p>
                                    <div className="flex items-start justify-start gap-[2.7rem] ">
                                        <div className="grid grid-cols-1 items-start justify-items-center gap-4">
                                            <img src="/images/section-images/mehdi-rounded.png" alt="" />
                                            <span>Mehdi</span>
                                        </div>
                                        <div className="grid grid-cols-1 items-start justify-items-center gap-4">
                                            <img src="/images/section-images/jhon-rounded.png" alt="" />
                                            <span>Mehdi</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Item 4 */}
                    <div className="location-pin absolute top-2/4 right-[5%] z-[2] grid -translate-y-[100px] cursor-pointer grid-cols-[1fr_auto] content-center items-center justify-items-start gap-4 opacity-0">
                        <IconSwimming />
                        <span>SwimRigh at home</span>
                        <span
                            className="col-span-2 justify-self-center"
                            onClick={(e) => toggleMapLocation(e, 'item-4')}
                        >
                            <img src="/images/icons/icon-location-pin-yellow.svg" className="w-full" alt="" />
                        </span>

                        {/* Full Location */}
                        <div
                            ref={locationBox4}
                            className="full-location absolute bottom-full left-2/4 z-[99] grid min-w-[48.8rem] -translate-y-[2rem] -translate-x-2/4 scale-0 grid-cols-1 items-start justify-items-start gap-[3.4rem] overflow-hidden bg-white pb-[3.5rem] shadow-shadow1"
                        >
                            <div className="h-[19rem] w-full">
                                <img
                                    src="/images/section-images/location-london.png"
                                    alt="Ascot"
                                    className="h-full w-full"
                                />
                            </div>

                            <div className="grid grid-cols-[1fr_auto] gap-4 px-12">
                                <span>
                                    <IconSwimmingDoubleWave />
                                </span>

                                <div className="flex max-w-[31.5rem] flex-col items-start justify-start gap-[3.5rem]">
                                    <p className="">At your residence or the swimming pool of your choice</p>
                                    <div className="flex items-start justify-start gap-[2.7rem] ">
                                        <div className="grid grid-cols-1 items-start justify-items-center gap-4">
                                            <img src="/images/section-images/mehdi-rounded.png" alt="" />
                                            <span>Mehdi</span>
                                        </div>
                                        <div className="grid grid-cols-1 items-start justify-items-center gap-4">
                                            <img src="/images/section-images/jhon-rounded.png" alt="" />
                                            <span>Mehdi</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        src="/images/section-images/road.svg"
                        className="absolute top-0 left-0 z-[1] w-full -translate-y-2/4 -translate-x-[2rem]"
                        alt=""
                    />
                </div>

                <div className="relative min-h-[15rem] sm:min-h-[20rem] md:col-span-2 md:col-start-1 xl:hidden xl:min-h-[33rem]">
                    <img
                        src="/images/section-images/map.svg"
                        alt=""
                        className="absolute top-0 left-0 z-[1] w-full -translate-y-2/4 -translate-x-[2rem]"
                    />
                </div>
            </Container>
        </Section>
    );
};

export default Location;
