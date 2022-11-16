import { Container } from '@/components/container';
import { Section } from '@/components/section';
import SwimmingIcon from '@/images/icons/icon-swiming-yellow.svg';
import MapImage from '@/images/section-images/map.svg';
import { useEffect } from 'react';
import { gsap } from 'gsap';

/**
 * Location section component`
 *
 * @returns {*}  {JSX.Element}
 */
const LocationSection = (): JSX.Element => {
    useEffect(() => {
        gsap.to('.map_svg__location-pin', {
            duration: 1,
            ease: 'Bounce.easeOut',
            y: 15,
            repeat: -1,
            yoyo: true
        });
    }, []);

    return (
        <Section className="md:mt-[23.4rem]">
            <Container className="grid grid-cols-1 items-center  md:grid-cols-2">
                <div>
                    <SwimmingIcon className="max-h-[3.7rem] max-w-[5.1rem]" />
                    <h2 className="mt-12 max-w-[38.8rem]">Locations</h2>
                    <h3 className="mt-4 text-teal">We bring it to your home</h3>
                </div>
                <div className="grid place-items-center">
                    <img className="object-cover" src="/images/section-images/black-man-with-glass.png" alt="" />
                </div>
                <div className="relative min-h-[33rem] md:col-span-2 md:col-start-1">
                    <MapImage className={`absolute top-0 left-0 z-[1] w-full -translate-y-2/4 -translate-x-[3rem]`} />
                </div>
            </Container>
        </Section>
    );
};

export default LocationSection;
