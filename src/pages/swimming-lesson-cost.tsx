import { FormSection, OurClientsSection } from '@/page-sections/home';
import { Prices, Terms } from '@/page-sections/swimming-lesson-cost';

import { LocationMap } from '@/components/Location';
import { MastheadSwimmingLesson } from '@/components/masthead';
import Page from '@/components/Page';

/**
 * Page 'swimming-lesson-cost
 *
 * @returns {*}  {JSX.Element}
 */
const SwimmingLessonCost = (): JSX.Element => {
    return (
        <Page
            title="Private swimming lessons cost London - Ascot"
            description="Our rates start at £40 per hour. We can always tailor solutions and costs to your specific requirements. Let's talk about it and figure out what's best for you."
        >
            <MastheadSwimmingLesson />
            <Prices />
            <Terms />
            <LocationMap />
            <OurClientsSection sectionTitle="Testimonies" description="from our clients" />
            <FormSection />
        </Page>
    );
};

export default SwimmingLessonCost;
