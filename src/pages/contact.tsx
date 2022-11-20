import { MastheadContact } from '@/components/masthead';
import Page from '@/components/Page';

/**
 * Contact page
 *
 * @returns {*}  {JSX.Element}
 */
const contact = (): JSX.Element => {
    return (
        <Page title="Contact">
            <MastheadContact />
        </Page>
    );
};

export default contact;
