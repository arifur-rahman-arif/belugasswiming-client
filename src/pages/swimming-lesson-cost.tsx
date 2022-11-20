import { MastheadSwimmingLesson } from '@/components/masthead';
import Page from '@/components/Page';
import { OurClientsSection, FormSection } from '@/page-sections/home';
import { Prices, Terms, Location } from '@/page-sections/swimming-lesson-cost';

/**
 * Page 'swimming-lesson-cost
 *
 * @returns {*}  {JSX.Element}
 */
const SwimmingLessonCost = (): JSX.Element => {
    return (
        <Page title="Swimming Lessons Cost">
            <MastheadSwimmingLesson />
            <Prices />
            <Terms />
            <Location />
            <OurClientsSection sectionTitle="Clients words" description="Of our clients" />
            <FormSection />
        </Page>
    );
};

export default SwimmingLessonCost;
