import { MastheadAboutUs } from '@/components/masthead';
import Page from '@/components/Page';
import { AboutUs, Nowhere } from '@/page-sections/about-us';

/**
 * About us page
 *
 * @returns {*}
 */
const aboutUs = () => {
    return (
        <Page title="About us">
            <MastheadAboutUs />
            <AboutUs />
            <Nowhere />
        </Page>
    );
};

export default aboutUs;
