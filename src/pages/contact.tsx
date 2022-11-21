import { MastheadContact } from '@/components/masthead';
import Page from '@/components/Page';
import { ContactSection } from '@/page-sections/contact';

/**
 * Contact page
 *
 * @returns {*}  {JSX.Element}
 */
const contact = (): JSX.Element => {
    return (
        <Page title="Contact">
            <MastheadContact />
            <ContactSection />
        </Page>
    );
};

export default contact;
