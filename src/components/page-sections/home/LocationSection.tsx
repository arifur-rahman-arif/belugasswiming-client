import { Section } from '@/components/section';
import { MouseEvent, useContext, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { AppContextInterface, AppCtx } from '@/context/Context';
import { MapContainer } from '@/components/Location';

/**
 * Location section component`
 *
 * @returns {*}  {JSX.Element}
 */
const LocationSection = (): JSX.Element => {
    const appCtx: AppContextInterface | null = useContext(AppCtx);
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
        if (!appCtx?.homePageDoorOpen) return;

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
    }, [appCtx?.homePageDoorOpen]);

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

    /**
     * Close the location box
     *
     * @param {MouseEvent<HTMLSpanElement>} e
     * @param {string} itemKey
     */
    const closeMapLocation = (e: MouseEvent<HTMLSpanElement>, itemKey: string) => {
        setLocationBox((current) => {
            const location = { ...current };

            for (const key in location) {
                if (Object.prototype.hasOwnProperty.call(location, key)) {
                    if (key === itemKey) {
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
            <MapContainer
                toggleMapLocation={toggleMapLocation}
                closeMapLocation={closeMapLocation}
                ref={{
                    // @ts-ignore
                    mapContainer,
                    locationBox1,
                    locationBox2,
                    locationBox3,
                    locationBox4
                }}
            />
        </Section>
    );
};

export default LocationSection;
