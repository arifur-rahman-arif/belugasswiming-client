import { LocationMap } from '@/components/Location';
import { MastheadAboutUs } from '@/components/masthead';
import Page from '@/components/Page';
import { FormSection, JhonSection, MehdiSection, OurClientsSection } from '@/components/page-sections/home';
import { AboutUs, Nowhere } from '@/page-sections/about-us';

/**
 * About us page
 *
 * @returns {*}
 */
const aboutUs = (): any => {
    return (
        <Page
            title="Private swim instructor at home London - Ascot"
            description="Observe the significant improvement in a short period of time. With one of our certified, experienced, and friendly instructors is an unforgettable experience."
        >
            <MastheadAboutUs />
            <AboutUs />
            <Nowhere />
            <div className="mt-[20rem] w-full sm:mt-[22rem] md:mt-[30rem]"></div>
            <MehdiSection />
            <JhonSection />
            <LocationMap sectionClass="md:mt-[23.4rem]" />
            <OurClientsSection sectionTitle="Clients words" description="Of our clients" />
            <FormSection />
        </Page>
    );
};

export default aboutUs;
