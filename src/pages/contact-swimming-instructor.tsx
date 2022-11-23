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
        <Page
            title="Parent and baby swimming lessons"
            description="Swim lessons at your home or a swimming pool of your choice! Begin their water journey when they are young and give them a head start. contact us to learn more"
        >
            <MastheadContact />
            <ContactSection />
        </Page>
    );
};

export default contact;
