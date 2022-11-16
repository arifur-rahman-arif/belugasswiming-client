import { Container } from '@/components/container';
import { Section } from '@/components/section';
import SwimmingIcon from '@/images/icons/icon-swiming-yellow.svg';
import MapImage from '@/images/section-images/map.svg';

/**
 * Location section component`
 *
 * @returns {*}  {JSX.Element}
 */
const LocationSection = (): JSX.Element => {
    return (
        <Section className="md:mt-[23.4rem]">
            <Container className="grid grid-cols-2 items-center">
                <div>
                    <SwimmingIcon className="max-h-[3.7rem] max-w-[5.1rem]" />
                    <h2 className="mt-12 max-w-[38.8rem]">Locations</h2>
                    <h3 className="mt-4 text-teal">We bring it to your home</h3>
                </div>
                <div className="grid place-items-center">
                    <img className="object-cover" src="/images/section-images/black-man-with-glass.png" alt="" />
                </div>
                <div className="relative col-span-2 col-start-1 min-h-[29.9rem]">
                    <MapImage className="absolute top-0 left-0 z-[1] w-full -translate-y-2/4" />
                </div>
            </Container>
        </Section>
    );
};

export default LocationSection;
