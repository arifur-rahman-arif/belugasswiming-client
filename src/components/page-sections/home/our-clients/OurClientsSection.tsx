import { Container } from '@/components/container';
import SliderSection from './SliderSection';
import SliderSectionMobile from './SliderSectionMobile';
import { Section } from '@/components/section';
import SwimmingIcon from '@/images/icons/icon-swiming-yellow.svg';
import BottleFloating from '@/images/section-images/bottle-floating.svg';

interface PropInterface {
    sectionTitle?: string;
    description?: string;
}

/**
 * Client section for home page
 *
 * @returns {*}  {JSX.Element}
 */
const OurClientsSection = ({ sectionTitle, description }: PropInterface): JSX.Element => {
    return (
        <Section>
            <Container className="grid grid-cols-1 md:grid-cols-[auto_1fr]">
                <div className="col-span-2">
                    <SwimmingIcon className="max-h-[3.7rem] max-w-[5.1rem]" />
                    <h2 className="mt-12">{sectionTitle || 'Our clients'}</h2>
                    <h3 className="mt-4 text-teal">{description || 'Some review of'}</h3>
                </div>
                <div className="col-span-2 grid place-items-center md:col-span-1 md:mt-12">
                    <BottleFloating />
                </div>

                <SliderSection />
                <SliderSectionMobile />
            </Container>
        </Section>
    );
};

export default OurClientsSection;
